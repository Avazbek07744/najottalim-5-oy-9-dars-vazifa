const form = document.querySelector('#Form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const desc = document.querySelector('#desc');
const btn = document.querySelector('button');
const ui = document.querySelector('#ui');



function validate() {
    if (!name.value.trim()) {
        alert("Ism kiritilishi shart.");
        return false;
    }

    if (name.value.trim().length < 3) {
        alert("Ismingiz kamida uchta harfdan iborat bo'lishi kerak.");
        return false;
    }

    if (!age.value.trim() || isNaN(age.value)) {
        alert("Iltimos, yaroqli yosh kiriting.");
        return false;
    }

    const emailP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailP.test(email.value)) {
        alert("Iltimos, yaroqli elektron pochta kiriting.");
        return false;
    }

    if (!desc.value.trim()) {
        alert("Tavsif kiritilishi shart.");
        return false;
    }

    return true;
}

btn.addEventListener('click', function (event) {
    event.preventDefault();

    if (validate()) {
        let result = `
        <div class="div1">
            <h3>${name.value}</h3>
            <h4>${age.value}</h4>
            <span>${email.value}</span>
            <p>${desc.value}</p>
        </div>
    `;

        ui.innerHTML += result;
        form.reset();
    }
});
