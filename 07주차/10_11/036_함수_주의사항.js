// 연습문제
let data = [
  {
    반: 1,
    번: 1,
    이름: '호준',
    중간고사점수: 55,
  },
  {
    반: 1,
    번: 2,
    이름: '길동',
    중간고사점수: 60,
  },
  {
    반: 1,
    번: 3,
    이름: '영희',
    중간고사점수: 30,
  },
  {
    반: 1,
    번: 4,
    이름: '철수',
    중간고사점수: 20,
  },
  {
    반: 1,
    번: 5,
    이름: '규리',
    중간고사점수: 100,
  },
];

// 중간고사 점수의 평균을 구하는 코드를 함수로 작성해주세요.
// 내 답
// function 평균구하기(data) {
//   let score = data.map((item) => item.중간고사점수);
//   let sum = score.reduce((sum, val) => (sum += val), 0);
//   return sum / data.length;
// }
// console.log(평균구하기(data));

// 연습문제
// let data = [
//   {
//     반: 1,
//     번: 1,
//     이름: '호준',
//     중간고사점수: 55,
//   },
//   {
//     반: 1,
//     번: 2,
//     이름: '길동',
//     중간고사점수: 60,
//   },
//   {
//     반: 1,
//     번: 3,
//     이름: '영희',
//     중간고사점수: 30,
//   },
//   {
//     반: 1,
//     번: 4,
//     이름: '철수',
//     중간고사점수: 20,
//   },
//   {
//     반: 1,
//     번: 5,
//     이름: '규리',
//     중간고사점수: 100,
//   },
// ];

// 중간고사 점수의 평균을 구하는 코드를 함수로 작성해주세요.

// 동현, 준근님 코드
// function 평균값구하기(data) {
//   let sum = 0;
//   for (student of data) {
//     sum += student['중간고사점수'];
//   }
//   return sum / data.length;
// }

// function 평균값구하기(data) {
//   let 중간고사점수 = data.map((x) => x.중간고사점수);
//   let 중간고사점수합 = 중간고사점수.reduce((a, b) => a + b);
//   return 중간고사점수합 / data.length;
// }

// function 평균값구하기(data) {
//   return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
// }

// console.log(
//   (function () {
//     return (
//       data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
//     );
//   })()
// );

// let a = (data) =>
//   data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
// console.log(a(data));

// let b = (data) => {
//   return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
// };
// console.log(b(data));

// call by value(값의 전달)
// call by reference(참조-주소값의 전달)
// array, object와 같은 컨벤션 자료형을 넘길 때에는 함수 안에서 값의 수정이 된다! 💥
// 자바스크립트에는 call by reference는 없다! call by value만 존재하나 조금 특이한 특성을 가지기때문에 call by sharing이라고 부른다! 💚💛💢

// 다른 언어에서는 call by reference라고 부른다 💢
let test = [10, 20, 30];
function 함수(a) {
  a[0] = 1000;
}
console.log(test); // [1000, 20, 30]

// 다른 언어에서는 call by value로 부른다 💢
// let test1 = 10;
// function 함수1(a) {
//   a = 1000; }
// 함수1(test1);
// console.log(test1); // 10

// 클로져

function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수;
  // 승수() 가 아니라 함수 이름을 리턴!
}
let 제곱2 = 제곱(2); // y는 입력이 안됐음!
// 제곱2는 y의 2승이 됨!
console.log(제곱2(3)); // 3의 2승이므로 9!
console.log(제곱(2)(3)); // 3의 2승이므로 9!
// 제곱() 가 반환되는 자리에 승수 가 들어간다고 이해해라!!
