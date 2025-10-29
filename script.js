const products = [
  {name: "أرقام تليجرام", price: 10},
  {name: "رقم واتساب", price: 8},
  {name: "تعديل على نسخ واتس", price: 10},
  {name: "بوت أرقام فيك", price: 15},
  {name: "طريقة عمل موقع", price: 15},
  {name: "كيب تحفيل + كيب مجال", price: 10},
  {name: "توعية أمنية (فيروسات)", price: 10},
  {name: "بوت اختراق (توعية أمنية)", price: 10},
  {name: "ملفات داتا مصر", price: 20},
  {name: "60 شدة ببجي", price: 50},
  {name: "ازدهار أول", price: 50},
  {name: "100 جوهرة فري فاير", price: 65},
  {name: "عضوية أسبوعية فري فاير", price: 75},
  {name: "برايم عادي ايدي", price: 50},
  {name: "برايم بلس ايدي", price: 440}
];

const store = document.getElementById("store");

products.forEach((p, i) => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>السعر: ${p.price}ج</p>
    <label>الكمية:</label>
    <input type="number" id="qty${i}" min="1" value="1">
    <br>
    <button onclick="buy('${p.name}', ${p.price}, 'qty${i}')">شراء الآن</button>
  `;
  store.appendChild(div);
});

function buy(name, price, qtyId) {
  const qty = document.getElementById(qtyId).value;
  const total = price * qty;
  const message = `طلب شراء جديد من متجر كابو ✅
المنتج: ${name}
الكمية: ${qty}
الإجمالي: ${total}ج`;

  const phone = "01281584651"; // رقمك
  const url = `https://wa.me/2${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}