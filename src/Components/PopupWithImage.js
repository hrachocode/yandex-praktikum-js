import Popup from "./Popup";

class PopupWithImage extends Popup {
      constructor(popupSelector) {
            super(popupSelector);

            this._popupElement = document.querySelector(popupSelector);
            this._popupImage = this._popupElement.querySelector('.popup__image');
      }

      _addImage(imageLink, imageAlt) {
            this._popupImage.src = imageLink;
            this._popupImage.alt = `Изображение ${imageAlt}`;
      }

      open(imageLink, imageAlt) {
            super.open();
            this._addImage(imageLink, imageAlt);
      }
}

export default PopupWithImage;