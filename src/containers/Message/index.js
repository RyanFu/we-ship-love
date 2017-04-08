// Externals
import React, { PropTypes } from 'react';
import {
  Field,
  reduxForm,
} from 'redux-form';

// Components
import Banner from '../../components/Banner';
import FlexView from '../../components/FlexView';
import Textarea from '../../components/Textarea';

// Actions
import { setOrderMessage } from '../App/actions';

class Message extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <FlexView>
        <Field
          component={Textarea}
          name="message"
        />
        <Banner
          onPress={this.props.handleSubmit(this.props.onSubmit)}
          step={3}
          text="Rédigez votre message"
          textComplement="(anonyme si vous ne signez pas)"
        />
      </FlexView>
    );
  }

}

export default reduxForm({
  form: 'message',
  onSubmit: (values, dispatch, props) => {
    // Set the order message then go to the next screen
    dispatch(setOrderMessage(values.message));
    props.pushNextScene();
  },
})(Message);
