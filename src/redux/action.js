export const ADD_MESSAGE = (value) => ({                  //ADD_MESSAGE
    type: 'ADD_MESSAGE',
    text: value
})

export const DELETE_MESSAGE = (id) => ({                  //DELETE_MESSAGE
    type: 'DELETE_MESSAGE',
    id: id
})