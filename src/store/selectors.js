import { createSelector } from "@reduxjs/toolkit";
import { TabList } from "const";

export const getData = (state) => state;

export const filterQuestsByType = createSelector(
  [(state) => state.questList, (state) => state.selectedType],
  (questList, type) => type !== TabList.ALL.TYPE ? questList.filter((quest) => quest.type === type) : questList,
);
