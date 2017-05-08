/**
 * The contents of this file are subject to the CYPHON Proprietary Non-
 * Commercial Registered User Use License Agreement (the "Agreement”). You
 * may not use this file except in compliance with the Agreement, a copy
 * of which may be found at https://github.com/dunbarcyber/cyclops/. The
 * developer of the CYPHON technology and platform is Dunbar Security
 * Systems, Inc.
 *
 * The CYPHON technology or platform are distributed under the Agreement on
 * an “AS IS” basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the Agreement for specific terms.
 *
 * Copyright (C) 2017 Dunbar Security Solutions, Inc. All Rights Reserved.
 *
 * Contributor/Change Made By: ________________. [Only apply if changes
 * are made]
 */

// Vendor
import { ReducerMap, handleActions } from 'redux-actions';
import * as _ from 'lodash';

// Local
import * as actions from '../actions/notifications';

/** State shape of the Notifications reducer. */
export interface State {
  /** If notifications are enabled. */
  enabled: boolean;
}

/**
 * Initial state of the Notifications reducer.
 * @type {State}
 */
const INITIAL_STATE: State = {
  enabled: false,
};

/**
 * Mapped reducer functions of the Notifications AlertDetailReducer.
 * @type {ReducerMap<State, any>}
 */
const reducers: ReducerMap<State, any> = {};


/**
 * Updates the Notifications reducer based on a(n) NOTIFICATIONS_ENABLED action.
 * @param state Current Notifications reducer state.
 * @param action NOTIFICATIONS_ENABLED action.
 * @returns {State} Updated Notifications reducer state.
 */
reducers[actions.NOTIFICATIONS_ENABLED] = (
  state: State,
  action: actions.NotificationsEnabledAction,
): State => {
  const update: Partial<State> = {
    enabled: action.payload,
  };

  return _.assign({}, state, update);
};


/**
 * Combined reducer functions.
 * @type {@type {Reducer<State, any>}
 */
export const reducer = handleActions<State, any>(reducers, INITIAL_STATE);