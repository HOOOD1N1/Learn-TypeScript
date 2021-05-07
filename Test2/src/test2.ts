import products from './products';

const productName:string = products[3].name; 

const product = products.find(produc => produc.name === productName)
console.log(product)
products.forEach(produc => produc.preOrder === 'true' ? console.log('yes'): console.log('no'))

let shipping: number, taxPercent:number=0, taxTotal:number=0, total:number ;
let shippingAddress: string = 'here';
if(Number(product?.price) > 25){
    shipping=0;
} else {
    shipping=25;
}

if(shippingAddress.match('New York')){
    taxPercent=0.1
}
taxTotal = Number(product?.price) * taxPercent;
total = Number(product?.price) + taxTotal + shipping;