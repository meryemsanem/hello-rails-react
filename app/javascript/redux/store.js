import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    messageList: messagesreducer,
  },
});

export default store;
