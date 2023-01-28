'use strict';

import { Request, Response } from 'express';
import { eventsService } from '../services/events';

class EventsController {
  async takeEvents(req: Request, res: Response) {
    const year = req.query.year;
    const month = req.query.month;
    const userId = req.query.userId;

    let events;

    if (year && month && userId) {
      events = await eventsService
      .getAll(+year, +month, +userId);
    }

    if (!events) {
      res.statusCode = 404;
      res.json([]);
    }

    res.statusCode = 200;
    res.json(events);
  };

  async postEvent(req: Request, res: Response) {
    const event = await eventsService.createEvent(req.body);

    if (!event) {
      res.statusCode = 400;
      res.json('something went wrong');
    }
    
    res.statusCode = 200;
    res.json(event);
  };

  async patchEvent(req: Request, res: Response) {
    const eventId = req.query.eventId;

    let event;
    if (eventId) {
      event = await eventsService.updateEvent(req.body, +eventId);
    }

    if (!event) {
      res.statusCode = 400;
      res.json('something went wrong');
    }
    
    res.statusCode = 200;
    res.json(event);
  };
}

export const eventsController = new EventsController();