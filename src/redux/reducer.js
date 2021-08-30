const uuid = require('uuid');

export function reducer(state, action) {                                 //reducer
    console.log(state)
    switch (action.type) {
        case 'ADD_MESSAGE':
            const newMessage = {
                text: action.text,
                timestamp: Date.now(),
                id: uuid.v4()
            }

            const threadIndex = state.threads.findIndex((t) => t.id === action.threadId);

            const oldThread = state.threads[threadIndex];
            const newThread = {
                ...oldThread,
                messages: oldThread.messages.concat(newMessage)
            };

            return {
                ...state,
                threads: [
                    ...state.threads.slice(0, threadIndex),
                    newThread,
                    ...state.threads.slice(threadIndex + 1, state.threads.length)
                ]
            }
        case 'DELETE_MESSAGE':
            return {
                messages: state.messages.filter((m) => (m.id !== action.id))
            }
        default:
            return state
    }
}