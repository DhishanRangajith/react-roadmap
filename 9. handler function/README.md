1. **Attach `onChange` Handler to an Input**

   ```jsx
   <input onChange={func1} />
   ```

2. **Define the Handler Function (`func1`)**

   ```javascript
   const func1 = (event) => {
     // Access input value
     console.log(event.target.value);
     // Handle logic here
   };
   ```

> `event.target.value` gives the current input value.
