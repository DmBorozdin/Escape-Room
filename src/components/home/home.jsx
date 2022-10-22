import {MainLayout, PageTitle, PageHeading, PageSubtext, useSelector, useDispatch} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import { useEffect } from 'react';
import { fetchQuestList } from 'store/api-actions';
import { getData } from 'store/quests-data/selectors';
import { getType } from 'store/type/selectors';
import Preloader from 'components/common/preloader/preloader';
import { TabList } from 'const';
import { changeType } from 'store/action';

const HomePage = () => {
  const {isDataLoaded} = useSelector(getData);
  const {selectedType} = useSelector(getType);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchQuestList());
    }
  }, [dispatch, isDataLoaded]);

  useEffect(() => {
    if (selectedType !== TabList.ALL.TYPE) {
      dispatch(changeType(TabList.ALL.TYPE));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (!isDataLoaded) {
    return (
      <MainLayout>
          <Preloader></Preloader>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  )
};

export default HomePage;
