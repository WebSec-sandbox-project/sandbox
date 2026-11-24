// Price formatting for the shop front end.

// Format a product price for display, e.g. "£12.34".
// Bug report #14: prices on the site look 100x too high.
export function formatPrice(price) {
  return "£" + price.toFixed(2);
}
