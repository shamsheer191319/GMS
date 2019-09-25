import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gametabletemplate',
  templateUrl: './gametabletemplate.component.html',
  styleUrls: ['./gametabletemplate.component.css']
})
export class GametabletemplateComponent implements OnInit {


  authenticationService: any;
  master: { heroesUrl: any,
    textfile: any
  };

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  Stakes(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  Buyin(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  showConfig() {
    this.authenticationService.getMethod()
      .subscribe((data: ['Master']) => this.master = {
        heroesUrl: data['heroesUrl'],
        textfile: data['textfile']
      });
  }
}






