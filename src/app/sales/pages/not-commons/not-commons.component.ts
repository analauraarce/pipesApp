import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html'
})
export class NotCommonsComponent {
  //I18nSelectPipe
  name: string = 'Ada';
  department: string = 'IT';
  floorsMap = {
    'Engineering': 'first floor.',
    'IT': 'second floor.'
  }
  //I18nPluralPipe 
  clients: string[] = ['Josh', 'Elsa', 'Victor', 'Lisa'];
  clientsMap = {
    '=0': 'We do not have clients.',
    '=1': 'We have 1 client.',
    'other': 'We have # clients.'
  }
  changeClient() {
    this.name = 'Rose';
    this.department = 'Engineering';
  }
  deleteClient() {
    this.clients.pop();
  }
  //KeyValuePipe
  person = {
    name: 'Isaac',
    age: 35,
    country: 'Costa Rica'
  }
  //JasonPipe
  animals = [
    {
      type: 'dog',
      fly:false
    },
    {
      type: 'bird',
      fly:true
    }
  ]
  //AsyncPipe
  myObservable=interval(2000); //0,1,2,3...
  promiseValue= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Data- promise')
    },3500)
  }); 
}

