import './App.css';
import React from 'react';
import { createStore } from 'redux';

const uuid = require('uuid')

const initialState = {                                          //initialState
  activeThreadId: '1-fca2',
  threads: [
    {
      id: '1-fca2',
      title: 'Buzz Aldrin',
      messages: [
        {
          text: 'Twelve minutes to ignition.',
          timestamp: Date.now(),
          id: uuid.v4()
        }
      ]
    },
    {
      id: '2-be91',
      title: 'Michael Collins',
      message: []
    }
  ]
}

function reducer(state = initialState, action) {                                 //reducer
  if (action.type === 'ADD_MESSAGE') {                                    //ADD_MESSAGE
    const newMessage = {
      text: action.text,
      timestamp: Date.now(),
      id: uuid.v4()
    }
    return {
      messages: state.messages.concat(newMessage)
    }
  } else if(action.type === 'DELETE_MESSAGE') {                           //DELETE_MESSAGE
    return {
      messages: state.messages.filter((m) => (m.id !== action.id))
    }
  }
}

const store = createStore(reducer, initialState)                  //store

class Thread extends React.Component {                            //Thread
  handleClick = (id) => {                                                 //handleClick
    store.dispatch({
      type: 'DELETE_MESSAGE',
      id: id
    })
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

    return(
      <div>
        <div>
          {messages}
        </div>
        <MessageInput />
      </div>
    )
  }
}

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
    store.dispatch({
      type: 'ADD_MESSAGE',
      text: this.state.value
    })
    this.setState({value: ''})
  }

  render() {
    return(
      <div>
        <input onChange={this.onChange} value={this.state.value} type='text' />
        <button onClick={this.handleSubmit} type='submit' >
          Submit
        </button>
      </div>
    )
  }

}

class App extends React.Component {                                //App
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()
    console.log('state:', state)
    const activeThreadId = state.activeThreadId
    const threads = state.threads
    const activeThread = threads.find((t) => t.id === activeThreadId)

    return (
      <div>
        <Thread thread={activeThread} />
      </div>
    )
  }

}

export default App;
