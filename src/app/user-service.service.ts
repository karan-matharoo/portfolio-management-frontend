import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/user';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

  private http = inject(HttpClient);
  private usersUrl: string;
  private adduserUrl: string;

  constructor() {
    this.usersUrl = '/demo/all';
    this.adduserUrl = '/demo/add';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.adduserUrl, user);
  }
}