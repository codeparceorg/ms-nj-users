export class User {
    id!: string;
    full_name!: string;
    email!: string;
    phone ?: string;
    address ?: string;
    city!: string;
    auth_token_id!: string;

    static create(full_name: string, email: string, phone: string, address: string, city: string, auth_token_id: string): User {
      const user = new User();
      user.full_name = full_name;
      user.email = email;
      user.phone = phone;
      user.address = address;
      user.auth_token_id = auth_token_id;
      user.city = city;
      return user;
    }
  }