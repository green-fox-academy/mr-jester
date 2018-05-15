let str:string = 'this is my original string';
/*console.log (str.indexOf('original'));
console.log(strty);
str= str.replace('original','new');
let applestr: string = 'apple';
console.log(applestr.split(''));
console.log(str.split (' ', 3)); 

console.log (str.slice(8,19));

console.log (str.slice(8,-3));
console.log (str.substring(8,19)); 

console.log(str.charAt(11));

console.log(str[11]);

console.log (str.concat (' I like it'));

console.log (`${str} I like it`); */

let car = {

Brand: 'Benz',
type: 'SLR',
color: 'black',
start: () =>{
console.log ('whoom,whoom');
}
};

console.log(typeof car);
console.log (car);
console.log (car.type);
car.type = 'SLK';
console.log (car.type);

let keyStr= 'color';
console.log (car [keyStr]);

Object.keys (car).forEach(key => {
    console.log (`${key}: ${car[key]}`);
    
});

let ObjArray: any[] = []
ObjArray.push(car);
ObjArray.push({
    brand: 'Ford',
    type: 'GT',
    color: 'Crimson',
    start: () => {
        console.log ('whoom,whoom');
    }



})

