import { add } from "./lib"

//describe permet de définir le titre du test
describe("TestLib",()=>{
  //tester la fonction add
  //it sert à tester et à traiter un comportement spécifique
  it("Test add function",()=>{
    let a=Math.round(Math.random()*45879);
    let b=Math.round(Math.random()*89547);
  //comparer les si valeurObtenue===valeurAttendu
   let  value=add(a,b);
   //3 c'est la valaur attendu
   expect(a+b).toEqual(value);
  })
})
