export class Personel {

  constructor() {
    this.sicil ="2342";
  }


  printSicil () {

    console.log(this.sicil);

  }
}


export class Muhendis extends Personel {

  constructor(){
    super();
    this.adi ="JAVA";
  }

}

export default Personel;