import React from "react";
import { addMessage, deleteMessage } from "../../redux/action";
import store from "../../redux/store";
import { Thread } from "./component/thread";

class ThreadDisplay extends React.Component {                            //Thread
    componentDidMount() {
      store.subscribe(() => this.forceUpdate())
    }
  
    render() {
      const state = store.getState()
      const activeThreadId = state.activeThreadId
      const activeThread = state.threads.find(
        t => t.id === activeThreadId
      )
  
      return (
        <Thread 
          thread={activeThread}
          onMessageClick={(id) => (
            store.dispatch(deleteMessage(id))
          )}
          onMessageSubmit={(text) => (
            store.dispatch(addMessage(text, activeThreadId))
          )}
        />
      )
    }
  }

  export default ThreadDisplay;