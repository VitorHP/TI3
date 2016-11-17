import { connect } from 'react-redux';

import Fleet from '../components/fleet';

function mapStateToProps(state, props) {
  const civs = Object.keys(props.troops)

  return {
    ...props,
    troops: civs.reduce((acc, civ) => {
      acc[civ] = {
        color: state.reducer.races[civ].color,
        units: props.troops[civ]
      }

      return acc;
    }, {})
  }
}

export default connect(mapStateToProps)(Fleet);
