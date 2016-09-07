import {
  CHANGE_TITLE,
  JOIN_GAME,
  CREATE_GAME
} from './constants';

export function changeTitle(newTitle) {
  return {
    type: CHANGE_TITLE,
    payload: newTitle
  }
}

export function joinGame(serverIp) {
  return {
    type: JOIN_GAME,
    payload: serverIp
  }
}

export function createGame() {
  return {
    type: CREATE_GAME
  }
}
