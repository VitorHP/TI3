import { CHANGE_TITLE } from './constants';

export function changeTitle(newTitle) {
  return {
    type: CHANGE_TITLE,
    payload: newTitle
  }
}
