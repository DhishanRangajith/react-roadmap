**React Fragments** let you group elements **without adding extra DOM nodes**.

Instead of:

```jsx
return {<div> ... </div>}
```

Use:

```jsx
return <> ... </>
```

### Why use?

1. Avoid extra `<div>`s – cleaner DOM
2. Fix layout issues – better CSS control
3. Faster – fewer nodes, less memory

### Syntax

* `<React.Fragment>...</React.Fragment>`
* `<>...</>`