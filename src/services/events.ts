'use strict';

import { Events } from '../data/models/Events';

class EventsService {
  async getAll(
    year: number, month: number, userId: number,
  ) {
    const events = await Events
      .findAll({ where: {
        year,
        month,
        userId,
      } }) ?? [];

    return events;
  }

  async createEvent(data: any) {
    const event = await Events.create(data);

    return event;
  }

  async updateEvent(data: any, eventId: number) {
    const event = await Events.update(data, {
      where: {
        id: eventId,
      },
    });

    return event;
  }
}

export const eventsService = new EventsService();