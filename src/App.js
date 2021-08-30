import './App.css';
import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import MainRouter from './router/router';

class App extends React.Component {                                //App
  render() {
    return (
      <Provider store={store}>
        <MainRouter />
      </Provider>
    )
  }

}

export default App;
