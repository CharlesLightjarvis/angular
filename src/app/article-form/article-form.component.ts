import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ArticleService } from 'src/Services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
})
export class ArticleFormComponent {
  form!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<ArticleFormComponent>,
    private A: ArticleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      titre: new FormControl(null, [Validators.required]),
      lien: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      sourcepdf: new FormControl(null, [Validators.required]),
    });
  }

  save() {
    this.dialogRef.close(this.form.value);

    this.A.save(this.form.value).subscribe(() => {
      this.router.navigate(['/articles']);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
