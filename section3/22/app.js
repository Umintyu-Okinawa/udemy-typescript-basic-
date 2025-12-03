var color2 = 'red'; //←型推論でデータ型を省略するのがオススメ
console.log(typeof (color2));
var num2 = 123;
console.log(typeof (num));
var b2 = true;
console.log(typeof (b));
var colorname;
var colorName; //キャメルケース=先頭を大文字、ローワーキャメルケース＝先頭を小文字
var myColorName;
var favoriteFood = 20; //bad　食べ物に年齢の変数をいれると混乱を招く
var _color;
var $name1; //変数に書いた数字は、プログラムを書いた人にしかわからず、マジックナンバーと言われているので数値が分からない。検証で使うくらい
var _name1;
var foo = 'small';
var Foo = 'big';
console.log(foo);
console.log(Foo);
//予約語
//let const = 'abc'  jsを参照して、暗記する必要はない。
//足し算
var ans = 1 + 2;
console.log(ans);
var i = 20;
var j = 10;
var ans1 = i + j;
console.log(ans1);
//引き算
var ans2 = i - j;
console.log(ans2);
//掛け算
var ans3 = i * j;
console.log(ans3);
//割り算
var ans4 = i / j;
console.log(ans4);
var x = 3;
var y = 2;
var ans5 = x / y;
console.log(ans5);
//余り
var ans6 = x % y;
console.log(ans6);
//べき乗
var ans7 = Math.pow(x, y);
console.log(ans7);
var ans8 = x * x;
console.log(ans8);
var num3 = 20;
num3 = num3 + 10;
console.log(num3);
var num4 = 20;
num4 += 10;
console.log(num4);
//引き算
var num5 = 20;
num5 -= 10;
console.log(num5);
//掛け算
var num6 = 20;
num6 *= 10;
console.log(num6);
//割り算
var num7 = 20;
num7 /= 10;
console.log(num7);