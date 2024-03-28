import { Client, Account, ID } from "appwrite";
import conf from "../config/conf";

const client = new Client()
  .setEndpoint(conf.appwriteUrl) // Your API Endpoint
  .setProject(conf.appwriteProjectId); // Your project ID

const account = new Account(client);

export class Auth {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProjectId(conf.appwriteProjectId);
    this.account = new Account(client);
  }


  // For Signup
  async signup({email, password, name}) {
    try {
        const userAccount = this.account.create(ID.unique(), email, password, name);
        if(userAccount) {
            return this.login(email, password);
        }
        else {
            return userAccount;
        }
    }
    catch (err) {
        throw err;
    }
  }

  async login({email, password}) {
    try {
        return await this.account.createEmailSession();
    }
    catch(err){
        throw err;
    }
  }

  async getCurrentUser() {
    try {
        return await this.account.get();
    }
    catch (err) {
        console.log("getCurrentUser :: ", err);
        throw err;
    }
    return null;
  }

  async logout() {
    try {
        await this.account.deleteSessions();
    }
    catch (err) {
        console.log("logout :: ", err);
        throw err;
    }
  }

}


const authService = new Auth();

export default authService;

