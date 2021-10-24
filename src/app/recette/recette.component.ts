import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {
  recette?: 
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
    };

  constructor(private http: HttpClient, private thisRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.http
    .get("https://joe-smack-api.herokuapp.com/Recettes/SelectOne/"+this.thisRoute.snapshot.paramMap.get("id"))
    .subscribe( res => this.recette = res)
  }
}
