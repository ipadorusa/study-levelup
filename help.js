const qs = (selector, scope) => (scope || document).querySelector(selector);
const $on = (target, type, callback, capture) => target.addEventListener(type, callback, !!capture);

export { qs, $on };
