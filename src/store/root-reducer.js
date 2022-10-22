import { combineReducers } from "redux";
import { questsData } from "./quests-data/quests-data";
import { type } from "./type/type";

export const NameSpace = {
  DATA: `DATA`,
  TYPE: `TYPE`,
};

export default combineReducers({
  [NameSpace.DATA]: questsData,
  [NameSpace.TYPE]: type,
});
