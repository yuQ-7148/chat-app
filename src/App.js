import './App.css';
import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ADD_MESSAGE, DELETE_MESSAGE } from './redux/action';
import MainRouter from './router/router';

class Thread extends React.Component {                            //Thread
  handleClick = (id) => {                                                 //handleClick
    store.dispatch(DELETE_MESSAGE(id))                                    //DELETE_MESSAGE
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
    store.dispatch(ADD_MESSAGE(this.state.value))                         //ADD_MESSAGE
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
      <Provider store={store}>
        <MainRouter />
        <Thread thread={activeThread} />
      </Provider>
    )
  }

}

export default App;
