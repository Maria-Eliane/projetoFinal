import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: String = ' ';

  password: String = ' ';

  ngOnInit(): void{
    throw new Error("Method not implements");
    
  }

  handleClick(){
    console.log("Name " + this.name);
    console.log("Senha " + this.password);
  }

  title = 'login';
}
