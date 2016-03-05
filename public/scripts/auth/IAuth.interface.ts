/**
 * Expected data structure for authentication credentials
 */
interface IAuth {
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
  name:string;
  token:string;
}

export {IAuth, IUser};