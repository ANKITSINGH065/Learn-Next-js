In Next.js, you can use inline styling or CSS-in-JS libraries to apply styles directly to your React components. One popular CSS-in-JS library is styled-jsx, which is built into Next.js and provides a way to write scoped styles directly within your components. Here's how you can use styled-jsx for inline styling in Next.js:

### 1. Use styled-jsx in a Component:

Create a React component and use the `styled-jsx` syntax for inline styling. For example:

```jsx
// components/MyComponent.js
const MyComponent = () => {
  return (
    <div>
      <p>
        This is my component with inline styling using{' '}
        <code>styled-jsx</code>.
      </p>

      <style jsx>{`
        div {
          background-color: #f0f0f0;
          padding: 10px;
          border: 1px solid #ccc;
        }

        p {
          color: blue;
        }

        button {
          background-color: yellow;
          color: black;
        }
      `}</style>
      
      <button>Click me</button>
    </div>
  );
};

export default MyComponent;
```

### 2. Importing Component in a Page:

You can then import and use your component in a page as usual:

```jsx
// pages/index.js
import MyComponent from '../components/MyComponent';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my Next.js App</h1>
      <MyComponent />
    </div>
  );
};

export default HomePage;
```

### 3. Run Your Next.js App:

Ensure that your Next.js development server is running:

```bash
npm run dev
```

Visit your application in the browser, and you should see the styles applied to your `MyComponent` using styled-jsx.

styled-jsx automatically scopes your styles to the component, preventing global style conflicts. The styles are encapsulated and applied only to the specific components they are defined in.

Additionally, styled-jsx supports dynamic styles and theming, making it a versatile choice for styling in Next.js. If you prefer other CSS-in-JS libraries, you can integrate them into your Next.js project as well. Popular alternatives include Styled Components, Emotion, and Theme UI.