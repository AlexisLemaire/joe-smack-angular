import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit {
  recettes?: [
    { 
      _id?: number, 
      text?: string, 
      title?: string, 
      type?: string, 
      imgName?: string, 
      prepDuration?: string, 
      nbPersonnes?: string,
      ingredients?: string, 
      prix?: number
    }
  ];
  

  constructor(private http: HttpClient, private thisRoute: ActivatedRoute, private location: Location) { 
    location.onUrlChange(url => this.reload());
  }

  ngOnInit(): void {
    this.http
    .get("https://joe-smack-api.herokuapp.com/Recettes/SelectByType/"+this.thisRoute.snapshot.paramMap.get("type"))
    .subscribe( (res : any) => this.recettes = res)
  }

  reload() {
    location.reload();
  }
}
