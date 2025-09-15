import { Component, ViewChild, viewChild } from "@angular/core";
import { SuccessNotificationComponent } from "../success-notification/success-notification.component";

@Component({
  selector: "app-contacts-us",
  templateUrl: "./contacts-us.component.html",
  styleUrl: "./contacts-us.component.scss",
})
export class ContactsUsComponent {
  @ViewChild("notification") notification!: SuccessNotificationComponent;
  isLoading: boolean = false;
  submitUser(message: any, valueEmail: any) {
    this.isLoading = true;
    fetch("https://sendmail-api-docs.vercel.app/api/send", {
      method: "POST",
      body: JSON.stringify({
        to: "sh.daowd112@gmail.com",
        subject: "Trying SendMail",
        message: `User Email: ${valueEmail.value}\n\nMessage: ${message.value}`,
      }),
    }).then((res) => {
      this.HandelRequestSuccess(message,valueEmail);
    },err=>{
      this.isLoading = false;
    });
  }

  HandelRequestSuccess(message:any,valueEmail:any) {
    message.value=null
    valueEmail.value=null
    this.isLoading = false;
    this.notification.notificationSuccess = true;
    const audio = new Audio();
    audio.src = "assets/success-notification_C_major.wav";
    audio.load();
    audio.play();
    setTimeout(() => {
    this.notification.notificationSuccess = false;
    }, 3500);
  }
}
