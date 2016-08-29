export default function ddp(state, action) {
  switch (action.type) {
    case 'DDP_RECEIVE':
      console.log('reduced!')
      return Object.assign({}, state, { title: action.payload });
      break;
    default:
      return state;
      break;
  }
}
