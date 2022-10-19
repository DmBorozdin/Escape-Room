import { createReducer } from "@reduxjs/toolkit";
import { loadQuestList } from "./action";

const initialState = {
  questList: [
    {
      "id": 1,
      "title": "Склеп",
      "description": "Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?",
      "previewImg": "img/preview-sklep.jpg",
      "coverImg": "img/cover-sklep.jpg",
      "type": "horror",
      "level": "hard",
      "peopleCount": [2, 5],
      "duration": 120
    },
    {
      "id": 2,
      "title": "Маньяк",
      "description": "Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?",
      "previewImg": "img/preview-maniac.jpg",
      "coverImg": "img/cover-maniac.jpg",
      "type": "horror",
      "level": "medium",
      "peopleCount": [3, 6],
      "duration": 90
    },
    {
      "id": 3,
      "title": "Ритуал",
      "description": "Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?",
      "previewImg": "img/preview-ritual.jpg",
      "coverImg": "img/cover-ritual.jpg",
      "type": "mystic",
      "level": "easy",
      "peopleCount": [3, 5],
      "duration": 120
    },
  ],
  isDataLoaded: false
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadQuestList, (state, action) => {
    state.questList = action.payload;
    state.isDataLoaded = true;
  });
});

export {reducer};
