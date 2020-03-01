import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceProfilsService } from "../service/service-profils.service";

@Component({
  selector: "app-profil-user",
  templateUrl: "./profil-user.component.html",
  styleUrls: ["./profil-user.component.css"]
})
export class ProfilUserComponent implements OnInit {
  profils: any;
  user: any;
  constructor(
    private route: ActivatedRoute,
    private service: ServiceProfilsService
  ) {}

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
  ngOnInit(): void {
    let idUser = this.route.snapshot.params["id"];
    this.profils = this.service.getAllprofiles();
    console.log(idUser);

    // console.log(this.profils[0]);
    for (let i = 0; i < this.profils2.length; i++) {
      if (this.profils2[i].id == idUser) {
        this.user = this.profils2[i];
        console.log(this.profils2[i]);
        console.log(this.user);
        break;
      }
    }
  }
}
