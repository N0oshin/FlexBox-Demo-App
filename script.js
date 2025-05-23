
const flexContainer = document.getElementById("flexContainer");
const cssOutput = document.getElementById("cssOutput");

const controls = ["direction", "wrap", "justify", "align"];

controls.forEach(control => {
  document.getElementById(control).addEventListener("change", updateFlex);
});

function updateFlex() {
  const direction = document.getElementById("direction").value;
  const wrap = document.getElementById("wrap").value;
  const justify = document.getElementById("justify").value;
  const align = document.getElementById("align").value;

  flexContainer.style.flexDirection = direction;
  flexContainer.style.flexWrap = wrap;
  flexContainer.style.justifyContent = justify;
  flexContainer.style.alignItems = align;

  cssOutput.innerText = `
  .flex-container {
  display: flex;
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  justify-content: ${justify};
  align-items: ${align};
  }`;
}

// Initialize output
updateFlex();
