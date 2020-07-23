import Card from "../Components/Card";
import { CARD_SELECTOR } from "./Constants";
import PopupWithImage from "../Components/PopupWithImage";
import UserInfo from "../Components/UserInfo";
import Popup from "../Components/Popup";

import {
      cardNameInputValue,
      cardLinkInputValue,
      placesWrap
}
      from './Constants';

const popupWithImage = new PopupWithImage('.popup_type_image');
const popupUserInfo = new UserInfo({ userNameSelector: '.popup__input_type_card-name', userInfoSelector: '.popup__input_type_url' });
const popupUser = new Popup('.popup_type_edit');
const popupNewCard = new Popup('.popup_type_new-card');


export const renderCard = (data, wrap) => {
      const card = new Card(data, CARD_SELECTOR, () => popupWithImage.open(data.link, data.name));
      wrap.prepend(card.getView());
};


export const formSubmitHandler = (evt) => {
      evt.preventDefault();
      const { name, description } = evt.target.elements;
      popupUserInfo.setUserInfo(name.value, description.value);
      popupUser.close();
};

export const cardFormSubmitHandler = (evt) => {
      evt.preventDefault();
      renderCard({
            name: cardNameInputValue.value,
            link: cardLinkInputValue.value
      }, placesWrap);

      popupNewCard.close();
};