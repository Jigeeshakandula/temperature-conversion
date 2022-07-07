import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'level3-task2';
  inputValue = '';
  conversion_type = ''
  result = ''
  temperature:number;
  onSelect(event:Event){
      this.conversion_type = (<HTMLSelectElement>event.target).value;
  }
  onClick(){
      this.temperature = parseInt(this.inputValue)
      if(this.conversion_type === 'Celcius'){
        this.result = String(Math.round((((this.temperature*(9/5)) + 32))*100)/100) + "°F"
      }
      else{
        this.result = String(Math.round(((this.temperature-32))*(5/9)*100)/100) + "°C"
      }
  }
  
}
