const response = [
  {
    "id": 1,
    "name": "Vila da Folha",
    "parent_id": 0,
    "order": 10,
    "created_at": "2020-12-19T02:53:31.000Z",
    "updated_at": "0000-00-00 00:00:00"
  },
  {
    "id": 3,
    "name": "Território do Fogo",
    "parent_id": 0,
    "order": 20,
    "created_at": "2020-12-19T02:53:33.000Z",
    "updated_at": "0000-00-00 00:00:00"
  },
  {
    "id": 2,
    "name": "Extremidades",
    "parent_id": 1,
    "order": 10,
    "created_at": "2020-12-19T02:53:41.000Z",
    "updated_at": "0000-00-00 00:00:00"
  },
  {
    "id": 5,
    "name": "Fronteiras",
    "parent_id": 3,
    "order": 10,
    "created_at": "2020-12-19T02:54:04.000Z",
    "updated_at": "0000-00-00 00:00:00"
  },
  {
    "id": 4,
    "name": "Extremidade Leste",
    "parent_id": 2,
    "order": 10,
    "created_at": "2020-12-19T02:53:59.000Z",
    "updated_at": "0000-00-00 00:00:00"
  },
  {
    "id": 6,
    "name": "Fronteira Norte",
    "parent_id": 5,
    "order": 20,
    "created_at": "2020-12-19T02:54:20.000Z",
    "updated_at": "0000-00-00 00:00:00"
  }
] 
 
function findId(id, arr) {
  return arr.reduce((a, item) => {
    if (a) return a;
    if (item.id === id) return item;
    if (item.children) return findId(id, item.children);
  }, null);
}

function defineHierarchy(response) {
  let hierarchy = []
  
  for (let i = 0; i < response.length; i++) {
    // Se for root, adiciona direto
    if (response[i].parent_id === 0) hierarchy.push({ ...response[i], children: [] })

    // Checa por filhos
    for (let k = i + 1; k < response.length; k++) {
      // Filho encontrado
      if (response[k].parent_id === response[i].id) {
        // Se o pai for o root, adiciona direto, já que sei o qual a posição do array adicionar
        if (response[i].parent_id === 0) {
          hierarchy[i].children.push({ ...response[k], children: []})
        } else {
          const parent = findId(response[k].parent_id, hierarchy)
          parent.children.push({ ...response[k], children: [] })
        }
      }
     }
  }


  console.log(hierarchy)
  return hierarchy
}
export { defineHierarchy }

/*
hierarchy = [
  {
    id: 1,
    name: 'Vila da Folha',
    parent_id: 0,
    children: [
      {
        id: 2,
        name: 'Extremidades',
        parent_id: 1,
        children: [
          {
            id: 4,
            name: 'Extremidade Leste',
            parent_id: 2
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Território do Fogo',
    parent_id: 0,
    children: [...]
  }
] */
