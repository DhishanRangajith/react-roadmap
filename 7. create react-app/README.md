1. **Create React App**

   * Built using **Webpack** and **Babel**.

2. **Module Bundler (like Webpack)**

   * **Manages dependencies**: Bundles all required modules into final output.
   * **Asset optimization**: Compresses file sizes for better performance.
   * **Lazy loading**: Loads components/files only when needed.
   * **Tree shaking**: Removes unused code from the final bundle.

3. **Babel**

   * Transpiles modern JavaScript (ES6+) to plain JavaScript.
   * Ensures compatibility with older browsers.

4. **Vite (alternative to CRA)**

   * **Disadvantages**:

     * Doesn't use Babel by default.
     * Poor support for older ECMAScript versions/browsers.

5. **Create React App using Yarn**

   ```bash
   yarn create react-app <app-name>
   ```

6. **Start Development Server**

   ```bash
   yarn start
   ```

7. **Build for Production**

   ```bash
   yarn build
   ```

8. **Test app**

   ```bash
   yarn test
   ```