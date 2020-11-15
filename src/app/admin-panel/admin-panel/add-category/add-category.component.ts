import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

    categoryName: string;
    message: string;
  constructor(private service: CrudService) { }

  ngOnInit(): void {
  }

  CreateRecord(){
    let Record = {};
    
    Record['name'] = this.categoryName;
      
    

    this.service.createCategory(Record).then(res => {
      
      this.categoryName = "";
      console.log(res);
      this.message = "Kategoria została dodana"
    }).catch(error =>{
      console.log(error);
    });
};
}