import { ObjectLiteral } from '../app';

export type ContextoUserAccount = ObjectLiteral<'id' | 'nome', string>;
export type CarteiraUserAccount = ObjectLiteral<'id' | 'nome', string>;

export interface UserAccount {
  id: string;
  nome: string;
  username: string;
  agentId: string | null;
  passCode: string | null;
  tenant: string;
  carteira: CarteiraUserAccount;
  contexto: ContextoUserAccount;
  carteiras: Array<CarteiraUserAccount>;
  contextos: Array<ContextoUserAccount>;
  cargo: string;
  area: string;
  equipe: string;
}
