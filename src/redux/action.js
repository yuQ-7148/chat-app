const ADD_MESSAGE = 'ADD_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const addMessage = (value) => ({                  //ADD_MESSAGE
    type: ADD_MESSAGE,
    text: value,
    threadId: '1-fca2'
})

export const deleteMessage = (id) => ({                  //DELETE_MESSAGE
    type: DELETE_MESSAGE,
    id: id
})