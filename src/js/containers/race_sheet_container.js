import { connect } from 'react-redux';
import { race } from '../selectors';

import RaceSheet from '../components/race_sheet';

function mapStateToProps(state, props) {
  return {
    race: race(state, props.raceId);
    ui: raceSheetUi(raceId);
  }
}

export default connect(mapStateToProps)(RaceSheet);
