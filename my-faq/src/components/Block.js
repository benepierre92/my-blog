import React, { Component } from 'react';

class Block extends Component {
  render() {
    return (
      <div className="content-block">
        <div className="content-block-title">{this.props.title}</div>
        <div className="content-block-detail" dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}

export default Block;
