document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("p, h2, li");

  elements.forEach(el => {
    // Find the last text node inside the element
    let walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    let lastTextNode = null;

    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue.trim().length > 0) {
        lastTextNode = walker.currentNode;
      }
    }

    if (!lastTextNode) return;

    const text = lastTextNode.nodeValue;
    const words = text.trim().split(/\s+/);

    if (words.length < 2) return;

    const lastTwo = words.slice(-2).join(" ");
    const before = text.replace(/\s*\S+\s+\S+\s*$/, " ");

    const span = document.createElement("span");
    span.className = "text-style-nowrap";
    span.textContent = lastTwo;

    const frag = document.createDocumentFragment();
    frag.appendChild(document.createTextNode(before));
    frag.appendChild(span);

    lastTextNode.parentNode.replaceChild(frag, lastTextNode);
  });
});