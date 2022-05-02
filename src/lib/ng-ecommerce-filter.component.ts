import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'lib-ng-ecommerce-filter',
  templateUrl:'./ng-ecommerce-filter.component.html',
  styleUrls: ['./ng-ecommerce-filter.component.scss'],
})
export class NgEcommerceFilterComponent implements OnInit {
  constructor(private rend2: Renderer2, private el: ElementRef) {}

  @Input() ObjectArr: Array<ObjectArr> = [];
  @Output() response = new EventEmitter<any>();
  @Input() FilterName: string = '';
  FilterNameNoSpace: string = '';
  @Input() ShowColorDots: Boolean = false;
  @Input() ShowStars: Boolean = false;
  @Input() ShowSelected: Boolean = false;
  @Input() ShowClearFilter: Boolean = false;
  @Input() ShowSerachBar: boolean = false;

  @Input() FilterWidth: any = '';
  @Input() FilterHeight: any = '';
  @Input() isOpen: boolean = false;
  @Input() contentSort: string = 'asc';//asc,des,no

  @ViewChild(MatAccordion) accordion?: MatAccordion;
  countSelected: number = 0;

  DataArr: Array<ObjectArr> = [];

  serach(e: any) {
    const small = e.target.value.toLowerCase();
    const upper = e.target.value.toUpperCase();
    if (small == '' && upper == '') {
      this.DataArr = this.ObjectArr;
    } else {
      this.DataArr = [];
      for (let item of this.ObjectArr) {
        if (item.title.includes(small) || item.title.includes(upper)) {
          this.DataArr.push(item);
        }
      }
    }
  }

  getSelectedCheckbox() {
    var array = [];
    var checkboxes: any = document.querySelectorAll(
      `input[name=${this.FilterNameNoSpace}_kundan_kumar]:checked`
    );
    for (var i = 0; i < checkboxes.length; i++) {
      array.push(JSON.parse(checkboxes[i].value));
    }
    this.response.emit(array);
    this.countSelected = array.length;
  }

  clearFilter() {
    var checkboxes: any = document.querySelectorAll(
      `input[name=${this.FilterNameNoSpace}_kundan_kumar]:checked`
    );

    for (let elm of checkboxes) {
      elm.checked = false;
    }
    this.response.emit([]);
  }

  ngOnInit(): void {
    this.FilterNameNoSpace = this.FilterName.toString()
      .toLowerCase()
      .replace(/\s/, '');

      if(this.contentSort=='asc'){
        this.ObjectArr = this.ObjectArr.sort((a: any, b: any) =>
        a.title > b.title ? 1 : -1
      );
      }else if(this.contentSort=='des'){
        this.ObjectArr = this.ObjectArr.sort((a: any, b: any) =>
        a.title < b.title ? 1 : -1
      );
      }

    this.DataArr = this.ObjectArr;
    if (this.isOpen == true) {
      // this.accordion?.openAll();
    }
  }
}

interface ObjectArr {
  title: string;
  value: any;
  color_code: string;
}
