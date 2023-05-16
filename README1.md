#### Namaste React

---

- ## only commands
- npm init (or) npm init -y
- npm i -D parcel
- npm i react
- npm i react-dom
- npx parcel index.html => for development build, host on local server, started a server

  - (in script.js file)
  - import React from "react"
  - import ReactDOM from "react-dom/client"
  - (in index.html file)=> type="module"

- npx parcel build index.html => error
- > entry-piont in package.json => "main":"script.js" (NOT NEEDED NOW,when USING PARCEL)
- can also do https... for local-server by: npx parcel index.html --https
- browserlist in package.json

---

- within package.json write script for short execution command as follows:

  - "script":{
    _ "start":"parcel index.html",
    _ "build":"parcel build index.html",
    }

    \*\* npx == npm run

* need to configure to remove console.logs (parcel and babel doesn't do it)
* => babel-plugin-transform-remove-console (google this plugin), copy the command for it's installation
* .babelrc (create this file) \* // with options
  {
  "plugins": [["transform-remove-console", { "exclude": ["error", "warn"] }]] // removes error scripts shown on production build( used by customers)
  }

---

## Questions

### Chapter 01: Inception

- React is a library or a framework?
- difference b/w library and framework?
- carousel is lib or framework?
- emmet?
- writing "Hello world" in html
- writing "Hello world" in javascript (manipulating the DOM), creating an h1 tag in js, how to put h1 inside root?
- how does browser get to know about document, createElement(is an API).. etc?
- what are CDN?
- crossOrigin?
- Shortest program of React?
- React is global-object? => kind of
- why there are 2 files for CDN links(script files, React lib and ReactDOM lib)?
- react vs reactDOM?

- writing "Hello world" in react. what are the 3 arguments in this process.

* console.log(Heading); ? => now it is a react Element
* can we use innerHTML for react-Element h1 and change the content? how?
* can we have multiple 'root'?
* heving Header and footer, even then just modify root( as the developer wants)
* can also manipulate 'searchBar', 'header', 'footer', by making it 'root' (but not recommended)
* {} => ? in React.createElement

#### React Docs

- if there is content present in root div in HTML, then what will happen when the root is being manipulated using React? => below the HTML content or it wil be overRidden?
- what if the CDN links are above the script.js file in HTML page? order..... of scripts
- Diff between Async and Defer?
- what happens if {} object has null in its place? => different things inside {}
- creating a div, and inside that 2 children, ==> gives error, why?

* to avoid going to HTML file and CSS file, write JS code in React, that has HTML and CSS code inside it,
* html inside js, css in js
* JSX?
* react.development.js => local
* react.production.js => minified

---

### Chapter 02: Igniting our App

- package.json
- package-lock.json
- node_modules
- .gitignore
- .parcel-cache
- dist
- what is HMR that reflects on server.. the changes on saving the project in local
- where does the files get saved on building production? => dist folder => can be deleted and again created while 'build'

* most heaviest folder=> images, media
* .parcel-cache => can be deleted and 'build' again
* browserLists
---
  ### Chapter 03

* polyfill=> replacement code for older browsers => Babel
* Diffing algo (importance of Keys having multiple children, w/o keys react don't have to search for each children in-order one-by-one) => like sector/segment search in disks(something like this.. in disk scheduling )

* where is the 'React' coming from? => node-modules

* R**eact.createElement** => object => HTML(DOM)
* Creating react-elements will be a **huge task** for even a small page
        =. therefore, JSX is used