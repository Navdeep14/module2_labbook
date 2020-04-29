import { Component, OnInit } from '@angular/core';
import { Book } from '../model/Book';
import { BookService } from '../services/bookservice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  service:BookService;
  books:Book[]=[];
  
  constructor(service:BookService) {
    this.service=service;
    let fetched:Observable<Book[]>= this.service.fetchBooks();
    fetched.subscribe(
      books=>{
      
      this.books=books;
    },
     err=>{
       console.log("err in fetching="+err);
      });
    
  }
  

  ngOnInit(): void {
  }


}
