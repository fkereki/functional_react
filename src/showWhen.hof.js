export const showWhenHOF =
  (WrappedComponent) =>
  ({ when, ...props }) =>
    when ? <WrappedComponent {...props} /> : null;
