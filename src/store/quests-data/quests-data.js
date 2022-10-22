import { createReducer } from "components/common/common";
import { loadQuestList, loadQuest } from "../action";

const initialState = {
  questList: [],
  isDataLoaded: false,
  isOneQuestLoaded: false
}

const questsData = createReducer(initialState, (builder) => {
  builder.addCase(loadQuestList, (state, action) => {
    state.questList = action.payload;
    state.isDataLoaded = true;
    state.isOneQuestLoaded = true;
  });
  builder.addCase(loadQuest, (state, action) => {
    state.questList = action.payload;
    state.isOneQuestLoaded = true;
  });
});

export {questsData};
