export async function getProductInfo(id, loadingSetter, infoSetter) {
    loadingSetter(true);
    // if id is null, get all items
    const url = (id === null) ? `http://fakestoreapi.com/products` : `http://fakestoreapi.com/products/${id}` ;
    const response = await fetch(url);
    const data = await response.json();
    infoSetter(data);
    loadingSetter(false);
  };

  export function sortProductList(productList, setSortedProductList, sortStyle) {
    let sortedArray = []
    switch(sortStyle) {
      case "ascending":
        // use comparison function to find higher price
        sortedArray = productList.sort((a, b) => a.price - b.price);
        break;
      case "descending":
        // use comparison function to find lower price
        sortedArray = productList.sort((a, b) => b.price - a.price);
        break;
      case "none":
        // no sort, just copy
        sortedArray = productList;
        break;
      default:
        sortedArray = productList;
    }
    setSortedProductList(sortedArray);
};
