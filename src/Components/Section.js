class Section {
      constructor({ items, renderer }, wrapperSelector) {
            this._items = items;
            this._renderer = renderer;
            this._wrapperSelector = document.querySelector(wrapperSelector);
      }

      renderView() {
            this._items.forEach(item => this._renderer(item));
      }

      addItem(DOMNode) {
            this._wrapperSelector.append(DOMNode);
      }

      // все хорошо, для большей универсальности этого класса можно передавать в _renderer и селектор враппера
}

export default Section;