class Header {
headlerOpenCartPage(){
  cartPage.render();
}
  render(count) {
    const html = `
      <div class="headerContainer">
        <img src="img/logo.png">
        <div class="headerCounter" onclick="headerPage.headlerOpenCartPage();">
        <img src="img/cart.png" class="header_cart"><div class="header_count"> ${count} </div>
        </div>
      </div>
    `;
    ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
const productStore = localStorageUtil.getProgucts();

headerPage.render(productStore.length);
