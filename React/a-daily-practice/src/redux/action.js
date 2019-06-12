export const ADD_COUNT = "ADD_COUNT";
export const REDUCE_COUNT = "REDUCE_COUNT";

export function addCount (text) {
    return {type: 'ADD_COUNT_ASYNC', text}
}

export function reduceCount (text) {
    return {type: 'REDUCE_COUNT_ASYNC', text}
}