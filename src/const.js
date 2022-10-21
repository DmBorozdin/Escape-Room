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
    TYPE: `horror`,
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

export const BookingFormField = {
  NAME: `booking-name`,
  PHONE: `booking-phone`,
  COUNT: `booking-people`,
  LEGAL: `booking-legal`
}

export const CHECKBOX_CHECKED = `on`;
export const TEL_LENGTH = 10;

export const PeopleCount = {
  MIN_NUMBER: 0,
  MAX_NUMBER: 1
}

export const Coordinates = {
  CITY: {
    LAT: 59.9684,
    LNG: 30.317,
    ZOOM: 16
  },
  POINT: {
    LAT: 59.9682,
    LNG: 30.3174,
  }
};
