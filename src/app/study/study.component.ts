import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Sanitizer } from '@angular/core';
@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {
search:string;
gsstring:string;
controllerSrc: any;
url:any;
  constructor(private route:ActivatedRoute,private sanitizer: DomSanitizer) {
    this.route.queryParams.subscribe(params=>{
      this.search=params["search"]
    })
    console.log(this.search);
    this.gscholar();
    this.controllerSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.gsstring);
  //  this.url = this.gsstring + "&output=embed";
   // window.location.replace(this.url);
   }

  ngOnInit(): void {
    
  }
gscholar(){

 this.gsstring= "https://en.wikipedia.org/wiki/Special:Search?search="+this.search+"&go=Go";
 console.log(this.gsstring);
}
}
