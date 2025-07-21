1. **What is `useState`?**

   * A **React Hook** used to manage **state** in functional components.
   * It triggers **re-render** when the state changes.

   - import { useState } from 'react';

2. **Syntax**

   ```javascript
   const [a, b] = useState(valA);
   ```

   * `a`: current state value (initially `valA`)
   * `b`: function to update the value of `a`

3. **How it works**

   ```javascript
   b(valB); // updates state
   ```

   * After calling `b(valB)`:

     * `a` becomes `valB`
     * The component **automatically re-renders** if `a` is used in JSX.

---

> `useState` helps keep UI in sync with state changes.

