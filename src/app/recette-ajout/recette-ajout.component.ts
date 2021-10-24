import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recette-ajout',
  templateUrl: './recette-ajout.component.html',
  styleUrls: ['./recette-ajout.component.css']
})
export class RecetteAjoutComponent implements OnInit {
  form!: FormGroup;
  response?: { error?: string, success?: string };
  responseUpload?: { error?: string, success?: string };
  file!: any;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

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

		await this.http
    .post("https://joe-smack-api.herokuapp.com/Recettes/UploadImg", formData)
    .subscribe( (res: any) => (this.responseUpload = res), (err) => console.log(err));

    await this.http
    .post("https://joe-smack-api.herokuapp.com/Recettes/Create", this.form.value)
    .subscribe( (res: any) => (this.response = res, console.log(res)) )
  }
}
