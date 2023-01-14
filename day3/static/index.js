let inputs = document.querySelectorAll("input");

// select the root element
let root = document.documentElement;

function handleUpdate() {
    let suffix = this.dataset.sizing || "";
    root.style.setProperty(`--${this.name}`, this.value+suffix);
}

inputs.forEach((elem) => {
    elem.addEventListener("change", handleUpdate);
    elem.addEventListener("mousemove", handleUpdate);
});