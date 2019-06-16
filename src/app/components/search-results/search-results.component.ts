import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  pageresult: any;
  pagess :[];
  employee: any;
  constructor(private dataService: SearchService) {
    this.pageresult = this.dataService.getSearchResult();
    console.log(this.pageresult);
    // this.employee = Object.keys(this.pageresult).map(key => ({type: key, value: this.pageresult[key]}));
    //  console.log(this.employee );

   }
  ngOnInit() 
  {

  }
}