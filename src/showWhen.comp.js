export const ShowWhen = ({ when, children }) => (when ? children : null);

export const ShowWhen2 = ({ when, children, fallback = null }) =>
  when ? children : fallback;
