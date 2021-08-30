const uuid = require('uuid');

export function reducer(state, action) {                                 //reducer
    console.log(state)
    switch (action.type) {
        case 'ADD_MESSAGE':                                                                 //ADD_MESSAGE
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
        case 'DELETE_MESSAGE':                                                              //DELETE_MESSAGE
            const threadIndex1 = state.threads.findIndex((t) =>
                t.messages.find((m) => (
                    m.id !== action.id
                ))
            );

            const oldThread1 = state.threads[threadIndex1];
            const newThread1 = {
                ...oldThread1,
                messages: oldThread1.messages.filter((m) => (
                    m.id !== action.id
                ))
            }

            return {
                ...state,
                threads: [
                    ...state.threads.slice(0, threadIndex1),
                    newThread1,
                    ...state.threads.slice(threadIndex1 + 1, state.threads.length)
                ]
            }
        default:
            return state
    }
}