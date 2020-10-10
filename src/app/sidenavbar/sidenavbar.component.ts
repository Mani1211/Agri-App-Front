import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "sidenavbar",
  templateUrl: "./sidenavbar.component.html",
  styleUrls: ["./sidenavbar.component.css"],
})
export class SidenavbarComponent implements OnInit {
  //f @Output() isLogout = new EventEmitter<void>();
  email;
  url;
  constructor(private router: Router, public auth: AuthService) {}
  ngOnInit() {
    this.url = this.router.url;
    if (localStorage.getItem("User")) {
      const user = JSON.parse(localStorage.getItem("User")).user;
      this.email = user.email;
      console.log(this.email, "lp");
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/"]);
    // this.isLogout.emit()
  }
}
