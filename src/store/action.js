import { createAction } from "components/common/common";

export const ActionType = {
  LOAD_QUEST_LIST: `data/loadQuestList`,
  LOAD_QUEST: `data/loadQuest`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
  CHANGE_TYPE: `type/changeType`,
};

export const loadQuestList = createAction(ActionType.LOAD_QUEST_LIST, (quests) => ({payload: quests}));

export const loadQuest = createAction(ActionType.LOAD_QUEST, (quest) => ({payload: quest}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));

export const changeType = createAction(ActionType.CHANGE_TYPE, (type) => ({payload: type}));
