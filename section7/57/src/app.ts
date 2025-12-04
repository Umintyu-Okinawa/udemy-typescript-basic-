// 例題：　ユーザーオブジェクトの操作
//　変数userを用意
//下記載のオブジェクトを作成
//name:'Rion Nakamura'
//gender:'man'
//age25
//各式(値)を、プロパティ(キー)を指定して、
//取り出してコンソール表示
// const user = {
// name: 'Rion Nakamura',
// gender: 'man',
// age:21

// };
// console.log(user.name);
// console.log(user.gender);
// console.log(user.age);

// console.log(user['name']);
// console.log(user['gender']);
// console.log(user['age']);

// user.age = 26;
// console.log(user.age);

// user['age'] = 23;
// console.log(user.age);

// console.log(Object.keys(user).lenght);
// console.log(Object.keys(user));

const user2: {
name: string,
gender:string,
age: number
} = {
    name: 'Yuta Nakamura',
    gender:'Man',
    age:20
};

//user2.age ='20'; //NG
//suser2.prefecture ='Tokyo'; //NG

console.log(user2.name);
console.log(user2.gender);
console.log(user2.age);

interface Userobj {
name: string,
gender: string,
age?: number,
}

const user3: Userobj = {
    name : 'Yuta Nakamura',
    gender: 'man',
    age: 20
};

console.log(user3.name);
console.log(user3.gender);
console.log(user3.age);
