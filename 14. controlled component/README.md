## React Two-Way Binding (Controlled Input)

### Concept

* **DOM ➝ State (Controller)** → use `onChange`
* **State ➝ DOM** → use `value`
* Manage state using `useState`

---

### Example

```jsx
import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("...");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <input type="text" value={name} onChange={handleChange} />
  );
}
```