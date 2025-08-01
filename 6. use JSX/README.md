1. **JSX = JavaScript + XML**

   * Lets you write HTML-like code inside JavaScript.

2. **Default Export**

   ```js
   export default A;
   ```

3. **Importing Components**

   * Import default export:

     ```js
     import A from '../pathA';   // A was exported as default
     ```
   * Import named export:

     ```js
     import { A2 } from '../pathA'; // A2 was exported with 'export A2'
     ```

4. **Using Props in JSX**

   ```jsx
   <A v1="kkk" v2={{ b: 1, c: "kkk" }} v3={kkk} />
   ```

   * React automatically turns this into:

     ```js
     props = {
       v1: "kkk",
       v2: { b: 1, c: "kkk" },
       v3: kkk  // a variable or value from scope
     };
     ```