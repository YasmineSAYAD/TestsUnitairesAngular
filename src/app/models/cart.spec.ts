import { Cart } from "./cart"

describe("Test model cart",()=>{

  //beforeAll ça s'execute avant tout les it (une seule fois)
  //beforeEach ça s'execute avant chaque it
  let cart:Cart;
  beforeEach(()=>{
    cart=new Cart();
  });
  //get and set
  it("getNumber and setNumber function",()=>{
  //Get
  expect(cart.getNumber()).toBeUndefined();
  //set
  cart.setNumber(9);
  expect(cart.getNumber()).toEqual(9);
  })
  //Increment number
  it("Increment function",()=>{
  //si number n'est pas défini
   cart.increments();
   expect(cart.getNumber()).toBeUndefined();
  //si number est défini
  let number=Math.round(Math.random()*7854698);
   cart.setNumber(number);
   cart.increments();
   expect(cart.getNumber()).toEqual(number+1);
  })
  //decrement number
  it("Decrement function",()=>{
    //si number n'est pas défini
     cart.decrement();
     expect(cart.getNumber()).toBeUndefined();
    //si number est défini
    let number=Math.round(Math.random()*7854698);
     cart.setNumber(number);
     cart.decrement();
     expect(cart.getNumber()).toEqual(number-1);
    })
})



