import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recette-delete',
  templateUrl: './recette-delete.component.html',
  styleUrls: ['./recette-delete.component.css']
})
export class RecetteDeleteComponent implements OnInit {
  form!: FormGroup;
  recette: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private thisRoute: ActivatedRoute, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      secretKey: ['', Validators.required],
    })

    this.http
    .get(`https://joe-smack-api.herokuapp.com/Recettes/SelectOne/${this.thisRoute.snapshot.paramMap.get("id")}`)
    .subscribe ( (res: any) => this.recette = res)
  }

  submit() {
    this.http
    .delete(`https://joe-smack-api.herokuapp.com/Recettes/DeleteOne/${this.thisRoute.snapshot.paramMap.get("id")}/${this.form.value.secretKey}`)
    .subscribe ( (res: any) => res.error ? this.snackbar.open(res.error, "Close") : this.snackbar.open("La recette a bien été supprimée", "Close"))
  }
}
