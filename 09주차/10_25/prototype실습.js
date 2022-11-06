function UserInfo(name, age) {
  this.name = name;
  this.age = age;
}
UserInfo.prototype.studyHard = function () {
  console.log(`${this.name}(은)는 열공중!`);
};

const praw = new UserInfo('praw', 27);
const john = new UserInfo('john', 25);
console.log(praw.studyHard === john.studyHard);
