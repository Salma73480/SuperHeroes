import { Villano } from '../villano';
import { MessageService } from '../messages.service';
import { Component, OnInit } from '@angular/core';
import {VillanossService} from '../villano.service';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

selectedVillano?: Villano;

villanos: Villano[] = [];
constructor(private villanossService: VillanossService, 
private menssageService: MessageService) { 
}

ngOnInit(): void {
  this.getVillanos();
}
onSelect(villano: Villano): void {
  this.selectedVillano = villano;
  this.menssageService.add(`HeroesComponent: Selected villanoss id=${villano.id}`);
  console.log(this.menssageService);
}

onPlus(villanos: Villano): void {
  villanos.MaldadNivel = villanos.MaldadNivel + 1;
}
getVillanos(): void {
  this.villanossService.getVillanos()
      .subscribe(villanos => this.villanos = villanos);
}
}
