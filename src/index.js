import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from 'store/reducer';
import App from 'components/app/app';
import { createApi } from 'services/api';

const api = createApi();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    })
});

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
