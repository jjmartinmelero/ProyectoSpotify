import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nuevasCanciones:any[] = [];
  public loading:boolean;

  constructor(private spotifyService:SpotifyService, private route:Router) {

    this.loading = true;
    let tmp = this;


    //test loading
    setTimeout(()=>{

        this.spotifyService.getNewReleases()
            .subscribe((data:any) => {

                this.nuevasCanciones = data;
                console.log(data[0].artists);

                this.loading = false;

            },
            err => {

              if(err){
                console.log("Api no detectada");
                this.route.navigate(["/error"]);
              }


            });


    },2000);



   }

  ngOnInit() {
  }

}
