import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {

    const noimage:string = 'assets/img/noimage.png';

    if(!images)
      return noimage;


    if(images.length>0 && images[0].url)
        return images[0].url

    return noimage;





  }

}
