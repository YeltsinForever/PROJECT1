class Cart {
  handleClear(){
    ROOT_CART.innerHTML=' ';
    let summCart = 0;
  }
  render(){

      const productStore = localStorageUtil.getProgucts();
      let htmlCatalog = '';
      let summCart = 0;
CATALOG.forEach(({price, name, size, id}) => {
  if (productStore.indexOf(id) !== -1) {
    htmlCatalog += `
      <tr>
        <td class="cart_item__name">${name}</td>
        <td class="cart_item__name">${size}</td>
          <td class="cart_item__price">${price.toLocaleString()} RUB</td>
      </tr>
    `;
    summCart += price;
  }
});

     const html =`
<div class="cart_container">
<div class="cart_close" onclick="cartPage.handleClear()"></div>
  <table>
    ${htmlCatalog}
    <tr>
      <td class="cart_item__name">SUMM:</td>
      <td class="cart_item__price"> ${summCart.toLocaleString()} RUB</td>
    </tr>
  </table>
</div>
     `;
     ROOT_CART.innerHTML = html;
  }
}

const cartPage = new Cart();
