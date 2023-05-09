import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement
    console.log('esta imagen reventó -->',this.elHost);
    elNative.src = 'https://img.freepik.com/premium-vector/cute-cat-listening-music-with-headphone-cartoon-character-animal-music-isolated_138676-3148.jpg'
  }

  constructor(private elHost: ElementRef) {

   
    console.log(this.elHost)
   }

}
