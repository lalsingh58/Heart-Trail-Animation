document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  body.addEventListener("mousemove", (event) => {
    const x = event.pageX;
    const y = event.pageY;

    const span = document.createElement("span");
    span.classList.add("heart");

    // Random size between 50 and 150
    const size = Math.random() * 50 + 50;
    span.style.width = `${size}px`;
    span.style.height = `${size}px`;

    // Position at mouse cursor
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;

    body.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 3000);
  });
});
