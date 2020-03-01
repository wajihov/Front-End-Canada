import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ServiceProfilsService {
  profils: any = [
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
  constructor() {}
  getAllprofiles() {
    this.profils;
  }
}
