import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {

    console.log("Spotify services listo!");

   }//constructor


   getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDNKYwjUvl4qlamr2t6-oKkBlzuTJNZLag9LivSrMKq22Q47_I1fE8Irn6a0Z82pxxj5qwLNAaWrt9Vhvhv28cObZwnuxEh1Vf0QehhFb3sNXr73ZoAdY3WlDLydkAV7wRfM88s'
    });

    return this.http.get(url, {headers});

   }

   getNewReleases(){

      return this.getQuery("browse/new-releases?limit=20")
                    .pipe( map(data =>data["albums"].items));

   }


   getArtistas(termino:string){

      return this.getQuery(`search?q=${termino}&type=artist`)
                  .pipe( map(data =>data["artists"].items));

   }

   getArtista(id:string){

    return this.getQuery(`artists/${id}`);
//    .pipe( map(data =>data["artists"].items));

 }

 getTopTracks(id:string){

  return this.getQuery(`artists/${id}/top-tracks?country=us`)
          .pipe(map(data => data['tracks']));

}



}//class
