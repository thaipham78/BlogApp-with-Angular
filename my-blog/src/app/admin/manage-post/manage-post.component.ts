import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.css']
})
export class ManagePostComponent implements OnInit {

  //  @Input() mode!: String;
  formEditor = this.fb.group({
    title: [""],
    content: [""]
  })

  formEditorPayLoad: any;

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
  postId!: string;
  manageMode!: string;
  modeFromUrl!: string;
  modeList: string[] = ["create", "update"];
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {

  }

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
    let data = this.posts.find(post => post.id == id);
    this.formEditor.setValue({ title: data.title, content: data.content })
    console.log(data);
  }

  getQueryParam() {
    this.route.queryParams.subscribe(params => {
      let data = params['mode'];
      // console.log(data);
      if (data) {
        this.modeFromUrl = data;
        this.getManageMode()
      }
    });
  }

  getManageMode() {
    let result: any = this.modeList.find(ele => ele == this.modeFromUrl.toLocaleLowerCase());
    if (result) {
      this.manageMode = this.modeFromUrl;
      this.manageMode = this.manageMode[0].toUpperCase() + this.manageMode.slice(1);;
      console.log(this.manageMode);
    }
  }

  handleSubmit() {
    if (this.manageMode == "Create") {
      this.formEditorPayLoad = this.formEditor.value;
      this.formEditor.reset();
    }
  }


  ngOnInit(): void {
    this.getParam()
    this.getQueryParam()
  }
}
