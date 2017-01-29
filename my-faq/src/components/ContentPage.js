import React, { Component } from 'react';
import Block from './Block';
// import Block2 from './blocks/Block2';

class ContentPage extends Component {
  render() {
    return (
      <div className="content">
      {
        this.props.blocks.map(block => (
          <Block title={block.fields.title} content={block.fields.content} key={block.sys.id} />
        ))
      }
      </div>
    );
  }
}

export default ContentPage;
