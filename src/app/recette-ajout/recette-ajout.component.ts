import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recette-ajout',
  templateUrl: './recette-ajout.component.html',
  styleUrls: ['./recette-ajout.component.css']
})
export class RecetteAjoutComponent implements OnInit {
  form!: FormGroup;
  file!: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      secretKey: ['', Validators.required],
      title: ['', Validators.required],
      type: ['', Validators.required],
      prix: ['', Validators.required],
      prepDuration: ['', Validators.required],
      nbPersonnes: ['', Validators.required],
      ingredients: ['', Validators.required],
      img: [''],
      text: [''],
    })
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  async submit() {
    await (this.form.value.imgName = this.file ? this.file?.name : '');
    let formData = new FormData();
		await formData.append('file', this.file);

		this.http
    .post("https://joe-smack-api.herokuapp.com/Recettes/UploadImg", formData);

    this.http
    .post("https://joe-smack-api.herokuapp.com/Recettes/Create", this.form.value)
    .subscribe( (res: any) => res.error ? this.snackbar.open(res.error, "Close") : this.snackbar.open("La recette a bien été ajoutée", "Close") )
  }
}
