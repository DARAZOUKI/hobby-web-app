# Hobby Web App

A simple React application to display a list of hobbies with their details. This project demonstrates the use of React components, props, TypeScript, and CSS styling for a modular and maintainable web application.

---

## Features

- **Dynamic Hobby List:** Displays a list of hobbies with their name, year, and completion status.
- **Modular Design:** Includes separate components for the header, content, and footer.
- **TypeScript Integration:** Ensures type safety with interfaces for props and state.
- **Responsive Design:** Styled using CSS for a clean and adaptable layout.

---

## Components

### 1. **Header**
- **File:** `Header.tsx`
- **Description:** Displays the title of the application and a banner image.
- **Props:**
  - `title: string` - The title text displayed in the header.
- **CSS File:** `Header.css`

---

### 2. **Content**
- **File:** `Content.tsx`
- **Description:** Displays a list of hobbies passed as props.
- **Props:**
  - `hobbies: Hobby[]` - An array of hobbies with the following structure:
    ```typescript
    interface Hobby {
      name: string;
      year: number;
      iscompleted: boolean;
    }
    ```
- **CSS File:** `Content.css`

---

### 3. **Footer**
- **File:** `Footer.tsx`
- **Description:** A simple footer with developer credit.
- **CSS File:** `Footer.css`

---

### 4. **App**
- **File:** `App.tsx`
- **Description:** The main component that renders the `Header`, `Content`, and `Footer` components.
- **Data:** Contains a hardcoded list of hobbies:
  ```typescript
  const hobbies = [
    { name: 'Reading', year: 2024, iscompleted: true },
    { name: 'Cycling', year: 2025, iscompleted: false },
    { name: 'Swimming', year: 2023, iscompleted: true }
  ];
