### JavaScript Array Methods

1. **`filter`** – Returns items matching condition

   ```js
   list.filter(item => condition)
   ```

2. **`find`** – Returns **first** matching item

   ```js
   list.find(item => condition)
   ```

3. **`findIndex`** – Returns index of first match

   ```js
   list.findIndex(item => condition)
   ```

4. **`forEach`** – Runs logic on each item (no return)

   ```js
   list.forEach(item => logic)
   ```

5. **`map`** – Returns new array with transformed items

   ```js
   list.map(item => transformItem)
   ```

6. **`reduce`** – Combines items into single value

   ```js
   list.reduce((total, item) => logic, initVal)
   ```

7. **`some`** – Returns `true` if **any** item matches

   ```js
   list.some(item => condition)
   ```

8. **`every`** – Returns `true` if **all** items match

   ```js
   list.every(item => condition)
   ```

9. **`sort`** – Sorts array in place

   ```js
   list.sort((a, b) => a.localeCompare(b)) // or (a - b)
   ```

10. **`slice`** – Returns part of array (no change to original)

```js
list.slice(start, end)
```

11. **`splice`** – Changes array by adding/removing items

```js
list.splice(startIndex, deleteCount, newItem)
```

12. **`flat`** – Flattens nested arrays

```js
list.flat(depth)
```

13. **`flatMap`** – Maps and flattens one level

```js
list.flatMap(item => [transformed])
```