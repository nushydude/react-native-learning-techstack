import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from './../actions';

import { CardSection } from './common/CardSection';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

class ListItem extends Component {
  render() {
    const { library } = this.props;
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>
          {library.title}
        </Text>
      </CardSection>
    );
  }
}

ListItem.propTypes = {
  library: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(null, actions)(ListItem);
