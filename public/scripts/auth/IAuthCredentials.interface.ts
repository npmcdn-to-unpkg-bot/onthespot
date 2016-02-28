/**
 * Expected data structure for authentication credentials
 */
interface IAuthCredentials {
  name:string;
  username?:string;
  email?:string;
  password:string;
  passwordConfig:string;
}

/**
 * User interface once logged in
 */
interface IUser {
  username:string;
}

export {IAuthCredentials, IUser};