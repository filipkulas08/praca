import { Component, OnInit } from '@angular/core';
import { SpeechSynthesisUtteranceFactoryService, SpeechSynthesisService } from '@kamiazya/ngx-speech-synthesis';
import { CrudService } from 'src/app/admin-panel/crud.service';
@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  providers: [
    SpeechSynthesisUtteranceFactoryService,
  ],
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  level: any; 
  categories:any;
  words:any;
  items:any ;
  categoryName:string;
  levelName:string = '';
  Index:number=0;

  constructor(private service: CrudService, public f: SpeechSynthesisUtteranceFactoryService,
    public svc: SpeechSynthesisService,) {}

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

  speech() {
    // for (const text of this.items) {
      const v = this.f.text(this.items[this.Index].word.ang);
      this.svc.speak(this.f.text(this.items[this.Index].word.ang));
    
  }

  chooseCategory(){
    this.service.where(this.categoryName,this.levelName).subscribe(data =>{
      this.items = data.map(e =>{
        return{
          id: e.payload.doc.id,
          word: e.payload.doc.data()['word'],
          
        };
      })
      console.log(this.items);
    })
    this.Index = 0;
  }

  changeIndex(number) {
    if (this.Index > 0 && number < 0 ||  //index must be greater than 0 at all times
    this.Index < this.items.length - 1 && number > 0 ) {  //index must be less than length of array
      this.Index += number;
      console.log(this.Index);
    }
  }


}
