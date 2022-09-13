import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  postId!: string;
  post!: any;
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

  constructor(private route: ActivatedRoute) { }

  getParam() {
    this.route.params.subscribe(param => {
      let data = param["postId"];
      if (data) {
        this.postId = data;
        this.getPost(this.postId);
      }
    });
  }

  getPost(id: string) {
    this.post = this.posts.find(post => post.id == id);
    // console.log(this.post);
  }
  ngOnInit(): void {
    this.getParam();
  }

}
