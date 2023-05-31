import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public theme!:string;
  constructor() { }
  
  ngOnInit(): void {
    this.theme = "dark"
  }

  changeTheme(theme: string) {
    console.log("Entramos, el tema es: ", theme);
    const root = document.documentElement;
    if (theme === 'ligth') {
      console.log("Entramos en el if ligth, lo volvemos dark")
      root.setAttribute('data-theme', 'dark');
      this.theme = 'dark'
    } else if (theme === 'dark') {
      console.log("Entramos en el if dark, lo volvemos ligth")
      root.setAttribute('data-theme', 'ligth');
      this.theme = 'ligth'
    }    
  }

}
