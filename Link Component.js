In Next.js, you can use the `Link` component from the `next/link` module to create a navigation bar without triggering a full page refresh. The `Link` component optimizes navigation by fetching and rendering only the necessary content for the new page, resulting in a smoother user experience.

Here's an example of creating a simple navigation bar with the `Link` component in Next.js:

1. **Create a Navigation Component (`Navbar.js`):**

```jsx
// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
```

2. **Include the Navbar Component in Your Layout (`Layout.js`):**

```jsx
// components/Layout.js
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
```

3. **Use the Layout Component in Your Pages (`pages/_app.js`):**

```jsx
// pages/_app.js
import Layout from '../components/Layout';
import '../styles/globals.css'; // Include your global styles here

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

4. **Create Your Pages (`pages/index.js`, `pages/about.js`, `pages/contact.js`):**

```jsx
// pages/index.js
const Home = () => {
  return <div>Home Page Content</div>;
};

export default Home;

// pages/about.js
const About = () => {
  return <div>About Page Content</div>;
};

export default About;

// pages/contact.js
const Contact = () => {
  return <div>Contact Page Content</div>;
};

export default Contact;
```

Now, when you navigate between pages using the links in the navigation bar, the content of the pages will change without triggering a full page refresh. The `Link` component optimizes the navigation by only fetching the necessary content, making the transition smooth and improving the overall user experience.

Note: The `Link` component should be used with anchor (`<a>`) tags to ensure proper accessibility and behavior. The `href` prop of the `Link` component specifies the destination URL.