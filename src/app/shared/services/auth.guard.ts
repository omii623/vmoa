import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (typeof localStorage !== 'undefined'){
    const user = JSON.parse(localStorage.getItem('user') as string);
    console.log(user)
    if(user == 'null'){
      return false;
    }
    return true;
  }else{
    console.log("auth guard error")
  }
  return false;
};
