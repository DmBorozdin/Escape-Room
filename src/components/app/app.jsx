import { ThemeProvider } from 'styled-components';
import {Switch, Route, BrowserRouter as Router} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import { appTheme } from './common';
import * as S from './app.styled';
import { APPRoute } from 'const';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={APPRoute.QUEST + APPRoute.ID}>
          <DetailedQuest />
        </Route>
        <Route exact path={APPRoute.CONTACTS}>
          <Contacts />
        </Route>
        <Route exact path={APPRoute.MAIN}>
          <Home />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
