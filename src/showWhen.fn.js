export const showWhenFn = (when, component) => (when ? component : null);

export const showWhenFn2 = (when, component, fallback = null) =>
  when ? component : fallback;
