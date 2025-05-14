import { Client, Account, Storage, ID } from 'appwrite';



const client = new Client();

client   
   

 .setEndpoint('http://localhost/v1') // Remplace par l'IP de ton Appwrite
  .setProject("68246013cce82b3dd392");      // Remplace par ton Project ID
  


export const account = new Account(client);
export const storage = new Storage(client);

export { ID };
