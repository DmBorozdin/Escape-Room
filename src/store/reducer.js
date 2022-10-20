import { createReducer } from "components/common/common";
import { loadQuestList, loadQuest, changeType } from "./action";
import { TabList } from "const";

const initialState = {
  questList: [],
  selectedType: TabList.ALL.TYPE,
  isDataLoaded: false,
  isOneQuestLoaded: false
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadQuestList, (state, action) => {
    state.questList = action.payload;
    state.isDataLoaded = true;
    state.isOneQuestLoaded = true;
  });
  builder.addCase(loadQuest, (state, action) => {
    state.questList = action.payload;
    state.isOneQuestLoaded = true;
  });
  builder.addCase(changeType, (state, action) => {
    state.selectedType = action.payload;
  });
});

export {reducer};
