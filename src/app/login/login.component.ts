import { AuthService } from "./../auth.service";
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  username: String;
  password: String;
  createForm: FormGroup;
  isSignedIn = false;
  isNewUser = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder
  ) {
    this.createForm = this.fb.group({
      username: [""],
      password: [""],
    });
  }

  ngOnInit() {
    if (localStorage.getItem("User") !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }
  async signup(username, password) {
    console.log(username, password);
    await this.auth.signup(username, password);
    if (this.auth.isLoggedin) {
      this.isSignedIn = true;
      console.log("object");
      this.router.navigate(["/main"]);
    }
  }
  async signin(username, password) {
    await this.auth.signin(username, password);
    if (this.auth.isLoggedin) {
      this.isSignedIn = true;
      this.router.navigate(["/main"]);
    }
  }

  handleLogout() {}

  toggle() {
    this.isNewUser = !this.isNewUser;
  }
}
