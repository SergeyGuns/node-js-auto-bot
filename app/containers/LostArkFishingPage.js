import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LostArkFishing from '../components/LostArkFishing';

import { setIndicateFloatPosition } from '../reducers/lost-ark-fishing';

function mapStateToProps(state) {
  return {
    lostArkFishing: state.lostArkFishing
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setIndicateFloatPosition
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LostArkFishing);
