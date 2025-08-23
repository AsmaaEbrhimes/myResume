import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-us',
  templateUrl: './contacts-us.component.html',
  styleUrl: './contacts-us.component.scss'
})
export class ContactsUsComponent {


  submitUser (message:any){
        fetch("https://sendmail-api-docs.vercel.app/api/send", {
            method: "POST",
            body: JSON.stringify({
                to: "sh.daowd112@gmail.com",
                subject: "Trying SendMail",
                message: message.value,
            })
        }).then((res) => {

        })
    }
}
