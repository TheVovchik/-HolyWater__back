'use strict';

import { Users } from '../data/models/Users';

class UsersService {
  async getOne(email: string) {
    const user = await Users
      .findOne({ where: { email: email } }) ?? null;

    return user;
  }

  async createContact(data: any) {
    const contact = await Users.create(data);

    return contact;
  }
}

export const usersService = new UsersService();
