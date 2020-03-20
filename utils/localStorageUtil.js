class LocalStorageUtil {
  constructor() {
    this.keyName = 'products';
  }
  getProgucts(){
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }

      return[];

  }
  putProgucts(id){
    let products = this.getProgucts();
    let pushProduct = false;
    const index = products.indexOf(id);
    if (index === -1) {
      products.push(id);
      pushProduct = true;
    }
    else {
      products.splice(index, 1);
    }
    
    localStorage.setItem(this.keyName, JSON.stringify(products));

    return{ pushProduct,products }
  }
};
const localStorageUtil = new LocalStorageUtil();
