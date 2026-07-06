export class User {
    id!: string;
    full_name!: string;
    email!: string;
    phone ?: string;
    address ?: string;
    city!: string;
    avatar_url ?: string;
    createdAt?: Date;
  
    static create(full_name: string, email: string, phone: string, address: string, city: string , avatar_url?: string): User {
      const user = new User();
      user.full_name = full_name;
      user.email = email;
      user.phone = phone;
      user.address = address;
      user.avatar_url = avatar_url;
      user.city = city;
      return user;
    }
  }