import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodPressure } from '../../shared/models/BloodPressures'
import { BloodService } from '../../shared/services/blood.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit {

  bloodPressures = new FormGroup({
    sys: new FormControl(''),
    dia: new FormControl(''),
    pulse: new FormControl('')
  });

  data: Observable<any[]> | undefined;
  
  constructor(private router: Router, private bloodService: BloodService){}

  onSubmit() {
    const user = JSON.parse(localStorage.getItem('user') as string);
    
    console.log(this.bloodPressures.value);
    const bloodPressure:BloodPressure = {
      id: user.uid,
      sys: this.bloodPressures.get('sys')?.value! as unknown as number,
      dia: this.bloodPressures.get('dia')?.value! as unknown as number,
      pulse: this.bloodPressures.get('pulse')?.value! as unknown as number,
      date: new Date().getTime() as unknown as string,
    };
    this.bloodService.create(bloodPressure).then(_ => {
      console.log('Blood pressure added');
      //this.router.navigateByUrl('/main');
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    this.data = this.bloodService.getAll(user.uid);
  }

}
