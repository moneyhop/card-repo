const switchVisibility = () => {
  const cardNumberFieldOne = document.querySelector("#hideNumberOne");
  const cardNumberFieldTwo = document.querySelector("#hideNumberTwo");
  const cvvNumberField = document.querySelector("#hideCvvNumber");
  if (cardNumberFieldOne.getAttribute("type") === "tel") {
    cardNumberFieldOne.setAttribute("type", "password");
  } else {
    cardNumberFieldOne.setAttribute("type", "tel");
    cardNumberFieldOne.style.fontSize = "34px";
  }

  if (cardNumberFieldTwo.getAttribute("type") === "tel") {
    cardNumberFieldTwo.setAttribute("type", "password");
  } else {
    cardNumberFieldTwo.setAttribute("type", "tel");
    cardNumberFieldTwo.style.fontSize = "34px";
  }

  if (cvvNumberField.getAttribute("type") === "tel") {
    cvvNumberField.setAttribute("type", "password");
  } else cvvNumberField.setAttribute("type", "tel");
};
