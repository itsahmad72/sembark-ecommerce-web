# E-Commerce Web Application

## Description

This is a basic e-commerce web application built using **React, TypeScript, and Vite**.  
Users can browse products, view detailed product information, add/remove items from the cart, and filter/sort products.  
The cart state is persisted in **localStorage**, and URL-based filters allow sharing links with applied filters.

## Features

### Home Page

- Displays a grid of products fetched from [FakeStore API](https://fakestoreapi.com/)
- Filter products by **categories**
- Sort products by **price** (Low → High / High → Low)
- Filters & sorting reflected in the URL (shareable & persists on page reload)
- Mobile responsive design

### Product Detail Page

- Dynamic route based on product ID (`/product/:id`)
- Displays product title, image, description, and price
- Add product to cart

### Cart Page

- Shows items added to cart
- Remove items from cart
- Displays total number of items and total cart value
- Cart persists using **localStorage**

### State Management

- **React Context API** used for cart state management
- Cart updates reflected across all pages

### Routing

- **React Router** handles navigation
- Pages: Home → Product Detail → Cart

### E2E Testing

- **Cypress** setup for basic end-to-end tests
- Tests cover:
  - Home page load
  - Product detail navigation
  - Adding product to cart

### Bonus / Extra

- Cart state persists after reload
- URL-based filters & sorting
- Clean TypeScript code
- Mobile responsive design

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Routing:** React Router
- **State Management:** React Context API
- **API:** [FakeStore API](https://fakestoreapi.com/)
- **Testing:** Cypress (E2E)

---

## Project Structure

ecommerce-app/
├─ src/
│ ├─ components/
│ │ ├─ Footer.tsx
│ │ ├─ Header.tsx
│ │ └─ ProductCard.tsx
│ ├─ context/
│ │ └─ CartContext.tsx
│ ├─ cypress/
│ │ ├─ e2e/
│ │ ├─ home_page.cy.ts
│ │ ├─ support/
│ │ ├─ commands.ts
│ ├─ pages/
│ │ ├─ Cart.tsx
│ │ ├─ Home.tsx
│ │ └─ ProductDetail.tsx
│ ├─ api.ts
│ ├─ App.tsx
│ ├─ index.css
│ └─ main.tsx

## Installation

1. Clone the repository

```bash
git clone <your-github-url>
cd sembark-ecommerce-web
```

2. Install dependencies
   yarn add

3. Run the development server
   yarn dev

## Running Cypress E2E Tests

1. Open Cypress GUI
   npx cypress open

2. Run tests from the GUI or command line
   npx cypress run
