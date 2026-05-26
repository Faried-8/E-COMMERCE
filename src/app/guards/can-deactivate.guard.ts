import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<unknown> = 
(component :any, currentRoute, currentState, nextState) => {
  console.log(component.loginForm.dirty && component.isSubmitted == false);
  
  if (component.loginForm.dirty && component.isSubmitted == false) {
    return confirm('Are sure leaving before saving the chnges')
    
  }
  return true;
};
 