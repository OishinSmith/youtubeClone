import { Injectable } from '@angular/core';
import { CosmosClient } from '@azure/cosmos';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private client: CosmosClient; // Declare the client property

  constructor() {
    // Initialize the CosmosClient instance in the constructor
    this.client = new CosmosClient({
      endpoint: "https://owensmith.documents.azure.com:443/",
      key: "uT5PSIYmJtsV6S9BTkvMfiXvTgevf1XoaJoRU812hZSKfNwLfiOkCHwY6JSXagFnbtQRt04nDaWoACDbkWsPiQ=="
    });
    console.log(this.client);
  }

  login(username: string, password: string): boolean {
    // username and password will be passed to this function from the
    this.queryItems();

    // Implement your authentication logic here (e.g., check username and password).
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  async queryItems(): Promise<any[]> {
    // Specify your database and container names
    const databaseId = "owenDatabase";
    const containerId = "items";

    // Specify the SQL query
    const query = "SELECT * FROM c";

    // Query the items
    const container = this.client.database(databaseId).container(containerId);
    const { resources } = await container.items.query(query).fetchAll();
    console.log(resources);
    return resources;
  }
}

async function main() {
  // The rest of the README samples are designed to be pasted into this function body
}

main().catch((error) => {
  console.error(error);
});