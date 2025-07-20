1. **Purpose**

   * To define and validate the expected types of props a component should receive.

2. **Install PropTypes**

   ```bash
   yarn add prop-types
   ```

3. **Import PropTypes**

   ```javascript
   import PropTypes from 'prop-types';
   ```

4. **Define Prop Types for a Component**

   ```javascript
   ComponentA.propTypes = {
     aaa: PropTypes.string,
     bbb: PropTypes.number,
     // add more as needed
   };
   ```

> This helps catch bugs by warning in the console when incorrect prop types are passed.
