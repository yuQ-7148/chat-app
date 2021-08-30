import { createStore } from "redux";
import { reducer } from "./reducer";

const uuid = require('uuid');

export const initialState = {                                          //initialState
    activeThreadId: '1-fca2',                                                                      //activeThreadId
    threads: [                                                                                     //threads
      {
        id: '1-fca2',                                                                                        //id
        title: 'Buzz Aldrin',                                                                                //title
        messages: [                                                                                          //message                
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

const store = createStore(reducer, initialState);                     //store

export default store;