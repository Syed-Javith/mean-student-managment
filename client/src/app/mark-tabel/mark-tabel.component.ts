import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mark-tabel',
  templateUrl: './mark-tabel.component.html',
  styleUrls: ['./mark-tabel.component.css']
})
export class MarkTabelComponent {

  @Input() marks : any;
}
