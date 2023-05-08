import { Component, OnInit, TemplateRef } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor(
    public messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  isTemplate(toast: any) {
		return toast.textOrTpl instanceof TemplateRef;
	}

}
