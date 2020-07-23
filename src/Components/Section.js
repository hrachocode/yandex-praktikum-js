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
}

export default Section;