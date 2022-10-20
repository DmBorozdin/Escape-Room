import { useState, useEffect } from 'react';
import { MainLayout, useSelector, useDispatch, useParams } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { DifficultyLevel, TypeQuest } from 'const';
import { getData } from 'store/selectors';
import { fetchQuest } from 'store/api-actions';
import Preloader from 'components/common/preloader/preloader';

const DetailedQuest = () => {
  const {questList, isOneQuestLoaded} = useSelector(getData);
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const pageId = Number(useParams().id);
  const quest = questList.find((quest) => quest.id === pageId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOneQuestLoaded) {
      dispatch(fetchQuest(pageId));
    }
  }, [dispatch, isOneQuestLoaded, pageId]);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  if (!isOneQuestLoaded) {
    return (
      <MainLayout>
          <Preloader></Preloader>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={quest.coverImg}
          alt={`Квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{TypeQuest[quest.type.toUpperCase()]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${quest.duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${quest.peopleCount[0]}–${quest.peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{DifficultyLevel[quest.level.toUpperCase()]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
