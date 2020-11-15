import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/admin-panel/crud.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  user: firebase.User;
  level: any; 
  categories:any;
  words:any;
  items:any ;
  categoryName:string;
  levelName:string = '';
  answer1:string;
  answer2:string;
  answer3:string;
  answer4:string;
  answer5:string;
  answer6:string;
  answer7:string;
  answer8:string;
  answer9:string;
  answer10:string;
  points:any = 0;
  testCheck:boolean = false;
  random: any = [];
  constructor(private auth: AuthService, private service: CrudService) { }

  ngOnInit(): void {
    this.auth.getUserState().subscribe( user => {
      this.user = user;
    })

    this.service.getLevel().subscribe(data =>{
      this.level = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          
        };
      })
      console.log(this.level);
    })

    this.service.getCategory().subscribe(data =>{
      this.categories = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          
        };
      })
      console.log(this.categories);
    })
    
    
  }

  chooseCategory(){
    this.service.where(this.categoryName,this.levelName).subscribe(data =>{
      this.items = data.map(e =>{
        return{
          id: e.payload.doc.id,
          word: e.payload.doc.data()['word'],
          
        };
      })
      for(var i=0;i<10;i++){
        var randomNumber = Math.floor(Math.random()* this.items.length);
        console.log(randomNumber);
        this.random[i]=this.items[randomNumber];
          this.items.splice(randomNumber,1);
          // console.log(this.items);
          // console.log(this.random);
      }
    })
    this.testCheck = false;
    this.points = 0;
    
    
  }
  checkTest(){
    if(this.answer1 === this.random[0].word.pl){
      this.points=this.points+1;
    }
    if(this.answer2 === this.random[1].word.pl){
      this.points=this.points+1;
    }
    if(this.answer3 === this.random[2].word.pl){
      this.points=this.points+1;
    }
    if(this.answer4 === this.random[3].word.pl){
      this.points=this.points+1;
    }
    if(this.answer5 === this.random[4].word.pl){
      this.points=this.points+1;
    }
    if(this.answer6 === this.random[5].word.pl){
      this.points=this.points+1;
    }
    if(this.answer7 === this.random[6].word.pl){
      this.points=this.points+1;
    }
    if(this.answer8 === this.random[7].word.pl){
      this.points=this.points+1;
    }
    if(this.answer9 === this.random[8].word.pl){
      this.points=this.points+1;
    }
    if(this.answer10 === this.random[9].word.pl){
      this.points=this.points+1;
    }
    if(this.points >=8){
      this.test1Success();
    }else{
      this.test1Miss();
    }
    console.log(this.points);



    this.answer1 = "";
    this.answer2 = "";
    this.answer3 = "";
    this.answer4 = "";
    this.answer5 = "";
    this.answer6 = "";
    this.answer7 = "";
    this.answer8 = "";
    this.answer9 = "";
    this.answer10 = "";
    this.testCheck = true;
    this.categoryName = "";
    this.levelName = "";
    
  }
  test1Success(){
    let Record = {};
    Record['test1check'] = true;
    this.service.updateUser(this.user.uid,Record);
    }

  test1Miss(){
    let Record = {};
    Record['test1check'] = false;
    this.service.updateUser(this.user.uid,Record);
    }
  
}
