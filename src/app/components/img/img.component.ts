import { Component, OnInit, Input , Output, EventEmitter,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  img : string  = '';
  @Input('img') 
  set changeImg(newImg :string) {
    this.img = newImg;
    console.log('change just img =>',this.img)
  }
  @Input() alt : string  = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/imagen-no-disponible.png';
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges','img =>',this.img);
    console.log('inputs changes',changes);
  }
  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log("Log hijo")
    this.loaded.emit(this.img);
  }
}
