import React, { Component } from 'react';
import Header from './Header';
import ContentPage from './ContentPage';
import Footer from './Footer';
import contentfulClient from '../services/contentfulClient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { blocks: [] };

    const app = this;
    contentfulClient.getEntries()
      .then(function (entries) {
        app.setState({ blocks: entries.items });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <ContentPage blocks={this.state.blocks} />
        <Footer />
      </div>
    );
  }
}

export default App;
