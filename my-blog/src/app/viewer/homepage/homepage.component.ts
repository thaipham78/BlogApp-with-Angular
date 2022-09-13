import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// const imgname= require("assets/images/woods.jpg");
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   
 
  posts: any[] = [
    {
      id: "1",
      title: "Alfreds Futterkiste",
      dateCreated: "unknown",
      content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
      image: "assets/images/woods.jpg"
    },
    {
      id: "2",
      title: "Berglunds snabbköp",
      dateCreated: "unknown",
      content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
      image: "assets/images/woods.jpg"
    },
  ]

  popularPosts: any[] = [
    {
      id: "3",
      title: "Centro comercial Moctezuma",
      dateCreated: "unknown",
      content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
      image: "assets/images/woods.jpg"
    },
    {
      id: "4",
      title: "Ernst Handel",
      dateCreated: "unknown",
      content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
      image: "assets/images/woods.jpg"
    },

  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToDetail(id:string){
    let path=`postdetail/${id}`;
    this.router.navigate([path]);
  }
}
