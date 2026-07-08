export class User {
    id!: string;
    full_name!: string;
    email!: string;
    phone ?: string;
    address ?: string;
    city!: string;
    avatar_url!: string ;
    createdAt?: Date;
    auth_token_id!: string;

    static create(full_name: string, email: string, phone: string, address: string, city: string, auth_token_id: string, avatar_url?: string): User {
      const user = new User();
      user.full_name = full_name;
      user.email = email;
      user.phone = phone;
      user.address = address;
      user.avatar_url = avatar_url || 'https://avatars.githubusercontent.com/u/91216501';
      user.auth_token_id = auth_token_id;
      user.city = city;
      return user;
    }
  }