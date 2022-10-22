import { APPRoute, HttpCode } from "const";
import * as S from './not-found-screen.styled';

const NotFoundScreen = () => (
  <S.Container>
    <S.Title>{`${HttpCode.NOTFOUND}. Page not found`}</S.Title>
    <S.Link to={APPRoute.MAIN}>Go to the home page</S.Link>
  </S.Container>

);

export default NotFoundScreen;
