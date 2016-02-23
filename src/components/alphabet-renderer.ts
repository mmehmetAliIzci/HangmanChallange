import {Component, Input} from 'angular2/core';

@Component({
    selector: 'alphabet-renderer',
    template: '{{item}}'
})
export class AlphabetRenderer {
  @Input() item

}
