import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  marksToPanel : any[] =  [
    {
      _id: '6563108479653c588bc64f3e',
      code: 'CS19001',
      subject: 'DAA',
      mark: 92
    },
    {
      _id: '6563108479653c588bc64f3f',
      code: 'CS19002',
      subject: 'OOP',
      mark: 95
    },
    {
      subject: 'CA',
      mark: 98,
      code: 'CS19003',
      _id: '654f01ac88584b54e23c5722'
    },
    {
      subject: 'OS',
      mark: 95,
      code: 'CS19005',
      _id: '655056155c7cc7ef77ef95dc'
    },
    {
      subject: 'DBMS',
      mark: 98,
      code: 'CS19006',
      _id: '6550818bfd054f9fa6594347'
    }
  ]
   constructor() { }
}
