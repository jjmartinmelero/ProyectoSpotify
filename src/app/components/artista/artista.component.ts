import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  public artista:any = {};
  public loading:boolean;
  public topTracks:any[] = [];

  constructor(private router:ActivatedRoute, private spotifyService:SpotifyService, private route:Router) {

    this.loading = true;

    this.router.params.subscribe((params) => {

      this.getArtista(params['id']);

      this.getTopTracks(params['id']);

    });



   }

  ngOnInit() {
  }


  getArtista(id:string){

    this.spotifyService.getArtista(id)
    .subscribe((data) =>{

      this.artista = data;

      this.loading = false;

    });


  }


  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id)
        .subscribe(topTracks => {

          this.topTracks = topTracks;
          console.log(this.topTracks);


        });
  }


}
