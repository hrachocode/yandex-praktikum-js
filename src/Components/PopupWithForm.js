import Popup from "./Popup";

class PopupWithForm extends Popup {
      constructor(popupSelector, handleFormSubmit) {
            super(popupSelector);
            this._popupElement = document.querySelector(popupSelector);
            this._handleFormSubmit = handleFormSubmit;
      }

      _getInputValues() {
            const { name, link } = this._popupElement.querySelector('form').elements;
            return { name, link };
      }
      //*можно лучше* не очень понятно, зачем этот метод здесь если он нигде не используется. вся обработка в этой реализации идет через handleFormSubmit,
      //хотя в ТЗ было написано про метод _getInputValues

      setEventListeners() {
            super.setEventListeners();
            this._popupElement.querySelector('form').addEventListener('submit', this._handleFormSubmit);
      }

      close() {
            super.close();

            this._popupElement.querySelector('form').reset();
      }
}

export default PopupWithForm;