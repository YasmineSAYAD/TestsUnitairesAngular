import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
/**
 * Etapes
 * Similer un module
 * créer une fixture
 * récuperer une instance du component de la fixture
 * recuperer le dom à partir de la fixture
 */
describe("Test TestComponent",()=>{
  let app:TestComponent;
  let fixture:ComponentFixture<TestComponent>;
  let document:HTMLElement;
  beforeEach(async () =>{
    //simuler le module
    TestBed.configureTestingModule({
      declarations:[TestComponent]
    }).compileComponents();
    //creer le component
    fixture=TestBed.createComponent(TestComponent);
    app=fixture.componentInstance;
    //recuperer le DOM
    document=fixture.nativeElement;

  })
  it('Test de creation du component',()=>{
    //tester si le component a été bien créé
    expect(app).toBeTruthy();
  });
  //tester les properties
  it('Test Todos',()=>{
    const todos=app.todos;
    //taille du tableau
    expect(2).toEqual(todos.length);
    //recuperer le 1 er elt du tab et voir s'il est égal à Angular
    expect(todos[0].name).toBe("Todo 1");
    const todo=app.getTodo(1);
    expect(todo.name).toBe("Todo 2");
  });
  //tester le contenu html
  it('Test DOM Html',()=>{
    //console.log(document.querySelector(".container").innerHTML);
   //tester si le contenu de h1 est conforme au title qu'on a défini dans le comportement
   fixture.detectChanges();
   const h1=document.querySelector("h1").innerText;
   expect(h1).toBe(app.title);
   //tester le p
   const p=document.querySelector("#paragraph1").textContent;
   expect(p).toBe("Todos works!");

  });
});
