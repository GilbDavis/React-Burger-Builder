import React from 'react';
import classes from './Modal.module.css';

import Aux from '../../../hoc/Auxilliar';
import BackDrop from '../BackDrop/BackDrop';

class Modal extends React.Component {
  // This could be a functional component, doesn't have to be a class.
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log('[Modal] will update');
  }

  render() {
    return (
      <Aux>
        <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classes.Modal} style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0'
        }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;