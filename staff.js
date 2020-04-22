const axios = require('axios')
const rateLimit = require('axios-rate-limit')
const FormData = require('form-data')
const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const loginUrl = 'https://igpmanager.com/index.php?action=send&addon=igp&type=login&jsReply=1&ajax=1'
const csrfName = '4714dabb047a4caf46aea00c0fb8fdc6'
const csrfToken = '32b03862f770a79074e2df0d227b5acbe1a9d2cf90adb2df0bc1b6f3e20c5f15c8ce6958947da3469a01e3167262abc28e2d9c426e9d8391b48ed3eb01522a1'
const lasPartUrl = '1587468846732'

const http = rateLimit(axios.create(), { maxRequests: 50, perMilliseconds: 5000 })

axios.interceptors.request.use((config) => {
  config.headers.Accept = 'application/json, text/plain, */*; q=0.01'
  config.headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'

  return config
}, (error) => {
  return Promise.reject(error)
})

// logIn().then(cookie => {
//   for (let id = 11035950; id <= 11035951; id++) {
//     const isIdValid = await isIdValid(id)
//     // if (isIdValid(id)) {
//     //   getData(id, cookie)
//     //   recordLastStafIdSearched(id)
//     // }
//   }
// })

;(async () => {
  const cookie = await logIn()

  for (let id = 11035950; id <= 11035960; id++) {
    fs.readFile('./data/staff/invalid_staff_ids.csv', (error, invalidStaffIds) => {
      if (error) throw error
      if (!invalidStaffIds.includes(id.toString())) {
        getData(id, cookie)
        recordLastStafIdSearched(id)
      }
    })
  }
})()

async function logIn () {
  try {
    const loginInfo = new FormData()
    loginInfo.append('loginUsername', 'kylenolan19859@hotmail.com')
    loginInfo.append('loginPassword', '@kyleNolaN5984')
    const response = await axios.post(loginUrl, loginInfo, { headers: loginInfo.getHeaders() })

    return response.headers['set-cookie']
  } catch (error) {
    console.log(error)
  }
}

async function getData (id, cookie) {
  try {
    const response = await http.get(`https://igpmanager.com/index.php?action=fetch&d=staff&id=${id}&csrfName=${csrfName}&csrfToken=${csrfToken}&_=${lasPartUrl}`,
      { headers: { Cookie: `${cookie[0]}; ${cookie[1]}; ${cookie[2]}` }, withCredentials: true })
    console.log(`REQUESTED ID ${id}`)
    processData(id, response.data)
  } catch (error) {
    console.log(error)
  }
}

async function processData (id, data) {
  const isStaffValid = data.valid

  if (isStaffValid) {
    const skillTable = data.vars.skillTable
    const starRating = data.vars.starRating
    const dom = new JSDOM(`<table>${skillTable}</table>`)

    const level = starRating.match(/\d+/)[0]
    let strength = dom.window.document.querySelector('.bgLightGreen > span').textContent.split(' ')[1]
    let weakness = dom.window.document.querySelector('.bgLightRed > span').textContent.split(' ')[1]
    const available = true

    if ((strength === 'Acceleration' || strength === 'Braking' || strength === 'Handling' || strength === 'Downforce') &&
        (weakness === 'Cooling' || weakness === 'Reliability')) {
      if (available) {
        const url = `https://igpmanager.com/app/d=staff&id=${id}&tab=attributes`

        if (strength === 'Acceleration') {
          strength = 'Aceleração'
        } else if (strength === 'Braking') {
          strength = 'Braking'
        } else if (strength === 'Handling') {
          strength = 'Dirigibilidade'
        } else {
          strength = 'Aerodinâmica'
        }

        if (weakness === 'Cooling') {
          weakness = 'Resfriamento'
        } else {
          weakness = 'Confiabilidade'
        }

        recordAvailableGoodCd(id, level, strength, weakness, url)
        console.log(`RECORDED ID ${id}`)
      } else {

      }
    }
  } else {
    fs.writeFile('./data/good_cd.csv', id, (error) => {
      if (error) throw error
      console.log('The file was saved!')
    })
  }
}

async function recordLastStafIdSearched (id) {
  fs.writeFile('/home/felipe/scripts/igp/src/data/staff/last_staff_id_searched.csv', id, (error) => {
    if (error) throw error
  })
}

async function recordAvailableGoodCd (id, level, strength, weakness, url) {
  const data = `${id}, ${level}, ${strength}, ${weakness}, ${url}`

  fs.writeFile('./data/good_cd.csv', data + '\n', { flag: 'a' }, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('The file was saved!')
  })
}
