import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CrudService } from './admin-panel/crud.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  user: firebase.User;
  userRole:any;
  activeUser:any =[
  ];
  isVisibleLogin = false;
  isVisibleRegister = false;
  constructor(private service: CrudService, private auth: AuthService, private router: Router){
  }
  
  ngOnInit() {
    this.auth.getUserState().subscribe( user => {
      this.user = user;
      this.service.activeUser(this.user.uid).subscribe(data =>{
        this.activeUser = data.map(e =>{
          return{
            id: e.payload.doc.data()['id'],
            role: e.payload.doc.data()['role'],
          };
        })
        console.log(this.activeUser)
      })
    })
    
    
  }


  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/welcome']);
  }

  register(){
    this.router.navigate(['/register']);
  }
  showModalLogin(): void {
    this.isVisibleLogin = true;
  }
  handleCancelLogin(): void {
    this.isVisibleLogin = false;
  }
  showModalRegister(): void {
    this.isVisibleRegister = true;
  }
  handleCancelRegister(): void {
    this.isVisibleRegister = false;
  }
    

}
