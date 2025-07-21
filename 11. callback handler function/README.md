### Child to Parent Communication (Callback Function)

* Define a function in the **parent**.
* Pass it to the **child** as a **prop**.
* Call it from the **child** to send data back.

**Example:**

```jsx
// Parent
<Child sendData={handleData} />

// Child
sendData("value")
```

> Used to pass data from child → parent.
