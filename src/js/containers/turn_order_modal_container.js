import { connect } from 'react-reduxa';
import { races } from '../selectors';

import TurnOrderModal from './turn_order_modal';

function mapStateToProps(state, props) {
  return {
    races: races(state),
  }
}
