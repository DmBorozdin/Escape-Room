import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import Tabs from '../tabs/tabs';
import * as S from './quests-catalog.styled';
import { APPRoute, DifficultyLevel } from 'const';

const mockData = [
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
];

const QuestsCatalog = () => (
  <>
    <Tabs />
    <S.QuestsList>
      {mockData.map((quest) => (
        <S.QuestItem key={`quest-${quest.id}`}>
          <S.QuestItemLink to={`${APPRoute.QUEST}/${quest.id}`}>
            <S.Quest>
              <S.QuestImage
                src={quest.previewImg}
                width="344"
                height="232"
                alt={`квест ${quest.title}`}
              />

              <S.QuestContent>
                <S.QuestTitle>{quest.title}</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson />
                    {`${quest.peopleCount[0]}–${quest.peopleCount[1]} чел`}
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle />
                    {DifficultyLevel[quest.level.toUpperCase()]}
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>
      ))}
    </S.QuestsList>
  </>
);

export default QuestsCatalog;
