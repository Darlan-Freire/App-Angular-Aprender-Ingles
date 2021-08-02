import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css']
})
export class FailureComponent implements OnInit {

  public modal = new BsModalRef

  constructor() { }

  ngOnInit(): void {
  }

  public closeModal()
	{
		this.modal.hide();
	}

}
