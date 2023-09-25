import { ObjectLiteral } from '../app';
import { UserAccount } from './userAccount';

export interface AuthPayload {
  token: string;
  usuario: UserAccount;
  resources: string[];
  walletPerms: ObjectLiteral<string, string[]>;
}
