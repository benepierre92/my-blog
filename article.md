# Get a dynamic FAQ in a pure front app with Contentful

Contentful is a content management system (CMS) that allows you to dynamically update
your pure front application pages' content without editing/re-compiling your code.
It is flexible, free and secure.  
For those of you who already use a backend in their applications, using Contentful helps
you with data management since you don't need to create a specific databse for your
dynamic pages.  
You can get more information about Contentful on the official webpage:
https://www.contentful.com/

Now less talking and more doing! Let's see how we can implement this very simple tool.


## My FAQ: Introduction

In this blog, we will see how to use contentful in the context of a FAQ.
Contentful supports many languages such as Python, PHP but also JavaScript.
We are going to use React (ES6) architecture to code our pure front app and implement
Contentful within it.  
For those of you who don't know React yet, we will describe it very quickly in the next
paragraphs but you can have more information about it on the official facebook page or here:
https://www.codementor.io/reactjs/tutorial/react-js-flux-architecture-tutorial


## Setting up React

First of all, to work with react, you need to have NodeJS and npm installed.  
You can download NodeJS here : https://nodejs.org/en/
and install npm with this command:  
` curl http://npmjs.org/install.sh | sh `.

Then, run ` npm install -g create-react-app `.
This will install a node module in your system. This module allows us to create instantiate
React apps very quickly.

Once this is installed, let's go to MyFAQ directory (the name of our project) and
let's create or first app! ` create-react-app my-faq `

You will end up with an architecture like this:
- **my-faq**
  - **node_modules**
  - **public**
    - **favicon.ico** *icon of the application*
    - **index.html** *html file in which the react app will be inserted*
  - **src**
    - **App.css** *style sheet*
    - **App.js** *file containing the react component*
    - **App.test.js** *file for testing*
    - **index.css** *style sheet*
    - **index.js** *js file linking the index.html to the react app*
    - **logo.svg** *image file*
  - **package.json** *contains informations for npm*

This is the default architecture. If you run ` npm start ` and you input `http://localhost:3000`
you should see a beautiful default page.

IMAGE

Now let's update the code to make it look like a FAQ!


## Our FAQ React app

### Setting up basic components

First of all, let's update the architecture. We would rather want something like this:
- **my-faq**
  - **node_modules**
  - **public**
    - **favicon.ico** *icon of the application*
    - **index.html** *html file in which the react app will be inserted*
  - **src**
    - **components**    
      - **App.js** *file containing the react component*
    - **services**
    - **style**
      - **App.css** *style sheet*
      - **index.css** *style sheet*
    - **index.js** *js file linking the index.html to the react app*
  - **package.json** *contains informations for npm*

In the *components* folder, we will put every React block.  
In the *services* folder, we will put any function or logic which can be used by any
component.

Our app will be as simple as possible and organized that way:
- Header
- Content
  - Question/Answer 1
  - Question/Answer 2
  - Question/Answer 3
  - ...
- Footer

We thus need a component for all of them. Let's start with the Header:
```javascript
  import React, { Component } from 'react';

  class Header extends Component {
    render() {
      return (
        <div className="header">
          Website FAQ
        </div>
      );
    }
  }

  export default Header;
```
and the Footer
```javascript
  import React, { Component } from 'react';

  class Footer extends Component {
    render() {
      return (
        <div className="footer">
          Copyright 1550 B32
        </div>
      );
    }
  }

  export default Footer;
```

Nothing very complicated here. The style sheets will be integrated in the index.js file.
You can stylize your components the way you want.

Now, let's implement a Question/Answer block.
```javascript
  import React, { Component } from 'react';

  class Block extends Component {
    render() {
      return (
        <div className="content-block">
          <div className="content-block-title"> I cannot connect to my account</div>
          <div className="content-block-detail">
            Have you
            <ul>
              <li>made sure your internet connexion was enabled</li>
              <li>checked that the email address you used was correct</li>
              <li>checked that the account you used was not expired</li>
            </ul>
          </div>
        </div>
      );
    }
  }

  export default Block;
```

and import it in the ContentPage component:
```javascript
  import React, { Component } from 'react';
  import Block from './Block';

  class ContentPage extends Component {
    render() {
      return (
        <div className="content">
          <Block />
        </div>
      );
    }
  }

  export default ContentPage;

```

Finally, we need to gather the components altogether in the App component.
We will also import style sheets there
```javascript
  import React, { Component } from 'react';
  import Header from './Header';
  import ContentPage from './ContentPage';
  import Footer from './Footer';

  class App extends Component {
    render() {
      return (
        <div className="app">
          <Header />
          <ContentPage />
          <Footer />
        </div>
      );
    }
  }

  export default App;
```

Let's not forget the include the style sheets in the index.js file.
For those of you interested, I separated the style in 2 files:

main.css
```css
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .app {
    height: calc(100% - 215px);
  }

  .header {
    background-color: rgb(100,100,255);
    border-bottom: 1px solid rgb(20,20,255);
    height: 50px;
    width: calc(100% - 40px);
    color: white;
    font-size: 30px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .footer {
    background-color: rgb(100,100,255);
    border-top: 1px solid rgb(20,20,255);
    height: 20px;
    width: calc(100% - 20px);
    color: white;
    font-size: 20px;
    padding: 10px;
  }
```

content.css
```css
  .content {
    padding: 20px;
    margin-bottom: 20px;
    min-height: 100%;
  }

  .content-block {
    border: 1px solid black;
    margin-bottom: 20px;
  }

  .content-block-title {
    background-color: rgb(150, 200, 150);
    padding: 10px;
    font-size: 20px;
    border-bottom: 1px solid black;
  }

  .content-block-detail {
    padding: 10px;
  }
```

Here is the result you should have on your browser:

IMAGE

It seems pretty cool but we only have one block here


### Setting up several Question/Answer blocks

It is now time to have several Questions/Answers block and to give some
content to our app.  
We will start by editing the Block component to display dynamic content instead
of raw information. We will assume that this content is passed through props.

```javascript
import React, { Component } from 'react';

class Block extends Component {
  render() {
    return (
      <div className="content-block">
        <div className="content-block-title">{this.props.title}</div>
        <div className="content-block-detail">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Block;
```
If you insert `{this.props.content}` between the `div` brackets, no HTML will be displayed.
Since we are supposed to display a list of answer, you have to choices:
  - either you split `props.content` into more accurate information such as
  `props.content.question` and `props.content.answers` which do not contain HTML and
  you adapt the code of the Block component
  - either you allow HTML inside the div. Then the syntax is:
  `<div className="content-block-detail" dangerouslySetInnerHTML={{ __html: this.props.content }} />`

We should now pass the right props to the Block component.
Instead of calling one Block at a time, we can call as many Blocks as needed for
each question/answer we have.

```javascript
import React, { Component } from 'react';
import Block from './Block';

class ContentPage extends Component {
  render() {
    return (
      <div className="content">
      {
        this.props.blocks.map((block, i) => (
          <Block title={block.title} content={block.content} key={i} />
        ))
      }
      </div>
    );
  }
}

export default ContentPage;
```
In this case, the information is stored in props.blocks shaped like a table of
```
{
  'title': '...',
  'content': '...'
}
```
This information will be defined in the main component, App.js
```javascript
import React, { Component } from 'react';
import Header from './Header';
import ContentPage from './ContentPage';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { blocks: [
      {
          'title':  'I cannot connect to my account',
          'content': `Have you
            <ul>
              <li>made sure your internet connexion was enabled</li>
              <li>checked that the email address you used was correct</li>
              <li>checked that the account you used was not expired</li>
            </ul>`,
      }
    ] };
  }

  render() {
    return (
      <div className="app">
        <Header />
        <ContentPage blocks={this.state.blocks} />
        <Footer />
      </div>
    );
  }
}

export default App;
```

When you refresh the page in your browser, you should not see any difference.
However, it is now very simple to insert a new block by simply adding a new
element in the blocks table.
