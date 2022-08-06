// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)

class Product {
    id: number = 0;
    name: string;
    readonly price: number;
    
    constructor(productName: string) {
        this.price = Math.floor((Math.random()*20)+3);
        this.name = productName;
    }
    
    set _id(idarg: number) {
        this.id = idarg;
    }
}

type DeliveryOptions = string | number;

class Delivery {
    private orderDate: Date;
    adressOrID: DeliveryOptions;

    constructor(adressOrID: DeliveryOptions) {
        this.orderDate = new Date();
        this.adressOrID = adressOrID;
    }
}

class Cart {
    ProductList: Product[] = [];
    DeliveryInfo?: Delivery;

    addProduct(name: Product) {
        if(this.ProductList.length === 0) {
            this.ProductList.push(name);
        } else {
            name.id = this.ProductList[this.ProductList.length - 1].id + 1;
            this.ProductList.push(name);
        }
    }

    deleteProduct(id: number) {
        const copy = JSON.parse(JSON.stringify(this.ProductList));
        const productForDelete = copy.findIndex((el: Product) => el.id === id);
        copy.splice(productForDelete, 1);
        this.ProductList = copy;
    }

    totalCost():number {
        const calcTotal = (): number => {
            let total = 0;
            for(let arrayEl of this.ProductList) {
                total += arrayEl.price;
            }
            return total;
        }
        return calcTotal();
    }

    set setDelivery(deliveryData: Delivery) {
        this.DeliveryInfo = deliveryData;
    }
    
    checkout() {
        if(this.DeliveryInfo && (this.ProductList.length > 0)) {
            return "Your order is ready to be processed.";
        } else if ((this.DeliveryInfo === undefined) && (this.ProductList.length > 0)) {
            throw new Error("You didn't indicate delivery information.");
        } else if ((this.DeliveryInfo && (this.ProductList.length <= 0))){
            throw new Error("The cart is empty.");
        } else {
            throw new Error("Your order is not ready.");
        }
    }
}

// Creating a new cart.
const newCart = new Cart();

// Testing for addition products in cart.
newCart.addProduct(new Product("Banana"));
newCart.addProduct(new Product("Cocos"));
newCart.addProduct(new Product("Raspberry"));
newCart.addProduct(new Product("Strawberry"));

// Testing for deleting a product by ID.
newCart.deleteProduct(2);

// Show us total cost of all products from the cart.
console.log(newCart.totalCost());

// Setting delivery options.
newCart.setDelivery = new Delivery("st. Saint 23");

// Verifying if everything is ready for order.
console.log(newCart.checkout());

// Show us final result.
console.log(newCart);
