const reducer = (state = initialEntries, action) => {
    switch (action.type) {
      case 'ADD_ENTRY':
        const newEntriesAdd = state.concat({ ...action.payload })
        return newEntriesAdd;
      case 'REMOVE_ENTRY':
        const newEntriesRemove = state.filter(entry => entry.id !== action.payload.id)
        return newEntriesRemove;
      case 'UPDATE_ENTRY':
        const newEntriesUpdate =[...state]
        const index = newEntriesUpdate.findIndex(entry => entry.id === action.payload.id)
        newEntriesUpdate[index] = {...action.payload.entry}
        return newEntriesUpdate
      default:
        return state
    }
}

export default reducer

var initialEntries = [
   {
     id: 1,
     description: 'Work income',
     value: 1000.00,
     isExpense: false
   },
   {
     id: 2,
     description: 'Water bill',
     value: 20,
     isExpense: true
   },
   {
     id: 3,
     description: 'Rent',
     value: 300.0,
     isExpense: true
   },
   {
     id: 4,
     description: 'Power bill',
     value: 50,
     isExpense: true
   },
]