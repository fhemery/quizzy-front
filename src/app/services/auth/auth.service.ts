import { inject, Injectable } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import { map, Observable, of, startWith, switchMap } from 'rxjs';
import { UserDetails } from './user-details';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private userService = inject(UserService);

  user$: Observable<User | null> =  authState(this.auth);
  userDetails$: Observable<UserDetails | null> = this.user$.pipe(
    switchMap((user) => {
      if (!user) {
        return of(null);
      }
      return this.userService.getUser();
    })
  );
  isLogged$ = this.user$.pipe(map((user) => !!user));

  async logout() {
    await this.auth.signOut();
  }
}
