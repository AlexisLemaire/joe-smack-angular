import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recette-update',
  templateUrl: './recette-update.component.html',
  styleUrls: ['./recette-update.component.css']
})
export class RecetteUpdateComponent implements OnInit {
  form!: FormGroup;
  response?: { error?: string, success?: string };
  responseUpload?: { error?: string, success?: string };
  file!: any;
  selectedRecette!: {
    title?: string,
    type?: string,
    prix?: number,
    prepDuration?: number,
    nbPersonnes?: number,
    ingredients?: number,
    text?: string,
    imgName?: string
  };

  constructor(private fb: FormBuilder, private http: HttpClient, private thisRoute: ActivatedRoute) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.http
    .get("https://joe-smack-api.herokuapp.com/Recettes/SelectOne/"+this.thisRoute.snapshot.paramMap.get("id"))
    .subscribe( (res: any) => (this.selectedRecette = res, console.log(res), this.buildForm()) );
  }

  buildForm() {
    this.form = this.fb.group({
      secretKey: ['', Validators.required],
      title: [this.selectedRecette?.title, Validators.required],
      type: [this.selectedRecette?.type, Validators.required],
      prix: [this.selectedRecette?.prix, Validators.required],
      prepDuration: [this.selectedRecette?.prepDuration, Validators.required],
      nbPersonnes: [this.selectedRecette?.nbPersonnes, Validators.required],
      ingredients: [this.selectedRecette?.ingredients, Validators.required],
      img: [''],
      text: [this.selectedRecette?.text],
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  async submit() {
    await (this.form.value.imgName = this.file ? this.file?.name : this.selectedRecette?.imgName);
    let formData = new FormData();
    await formData.append('file', this.file);

    await this.http
    .post("https://joe-smack-api.herokuapp.com/Recettes/UploadImg", formData)
    .subscribe( (res: any) => (this.responseUpload = res), (err) => console.log(err));

    await this.http
    .put("https://joe-smack-api.herokuapp.com/Recettes/UpdateOne/"+this.thisRoute.snapshot.paramMap.get("id"), this.form.value)
    .subscribe( (res: any) => (this.response = res, console.log(res)) )
  }
}
