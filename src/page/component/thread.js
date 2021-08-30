import React from "react";
import { deleteMessage } from "../../redux/action";
import store from "../../redux/store";
import MessageInput from "./messageinput";

class Thread extends React.Component {                            //Thread
    handleClick = (id) => {                                                 //handleClick
      store.dispatch(deleteMessage(id))                                    //DELETE_MESSAGE
    }
  
    render() {
      const messages = this.props.thread.messages.map((message, index) => (
        <div key={index} onClick={() => this.handleClick(message.id)}>
          <div>
            {message.text}
            <span>@{message.timestamp}</span>
          </div>
        </div>
      ))
  
      return (
        <div>
          <div>
            {messages}
          </div>
          <MessageInput threadId={this.props.thread.id} />
        </div>
      )
    }
  }

  export default Thread;