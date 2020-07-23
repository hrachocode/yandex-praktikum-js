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