In Next.js, you can use the `useRouter` hook from the `next/router` module to programmatically navigate to another page. To redirect to the home page on a button click, you can handle the click event and use the `push` method of the `useRouter` hook to navigate to the desired page. Here's an example:

Assuming you have a button in one of your components:

```jsx
// components/MyComponent.js
import { useRouter } from 'next/router';

const MyComponent = () => {
  const router = useRouter();

  const redirectToHomePage = () => {
    // Redirect to the home page
    router.push('/');
  };

  return (
    <div>
      <p>This is MyComponent</p>
      <button onClick={redirectToHomePage}>Go to Home Page</button>
    </div>
  );
};

export default MyComponent;
```

In this example:

- The `useRouter` hook is imported from `next/router`.
- The `redirectToHomePage` function is defined to handle the button click event.
- Inside `redirectToHomePage`, the `router.push('/')` method is used to navigate to the home page.

Make sure to replace `'/'` with the actual path of your home page if it's different.

If you want to redirect based on an event in a page component (rather than a component), you can use the `useRouter` hook directly within the page file:

```jsx
// pages/my-page.js
import { useRouter } from 'next/router';

const MyPage = () => {
  const router = useRouter();

  const redirectToHomePage = () => {
    // Redirect to the home page
    router.push('/');
  };

  return (
    <div>
      <p>This is My Page</p>
      <button onClick={redirectToHomePage}>Go to Home Page</button>
    </div>
  );
};

export default MyPage;
```

In this case, the page itself contains the `useRouter` hook and handles the button click event to redirect to the home page.

Remember to import the `useRouter` hook at the beginning of your file:

```jsx
import { useRouter } from 'next/router';
```

This approach ensures that navigation within your Next.js application is handled properly without causing a full page refresh.