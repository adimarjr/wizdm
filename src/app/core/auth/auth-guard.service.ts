import { Injectable, 
         EventEmitter } from '@angular/core';
import { Router,
         CanActivate,
         CanActivateChild, 
         ActivatedRouteSnapshot, 
         RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { ContentManager } from '../content/content-manager.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';    

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  private redirectUrl = "";
  
  constructor(private auth: AuthService,
              private content: ContentManager,
              private router: Router) {}

  // To be used for router guarding 
  canActivate( route: ActivatedRouteSnapshot, 
               state: RouterStateSnapshot 
             ) : Observable<boolean> {

    console.log('AuthGuard#canActivate called');

    return this.auth.user.pipe( 
      map( user => user != null),
      tap( status => {
        
        console.log( "canActivate: " + status);

        if(!status){
        
          // Store the attempted URL for redirecting
          this.redirectUrl = state.url;

          // Gets the current language when possible
          let lang = this.content.language ? this.content.language.lang : 'en';

          // Navigates to the login page
          this.router.navigate([lang, 'login']);
        }
      })
    );
  }

  canActivateChild( route: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot 
                  ): Observable<boolean> {

    return this.canActivate(route, state);
  }
}
