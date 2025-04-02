export type RegisterResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
  user: User;
};

export interface User {
  id: number;
  email: string;
  name: string;
  created_at: string;
  updated_at: string;
}
