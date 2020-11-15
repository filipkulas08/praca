import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    categories: any;
    levels: any;
    english: string;
    polish: string;
    categoryName: string;
    levelName: string;
    message: string;
  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.service.getCategory().subscribe(data =>{
      this.categories = data.map(e =>{
        return{
          id: e.payload.doc.id,
          categoryName: e.payload.doc.data()['name'],
        };
      })
      console.log(this.categories);
    });

    this.service.getLevel().subscribe(data =>{
      this.levels = data.map(e =>{
        return{
          id: e.payload.doc.id,
          levelName: e.payload.doc.data()['name'],
        };
      })
      console.log(this.levels);
    });
    
   
  }


  CreateRecord(){
    let Record = {};
    
    Record['word'] = {
      'ang': this.english,
      'pl':this.polish,
      'category':{
        'name':this.categoryName,
        'level':{
          'name': this.levelName,
        }
      }};
    

    this.service.createWord(Record).then(res => {
      console.log(res);
      this.english = "";
      this.polish = "";
      this.categoryName = "";
      this.levelName = "";
      console.log(res);
      this.message = "Słowo zostało dodane"
    }).catch(error =>{
      console.log(error);
    });
    
  }
  
}
