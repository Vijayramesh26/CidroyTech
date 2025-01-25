# Nuxt 3 and Vuetify 3 Coding Interview Tasks

- Below are 4 coding tasks designed to assess candidate's knowledge of Nuxt 3 and Vuetify 3. 
- Candidate is required to create a single Nuxt3 project with Vuetify3 as its CSS Library and install any modules they seem necessary. 
- Each task requires candidates to create a new page in the same project, implement features, and demonstrate best practices.
- After completion, the candidate is to push this project to github in a public repositiry and provide us with its link.

---

## **Question 1: Dynamic Data Fetching and Pagination**

### Task
Create a page `Task1` that fetches a list of products from a mock API and displays them in a Vuetify data table. Implement the following functionality:

1. **Pagination**: Use Vuetify's pagination component to allow users to navigate through the products, showing 10 products per page ( Server Side Pagination ).
2. **Search**: Add a search bar that filters products by description ( Server Side Filteration ).
3. **Detail Page**: Clicking on a product title should navigate to a new page (`/task1/[id]`) and display detailed information about the product.

### Field Values to Display
1. Table
    - id
    - thumbnail
    - title
    - price 
    - stock 
    - rating 

2. Details Page
    - images (Carousel )
    - title
    - brand
    - description
    - category
    - price
    - rating
    - reviews
        - rating
        - comment
        - reviewerName
        - reviewerEmail
        - date

### Requirements
- Use Nuxt's **server-side data fetching** methods (`useFetch` or `server/api`).
- Implement **dynamic routes** for the post detail page.
- Use Vuetify components (e.g., `v-data-table`, `v-text-field`, `v-card`) for the UI.

### API Route
You can use the following mock API for this task:
- Fetch products: `https://dummyjson.com/products/search?q=&skip=0&limit=30`
- Fetch a specific product: `https://dummyjson.com/products/{id}`

### Evaluation Criteria
- Efficient and correct use of Nuxt's data fetching capabilities.
- Ability to work with dynamic routes and composables.
- Proper use of Vuetify components for styling and interactivity.
- Bonus : Use `v-rating` for ratings
- Bonus : Show total results in pagination or table
- Bonus : Clean & presentable UI for Table and Details Page
- Bonus : Read the API docs for returning only those fields present in the UI ([ API Docs ](https://dummyjson.com/docs/products#products-limit_skip))

---

## Question 2: State Management and Component Communication

### Task
Create a page `Task2` that simulates a simple e-commerce cart system using Vuetify for UI and Pinia for state management.

1. **Product List**: Display a list of products with their name, thumbnail, price, rating, and "Add to Cart" button.
2. **Cart Sidebar**: Implement a Vuetify drawer that shows the cart summary (product names, quantities, and total price).
3. **Cart Functionality**:
   - Clicking "Add to Cart" should update the cart state in Pinia.
   - Products in the cart should show their quantities.
   - Provide the ability to remove items from the cart.
4. **Persistence**: The cart state should persist even if the page is refreshed.

### API Route
You can use the following mock API for this task:
- Fetch products: `https://dummyjson.com/products?skip=0&limit=8`

### Evaluation Criteria
- Proper use of Pinia for state management and component communication.
- Efficient state persistence handling.
- UI design using Vuetify components.

---

## Question 3: Understanding Slots and Templates

### Task
Create a page `Task3` with a reusable `CardLayout` component using **slots**. The component should be used to display different types of content on the same page.

### Requirements
1. **CardLayout Component**:
   - The `CardLayout` component should have:
     - A `header` slot for the card's header.
     - A `default` slot for the main content.
     - A `footer` slot for actions like buttons.
   - If no content is provided for the `header` or `footer` slot, display a default message like "Default Header" or "Default Footer."
2. **Usage**:
   - Use the `CardLayout` component twice on the same page with different content:
     - The first card should display a blog post (e.g., title in the header, content in the default slot, and action buttons in the footer).
     - The second card should display a user's profile (e.g., name in the header, profile details in the default slot, and action buttons in the footer).
3. Use Vuetify components (e.g., `v-card`, `v-btn`) inside the `CardLayout` component for styling.

### Evaluation Criteria
- Correct implementation of **slots**.
- Ability to define default content for slots.
- Reusability and flexibility of the `CardLayout` component.
- Proper usage of Vuetify components.

---

## Question 4: Server-Side Autocomplete with Synced State

### Task
Create a page `Task4` with a reusable `AutocompleteComponent` that fetches suggestions from a mock API based on user input. Add the component twice on the same page and ensure that both instances stay **synchronized**, meaning selecting a suggestion in one instance updates the other instance automatically.

### Requirements
1. **AutocompleteComponent**:
   - Should have an input field where users can type to search for suggestions.
   - Suggestions should be fetched from a mock server endpoint.
   - Use debouncing to optimize the API calls.
   - Allow users to select a suggestion, and display the selected item below the input field.
2. **Synchronization**:
   - If a user selects a suggestion in one instance of the `AutocompleteComponent`, the selection should update in the other instance immediately.
   - Use a **shared state** (e.g., a composable or Pinia store) to keep the selections synchronized.
3. **Styling**:
   - Use Vuetify components (e.g., `v-autocomplete`, `v-card`) to style the `AutocompleteComponent`.

### API Route
You can use the following mock API for this task:
- Fetch products: `https://dummyjson.com/products/search?q=&limit=5`
- Filter results by description on the server-side using query parameters.

### Bonus
- Highlight the currently selected item in the list of suggestions.
- Show a loading indicator while fetching suggestions from the server.

### Evaluation Criteria
- Correct implementation of server-side autocomplete functionality.
- Efficient and optimized API calls (debouncing).
- Proper use of shared state to keep the instances synchronized.
- Use of Vuetify components for a polished UI.
- Bonus: Handling of loading indicators and highlighting selected items.
