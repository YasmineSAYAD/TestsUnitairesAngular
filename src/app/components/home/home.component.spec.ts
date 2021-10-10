import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/services/user.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let fakeUserService;
  let userService;
  //si le fichier service ne contient pas bcp de fonctions on l'intègre ici dans le fichier de test
  beforeEach(()=>{
    fakeUserService={
      isAuth:false,
      user:{username:false}
    }
  })
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      //si le fichier service contient bcp de fonctions on le met dans un fichier à part
     // providers:[{provide:UserService,useValue:fakeUserService}]

     providers:[{provide:UserService,useValue:fakeUserService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService=TestBed.inject(UserService);
  });

  it('should create', () => {
    //recuperer le service que nous avons injecté
    //c'est le fake service qui va être affiché

    console.log(userService);
    expect(component).toBeTruthy();
  });
  //tester le message
  it('message test', () => {
    const isAuth=userService.isAuth;

    if(isAuth){
      expect("Welcome"+userService.user.username).toBe(component.message);
    }else{
      expect("Please log in").toBe(component.message);
    }

  });
});
