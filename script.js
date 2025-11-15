const products = [
    {name: "60 شدة", price: 43, hasId: true},
    {name: "325 شدة", price: 215, hasId: true},
    {name: "شحنة سيزون كامل", price: 200, hasId: true},
    {name: "كرستاله حمرا", price: 140, hasId: true},
    {name: "برايم عادي", price: 45, hasId: true},
    {name: "برايم بلص", price: 420, hasId: true},
    {name: "كرت فكه 20ج", price: 20, hasId: true},
    {name: "كرت فكه 28ج", price: 28, hasId: true},
    {name: "كرت فكه 14ج", price: 14, hasId: true},
    {name: "باقه فليكس 105ج", price: 105, hasId: true},
    {name: "باقه فليكس 150ج", price: 150, hasId: true},
    {name: "طريقه سح/ب صور", price: 50, hasId: false},
    {name: "طريقه عمل موقع", price: 50, hasId: false},
    {name: "طريقه حظ/ر ارقام", price: 50, hasId: false},
    {name: "طريقه كراش", price: 50, hasId: false},
    {name: "طريقه حر/ق جوجل", price: 40, hasId: false}
];

const whatsappNumber = "201284070117";
const telegramUsername = "K_A_P_OO7";

const productsDiv = document.querySelector(".products");

products.forEach((prod, index) => {
    const div = document.createElement("div");
    div.className = "product";
    let html = `<h3>${prod.name}</h3><p>السعر: ${prod.price} ج</p>`;
    if(prod.hasId){
        html += `<input type="text" id="input${index}" placeholder="ادخل رقم/ID">`;
    }
    html += `
        <button class="buy-btn" onclick="buyWhatsApp(${index})">شراء واتساب</button>
        <button class="buy-btn" onclick="buyTelegram(${index})">شراء تليجرام</button>
    `;
    div.innerHTML = html;
    productsDiv.appendChild(div);
});

// أزرار شراء
function buyWhatsApp(index){
    const prod = products[index];
    let inputVal = "";
    if(prod.hasId){
        inputVal = document.getElementById("input"+index).value;
        if(!inputVal){ alert("من فضلك ادخل الرقم/ID"); return; }
    }
    const message = `المنتج: ${prod.name} \nالسعر: ${prod.price} ج${inputVal ? "\nID: " + inputVal : ""}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function buyTelegram(index){
    const prod = products[index];
    let inputVal = "";
    if(prod.hasId){
        inputVal = document.getElementById("input"+index).value;
        if(!inputVal){ alert("من فضلك ادخل الرقم/ID"); return; }
    }
    const message = `المنتج: ${prod.name} \nالسعر: ${prod.price} ج${inputVal ? "\nID: " + inputVal : ""}`;
    window.open(`https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`, "_blank");
}

// قائمة الثلاث نقاط
function toggleMenu() {
    const dropdown = document.querySelector(".menu .dropdown");
    if(dropdown.style.display === "flex") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "flex";
    }
}
