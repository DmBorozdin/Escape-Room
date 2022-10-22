import { createSelector } from "@reduxjs/toolkit";
import { TabList } from "const";

export const getData = (state) => state.DATA;

export const filterQuestsByType = createSelector(
  [(state) => state.DATA.questList, (state) => state.TYPE.selectedType],
  (questList, type) => type !== TabList.ALL.TYPE ? questList.filter((quest) => quest.type === type) : questList,
);
