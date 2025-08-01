1. **Install React**

   ```bash
   npm install react
   ```

2. **Install ReactDOM**

   ```bash
   npm install react-dom
   ```

3. **Import React (for JSX, components, etc.)**

   ```js
   import React from "react";
   ```

   * Or via CDN (for HTML files):

     ```html
     <script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
     ```

4. **Import ReactDOM (to render components)**

   ```js
   import ReactDOM from "react-dom/client";
   ```

   * Or via CDN:

     ```html
     <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
     ```

5. **Optional Named Import**

   ```js
   import { createElement } from "react"; // NOT from "react-dom/client"
   ```

   > ⚠️ `createElement` comes from `"react"`, not `"react-dom/client"`
   > `"react-dom/client"` is used for `ReactDOM.createRoot()` in React 18+
