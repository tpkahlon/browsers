import keepTheseLinks from "./keepLinks";
import keepTheseMatchingLinks from "./keepMatchingLinks";
import removeTheseTitles from "./removeTitles";
import removeTheseLinks from "./removeLinks";

const sortData = (a, b) =>
  a.text.toLowerCase() > b.text.toLowerCase() ? 1 : -1;

const changeData = (item) => ({
  text: item.textContent,
  url: item.getAttribute("href").toLowerCase(),
});

const hasData = (i) =>
  i.textContent &&
  i.textContent.trim() &&
  i.getAttribute("title") &&
  i.getAttribute("href");

const excludeFunction = (i, data, key) => {
  let result = [];
  data.forEach((element) =>
    result.push(!i.getAttribute(key).toLowerCase().trim().includes(element))
  );
  return result.every((i) => i);
};

const includeFunction = (i, data, key) => {
  let result = [];
  data.forEach((element) =>
    result.push(i.getAttribute(key).toLowerCase().trim().includes(element))
  );
  return result.every((i) => i);
};

const includeMatchingFunction = (i, data, key) => {
  let result = [];
  data.forEach((element) =>
    result.push(i.getAttribute(key).toLowerCase().trim() !== element)
  );
  return result.every((i) => i);
};

const removeTitles = (i) => excludeFunction(i, removeTheseTitles, "title");

const removeLinks = (i) => excludeFunction(i, removeTheseLinks, "href");

const keepLinks = (i) => includeFunction(i, keepTheseLinks, "href");

const keepMatchingLinks = (i) =>
  includeMatchingFunction(i, keepTheseMatchingLinks, "href");

const processData = (i) => {
  if (
    removeTitles(i) &&
    removeLinks(i) &&
    keepLinks(i) &&
    keepMatchingLinks(i)
  ) {
    return i;
  }
};

export { processData, hasData, sortData, changeData };
