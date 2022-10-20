import { APPRoute } from "const";
import * as S from './not-found-screen.styled';

const NotFoundScreen = () => (
  <S.Container>
    <S.Title>404. Page not found</S.Title>
    <S.Link to={APPRoute.MAIN}>Go to the home page</S.Link>
  </S.Container>

);

export default NotFoundScreen;
