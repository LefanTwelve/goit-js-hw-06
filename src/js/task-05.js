const refs = {
nameInput: document.querySelector("#name-input"),
nameOutput: document.querySelector("#name-output"),
};

const onNameInput = (e) => {
const { value } = e.currentTarget;
refs.nameOutput.textContent = value.trim().length ? value : "Anonymous";
};

refs.nameInput.addEventListener("input", onNameInput);