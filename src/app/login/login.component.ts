import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CosmosClient } from '@azure/cosmos';


const endpoint = "https://your-account.documents.azure.com";
const key = "<database account masterkey>";
const client = new CosmosClient({ endpoint, key });

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    // once clicked, the authService (which I created) has a function called login.
    // you need to pass it a username and a password
    console.log("logging in...");
    if (this.authService.login(this.username, this.password)) {
      // Redirect or show a success message.
    } else {
      // Show an error message.
    }
  }
}

async function main() {
  // The rest of the README samples are designed to be pasted into this function body
}

main().catch((error) => {
  console.error(error);
});