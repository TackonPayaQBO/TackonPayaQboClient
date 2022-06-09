import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {AppConstants} from '../../constants';
import {PayaQboService} from '../../service/paya-qbo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  boardForm: FormGroup;
  authToken: string = null;
  alertsDismiss: any = [];

  constructor(
    private _payaQboService: PayaQboService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.createBoardForm();
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe( queryParams => {
      this.authToken = queryParams.token;
      if (!this.authToken) {
        return this._router.navigate(['403']);
      }
    });
    }

  boardUser(formValues) {
    formValues.info = this.authToken;
    this._payaQboService.boardUser(formValues)
      .then(res => {
        if (res) {
          this.document.location.href = AppConstants.PAYA_REDIRECT;
        }
      }).catch(res => {
        if (res.error.message) {
          this.alert('danger', res.error.message);
        } else {
          this.alert('danger', res.error);
        }
      }
    );
  }

  createBoardForm() {
    this.boardForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      domain: ['', Validators.required]
    });
  }

  alert(type, msg): void { // info, success, danger, warning
    this.alertsDismiss.push({
      type: type,
      msg: msg,
      timeout: 5000
    });
  }
}
