import React, { Component } from 'react';
import {
  LayoutAnimation,
  NativeModules,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from './../actions';

import { CardSection } from './common/CardSection';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15,
  },
  descriptionStyle: {
    fontSize: 14,
    fontStyle: 'italic',
    paddingLeft: 15,
    paddingRight: 15,
  },
};

// needed for enabling animations in Android
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { expanded, library } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>
            {library.description}
          </Text>
        </CardSection>

      );
    }
    return null;
  }

  render() {
    const { library } = this.props;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.actionSelectLibrary(library.id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {library.title}
            </Text>
          </CardSection>
          {
            this.renderDescription()
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  actionSelectLibrary: PropTypes.func.isRequired,
  library: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  expanded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  expanded: (state.selectedId === ownProps.library.id),
});

export default connect(mapStateToProps, actions)(ListItem);
