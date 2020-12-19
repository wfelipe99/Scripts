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
 
function findParent(id, arr) {
  return arr.reduce((a, item) => {
    if (a) return a;
    if (item.id === id) return item;
    if (item.children) return findParent(id, item.children);
  }, null);
}

function defineHierarchy(response) {
  let hierarchy = []
  
  // Loop through all array
  for (let i = 0; i < response.length; i++) {
    // If it doesn't have a parent, push to root
    if (response[i].parent_id === 0) hierarchy.push({ ...response[i], children: [] })

    // Search for children of response[i]
    for (let k = i + 1; k < response.length; k++) {
      // Child found
      if (response[k].parent_id === response[i].id) {
        // Search for its parent
        const parent = findParent(response[k].parent_id, hierarchy)
        // Push to parent's children[]
        parent.children.push({ ...response[k], children: [] })
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
