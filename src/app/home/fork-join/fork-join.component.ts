import { Component } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { forkJoin } from "rxjs/internal/observable/forkJoin";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError } from "rxjs/internal/operators/catchError";

@Component({
  selector: 'fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent {

private  _LOGOUT_TIMEOUT = 10000; // 10 seconds

 logout() {
   forkJoin({
    endSession: this.endSession(),
    logOutTimer: this.logOutTimer(),
    discardLocalStorage: this.discardLocalStorage()
  }).pipe(
    catchError((error) => {
      // Handle any errors that occur during the logout process
      console.error('Logout error:', error);
      return throwError('Logout failed');
    })
  ).subscribe()
}

 endSession(): Observable<void> {
  // Perform the necessary steps to end the session, such as making an API request
  // and clearing any session-related data
  // Replace the following line with your actual implementation
  return new Observable<void>((observer) => {
    // Simulating the end of the session
    setTimeout(() => {
      observer.next();
      observer.complete();
    }, 2000);
  });
}


 logOutTimer(): Observable<void> {
  return new Observable<void>((observer) => {
    // Start a timer to check if the logout process takes more than 10 seconds
    // If it does, throw an error
    const timeout = setTimeout(() => {
      observer.error(new Error('Logout process exceeded timeout'));
    }, this._LOGOUT_TIMEOUT);

    // Simulating the completion of the timer
    setTimeout(() => {
      clearTimeout(timeout);
      observer.next();
      observer.complete();
    }, 5000);
  });
}

 discardLocalStorage(): Observable<void> {
  // Clear any local storage related to the user object
  // Replace the following line with your actual implementation
  return new Observable<void>((observer) => {
    // Simulating the clearing of local storage
    setTimeout(() => {
      observer.next();
      observer.complete();
    }, 1000);
  });
}



}
