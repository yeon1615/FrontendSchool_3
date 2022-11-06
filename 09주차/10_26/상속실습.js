class MakeSausage {
  constructor(재료1, 재료2) {
    this.재료1 = 재료1;
    this.재료2 = 재료2;
  }
  taste() {
    console.log(`${this.재료1}맛과 ${this.재료2}맛이 난다!!`);
  }
}

class FiresSausage extends MakeSausage {
  taste() {
    console.log(`불맛이 난다!!`);
  }
}

const sausage = new MakeSausage('양파', '마늘');
sausage.taste();
const fireSausage = new FiresSausage('샬롯', '마늘');
fireSausage.taste();
