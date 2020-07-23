import './index.css';

import Section from '../Components/Section';
import Popup from '../Components/Popup';
import PopupWithForm from '../Components/PopupWithForm';
import UserInfo from '../Components/UserInfo';
import FormValidator from '../Components/FormValidator.js';
import PopupWithImage from '../Components/PopupWithImage';
// Константы
import {
      CARD_SELECTOR,
      INITIAL_CARDS,
      DEFAULT_FORM_CONFIG,
      placesWrap,
      editFormModalWindow,
      openEditFormButton,
      openCardFormButton,
      titleInputValue,
      descriptionInputValue,
      cardFormModalWindow
} from '../Utils/Constants';

import {
      renderCard,
      formSubmitHandler,
      cardFormSubmitHandler
} from '../Utils/Utils';

// EventListeners
editFormModalWindow.addEventListener('submit', formSubmitHandler);

openEditFormButton.addEventListener('click', () => {
      const { profileTitle, profileDescription } = popupUserInfo.getUserInfo();
      titleInputValue.value = profileTitle;
      descriptionInputValue.value = profileDescription;
      popupUser.open();
});

openCardFormButton.addEventListener('click', () => {
      popupNewCard.open();
});

const editFormValidator = new FormValidator(DEFAULT_FORM_CONFIG, editFormModalWindow);
const cardFormValidator = new FormValidator(DEFAULT_FORM_CONFIG, cardFormModalWindow);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

const popupUserInfo = new UserInfo({ userNameSelector: '.popup__input_type_card-name', userInfoSelector: '.popup__input_type_url' });
const popupNewCard = new Popup('.popup_type_new-card');
const popupUser = new Popup('.popup_type_edit');
const popupWithForm = new PopupWithForm('.popup_type_new-card', cardFormSubmitHandler);
const popupWithImage = new PopupWithImage('.popup_type_image');

popupNewCard.setEventListeners();
popupUser.setEventListeners();
popupWithForm.setEventListeners();
popupWithImage.setEventListeners();

// Инициализация
const cardsList = new Section({
      items: INITIAL_CARDS,
      renderer: cardItem => renderCard(cardItem, placesWrap)
},
      CARD_SELECTOR
);
cardsList.renderView();