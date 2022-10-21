import { useRef } from 'react';
import * as S from './booking-modal.styled';
import PropTypes from 'prop-types';
import { BookingFormField, CHECKBOX_CHECKED, TEL_LENGTH } from 'const';

import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';

const BookingModal = ({onCloseBtnClick, onFormSubmit}) => {
  const formRef = useRef();

  const handleCloseBtnClick = () => onCloseBtnClick();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formRef.current);
    onFormSubmit({
      name: formData.get(BookingFormField.NAME),
      peopleCount: Number(formData.get(BookingFormField.COUNT)),
      phone: formData.get(BookingFormField.PHONE),
      isLegal: formData.get(BookingFormField.LEGAL) === CHECKBOX_CHECKED
    });
    console.log({
      name: formData.get(BookingFormField.NAME),
      peopleCount: Number(formData.get(BookingFormField.COUNT)),
      phone: formData.get(BookingFormField.PHONE),
      isLegal: formData.get(BookingFormField.LEGAL) === CHECKBOX_CHECKED
    })
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={handleCloseBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          ref={formRef}
          id="booking-form"
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              pattern={`\\d{${TEL_LENGTH}}`}
              title='999 999 99 99'
              minLength={TEL_LENGTH}
              maxLength={TEL_LENGTH}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  )
};

BookingModal.propTypes = {
  onCloseBtnClick: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
}

export default BookingModal;
