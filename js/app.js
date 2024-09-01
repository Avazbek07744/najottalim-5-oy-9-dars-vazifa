const Data = JSON.parse(localStorage.getItem("data")) || [];


uiChanger(Data);
Form.onsubmit = (event) => {
    event.preventDefault();
    if (!username.value || !age.value || !email.value) {
        alert("Ma'lumotlarni to'liq to'ldiring");
    } else {
        const data = {
            username: username.value,
            age: age.value,
            email: email.value,
        };
        Data.push(data);
        localStorage.setItem("data", JSON.stringify(Data));
        uiChanger(Data);
        Form.reset();
    }
};

function uiChanger(Data) {
    ui.innerHTML = null;
    if (Data.length === 0) ui.innerHTML = `<h3>Ma'lumot mavjud emas</h3>`;
    Data.forEach((element) => {
        const card = `<div class="div1">
        <h3>${element.username}</h3>
        <span>${element.age}</span>
        <mark>${element.email}</mark>
        </div>
        `;
        ui.innerHTML += card;
    });
}
