import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {
search:string;
gsstring:any;

gsearch1:string;
url:any;
  constructor(private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      this.search=params["search"]
    })
    console.log(this.search);
  // this.gscholar();

  //  this.url = this.gsstring;// + "&output=embed";
  //  window.location.replace(this.url);
   }

  ngOnInit(): void {
    
  }
gscholar(){
console.log("hello");
 this.gsstring= "https://scholar.google.com/scholar?q="+this.search;
 console.log(this.gsstring);
 this.url = this.gsstring;// + "&output=embed";
 window.open(this.url,"_blank");
}
gsearch(){
  console.log("hello");
  this.gsstring= "https://www.google.com/search?client&q="+this.search;
  console.log(this.gsstring);
  this.url = this.gsstring;// + "&output=embed";
  window.open(this.url,"_blank");
 }
 khana(){

  this.gsstring= "https://www.khanacademy.org/search?page_search_query="+this.search;
  console.log(this.gsstring);
  this.url = this.gsstring;// + "&output=embed";
  window.open(this.url,"_blank");
 }
quora(){

  this.gsstring= "https://www.quora.com/search?q="+this.search;
  console.log(this.gsstring);
  this.url = this.gsstring;// + "&output=embed";
  window.open(this.url,"_blank");
 }
 youtube(){

  this.gsstring= "https://www.youtube.com/results?search_query="+this.search;
  console.log(this.gsstring);
  this.url = this.gsstring;// + "&output=embed";
  window.open(this.url,"_blank");
 }
 wikipedia(){

  this.gsstring= "https://en.wikipedia.org/wiki/Special:Search?search="+this.search+"&go=Go";
  console.log(this.gsstring);
  this.url = this.gsstring;// + "&output=embed";
  window.open(this.url,"_blank");
 }

}
