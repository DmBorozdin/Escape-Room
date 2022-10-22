import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { BlockSize, APPRoute, HeaderMenu, PHONE_NUMBER, FORMAT_PHONE_NUMBER } from 'const';
import { useLocation } from 'components/common/common';

const Header = () => {
  const location = useLocation().pathname;
  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width={BlockSize.LOGO.WIDTH} height={BlockSize.LOGO.HEIGHT} />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            {Object.values(HeaderMenu).map((menuItem) => (
              <S.LinkItem key={menuItem.ITEM}>
                <S.Link $isActiveLink={
                  location.includes(APPRoute.QUEST) ?
                    APPRoute.MAIN === menuItem.ROUTE :
                    location === menuItem.ROUTE
                  } to={menuItem.ROUTE}>
                  {menuItem.TITLE}
                </S.Link>
              </S.LinkItem>
            ))}

          </S.Links>
        </S.Navigation>
        <S.Phone href={`tel:${FORMAT_PHONE_NUMBER}`}>{PHONE_NUMBER}</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  )
};

export default Header;
