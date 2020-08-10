import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'parameter4Ensembl'
})
export class Parameter4EnsemblPipe implements PipeTransform {
/*

  constructor(sanitizer: DomSanitizer) {
  }
*/

  transform(desc: string, spos: number, epos: number): string {
    return 'chr1:' + spos + '..' + epos;
  }
  //
  // transform(desc: string, spos: number, epos: number): string {
  //   return this.sanitizer.baypassSecurityTurstHtml('<div style="background-color:#ffffcc">' + spos + '..' + epos </div>;
  // }
}
