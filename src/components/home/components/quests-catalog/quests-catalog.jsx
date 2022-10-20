import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { useSelector } from 'react-redux';
import Tabs from '../tabs/tabs';
import * as S from './quests-catalog.styled';
import { APPRoute, DifficultyLevel } from 'const';
import { filterQuestsByType } from 'store/selectors';

const QuestsCatalog = () => {
  const filteredQuestList = useSelector(filterQuestsByType);

  return (
    <>
      <Tabs />
      <S.QuestsList>
        {filteredQuestList.map((quest) => (
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
  )
};

export default QuestsCatalog;
