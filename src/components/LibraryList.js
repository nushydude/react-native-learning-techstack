import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  // Text,
  ListView,
  // View,
} from 'react-native';

import * as actions from './../actions';

import ListItem from './ListItem';

class LibraryList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.libraries),
    };
  }

  componentDidMount() {
    this.props.actionFetchLibraries();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        dataSource: this.ds.cloneWithRows(nextProps.libraries),
      });
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={library => <ListItem library={library} />}
        enableEmptySections
      />
    );
  }
}

LibraryList.propTypes = {
  actionFetchLibraries: PropTypes.func.isRequired,
  libraries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  libraries: state.libraries,
});

export default connect(mapStateToProps, actions)(LibraryList);
