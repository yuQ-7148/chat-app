import { findThreadIndex } from './findthreadindex';
import { messagesReducer } from './messagesreducer';

export function threadsReducer(state, action) {                                 //reducer             state = state.threads
    switch (action.type) {
        case 'ADD_MESSAGE': {                                                               //ADD_MESSAGE
            const threadIndex = findThreadIndex(state, action)
            
            const oldThread = state[threadIndex]
            const newThread = {
                ...oldThread,
                messages: messagesReducer(oldThread.messages, action)
            }

            return [
                ...state.slice(0, threadIndex),
                newThread,
                ...state.slice(threadIndex + 1, state.length)
            ]


        }

        case 'DELETE_MESSAGE': {                                                             //DELETE_MESSAGE
            const threadIndex = findThreadIndex(state, action);

            const oldThread = state[threadIndex];
            const newThread = {
                ...oldThread,
                messages: messagesReducer(oldThread.messages, action)
            }

            return [
                ...state.slice(0, threadIndex),
                newThread,
                ...state.slice(threadIndex + 1, state.length)
            ]
        }

        default: {
            return state
        }
    }
}