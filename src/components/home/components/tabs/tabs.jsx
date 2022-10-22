import {useSelector, useDispatch} from 'components/common/common';
import { getType } from 'store/type/selectors';
import { TabList } from 'const';
import * as S from './tabs.styled';
import { changeType } from 'store/action';

const Tabs = () => {
  const {selectedType} = useSelector(getType);
  const dispatch = useDispatch();

  const onTabBtnClick = (evt) => {
    if (evt.currentTarget.tagName === 'BUTTON') {
      dispatch(changeType(evt.currentTarget.dataset.type));
    }
  }

  return (
    <S.Tabs>
      {Object.values(TabList).map((tab, index) => (
        <S.TabItem key={tab.TYPE}>
          <S.TabBtn data-type={tab.TYPE} isActive={tab.TYPE === selectedType} onClick={onTabBtnClick}>
            {tab.ICON()}
            <S.TabTitle>{tab.TITLE}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      ))}
    </S.Tabs>
  )
};

export default Tabs;
