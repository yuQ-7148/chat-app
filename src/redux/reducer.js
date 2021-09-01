import { activeThreadIdReducer } from './reducer/activethreadidreducer';
import { threadsReducer } from './reducer/threadsreducer';


export function reducer(state, action) {
    return {
        activeThreadId: activeThreadIdReducer(state.activeThreadId, action),
        threads: threadsReducer(state.threads, action)
    }
}