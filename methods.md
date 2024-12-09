Also check [this](https://medium.com/@xiuerold/revolutionizing-reacts-conditional-rendering-378b2aefa4d5) out

SHOWING OR HIDING A SINGLE CONTENT

To just show or hide a component: && operator

```
    <div>
      {showContent && <p>Content is visible</p>}
    </div>
```

Using a function:

```
    const showIf = (condition, component) => condition ? component : null;

    <div>
      {showIf(showContent, <p>Content is visible</p>)}
    </div>
```

Using a higher order function:

```
function withVisibility(WrappedComponent) {
  return function ({ isVisible, ...props }) {
    return isVisible ? <WrappedComponent {...props} /> : null;
  };
}

const VisibleContent = withVisibility(({ message }) => <p>{message}</p>);

function App({ showContent }) {
  return (
    <div>
      <VisibleContent isVisible={showContent} message="Content is visible" />
    </div>
  );
}
```

Using a separate component (Solid does this? Some other React framework?)

```
    const ShowIf = ({when, children}) => when ? <>{children}</> : null;

    <div>
      <Show when={showContent}>
        <p>Content is visible</p>
      </Show>
    </div>
```

SHOWING ALTERNATIVE CONTENTS

To show one component or another: ternary operator

```
    <div>
      {showContent ? <p>Content is visible</p> : <p>Content is hidden</p>}
    </div>
```

To use a component with alternative value:

```
function withConditionalRendering(WrappedComponent, FallbackComponent = ...some default...) {
  return function ({ isVisible, ...props }) {
    return isVisible ? (
      <WrappedComponent {...props} />
    ) : FallbackComponent ? (
      <FallbackComponent {...props} />
    ) : null;
  };
}

```
