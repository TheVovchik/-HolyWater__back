'use strict';

import { Request, Response } from 'express';
import { usersService } from '../services/users';

class UsersController {
  async validateUser(req: Request, res: Response) {
    const {email, password} = req.body;

    let user;

    if (typeof email === 'string') {
      user = await usersService.getOne(email);
    }

    if (user) {
      if (user.password === password) {
        res.statusCode = 200;
        res.json(user);

        return;
      }

      res.statusCode = 200;
      res.json('password not valid');

      return;
    }
    
    res.statusCode = 200;
    res.json('email not valid');
  };

  async postUser(req: Request, res: Response) {
    const email = req.body.email;
    const isExist = await usersService.getOne(email);

    if (isExist) {
      res.statusCode = 200;
      res.json('user with such email already exist');

      return;
    }

    const contact = await usersService.createContact(req.body);

    if (!contact) {
      res.statusCode = 400;
      res.json({ error: 'something went wrong' });

      return;
    }
    
    res.statusCode = 200;
    res.json(contact);
  };
}

export const usersController = new UsersController();