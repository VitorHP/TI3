import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import camelCase from 'camel-case';

import HexGrid from './hexgrid/HexGrid';
import Hex from './hexgrid/Hex';
import Layout from './hexgrid/Layout'

import Selectors from '../selectors';

function mapStateToProps(state, ownProps) {
  const { hexagons, layout, config } = state.reducer.grid;

  const _hexagons = hexagons.map((h) => {
    const { q, r, s, system } = h;
    // let systemProps = {};

    // if (system && system.kind !== undefined) {
    //   systemProps = Selectors[camelCase(system.kind)](system, state.reducer);
    // }

    return new Hex(q, r, s, system);
  })

  const _layout = new Layout(layout, config.origin);

  return {
    width: config.width,
    height: config.height,
    hexagons: _hexagons,
    layout: _layout,
  }
}

export default connect(mapStateToProps)(HexGrid);
