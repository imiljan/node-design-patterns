# Singleton

**Intent**: Ensure a class only has one instance and provide a global point of access to it.

In Node export the instance from module.

```js
module.exports = new Logger();
```

When we run file, it runs once, create new instance of the logger and save it in the cache. NodeJS will automatically handle exporting the same instance of the logger to every other module that uses it.
