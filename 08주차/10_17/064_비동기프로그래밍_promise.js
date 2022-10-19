/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)
*/

// let 성공 = new Promise(function (resolve, reject) {
//   // 비동기적으로 실행될 코드를 작성
//   resolve('hello world');
// })
//   .then((파라미터) => {
//     console.log(파라미터);
//     return 파라미터.split(' ')[0];
//   })
//   .then((파라미터2) => {
//     console.log(파라미터2);
//     return 파라미터2[0];
//   })
//   .then((파라미터3) => {
//     console.log(파라미터3);
//   });
// resolve 되면 then이 받는다!
// 여기서 파라미터에는 'hello world'가 들어가게 되는 것
// then의 return 값이 다음 then으로 들어간다
// 파라미터 2에는 'hello'가 들어가게 되는 것
// 파라미터 3에는 'h'가 들어감

// let 실패 = new Promise(function (resolve, reject) {
//   // 비동기적으로 실행될 코드를 작성
//   reject('실패..');
// })
//   .then((파라미터) => {
//     console.log(파라미터);
//     return 파라미터.split(' ')[0];
//   })
//   .then((파라미터2) => {
//     console.log(파라미터2);
//     return 파라미터2[0];
//   })
//   .then((파라미터3) => {
//     console.log(파라미터3);
//   })
//   .catch((파라미터4) => {
//     console.log(`${파라미터4} + 캐치 실행!!`);
//   });

// 실패했을 때(reject)에는 catch가 받는다

console.clear();
console.log('실험');
let 성공인데중간에에러 = new Promise(function (resolve, reject) {
  // 비동기적으로 실행될 코드를 작성
  resolve('성공?');
})
  .then((메세지) => {
    console.log(메세지);
    return 메세지.split('')[0];
  })
  .then((메세지2) => {
    console.log(메세지2);
    throw Error('에러 발생! 경고!!');
    return 파라미터2[0];
  })
  .then((메세지3) => {
    console.log(메세지3);
    // 요거는 실행 안됨!
  })
  .catch((메세지4) => {
    // 여기서 에러메세지를 받음
    console.log(`${메세지4} + 캐치 실행!!`);
    // Error: 에러 발생! 경고!! + 캐치 실행!! 출력
  });

// 일부러 시간 걸리게 작업해보기

let 예시 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('끝났슈!'), 3000);
});
console.log('hello world');
console.log(예시);

// 3초 후에 콘솔창에
console.log(예시);
