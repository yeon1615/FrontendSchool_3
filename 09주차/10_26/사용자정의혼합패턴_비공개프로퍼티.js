function Person() {
  let age = 30; // 비공개 프로퍼티로

  function innerPerson() {}

  innerPerson.prototype.getAge = function () {
    return age;
  };

  return innerPerson;
}

const PersonFunc = Person();
const person = new PersonFunc();

// IIFE
// (function () {
//     console.log('IIFE');
// })();

const NewPerson = (function () {
  let age = 30;

  function innerPerson() {}

  innerPerson.prototype.getAge = function () {
    return age;
  };

  return innerPerson;
})();

const personWithSecret = new NewPerson();
