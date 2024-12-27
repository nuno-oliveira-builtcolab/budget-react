import entriesTypes from '../actions/entries.actions'

const reducer = (state = initialEntries, action) => {
    switch (action.type) {
      case entriesTypes.POPULATE_ENTRIES:
        return action.payload
      case entriesTypes.ADD_ENTRY:
        const newEntriesAdd = state.concat({ ...action.payload })
        return newEntriesAdd
      case entriesTypes.REMOVE_ENTRY:
        const newEntriesRemove = state.filter(entry => entry.id !== action.payload.id)
        return newEntriesRemove
      case entriesTypes.POPULATE_ENTRY_DETAILS:
      case entriesTypes.UPDATE_ENTRY:
        const newEntriesUpdate =[...state]
        const index = newEntriesUpdate.findIndex(entry => entry.id === action.payload.id)
        newEntriesUpdate[index] = {...newEntriesUpdate[index], ...action.payload.entry}
        return newEntriesUpdate

      default:
        return state
    }
}

export default reducer

var initialEntries = []