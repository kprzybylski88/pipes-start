import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
  transform(value: any, limit?: number, appendix?: string) {
    limit = limit ? limit : 10;
    appendix = appendix ? appendix : ' ...';
    const transformed = value.length > limit ? value.substr(0, limit) + appendix : value;
    return transformed;
  }
}
