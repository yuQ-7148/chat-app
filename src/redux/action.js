const ADD_MESSAGE = 'ADD_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const OPEN_THREAD = 'OPEN_THREAD'

export const addMessage = (value, threadId) => ({                  //ADD_MESSAGE
    type: ADD_MESSAGE,
    text: value,
    threadId: threadId
})

export const deleteMessage = (id) => ({                  //DELETE_MESSAGE
    type: DELETE_MESSAGE,
    id: id
})

export const openthread = (id) => ({
    type: OPEN_THREAD,
    id: id
})