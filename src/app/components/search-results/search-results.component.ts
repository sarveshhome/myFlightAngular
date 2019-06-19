import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  pageresult: any[] = [];
  pagess : any[] = [];
  employee: [];
  subscription: Subscription;
  constructor(private dataService: SearchService) {

    // this.employee = Object.keys(this.pageresult).map(key => ({type: key, value: this.pageresult[key]}));
    //  console.log(this.employee );

   }
  ngOnInit() {
  
  this.pageresult = this.dataService.getSearchResult();
  console.log("Search Result:" + this.pageresult);
  }


    this.subscription= this.dataService.getSearchResult().subscribe(message => {
      console.log('resultpage');
      if (message) {
        console.log(message);
        for (const key in message) {
          if(message.hasOwnProperty(key)){
            this.pageresult.push(message[key]);
          }
        }        
      } else {
        // clear messages when empty message received
        this.pageresult = [];
      }
    });    
    console.log(this.pageresult);
    // this.employee = Object.keys(this.pageresult).map(key => ({type: key, value: this.pageresult[key]}));    
   }
   ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
 
}