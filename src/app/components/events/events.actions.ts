import { tassign } from 'tassign';

import { IEventsState } from './events.store';

export const ADD_EVENTS = 'ADD_EVENTS';

export class EventsActions {

  constructor(
    private state: IEventsState,
    private action: any,
  ) {}

  public addEvents() {
    return tassign(this.state, { items: this.state.items.concat(this.action.items) });
  }
}