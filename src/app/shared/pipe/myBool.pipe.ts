import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'myBool'})
export class MyBoolPipe  implements PipeTransform {
    transform(iDone: boolean, exponent: string) {
        return iDone ? 'Yes' : 'No';
    }
}