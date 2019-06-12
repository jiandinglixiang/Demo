import { delay } from 'redux-saga'
import { put, all, takeEvery } from 'redux-saga/effects'


function* incrementAsync (text) {
    yield delay(3000)
    yield put({type: 'ADD_COUNT', text})
}

function* watchIncrementAsync () {
    yield takeEvery('ADD_COUNT_ASYNC', incrementAsync)
}

function* reduceCountAsync () {
    yield takeEvery('REDUCE_COUNT_ASYNC', reduceCount)
}

function* reduceCount (text) {
    yield delay(2000)
    yield put({type: 'REDUCE_COUNT', text})
}

export default function* rootSaga () {
    yield all([watchIncrementAsync(), reduceCountAsync()])
}