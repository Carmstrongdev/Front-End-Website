# California Community Information Portal

A multi-page front-end website that presents information about California and selected cities, including Sacramento, San Diego, and San Francisco. The project demonstrates core front-end development skills using HTML, CSS, and JavaScript, with reusable navigation, structured city information, external resources, and client-side form validation.

## Live Demo

[View the website on GitHub Pages](https://carmstrongdev.github.io/Front-End-Website/)

## Project Overview

The California Community Information Portal provides a consistent interface for exploring state and city information. Visitors can review California information, compare selected cities, view regional and demographic details, and submit questions through a contact form.

The site includes dedicated pages for California's capital city and two additional California cities, with each city page organized around the same categories for easier comparison.

## Features

- Multi-page website with consistent navigation and layout
- California overview and site guide
- Dedicated information pages for Sacramento, San Diego, and San Francisco
- City information including population, incorporation history, region, classification, and income comparisons
- External links to official government and Census resources
- Structured HTML table for navigating city information
- Contact form with required user fields
- JavaScript validation that verifies matching email addresses before submission
- Custom CSS styling using Flexbox and CSS Grid layouts
- Local image assets for California and featured cities
- Semantic HTML structure with headers, navigation, main content, sections, sidebars, and footer elements

## Technologies Used

- **HTML5** — page structure, navigation, forms, tables, and semantic content
- **CSS3** — page styling, layouts, navigation states, cards, forms, and visual presentation
- **JavaScript** — client-side contact-form validation
- **Git / GitHub** — source control and project hosting
- **GitHub Pages** — static website deployment

## Pages

| Page | Description |
| --- | --- |
| `index.html` | Main California overview, featured information, site guide, and city navigation |
| `capital.html` | Sacramento information and key facts |
| `city1.html` | San Diego information and key facts |
| `city2.html` | San Francisco information and key facts |
| `contact.html` | Contact form for submitting questions |

## Project Structure

```text
Front-End-Website/
├── css/
│   └── styles.css
├── images/
│   ├── california.jpg
│   ├── contact.jpg
│   ├── gate-bridge.jpg
│   ├── sacramento.jpg
│   ├── sandiego.jpg
│   └── sanfrancisco.jpg
├── js/
│   └── form.js
├── capital.html
├── city1.html
├── city2.html
├── contact.html
├── index.html
└── README.md
```

## JavaScript Form Validation

The contact page uses JavaScript to compare the user's email address with the confirmation email field. If the values do not match, the form submission is stopped and the user receives an alert.

```javascript
if (email !== confirmEmail) {
    event.preventDefault();
    alert("The email addresses do not match.");
}
```

## Running the Project Locally

No build process or additional dependencies are required.

1. Clone the repository:

```bash
git clone https://github.com/Carmstrongdev/Front-End-Website.git
```

2. Open the project directory:

```bash
cd Front-End-Website
```

3. Open `index.html` in a web browser.

You can also run the project using a local development server such as the **Live Server** extension in Visual Studio Code.

## What I Practiced

This project strengthened my experience with:

- Building and organizing multi-page websites
- Creating reusable navigation and consistent page layouts
- Structuring content with semantic HTML
- Styling interfaces with CSS Grid and Flexbox
- Working with forms and user input
- Implementing client-side validation with JavaScript
- Linking front-end content to authoritative external resources
- Organizing static assets and deploying a website through GitHub Pages

## Author

**Christian Armstrong**  
GitHub: [Carmstrongdev](https://github.com/Carmstrongdev)
