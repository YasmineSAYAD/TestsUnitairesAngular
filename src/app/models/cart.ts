export class Cart{
  private number:number;
  getNumber(){
    return this.number;
  }
  setNumber(index:number){
    this.number=index;
  }
  increments(){
    if(this.number){
      return this.number++;
    }
}
  decrement(){
    if(this.number){
      return this.number--;
    }
  }
}
