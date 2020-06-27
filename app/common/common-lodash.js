function get(object, pathIn, defaultValue) {
  const path = pathIn.replace(/\[/g, '.').replace(/\]/g, '');
  const keys = path.split('.');
  let currentElement = object || {};
  const exists = keys.every((element) => {
    currentElement = currentElement[element];
    return currentElement !== undefined;
  });
  if (exists) { return currentElement; }
  return defaultValue;
}
module.exports = { get };
