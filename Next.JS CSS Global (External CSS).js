In Next.js, you can apply global styles to your entire application using external CSS files. To include a global CSS file, you need to follow these steps:

### 1. Create a Global CSS File:

Create a CSS file for your global styles. Let's name it `global.css`. You can create this file in the `styles` directory (or any other directory of your choice). For example:

```css
/* styles/global.css */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

/* Add your global styles here */
```

### 2. Import the Global CSS File:

In the `pages/_app.js` file, import the global CSS file. The `_app.js` file is a special file in Next.js that is used to wrap your entire application with additional components.

```jsx
// pages/_app.js
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

By importing the global CSS file in `_app.js`, the styles will be applied to all pages in your Next.js application.

### 3. Optional: Using CSS Modules for Global Styles:

If you prefer using CSS Modules for your global styles, you can do so by renaming the file with a `.module.css` extension. For example, rename `global.css` to `global.module.css`:

```css
/* styles/global.module.css */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

/* Add your global styles here */
```

In this case, you would import the CSS file in `_app.js` as follows:

```jsx
// pages/_app.js
import '../styles/global.module.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

Using CSS Modules in this way allows you to locally scope your styles even for global stylesheets.

Now, your global styles defined in the `global.css` (or `global.module.css`) file will be applied across all pages in your Next.js application. This approach provides a consistent styling framework for your entire project.