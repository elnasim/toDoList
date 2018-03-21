import React, {Component} from 'react';
import firebase from 'firebase';

class TextBlock extends Component {

  handleChange = () => {
    const data = {
      [this.props.type]: this.input.value
    };
    firebase.database().ref(this.props.id).update(data);
  };

  render() {
    return (
      <textarea onChange={this.handleChange} className={this.props.className} value={this.props.text} ref={input => this.input = input}></textarea>
    )
  }
}

export default TextBlock;