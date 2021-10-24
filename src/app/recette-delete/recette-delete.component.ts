import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recette-delete',
  templateUrl: './recette-delete.component.html',
  styleUrls: ['./recette-delete.component.css']
})
export class RecetteDeleteComponent implements OnInit {
  form!: FormGroup;
  response?: { error?: string, success?: string };

  constructor(private fb: FormBuilder, private http: HttpClient, private thisRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      secretKey: ['', Validators.required],
    })
  }

  submit() {
    this.http
    .delete(`https://joe-smack-api.herokuapp.com/Recettes/DeleteOne/${this.thisRoute.snapshot.paramMap.get("id")}/${this.form.value.secretKey}`)
    .subscribe ( (res: any) => this.response = res)
  }
}
