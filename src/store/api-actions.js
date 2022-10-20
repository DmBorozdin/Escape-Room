import { loadQuestList, loadQuest, redirectToRoute } from "./action";
import { APIRoute, APPRoute, HttpCode } from "const";

export const fetchQuestList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.QUESTS)
    .then(({data}) => dispatch(loadQuestList(data)))
    .catch((err) => {throw(err)})
);

export const fetchQuest = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.QUESTS}/${id}`)
    .then(({data}) => dispatch(loadQuest([data])))
    .catch((err) => {
      if (err.response.status === HttpCode.NOTFOUND) {
        dispatch(redirectToRoute(APPRoute.QUEST));
      } else {
        throw(err);
      }
    })
);
