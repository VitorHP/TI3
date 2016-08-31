import { CHANGE_SHARED_TITLE } from './constants';

export function changeSharedTitle(newTitle) {
  return {
    type: CHANGE_SHARED_TITLE,
    payload: newTitle
  }
}
