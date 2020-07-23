export const ESC_KEYCODE = 27;
export const CARD_SELECTOR = '.card-template';
export const INITIAL_CARDS = [
      {
            name: 'Архыз',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
      },
      {
            name: 'Челябинская область',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
      },
      {
            name: 'Иваново',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
      },
      {
            name: 'Камчатка',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
      },
      {
            name: 'Холмогорский район',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
      },
      {
            name: 'Байкал',
            link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
      }
];
export const DEFAULT_FORM_CONFIG = {
      formSelector: '.popup__form',
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__button',
      inactiveButtonClass: 'popup__button_disabled',
      inputErrorClass: 'popup__input_type_error',
      errorClass: 'popup__error_visible'
};

export const cardFormModalWindow = document.querySelector('.popup_type_new-card');
export const cardNameInputValue = cardFormModalWindow.querySelector('.popup__input_type_card-name');
export const cardLinkInputValue = cardFormModalWindow.querySelector('.popup__input_type_url');

// Врапперы
export const placesWrap = document.querySelector('.places__list');
export const editFormModalWindow = document.querySelector('.popup_type_edit');
// С submit ребята еще плохо работают.

// Кнопки и прочие дом узлы
export const openEditFormButton = document.querySelector('.profile__edit-button');
export const openCardFormButton = document.querySelector('.profile__add-button');

// Данные форм и элементы форм
export const titleInputValue = editFormModalWindow.querySelector('.popup__input_type_name');
export const descriptionInputValue = editFormModalWindow.querySelector('.popup__input_type_description');
// решение на минималках. Конечно, студент может корректно обобрать велью инпутов в форме.