let formData = {
    email: "",
    message: "",
}

try {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
} catch (err) {
    console.log(err)
}

const getFormDataFromLS = () => {
    try {
        const dataFromLS = JSON.parse(localStorage.getItem("feedback-form-state"));

        console.log(dataFromLS);
    } catch (err) {
        console.log(err);
    };
}
getFormDataFromLS();

const form = document.querySelector(".feedback-form");

const { email, message } = form.elements;

email.value = formData.email || "";
message.value = formData.message || "";

form.addEventListener("input", ({ target: { name, value } }) => {
  formData[name] = value.trim();
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!email.value.trim() || !message.value.trim()) {
    alert("Fill please all fields");
    return;
    }
    
    console.log(formData);
    
    localStorage.removeItem("feedback-form-state");
    
    form.reset();
    
    formData = { email: "", message: "" };
    
});