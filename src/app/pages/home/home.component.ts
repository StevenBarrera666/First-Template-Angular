import { Component } from '@angular/core';
declare const jQuery: any;
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(){
    var ang: number | any = 0 ;
    $("#prev").click(() => {
      ang = ang + 22.5;
      $("*").css("--ang", ang);
  });
  
  $("#next").click(() => {
      ang = ang - 22.5;
      $("*").css("--ang", ang);
  });

  }
}
