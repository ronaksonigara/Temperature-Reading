import React from 'react';
import classNames from 'classnames';

function Graph(props) {
  const {
    handleClose,
    graphActive,
    graphData
  } = props;
  let modal = classNames('modal', { 'modal--active': graphActive })
  return (
    <div className={modal}>
      <span className="close-btn" onClick={handleClose}></span>
      <div className="modal-body">

      </div>
    </div>
  )
}

export default Graph;