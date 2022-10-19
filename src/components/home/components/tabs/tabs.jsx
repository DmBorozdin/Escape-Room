import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from './tabs.styled';

const TabList = [
  {
    KEY: `all`,
    TITLE: `Все квесты`,
    ICON: () => (<IconAllQuests />)
  },
  {
    KEY: `adventures`,
    TITLE: `Приключения`,
    ICON: () => (<IconAdventures />)
  },
  {
    KEY: `horrors`,
    TITLE: `Ужасы`,
    ICON: () => (<IconHorrors />)
  },
  {
    KEY: `mystic`,
    TITLE: `Мистика`,
    ICON: () => (<IconMystic />)
  },
  {
    KEY: `detective`,
    TITLE: `Детектив`,
    ICON: () => (<IconDetective />)
  },
  {
    KEY: `scifi`,
    TITLE: `Sci-fi`,
    ICON: () => (<IconScifi />)
  }
];

const Tabs = () => (
  <S.Tabs>
    {TabList.map((tab, index) => (
      <S.TabItem key={tab.KEY}>
        <S.TabBtn isActive={index === 0 ? true : false}>
          {tab.ICON()}
          <S.TabTitle>{tab.TITLE}</S.TabTitle>
        </S.TabBtn>
      </S.TabItem>
    ))}
  </S.Tabs>
);

export default Tabs;
