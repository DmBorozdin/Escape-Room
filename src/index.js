import { StrictMode } from 'react';
import { Router, Provider, configureStore } from 'components/common/common';
import { render } from 'react-dom';
import rootReducer from 'store/root-reducer';
import App from 'components/app/app';
import { createApi } from 'services/api';
import { redirect } from 'store/middlewares/redirect';
import browserHistory from 'browser-history';

const api = createApi();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

render(
  <StrictMode>
    <Provider store={store}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
