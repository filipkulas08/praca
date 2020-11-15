import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

    words: any;
    message: string;

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.service.getWords().subscribe(data =>{
      this.words = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          word: e.payload.doc.data()['word'],
          
        };
      })
      console.log(this.words);
    })

    
  }

  EditRecord(Record){
    Record.isedit = true;
    Record.editEng = Record.word.ang;
    Record.editPl = Record.word.pl;
    Record.editCategory = Record.word.category.name;
    Record.editLevel = Record.word.category.level.name;
  }
  Updaterecord(recorddata){
    let Record = {};
    Record['word'] = {
      'ang': recorddata.editEng,
      'pl': recorddata.editPl,
      'category':{
        'name': recorddata.editCategory,
        'level':{
          'name':  recorddata.editLevel,
        }
      }};
    this.service.updateWord(recorddata.id, Record);
    recorddata.isedit = false;
    
    recorddata.editname = '';
    recorddata.editage = undefined
    recorddata.editaddress = '';

  }

  Deleteemployee(record_id){
    this.service.deleteWord(record_id);

  }

  
    
  
}
