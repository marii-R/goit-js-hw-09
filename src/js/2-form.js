let formData = {
    email: "",
    message: "",
}

// try {
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// } catch (err) {
//     console.log(err)
// }

const getFormDataFromLS = () => {
    try {
        const dataFromLS = JSON.parse(localStorage.getItem("feedback-form-state"));
        return dataFromLS || { email: "", message: "" };
    } catch (err) {
        console.log(err);
        return { email: "", message: "" };
    };
}
formData = getFormDataFromLS();

const form = document.querySelector(".feedback-form");

const { email, message } = form.elements;

email.value = formData.email || "";
message.value = formData.message || "";

form.addEventListener("input", ({ target: { name, value } }) => {
    formData[name] = value.trim();
    try {
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    } catch (err) {
        console.log(err);
    }
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!email.value.trim() || !message.value.trim()) {
    alert("Fill please all fields");
    return;
    }
    
    console.log(formData);
    
    try {
        localStorage.removeItem("feedback-form-state");
    } catch (err) {
        console.log(err);
    }
   
    
    form.reset();
    
    formData = { email: "", message: "" };
    
});