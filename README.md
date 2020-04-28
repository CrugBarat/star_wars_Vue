# STAR WARS

STAR WARS is a basic search app, which uses an API as a data source.

**Programming Language**: JavaScript

**Web App Framework**: Vue

**Markup/Styling**: HTML5/CSS3


The Star Wars app can dynamically search data using multiple requests using an API and returns details stored for a corresponding result. The app exhausts all available data and displays it on several views using Vue Router.

This exercise was tasked to me by CodeClan, Glasgow where I studied towards a PDA Level 8 in Professional Software Development. The exercise brief can be found below.

---

# Brief

You have been asked to build an app to display information about Star Wars films.

**MVP**

- The app should initially display a list of the film titles
- When a film title is clicked the app should load the film details including title, episode number, release date and director
- When the film detail loads, the films characters details (name and height) should also be displayed

**Extensions**

- Add a filter to format the height from centimetres into meters
- Add a filter to format the date as dd MMM YYYY. (19 May 1999)
- Also show details of a characters home world (name, terrain) along with the character name and height

**Advanced Extensions**

- Use router to add a link to the film details. When this is clicked it should take you to a view that displays the films opening crawl text. The crawl view should take in the film as a prop to access the crawl.

---

# Setup

- Download/Clone files

- In Terminal

```
npm install
```

- Compile for development

```
npm run serve
```

- Click the link below to open project in browser

[LocalHost](http://localhost:8080/)

---

# Acknowledgements

**APIs used**

- [Star Wars API](https://swapi.dev/api/films/)
