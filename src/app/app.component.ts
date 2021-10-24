import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Joe-Smack';
  type?: string;
  mainStyle!: { backgroundImage?: string };

  constructor () { }

  ngOnInit(): void {
    this.buildMainBackground();
  }

  buildMainBackground() {
    this.type = window.location.href.split("/")[4];
    if(window.screen.width < 600){
      switch (this.type) {
        case "entree": this.mainStyle = { backgroundImage: "url(https://i.ibb.co/tDpG2tk/entree-Phone.jpg)" }; break;
        case "plat": this.mainStyle = { backgroundImage: "url(https://i.ibb.co/LrG9BzT/plat-Phone.jpg)" }; break;
        case "patisserie": this.mainStyle = { backgroundImage: "url(https://i.ibb.co/5FZ1RdF/patisserie-Phone.jpg)" }; break;
        default: this.mainStyle = { backgroundImage: "url(https://i.ibb.co/SRD5xsS/food-Phone.jpg)" }; break;
      }
    } else {
      switch (this.type) {
        case "entree": this.mainStyle = { backgroundImage: "url(https://i.ibb.co/SmX65RN/entree.jpg)" }; break;
        case "plat": this.mainStyle = { backgroundImage: "url(https://i.ibb.co/nfRxZL9/plat.jpg)" }; break;
        case "patisserie": this.mainStyle = { backgroundImage: "url(https://i.ibb.co/qW7StB9/patisserie.jpg)" }; break;
        default: this.mainStyle = { backgroundImage: "url(https://i.ibb.co/LnDRNsm/aliments.jpg)" }; break;
      }
    }
  }
}
