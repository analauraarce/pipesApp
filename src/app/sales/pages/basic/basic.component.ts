import { Component} from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
  
})
export class BasicComponent {
lowerName: string= "ada";
upperName: string= "ADA"; 
fullName: string= "adA LOvelacE";  
date:Date=new Date();//today
}
