import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() { }

  // Promise
  // Observable

  loadingWithPromise(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let i = 0;
      setTimeout(() => {
        if (email === 'test@test.com' && password === 'pw') {
          resolve(true);
        } else {
          reject(false);
        }
      }, 1000);
    });
  }

  loadingWithObservable(email: string, password: string): Observable<boolean> {
    // data stream
    return new Observable((subscriber: Subscriber<boolean>) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        // subscriber.next(i);
        if (i === 3) {
          if (email === 'test@test.com' && password === 'pw') {
            subscriber.next(true);
            subscriber.complete();
          } else {
            subscriber.error(false);
          }
        }
      }, 1000);
    });
  }

}
