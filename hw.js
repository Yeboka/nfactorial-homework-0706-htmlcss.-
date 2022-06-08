const nameShop = "Dalida";
let adress = "Satpaev 22a";

let undef;
let amount = 500000;
let open = true;

const shop = {
    "arduz" : 800,
    "atvertkaa" : 1500,
    "kotiki" : 'dorogo',
    menu : (name) => {
        console.log(`Hi ${name} , menu doesn't exist yet :(`);
    }
};

shop.knife = 333;
delete shop.atvertkaa;

shop.menu('Yerbo');

console.log(shop);

let tax = [2141, 23423, 324234, 23424];
tax.push(32424);

let lastTax = tax.pop();

tax.shift('tytyyt');
tax.unshift();

let afterTax = tax.map((n) => {
    return n*2;
});
console.log(afterTax);

tax = tax.filter(n => n >= 3000);
console.log(tax);

//rest can process a lot of params in function, and free params just save as array
let restFunc = (a, b, ...other) => {
    tax.push(a);
    tax.push(b);
    tax.push(other);
}
restFunc(23, 'sdfs', "sdfgd", 34543, 33);
console.log(tax);

//spread can to split elements of array as a params
console.log(...tax);

//slice just copied intervals in param at array to other array as '(0, 0]' 
console.log(tax.slice(1, 5));
console.log(tax);

//logic rules => 0 == false; 1 == true; "" = false; "enything" = true
//               undefinded, NaN, null == false

for (i in tax) {
    console.log(tax[i])
} 

//destructuring

let [r, t, err] = tax;
console.log(r, t, err);

let {"arbuz" : aa, kotiki : kk, atvertkaa : at} = shop;
console.log(aa, kk, at);