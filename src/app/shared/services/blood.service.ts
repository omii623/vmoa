import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { BloodPressure } from '../models/BloodPressures';

@Injectable({
  providedIn: 'root'
})
export class BloodService {
  constructor(private afs: AngularFirestore) { }

  //CRUD

  create(bloodPressure: BloodPressure){
    return this.afs.collection<BloodPressure>('BloodPressures').doc().set(bloodPressure);
  }

  getAll(uid:string){
    return this.afs.collection<BloodPressure>('BloodPressures', ref => ref.where('id', '==', uid).orderBy('date')).valueChanges();
  }

  update(){

  }

  delete(){

  }
}
