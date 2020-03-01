import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceProfilsService } from "../service/service-profils.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  profils: any;
  /* profils: any = [
    { id: 10, name: "wajih", phone: "0123456789" },
    { id: 20, name: "Omar", phone: "0123456789" },
    { id: 31, name: "Majdi", phone: "0123456789" },
    { id: 24, name: "Salah", phone: "0123456789" },
    { id: 85, name: "Amine", phone: "0123456789" },
    { id: 21, name: "Yassine", phone: "0123456789" },
    { id: 17, name: "Hamza", phone: "0123456789" },
    { id: 18, name: "Tasnime", phone: "0123456789" },
    { name: "hedi", phone: "0123456789" },
     { name: "hakim", phone: "0123456789" },
    { name: "hassen", phone: "0123456789" },
    { name: "karim", phone: "0123456789" },
    { name: "sami", phone: "0123456789" },
    { name: "amir", phone: "0123456789" }, 
    { id: 19, name: "Oussema", phone: "0123456789" }
  ]; */

  profils2: any = [
    { id: 10, name: "wajih", phone: "0123456789" },
    { id: 20, name: "Omar", phone: "0123456789" },
    { id: 31, name: "Majdi", phone: "0123456789" },
    { id: 24, name: "Salah", phone: "0123456789" },
    { id: 85, name: "Amine", phone: "0123456789" },
    { id: 21, name: "Yassine", phone: "0123456789" },
    { id: 17, name: "Hamza", phone: "0123456789" },
    { id: 18, name: "Tasnime", phone: "0123456789" },
    /*{ name: "hedi", phone: "0123456789" },
     { name: "hakim", phone: "0123456789" },
    { name: "hassen", phone: "0123456789" },
    { name: "karim", phone: "0123456789" },
    { name: "sami", phone: "0123456789" },
    { name: "amir", phone: "0123456789" }, */
    { id: 19, name: "Oussema", phone: "0123456789" }
  ];
  searchName: String;
  userProfil: any;
  constructor(
    private route: ActivatedRoute,
    private service: ServiceProfilsService
  ) {}

  ngOnInit(): void {
    this.profils = this.service.getAllprofiles();
    console.log(this.profils);
  }

  onclick(i: number) {
    let id = this.route.snapshot.params["id"];
    console.log(this.profils[i].id);
    this.userProfil = this.profils[i];

    console.log("index : ", id);
    console.log("i ", i);
  }
}
