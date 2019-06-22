import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleSubmit: PropTypes.func,
  onFileChange: PropTypes.func,
  isFetching: PropTypes.bool
}

function Form(props) {
  const {
    handleSubmit,
    onFileChange,
    isFetching
  } = props;
  return (
    <div className="form__container">
      <form name="form" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="input__Wrapper">
          <label className="input__label">File:</label>
          <input className="input__field" required type="file" onChange={onFileChange} />
        </div>
        {
          !isFetching &&
          <button className="subimt__btn">Send</button>
        }
        {
          isFetching &&
          <p> please wait, we are processing Data.... It may take few seconds</p>
        }
      </form>
    </div>

  )
}

Form.propTypes = propTypes;

export default Form;