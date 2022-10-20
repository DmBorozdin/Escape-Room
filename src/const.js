import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

export const APPRoute = {
  MAIN: `/`,
  QUEST: `/detailed-quest`,
  ID: `/:id`,
  CONTACTS: `/contacts`,
};

export const APIRoute = {
  QUESTS: `/quests`,
  ORDER: `/orders`
};

export const DifficultyLevel = {
  EASY: `легкий`,
  MEDIUM: `средний`,
  HARD: `сложный`
};

export const TypeQuest = {
  'ADVENTURE': `приключения`,
  'HORROR': `ужасы`,
  'MYSTIC': `мистика`,
  'DETECTIVE': `детектив`,
  'SCI-FI': `sci-fi`
};

export const HttpCode = {
  NOTFOUND: 404
};

export const TabList = {
  ALL: {
    TYPE: `all`,
    TITLE: `Все квесты`,
    ICON: () => (<IconAllQuests />)
  },
  ADVENTURE: {
    TYPE: `adventures`,
    TITLE: `Приключения`,
    ICON: () => (<IconAdventures />)
  },
  HORRORS: {
    TYPE: `horrors`,
    TITLE: `Ужасы`,
    ICON: () => (<IconHorrors />)
  },
  MYSTIC: {
    TYPE: `mystic`,
    TITLE: `Мистика`,
    ICON: () => (<IconMystic />)
  },
  DETECTIVE: {
    TYPE: `detective`,
    TITLE: `Детектив`,
    ICON: () => (<IconDetective />)
  },
  SCIFI: {
    TYPE: `sci-fi`,
    TITLE: `Sci-fi`,
    ICON: () => (<IconScifi />)
  }
};
