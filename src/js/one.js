document.querySelectorAll(".oui-bubble").forEach((bubble) => {
  bubble.style.padding = bubble.getAttribute("spacing") + "px";
});
document.querySelectorAll(".oui-bubble-heading").forEach((bubbleHeading) => {
  bubbleHeading.style.marginBottom =
    bubbleHeading.parentElement.getAttribute("spacing") + "px";
});
document.querySelectorAll(".oui-badge").forEach((badge) => {
  badge.style.backgroundColor = badge.getAttribute("background");
  badge.style.color = badge.getAttribute("foreground");
});
document.querySelectorAll(".oui-badge-num").forEach((badgeNum) => {
  badgeNum.style.height = badgeNum.style.minWidth =
    badgeNum.getAttribute("size") + "px";
  badgeNum.style.borderRadius = `calc(${badgeNum.getAttribute("size")}px / 2)`;
});
const one = {
  dialog: function ({
    title = "Title",
    content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto est perspiciatis, quo excepturi distinctio dolore reprehenderit, ducimus quisquam eius debitis commodi blanditiis nesciunt repudiandae, ipsam beatae recusandae natus doloribus!",
    option1 = "Close",
    option2 = "More Info",
  }) {
    const dialog = document.createElement("div");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    dialog.classList.add("dialog");
    overlay.style.animation = "overlay .2s ease";
    dialog.style.animation = "dialog .4s cubic-bezier(1, 0, 0, 1)";
    dialog.innerHTML = `
    <h1>${title}</h1>
    <h3>${content}</h3>
    <div class="buttons">
      <button>${option1}</button>
      <button>${option2}</butt>
    </div>
    `;
    overlay.onclick = function () {
      this.remove();
      dialog.remove();
    };
    document.body.appendChild(overlay);
    document.body.appendChild(dialog);
  },
};
function link(text, { href = "#" }) {
  return `<a href="${href}">${text}</a>`;
}
document.querySelectorAll(".oui-checkbox").forEach((check) => {
  function text() {
    if (check.getAttribute("text") === null) {
      return "";
    } else {
      return check.getAttribute("text");
    }
  }
  check.insertAdjacentHTML(
    "beforeend",
    `
  <input
    type="checkbox"
    class="checkBox-${check.getAttribute("class")}"
    id="checkBox-${check.getAttribute("id")}"
    style="height: ${check.getAttribute("size")}px; width: ${check.getAttribute(
      "size"
    )}px"
  >
  <span class="checkmark" style="height: ${check.getAttribute(
    "size"
  )}px; width: ${check.getAttribute(
      "size"
    )}px; border-radius: calc(${check.getAttribute(
      "size"
    )}px / 4); --checked-fill: ${check.getAttribute("background")};"></span>
  <h4 style="margin-left: calc(${check.getAttribute(
    "size"
  )}px + 4px);">${text()}</h4>
  `
  );
  check.style.height = check.getAttribute("size") + "px";
});
