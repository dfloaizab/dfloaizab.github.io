const links = document.querySelectorAll("a");
const sections = document.querySelectorAll("section");
const options = {
   // root is only required because this sandbox is in an iframe.
   root: document,
   rootMargin: "-50% 0px",
   threshold: 0,
};
const HIGHLIGHT_CLASS = "highlight";
const tableOfConentsMap = [...sections].reduce(
   (acc, section, i) => ({
      ...acc,
      [section.id]: links[i],
   }),
   {}
);

let selectedId = sections[0].id;

function removeHighlight(id) {
   tableOfConentsMap[id].classList.remove(HIGHLIGHT_CLASS);
}

function addHighlight(id) {
   tableOfConentsMap[id].classList.add(HIGHLIGHT_CLASS);
}

function onObserve(entries, observer) {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         const { id } = entry.target;
         removeHighlight(selectedId);
         addHighlight(id);
         selectedId = id;
      }
   });
}

const observer = new IntersectionObserver(onObserve, options);

sections.forEach((section) => {
   observer.observe(section);
});