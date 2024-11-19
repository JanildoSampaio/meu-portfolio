const breakpoints = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1280px",
};

const device = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
};

export default device;