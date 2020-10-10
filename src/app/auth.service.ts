import { Injectable } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public firebase: AngularFireAuth) {}
  isLoggedin = false;

  async signin(email: string, password: string) {
    await this.firebase
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedin = true;
        localStorage.setItem("User", JSON.stringify(res));
      })
      .catch((err) => console.log(err));
  }

  async signup(email: string, password: string) {
    await this.firebase
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedin = true;
        localStorage.setItem("User", JSON.stringify(res));
      })
      .catch((err) => console.log(err));
  }

  async logout() {
    await this.firebase.signOut();
    this.isLoggedin = false;
    localStorage.removeItem("User");
  }

  isLogin() {}
}
