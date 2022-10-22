import { createReducer } from "components/common/common";
import { changeType } from "../action";
import { TabList } from "const";

const initialState = {
  selectedType: TabList.ALL.TYPE,
}

const type = createReducer(initialState, (builder) => {
  builder.addCase(changeType, (state, action) => {
    state.selectedType = action.payload;
  });
});

export {type};
