function addtocart(){
    let items = [];
    
    return{
        addItem(item){
            items.push(item);
            console.log(`Added: ${item}`);
        },
        getItems() {
            return [...items]; // return a copy
        }
    }
}


const myCart = addtocart();
myCart.addItem("Apple");
myCart.addItem("Banana");

console.log("Cart Contents:", myCart.getItems()); // ["Apple", "Banana"]