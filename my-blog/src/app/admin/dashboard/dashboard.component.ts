import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  posts: any[] = [
    {
      id: "1",
      title: "Alfreds Futterkiste",
      dateCreated: "unknown",
      content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop."
    },
    {
      id: "2",
      title: "Berglunds snabbköp",
      dateCreated: "unknown",
      content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop."
    },
    {
      id: "3",
      title: "Centro comercial Moctezuma",
      dateCreated: "unknown",
      content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop."
    },
    {
      id: "4",
      title: "Ernst Handel",
      dateCreated: "unknown",
      content: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop."
    },

  ]

  constructor(private router: Router, private route: ActivatedRoute,public authService:AuthService) { }


  handleCreate() {
    // console.log(this.route);
    this.router.navigate(['managepost'], { queryParams: { mode: "create" }, relativeTo: this.route });
  }

  handleLogout() {
    this.authService.logout();
  }

  handleDel(data: string) {
    this.posts = this.posts.filter(ele => ele.id != data);
    // console.log(this.posts);
  }

  ngOnInit(): void {
  }

}
