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
    - **index.js** *jsfile linking the index.html to the react app*
    - **logo.svg** *image file*
  - **package.json** *contains informations for npm*

This is the default architecture. If you run ` npm start ` and you input `http://localhost:3000`
you should see a beautiful default page.

IMAGE

Now let's update the code to make it look like a FAQ!


## Our FAQ React app

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
    - **index.js** *jsfile linking the index.html to the react app*
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
  ...
- Footer

We thus need a component for all of them. Let's start with the Header:
```
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
```
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

Nothing very complicated here. The style sheets will be integrated in the App component.
You can stylize your components the way you want.
