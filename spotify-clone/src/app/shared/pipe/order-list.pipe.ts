import { Pipe, PipeTransform } from '@angular/core';
import { ModelTracks } from '@core/models/tracks.models';
@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): ModelTracks[] {
    
    try {

      if(args == null){
        return value
      } else{

        const tmplist= value.sort((a,b)=>{

          if (a[args] < b[args]){
            return -1
          }
          else if (a[args] == b[args]){
            return 0;
          }
          else if (a[args] > b[args]){
            return 1;
          }
          return 1;

        })
        return (sort == 'asc') ? tmplist : tmplist.reverse()
      }
    } catch (e) {
      console.log('algo pasó')
      return value;
    }

  }
}
