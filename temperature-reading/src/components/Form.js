import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleSubmit: PropTypes.func,
  onFileChange: PropTypes.func
}

function Form(props) {
  const {
    handleSubmit,
    onFileChange
  } = props;
  return (
    <div className="form__container">
      <form name="form" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="input__Wrapper">
          <label className="input__label">File:</label>
          <input className="input__field" type="file" onChange={onFileChange} />
        </div>
        <button className="subimt__btn">Send</button>
      </form>
    </div>

  )
}

Form.propTypes = propTypes;

export default Form;