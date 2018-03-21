import React, {Component} from 'react';
import firebase from 'firebase';

class TextBlock extends Component {
  state = {
    isEdit: false,
    text: ''
  };

  handleClick = (e) => {
    if (this.state.isEdit) {
      let data = {
        [this.props.type]: e.target.value
      };
      firebase.database().ref(this.props.id).update(data);
    }
    this.setState({
      isEdit: !this.state.isEdit
    })
  };

  render() {
    return (
      <div>
        {this.state.isEdit ? <input onClick={this.handleClick} className='editField'></input> : <div onClick={this.handleClick} className={this.props.className}>{this.props.text}</div>}
      </div>
    )
  }
}

export default TextBlock;