import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CityPipePipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log(value);
    const tab = value.split(' ');
    const city = tab[tab.length - 1];
    return city;
  }
}
