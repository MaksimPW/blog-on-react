import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { mapValues, assign } from 'lodash/object';
import classNames from 'classnames';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errors: {} };
    this.form = {};
    this.generateRef = this.generateRef.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({ errors: {} });

    const values = mapValues(this.form, 'value');

    if (!values.email || values.email.length < 3)
      this.setState(
        assign(
          {},
          this.state,
          { errors: assign({}, this.state.errors, { email: true }) }
        ));

    alert(JSON.stringify(values));
  }

  generateRef(fieldName) {
    return (input) => { this.form[fieldName] = input; };
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <form onSubmit={this.onSubmit}>
          <Text
            label="Full name"
            name="fullName"
            fieldRef={this.generateRef('fullName')}
          />
          <Text
            label="Email"
            name="email"
            error={this.state.errors.email}
            fieldRef={this.generateRef('email')}
          />
          <TextArea
            label="Message"
            name="message"
            fieldRef={this.generateRef('message')}
          />
          <input type="submit" value="Submit" />
        </form>
        <Helmet title="Обратная связь" >
          <meta name="keywords" content="контакты обратная связь" />
          <meta name="description" content="Связаться с автором ресурса" />
        </Helmet>
      </div>
    );
  }
}

export default Contacts;

class Text extends React.Component {
  render() {
    const { label, name, fieldRef, error } = this.props;

    return (
      <div className={classNames('ui field', { error })}>
        <label htmlFor={name}>{label}:</label>
        <input
          type="text"
          className="ui input"
          id={name}
          name={name}
          ref={fieldRef}
        />
      </div>
    );
  }
}

Text.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  fieldRef: PropTypes.func,
  error: PropTypes.object
};

class TextArea extends React.Component {
  render() {
    const { label, name, fieldRef } = this.props;

    return (
      <div className="ui field">
        <label htmlFor={name}>{label}:</label>
        <textarea
          className="ui input"
          id={name}
          name={name}
          ref={fieldRef}
        />
      </div>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  fieldRef: PropTypes.func
};
