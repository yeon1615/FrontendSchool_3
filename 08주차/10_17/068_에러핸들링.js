try {
} catch (에러메세지) {
  // code
} finally {
  // code
}

// throw new Error(message); <- 가장 많이 던지는 에러 유형
// throw new SyntaxError(message);
// throw new ReferenceError(message);

try {
  let x = 10;
  let y = 20;
  console.log(x + y + z);
} catch (e) {
  // 에러메세지는 보통 e로 남긴다
  console.error(e);
} finally {
  console.log('finally');
}
