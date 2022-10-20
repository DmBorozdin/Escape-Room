import { StrictMode } from 'react';
import { Router, Provider, configureStore } from 'components/common/common';
import { render } from 'react-dom';
import { reducer } from 'store/reducer';
import App from 'components/app/app';
import { createApi } from 'services/api';
import { redirect } from 'store/middlewares/redirect';
import browserHistory from 'browser-history';

const api = createApi();

const store = configureStore({
  reducer,
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
