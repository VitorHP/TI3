export function updateFromDdp(action) {
  console.log('Dispatched to reducer')
  return {
    type: 'DDP_RECEIVE',
    payload: action.payload
  }
}
