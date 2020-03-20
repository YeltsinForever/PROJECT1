class Products {
  constructor(){

    this.classNameActive = '.order_active';
    this.labelAdd = 'BUY';
    this.labelRemove = 'REMOVE';

}
 handleSetLocationStorage(element, id){

      const {pushProduct, products} =  localStorageUtil.putProgucts(id);
      if (pushProduct) {
        element.classList.add(this.classNameActive);
        element.innerHTML = this.labelRemove;
      } else {
        element.classList.remove(this.classNameActive);
        element.innerHTML = this.labelAdd;
      }
        headerPage.render(products.length);
       }
  render() {
    const productStore = localStorageUtil.getProgucts();
      let htmlCatalog = '';

    CATALOG.forEach(({ img, name, size, price, id}) => {
      let activeClass = '';
      let activeTxt = '';
      if (productStore.indexOf(id) === -1){
        activeTxt = 'BUY';
      }
      else {
        activeClass =' order_active';
        activeTxt= 'REMOVE';
      }
      htmlCatalog += `
      <li class="item_catalog">
      <img class="img_catalog" src="${img}"></br>
    <span>${name} </span></br>
     <span>${size} </span></br>
     <span>${price.toLocaleString()} RUB</span></br>

    <button class="order_catalog ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">  ${activeTxt} </button>
      </li>
      `;
    });
    const html =`
      <ul class="catalog_container">
        ${htmlCatalog}
      </ul>
    `;
    ROOT_CATALOG.innerHTML = html;
}
}
 const productsPage = new Products();
 productsPage.render();
