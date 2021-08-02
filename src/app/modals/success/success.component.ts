import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  
  public modal = new BsModalRef

  constructor() { }

  ngOnInit(): void {
  }

	public closeModal()
	{
		this.modal.hide();
	}

}
