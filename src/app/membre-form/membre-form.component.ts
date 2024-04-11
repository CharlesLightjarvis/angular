import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modeles/Membre';
import { MembreService } from 'src/Services/membre.service';

@Component({
  selector: 'app-membre-form',
  templateUrl: './membre-form.component.html',
  styleUrls: ['./membre-form.component.css'],
})
export class MembreFormComponent implements OnInit {
  constructor(
    private MS: MembreService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  form!: FormGroup;
  idCourant!: String;
  ngOnInit() {
    //recuperer id de la route
    const idCourant = this.activatedRoute.snapshot.params['id'];
    //si id existe =>  je suis dans edit
    if (!!idCourant) {
      this.MS.getMembreByID(idCourant).subscribe((m) => {
        this.initForm2(m);
      });
    } else this.initForm();
    //sinon je suis dans create
  }

  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }
  initForm2(m: Member): void {
    this.form = new FormGroup({
      cin: new FormControl(m.cin, [Validators.required]),
      name: new FormControl(m.name, [Validators.required]),
      cv: new FormControl(m.cv, [Validators.required]),
      type: new FormControl(m.type, [Validators.required]),
    });
  }
  onsub(): void {
    if (!!this.idCourant) {
      this.MS.updateMember(this.idCourant, this.form.value).subscribe(() => {
        this.router.navigate(['/members']);
      });
    } else {
      console.log(this.form.value);
      const MemberToSave = this.form.value;
      //ajouter la logique pour sauvegarder le membre dans la base de données
      this.MS.SAVE(MemberToSave).subscribe(() => {
        this.router.navigate(['/members']);
      });
    }
  }
}
