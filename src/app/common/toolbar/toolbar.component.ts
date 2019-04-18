import { UtilityService } from './../services/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  add1: number;
  add2: number;
  addSol: number;
  addLvl: number;
  sub1: number;
  sub2: number;
  subSol: number;
  mult1: number;
  mult2: number;
  multSol: number;
  div1: number;
  div2: number;
  divSol: number;
  levels: any;

  constructor( public util: UtilityService) { }

  ngOnInit() {
    this.levels = { 1:'Infant', 2:'Kid', 3:'Teenager', 4:'Bachelor', 5:'Master', 6:'Doctor' };
    this.addLvl = 1;
    this.generateRandomSum();
    this.generateRandomSub();
    this.generateRandomMult();
    this.generateRandomDiv();
  }
  public increaseAddLvl(){
    if(this.addLvl<6)
      this.addLvl++;
  }
  public decreaseAddLvl(){
    if(this.addLvl>1)
      this.addLvl--;
  }
  public generateRandomSum(): void{
    this.add1 = Math.floor(Math.random()*100);
    this.add2 = Math.floor(Math.random()*100);
  }
  public generateRandomSub(): void{
    this.sub1 = Math.floor(Math.random()*100);
    this.sub2 = Math.floor(Math.random()*100);
    while(this.sub2>this.sub1){
      this.sub2 = Math.floor(Math.random()*100);
    }
  }
  public generateRandomMult(): void{
    this.mult1 = Math.floor(Math.random()*100);
    this.mult2 = Math.floor(Math.random()*100);
  }
  public generateRandomDiv(): void{
    this.div1 = Math.floor(Math.random()*100);
    this.div2 = Math.floor(Math.random()*100);
    while(this.div1%this.div2>0){
      this.div2 = Math.floor(Math.random()*100);
    }
  }
  public checkSum(): void{
    if(this.addSol == this.add1+this.add2){
      this.generateRandomSum();
      this.addSol = null;
    }
  }
  public checkSub(): void{
    if(this.subSol == this.sub1-this.sub2){
      this.generateRandomSub();
      this.subSol = null;
    }
  }
  public checkMult(): void{
    if(this.multSol == this.mult1*this.mult2){
      this.generateRandomMult();
      this.multSol = null;
    }
  }
  public checkDiv(): void{
    if(this.divSol == this.div1/this.div2){
      this.generateRandomDiv();
      this.divSol = null;
    }
  }


}
