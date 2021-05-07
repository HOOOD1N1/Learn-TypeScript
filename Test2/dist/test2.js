"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = __importDefault(require("./products"));
var productName = products_1.default[3].name;
var product = products_1.default.find(function (produc) { return produc.name === productName; });
console.log(product);
products_1.default.forEach(function (produc) { return produc.preOrder === 'true' ? console.log('yes') : console.log('no'); });
var shipping, taxPercent = 0, taxTotal = 0, total;
var shippingAddress = 'here';
if (Number(product === null || product === void 0 ? void 0 : product.price) > 25) {
    shipping = 0;
}
else {
    shipping = 25;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
taxTotal = Number(product === null || product === void 0 ? void 0 : product.price) * taxPercent;
total = Number(product === null || product === void 0 ? void 0 : product.price) + taxTotal + shipping;
