import { takeLatest, call, put } from 'redux-saga/effects'
import entriesTypes from '../actions/entries.actions'
import axios from 'axios'

export function* AddEntrySaga() {
    yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb)
}

function* addEntryToDb({ payload }) {
    console.log('Add entry', payload)
    yield call(addEntry, payload)
    yield call(addEntryDetails, payload)
    yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload })
}

async function addEntry({ id, description }) {
    await axios.post('http://localhost:3001/entries', {
        id,
        description
    })
}

async function addEntryDetails({ id, isExpense, value }) {
    await axios.post('http://localhost:3001/values', {
        id,
        isExpense,
        value
    })
}