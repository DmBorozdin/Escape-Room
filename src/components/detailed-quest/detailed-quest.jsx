import { useState, useEffect } from 'react';
import { MainLayout, useSelector, useDispatch, useParams } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { DifficultyLevel, TypeQuest, PeopleCount, BlockSize } from 'const';
import { getData } from 'store/selectors';
import { fetchQuest, sendApplication } from 'store/api-actions';
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
    setIsBookingModalOpened(!isBookingModalOpened);
  };

  const onFormSubmit = (data) => {
    dispatch(sendApplication(data, onBookingBtnClick));
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
          src={`/${quest.coverImg}`}
          alt={`Квест ${quest.title}`}
          width={BlockSize.PAGE_IMAGE.WIDTH}
          height={BlockSize.PAGE_IMAGE.HEIGHT}
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{TypeQuest[quest.type.toUpperCase()]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width={BlockSize.ICON_BLOCK.WIDTH} height={BlockSize.ICON_BLOCK.WIDTH} />
                <S.FeatureTitle>{`${quest.duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width={BlockSize.ICON_PERSON.WIDTH} height={BlockSize.ICON_PERSON.WIDTH} />
                <S.FeatureTitle>{`${quest.peopleCount[PeopleCount.MIN_NUMBER]}–${quest.peopleCount[PeopleCount.MAX_NUMBER]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width={BlockSize.ICON_PAZZLE.WIDTH} height={BlockSize.ICON_PAZZLE.WIDTH} />
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

        {isBookingModalOpened && <BookingModal onCloseBtnClick={onBookingBtnClick} onFormSubmit={onFormSubmit}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
