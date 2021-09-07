import { activeThreadIdReducer } from './reducer/activethreadidreducer';
import { threadsReducer } from './reducer/threadsreducer';
import { initialState } from './store';


export const reducer = (state = initialState, action) => {
    return {
        activeThreadId: activeThreadIdReducer(state.activeThreadId, action),
        threads: threadsReducer(state.threads, action)
    }
}