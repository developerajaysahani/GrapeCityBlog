import React from 'react';
import './button.scss';
import { Button } from 'reactstrap';
class Button extends React.Component {
  handleClick = () => {
    this.props.onClick();
  }
  render() {
    const {disabled} = this.props;
    return (
      <div>
        <Button
          onClick={this.handleClick}
          color="primary"
          disabled={typeof disabled !=='undefined'?disabled:false}
        >
          {this.props.title}
        </Button>
      </div>
    )
  }
}

export default Button;