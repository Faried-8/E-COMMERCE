import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let token = localStorage.getItem('token')

  if(!token){
    router.navigateByUrl('/')
  }

  if (localStorage.getItem('token')) {
    localStorage.setItem('userName', 'Mostafa');
  }
  
  return true;
};

// const router = inject(Router)
//   let token = localStorage.getItem('token')

//   if(!token){
//     router.navigateByUrl('/')
//   }

//   if (localStorage.getItem('token')) {
//     localStorage.setItem('userName', 'Mostafa');
//   }
  
//   return true;