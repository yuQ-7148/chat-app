import React from "react";
import { addMessage } from "../../redux/action";
import store from "../../redux/store";

class MessageInput extends React.Component {                     //MessageInput
    state = {
      value: ''
    }
  
    onChange = (e) => {                                                     //onChange
      this.setState({
        value: e.target.value
      })
    }
  
    handleSubmit = () => {                                                  //handleSubmit
      store.dispatch(addMessage(this.state.value))                         //ADD_MESSAGE
      this.setState({ value: '' })
    }
  
    render() {
      return (
        <div>
          <input onChange={this.onChange} value={this.state.value} type='text' />
          <button onClick={this.handleSubmit} type='submit' >
            Submit
          </button>
        </div>
      )
    }
  }

  export default MessageInput;