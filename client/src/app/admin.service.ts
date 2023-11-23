import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'http://localhost:5000/admin/'

  constructor() { }
}
