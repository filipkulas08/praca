
import { Component, OnInit } from '@angular/core';
import { SpeechSynthesisUtteranceFactoryService, SpeechSynthesisService } from '@kamiazya/ngx-speech-synthesis';
import { CrudService } from 'src/app/admin-panel/crud.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  providers: [
    SpeechSynthesisUtteranceFactoryService,
  ],
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {

}
}