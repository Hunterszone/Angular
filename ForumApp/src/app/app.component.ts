import { Component, OnInit } from '@angular/core';
import { MainComponent } from './main/main.component';
import { MessageComponent } from './message/message.component';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
		MainComponent, MessageComponent
  ]
})


export class AppComponent {

	title = 'MyNgForum';
	message: string;
	htmlToAdd = `<br><form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
					<fieldset>
					<p><legend><font face="algerian"><font size="4"><font color="black"><u>New comment:</u></font></font></font></legend></p>
					<textarea cols="45" rows="5"></textarea><br>
					<input type='button' value="Reply" onclick="replyFromComment()" name="comment" />
					</fieldset>
				</form>`;
	CommentsArray = [];

	onSubmit(f: NgForm) {
		console.log(f.value);
		new MainComponent().getCreatePostComponent();
		new MessageComponent();
		this.message = f.value;
	}

	onReply(a: NgForm) {
		this.CommentsArray.push(this.htmlToAdd);
  }

}

