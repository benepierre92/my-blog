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
and install npm with this command: ` curl http://npmjs.org/install.sh | sh `.

Then, run ` npm install -g create-react-app `.
This will install a node module in your system. This module allows us to create instantiate
React apps very quickly.

Once this is installed, let's go to MyFAQ directory (the name of our project) and
let's create or first app! ` create-react-app hello-world `
