import { ESC_KEYCODE } from "../Utils/Constants";
// хорошее решение вынести все в отдельный файл с константами
class Popup {
      constructor(popupSelector) {
            this._popupElement = document.querySelector(popupSelector);
      }

      open() {
            this._popupElement.classList.add('popup_is-opened');
      }

      close() {
            this._popupElement.classList.remove('popup_is-opened');
      }

      _handleEscapeClose(keyCode) {
            if (keyCode === ESC_KEYCODE) {
                  this._popupElement.classList.remove('popup_is-opened');
            }
      }

      setEventListeners() {
            const clickListener = this._popupElement.addEventListener('click', (evt) => {
                  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
                        this.close();
                  }
            });
            const keyupListener = document.addEventListener('keyup', (evt) => {
                  document.querySelectorAll('.popup_is-opened').length > 0 && this._handleEscapeClose(evt.keyCode);
            });

            //*Можно лучше* Как вариант, сделать каждый listener приватным методом этого класса, так будет лучше читаемость кода

            //  делаем CleanUp чтоб не получить Memory leak
            return () => {
                  this._popupElement.removeEventListener(clickListener);
                  document.removeEventListener(keyupListener);
            }
            // отличное решение!
      }
}

export default Popup;