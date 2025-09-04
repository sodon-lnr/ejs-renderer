# Express EJS Server Project

This project is a simple **Express** server that uses **EJS (Embedded JavaScript)** as the templating engine to render dynamic HTML pages.
The EJS templates are stored in the `/views` directory, and template data is managed in a `renderObjects.js` file.

---

## Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v20 or higher recommended)
* npm (comes with Node.js)

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Template Objects

Create a file named `renderObjects.js` in the project root directory. This file will contain the data objects used by the EJS templates.

```js
// renderObjects.js
module.exports = {
  home: {
    title: "Welcome to the Home Page",
    message: "This is a sample EJS template."
  },
  about: {
    title: "About Us",
    description: "Learn more about our project."
  }
};
```

You can add more objects as needed for different routes or templates.

### 3. EJS Templates

The EJS templates are located in the `/views` directory. For example:

```
views/home.ejs
views/about.ejs
```

Each template can access data from `renderObjects.js`.
Example `home.ejs`:

```html
<h1><%= title %></h1>
<p><%= message %></p>
```

### 4. Run the Server

Start the development server using the following command:

```bash
npm run dev
```

This will start the Express server (typically on [http://localhost:3000](http://localhost:3000)).
Open your browser and navigate to this URL to view the rendered EJS pages.

---

## Project Structure

```
project-root/
 ├── views/               # EJS template files
 │   ├── home.ejs
 │   ├── about.ejs
 │   └── ...
 ├── renderObjects.js     # Template data objects
 ├── package.json         # Project metadata and scripts
 └── index.js            # Main Express server file
```

---

Add routes in your server file to render EJS templates with the corresponding data from `renderObjects.js`. For example:

```js
const renderObjects = require('./renderObjects');

app.get('/', (req, res) => {
  res.render('home', renderObjects.home);
});
```

---

## Troubleshooting

* If you encounter errors, ensure all dependencies are installed (`npm install`).
* Verify that `renderObjects.js` exists and exports valid objects.
* Check that your EJS files in `/views` are correctly formatted and reference the correct object properties.
