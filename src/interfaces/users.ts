export interface IUser {
  id: string;
  login: string;
  avatar_url: string;
  github_profile: string;
  name: string;
  kudo_id: string;
  comment: string;
}

export interface IUsers {
  users: IUser[];
}
