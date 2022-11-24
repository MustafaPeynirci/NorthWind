import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeService {

  counter:number = 0
  constructor() { }

  increase(){
    this.counter++
    return this.counter
  }

}
