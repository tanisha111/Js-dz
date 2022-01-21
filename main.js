class ProductList {
  #container;
  #goods;
  #productObjects;

  constructor(container = '.products') {
      this.#container = container;
      this.#goods = [];
      this.#productObjects = [];

      this.fetchGoodsData();
      this.render();
  }

  fetchGoodsData() {
      this.#goods = [
          {id: 1, title: 'Notebook', price: 1000},
          {id: 2, title: 'Mouse', price: 100},
          {id: 3, title: 'Keyboard', price: 250},
          {id: 4, title: 'Gamepad', price: 150},
      ];
  }

  render() {
      const catalogBlock = document.querySelector(this.#container);

      for (let product of this.#goods) {
          const productObject = new ProductItem(product);
          console.log(productObject)
          this.#productObjects.push(productObject);
          catalogBlock.insertAdjacentHTML('beforeend', productObject.getHTMLString());
      }
  }
}

class ProductItem {
  constructor(product, img='https://avatars.mds.yandex.net/i?id=5c01c4c1860d86b6fd6f10d1151d7b90-4824023-images-thumbs&n=13/200x150') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
  }

  getHTMLString() {
      return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} \u20bd</p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>`;
  }
}



const catalog = new ProductList();
