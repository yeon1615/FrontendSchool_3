function 안녕(파라미터) {
  console.log(파라미터);
  console.log('hello wolrd');
  return 100;
}
// 함수 내부에서 선언된 변수가 파라미터!

let 아규먼트 = 1000;
// 안녕(아규먼트);
console.log(안녕() + 안녕());

function 하이(파라미터) {
  console.log('하이');
}

// 리턴값이란? -> 얘를 불러온 자리에 100을 넣어라!
// console.log(하이());
// 하이
// undefined 출력 (해당 함수의 return값이 없으므로!)

// 그냥 return만 쓰면 return undefined와 동일하다!

console.clear();

function 리턴() {
  console.log('hello world');
  console.log('hello world');
  return;
  console.log('hello world');
}
리턴();

// 함수의 다양한 형태
function 함수1(a, b, c) {
  return a + b + c;
}
함수1(10, 20, 30); // 콘솔창의 기능! 마지막 라인에 한해서 console.log()를 찍지 않아도 return값을 콘솔창에 출력해준다! (노드환경에서는 안나옴)
함수1(1, 2, 3);
// 마지막것 반환값만 콘솔창에 나옴

// 기본값 할당
function 함수3(a = 10, b = 20, c = 30) {
  return a + b + c;
}

console.log(함수3((c = 1000), (a = 2000))); //3030

// 4. 함수에서 객체를 아규먼트로
function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부) {
  console.log('함수의 기능들');
  return;
}
함수4('Gold', true, true, true, '대화방 전체 백업 가능', true); // 이렇게 해도 실행은 되지만! 각각의 true가 뭔지 우리가 바로 알 수가 없음!!! 해당 함수를 찾아가서 각각 어떤 값을 매핑해야 하는지 확인해야함.. 💢
// -> 이렇게 하지 않고 아규먼트를 객체로 넣으면 된다!!

// 개선방법 💘
function 함수5({
  회원등급,
  글쓰기 = true,
  // : 가 아니라 = 할당연산자 써서 초깃값 설정함!!
  // : 안되는 이유?
  글읽기,
  채널관리,
  백업,
  소셜로그인여부,
}) {
  console.log('함수의 기능들');
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
  return;
}
함수5({
  회원등급: 'Gold',
  //   글쓰기: true,
  글읽기: true,
  채널관리: false,
  백업: '불가',
  소셜로그인여부: true,
});

////// 동현님 글 //////
// function 함수({ a = 2, b = 1, c = 3 } = {}) {
//   console.log(a, b, c);
//   return a + b + c;
// }
// console.log(함수({ a: 20, b: 30, c: 10 }));
// 함수(); // 아규먼트 없이 호출 가능

// 설명
// O
// function 함수(a = 10, b = 20, c = 30) {
//   return a + b + c;
// }
// 함수();

// X
// function 함수({ a = 10, b = 20, c = 30 }) {
//   return a + b + c;
// }
// 함수();

// O
// function 함수({ a = 10, b = 20, c = 30 }) {
//   return a + b + c;
// }
함수({}); // 이 코드를 축소한 코드가 위의 코드입니다.
// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined

// 초깃값 설정 참고
let one;
let two;
let three;
{
  one, two, three;
}

// 재귀함수 - 알고리즘 준비할거면 잘 알고 있어야 한다! 간단한 예제를 자주 해봐라
// 재귀함수로 구현하는 것은 반복문으로도 구현이 가능하다! 둘의 차이는?
// 재귀함수(Top-down(위에서부터 내려갔다가 값을 찾고 다시 올라가니까), 분할정복) <-> 반복문(Bottom-up(1부터 시작하니까))
// 재귀함수 - 내가 나를 호출하므로 종죠로건이 없으면 무한반복됨!!

function factorial(n) {
  if (n <= 1) {
    // 종료조건
    return 1;
  } // 종료조건이 false면 아래 구문으로 넘어감!
  return n * factorial(n - 1);
}
console.log(factorial(3));
// 아래 반복문과 동일함
let result = 1;
for (let i = 1; i < 4; i++) {
  result *= i;
}
console.log(result);

// 참고 : 누적합 같은 경우는 재귀함수나 반복문으로 순회돌지 말고 공식을 이용해서 푸는 것이 바람직하다! 순회를 돌지 않고 해결할 수 있다면 돌지 않는 것이 가장 좋은 코드! 💥
function 누적합(n) {
  if (n <= 1) {
    // 종료조건
    return 1;
  } // 종료조건이 false면 아래 구문으로 넘어감!
  return n + 누적합(n - 1);
}
console.log(누적합(10));

let n = 10;
console.log((n * (n + 1)) / 2); //👍

// 재귀함수로 문자열 뒤집기
// function reverse(txt) {
//   if (txt.length <= 1) {
//     return txt;
//   }
//   // 잠만 위에 코드 false면 아래 return 안나온는지? 해보기
//   return txt + txt;
// }
function reverse(txt) {
  if (txt.length === 1) {
    return txt;
  }
  return reverse(txt.slice(1)) + txt[0];
}
reverse('hello world');

// 화살표함수
function 함수1(x, y) {
  return x + y;
}
let 함수2 = (x, y) => x + y;

let 함수3 = (x, y) => {
  // 더 써야 할 경우엔 중괄호로 묶어줌!
  let z = x + y;
  return z;
};
// 함수1과 함수 2,3(화살표함수)의 차이! -> 호이스팅이 다르다!!
