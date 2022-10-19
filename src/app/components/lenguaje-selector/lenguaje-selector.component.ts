import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-lenguaje-selector',
  templateUrl: './lenguaje-selector.component.html',
  styleUrls: ['./lenguaje-selector.component.scss'],
})
export class LenguajeSelectorComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}
  lenguajeChange(lenguaje: any): void {
    console.log(lenguaje.value);
    this.translate.use(lenguaje.value);
  }
}
