import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artistas:any [] = [];
  public loading:boolean;

  constructor(private spotifyService:SpotifyService, private route:Router) { }

  ngOnInit() {
  }


  buscar(term:string){

    if(!term)
      return;


      this.loading = true;


    this.spotifyService.getArtistas(encodeURIComponent(term))
        .subscribe( (data:any) => {

          this.artistas = data;
          this.loading = false;
        },
        err => {
          if(err)
              this.route.navigate(["/error"]);
        });

  }


}

