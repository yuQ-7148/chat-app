const ADD_MESSAGE = 'ADD_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const addMessage = (value, threadId) => ({                  //ADD_MESSAGE
    type: ADD_MESSAGE,
    text: value,
    threadId: threadId
})

export const deleteMessage = (id) => ({                  //DELETE_MESSAGE
    type: DELETE_MESSAGE,
    id: id
})