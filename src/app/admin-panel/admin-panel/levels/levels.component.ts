import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {
   
  level:any;

  constructor(private service: CrudService) { }

  ngOnInit(): void {
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
  }

  EditRecord(Record){
    Record.isedit = true;
    Record.editName = Record.name;
    
  }
  Updaterecord(recorddata){
    let Record = {};
    Record['name'] = recorddata.editName;
    this.service.updateLevel(recorddata.id, Record);
    recorddata.isedit = false;
    recorddata.editName = '';
  }

  Deleteemployee(record_id){
    this.service.deleteLevel(record_id);

  }


}
