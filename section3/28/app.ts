console.log('Hello! I\'m Yuta Nakamura');

console.log('\¥ \t AAA \n BBB');

console.log("Hello! I'm Yuta Nakamura");

console.log('こんにちは！"中村"さん');

console.log("Hello");//  TypeScript Deep Diveでは "" '' どちらでもいいが、''が推奨されている
console.log('Hello');

let color: string = 'Red' ;
console.log(color);
console.log(typeof(color));

let num : number = 123;
console.log(num);
console.log(typeof(num));
let dec = 456.789;
console.log(dec);
console.log(typeof(dec));

let b :boolean = true;
console.log(b);
console.log(typeof(b));

b= false;
console.log (b);
console.log(typeof(b));
//typeof で型まで表示させる

color = 'Green' ;
console.log(color);

// let color: string = 'Blue' ; ←同じ型の宣言はできない
// color = 255; ← string 型は文字型なので、数字が使えづ、コンパイル時にエラーがでる


const pi = 3.14;
console.log(pi);
// pi =3;  定数であるためpiに代入できない。　変更されたら困る値はconstキーワードで書き換えれないようにする
//最初はconstで書いて、あとからletにして変数を変えるのがベター

const color2 = 'red'; //←型推論でデータ型を省略するのがオススメ
console.log(typeof(color2));

const num2 = 123;
console.log(typeof(num));

const b2 = true;
console.log(typeof(b));


let colorname;
let colorName; //キャメルケース=先頭を大文字、ローワーキャメルケース＝先頭を小文字
let myColorName;

let favoriteFood = 20; //bad　食べ物に年齢の変数をいれると混乱を招く

let _color;
let $name1; //変数に書いた数字は、プログラムを書いた人にしかわからず、マジックナンバーと言われているので数値が分からない。検証で使うくらい
let _name1;

let foo = 'small';
let Foo = 'big';
console.log (foo);
console.log (Foo);

//予約語
//let const = 'abc'  jsを参照して、暗記する必要はない。

//足し算
const ans = 1+2 ;
console.log(ans);

const i =20;
const j =10;
const ans1 = i+j;
console.log (ans1);

//引き算
const ans2 = i-j;
console.log(ans2);

//掛け算
const ans3 = i*j;
console.log(ans3);

//割り算
const ans4 =i/j;
console.log(ans4);

const x =3;
const y =2;
const ans5 =x/y;
console.log(ans5);

//余り
const ans6 = x%y;
console.log(ans6);

//べき乗

const ans7 = x**y;
console .log(ans7);

const ans8 =x*x;
console .log (ans8);

//足し算
let num3 = 20;
num3 =num3 + 10;
//console.log(num3);

let num4 = 20;
num4 += 10;
//console.log(num4);

//引き算
let num5 = 20;
num5 -= 10;
console.log(num5);

//掛け算
let num6 = 20;
num6 *= 10;
console.log(num6);

//割り算
let num7 = 20;
num7 /= 10;
console.log(num7);