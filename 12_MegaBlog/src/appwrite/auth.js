import config from "../config/config";
import { Client, Account, ID} from 'appwrite';

// Auth Service class based on documentation
export class AuthService {
    client = new Client()
    account;

    // Account can be created only when client is initialized with endpoint
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
            
        this.account = new Account(this.client); 
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount =  await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log(error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error); 
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
        }
    }
}

const authServiceObject = new AuthService();

export default authServiceObject;