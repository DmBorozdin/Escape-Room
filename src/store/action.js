import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_QUEST_LIST: `data/loadQuestList`
};

export const loadQuestList = createAction(ActionType.LOAD_QUEST_LIST, (quests) => ({payload: quests}));
