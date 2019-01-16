import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input()data:any = [];// home and search

  constructor(private router:Router) {


   }

  ngOnInit() {
  }


  showArtist(item:any){
    console.log(item.type);

    let artistId:any;

    if(item.type === 'artist')
        artistId = item.id;
    else
        artistId = item.artists[0].id;



      console.log(artistId);

      this.router.navigate(['/artist',artistId]);

  }


}
