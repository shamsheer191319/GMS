import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gametabletemplate',
  templateUrl: './gametabletemplate.component.html',
  styleUrls: ['./gametabletemplate.component.css']
})
export class GametabletemplateComponent implements OnInit {
  authenticationService: any;
  datas: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.getDatas();
  }

  Stakes(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  getDatas() {
       this.authenticationService.getDatas().subscribe(
        data => { this.datas = data },
        err => console.error(err),
        () => console.log('done loading datas')
      );
    }
}




