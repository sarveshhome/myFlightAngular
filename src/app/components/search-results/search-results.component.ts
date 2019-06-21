import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  pageresult: [];
  pagess : [];
  employee: [];
  subscription: Subscription;
  constructor(private dataService: SearchService) {
    this.subscription= this.dataService.resultPage().subscribe(message => {
     // console.log('resultpage');
      // if (message) {
         
         
      const arr = [];
      Object.keys(message).map(function(key){
        arr.push({[key]:message[key]})
        return arr;
      });
      this.pageresult = arr[0].PricedItineraries.PricedItinerary;      
      console.log(this.pageresult);
    });    
    
    // this.employee = Object.keys(this.pageresult).map(key => ({type: key, value: this.pageresult[key]}));    
   }
   ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    //this.pageresult = this.pagess;
  }
}