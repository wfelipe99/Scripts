function searchAndPushToParent(parentId, hierarchyArray, childToAdd) {
  for (let i = 0; i < hierarchyArray.length; i++) {
    if (!(parentId === hierarchyArray[i].id)) {
      return searchAndPushToParent(parentId, hierarchyArray[i].children, childToAdd)
    }

    hierarchyArray[i].children.push({ ...childToAdd, children: []})

    break
  }
}

function defineHierarchy(response) {
  let hierarchy = []

  // Loop through all array
  for (let i = 0; i < response.length; i++) {
    // If it doesn't have parent, push to root
    if (response[i].parent_id === 0) hierarchy.push({ ...response[i], children: [] })

    // Search for children of response[i]
    for (let k = i+1; k < response.length; k++) {
      // Child found
      if (response[k].parent_id === response[i].id) {
        // Search for the parent and push to children[]
        searchAndPushToParent(response[k].parent_id, hierarchy, response[k])
      }
    }
  }

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
