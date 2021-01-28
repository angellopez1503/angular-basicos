import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent   {

heroes:string[]=['Spiderman','Iroman','hulk','Thor'];
heroeBorrado:string='';
mostrar:boolean=false;


borrarHeroe(){
this.heroeBorrado=this.heroes.shift()||'';
this.mostrar=this.heroeBorrado===''?false:true
}



}
