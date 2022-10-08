for (let i = 0; i < 10; i++) {
  console.log(i);
}

// airbnb에 컨벤션에 권장
// IE 전부 사용 가능
for (const i in ['one', 'two', 'three']) {
  console.log(i);
}

// airbnb에 컨벤션에 권장
// IE 전부 사용 불가
for (const i of ['one', 'two', 'three']) {
  console.log(i);
}

/////

if (true) {
  var a = '1';
  let b = '2'; // if 밖에서 쓸 수 없습니다.
  const c = '3'; // if 밖에서 쓸 수 없습니다.
}

console.log(a);

for (let i = 0; i < 10; i++) {
  // i라는 변수를 스코프마다 잠굽니다.
  var a = '1';
  let b = '2'; // if 밖에서 쓸 수 없습니다.
  const c = '3'; // if 밖에서 쓸 수 없습니다.
  console.log(i);
}

console.log(a);

/////

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i > 3) {
    break;
  }
}

let data1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < data1.length; i++) {
  console.log(data1[i]);
}

let data2 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data2.length; i++) {
  console.log(data2[i + 1] - data2[i]);
}

let data3 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data3.length - 1; i++) {
  console.log(data3[i + 1] - data3[i]);
}

let data4 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < data4.length; i++) {
  console.log(data4[i] - data4[i - 1]);
}

let i = 0;
for (;;) {
  i++;
  console.log(i);
  if (i > 5) {
    break;
  }
}

for (let i = 0; ; ) {
  i++;
  console.log(i);
  if (i > 5) {
    break;
  }
}

for (let i = 0; ; i++) {
  console.log(i);
  if (i > 5) {
    break;
  }
}

// 다음 수학점수의 평균을 구하세요.
let 수학점수 = [10, 99, 88, 85, 21, 35];
console.log(
  (수학점수[0] +
    수학점수[1] +
    수학점수[2] +
    수학점수[3] +
    수학점수[4] +
    수학점수[5]) /
    6
);

let s1 = 0;
수학점수.forEach((value) => (s += value));
console.log(s / 수학점수.length);

console.log(수학점수.reduce((a, b) => a + b, 0) / 6);

let s2 = 0;
for (let i = 0; i < 수학점수.length; i++) {
  s2 += 수학점수[i];
}
console.log(s2 / 수학점수.length);

let user = [
  {
    _id: '633e5b1711926cc42d1fbb4b',
    index: 0,
    guid: 'e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab',
    age: 28,
    name: 'Mai Montoya',
    gender: 'female',
  },
  {
    _id: '633e5b1718d6c001d2f771c7',
    index: 1,
    guid: '9b07b16c-7a4a-4152-83cf-fb64625f52fe',
    age: 22,
    name: 'Shelley Potts',
    gender: 'female',
  },
  {
    _id: '633e5b17fecc26a897aa2283',
    index: 2,
    guid: 'cfb29cc6-8381-4695-8c2f-0c273a9d33c2',
    age: 22,
    name: 'Hensley Flores',
    gender: 'male',
  },
  {
    _id: '633e5b17267fe16c24f00591',
    index: 3,
    guid: '6e189d90-0981-4086-9ee2-12242fda76d1',
    age: 20,
    name: 'Holmes Morrow',
    gender: 'male',
  },
  {
    _id: '633e5b17b30766b9c38594f5',
    index: 4,
    guid: 'f1505113-9383-4249-bbb3-0e5f8ea634b2',
    age: 25,
    name: 'Elisa Miller',
    gender: 'female',
  },
];

for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}

let 여성 = 0;
for (let i = 0; i < user.length; i++) {
  // console.log(user[i]);
  if (user[i]['gender'] === 'female') {
    여성 += 1;
  }
}
console.log(여성);

// X
// let 남성 = 0;
// for (let i = 0; i < user.length; i++) {
//     // console.log(user[i]);
//     if (user[i]['gender'] === 'female'){
//         남성 += 1;
//     }
// }
// console.log(남성);

console.log(user.length - 여성);

// let 여성 = 0;
// for (let i = 0; i < user.length; i++) {
//     // console.log(user[i]);
//     if (user[i]['gender'] === 'female'){
//         여성 += 1;
//     } else if (user[i]['gender'] === 'male'){
//         남성 += 1;
//     }
// }
// console.log(여성);

user.filter((i) => i['gender'] === 'female').length;

// 암기를 부탁드립니다. (재귀함수 할 때 비교할 for문) + 구구단

// 1. 구구단
for (let 단 = 2; 단 < 10; 단++) {
  for (let 곱 = 1; 곱 < 10; 곱++) {
    console.log(`${단} X ${곱} = ${단 * 곱}`);
  }
}

// 2. 문자열 뒤집기
let txt = 'hello world';
let result = '';
for (let i = txt.length - 1; i >= 0; i--) {
  result += txt[i];
}
d;
result = '';
for (let i = 0; i < txt.length; i++) {
  result = txt[i] + result;
}

// 3. 시그마 : 누적합
let ss = 0;
for (let i = 1; i < 101; i++) {
  ss += i;
}

// 4. 팩토리얼
// 5!
// 5 * 4 * 3 * 2 * 1
let ss2 = 1;
for (let i = 1; i < 6; i++) {
  ss2 *= i;
}

//////////////////////////////////

// 문제1 : 다음 입력된 숫자들의 합을 구하라
// input : '12345'
// result : 15

let x10 = '12345';
let result10 = 0;
for (let i = 0; i < x10.length; i++) {
  result10 += parseInt(x10[i]);
}

// 1부터 100까지 8이라는 숫자 총 몇번 나오는지 카운팅 (88은 2로 카운팅)

Array(100)
  .fill(0)
  .map((_, index) => (index + 1).toString());
Array(100)
  .fill(0)
  .map((_, index) => index + 1)
  .join('');

let x20 = Array(100)
  .fill(0)
  .map((_, index) => index + 1)
  .join('');
let result20 = 0;
for (let i = 0; i < x20.length; i++) {
  if (x20[i] === '8') {
    result20 += 1;
  }
}
