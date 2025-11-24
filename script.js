const cashNumber = "01284070117";

// كل المنتجات اللي بعتهولك
const products = [
  { name: "60 شده", price: "43ج" },
  { name: "325 شده", price: "215ج" },
  { name: "170 شده", price: "55ج" },
  { name: "كريستاله حمرا", price: "140ج" },
  { name: "سيزون", price: "200ج" },
  { name: "برايم عادي", price: "48ج" },
  { name: "برايم بلص", price: "420ج" },

  { name: "طريقه ارقام فيك", price: "20ج" },
  { name: "طريقه عمل موقع", price: "30ج" },
  { name: "طريقه سحب صور", price: "30ج" },
  { name: "ملف سحب بينات", price: "20ج" },
  { name: "بوت سحب رقم من اليوزر", price: "20ج" },
  { name: "بوت سحب محدثات الشخص", price: "20ج" },
  { name: "عضويه اسبوعيه", price: "70ج" },
  { name: "عضويه شهريه", price: "350ج" },
  { name: "بويا باس", price: "60ج" },
  { name: "كرت فكه", price: "17ج" },
  { name: "كرت فكه", price: "20ج" },
  { name: "كرت فكه", price: "28ج" },
  { name: "كرت فكه", price: "36ج" },
  { name: "100 نجمه تلي", price: "70ج" },
  { name: "اشتراك مميز شهر", price: "200ج" },
  { name: "موظف سحب داتا", price: "10ج" },
  { name: "طريقة حرق جوجل", price: "20ج" },
  { name: "مواقع دارك ويب", price: "15ج" },
  { name: "سدادات انف للسباحه", price: "؟ج" },
  { name: "توثيق منصه بايبت", price: "100ج" },
  { name: "تثبيت اي حاجه اندرويد 15", price: "10ج" },
  { name: "اشتراك كانفا شهر", price: "40ج" },
  { name: "سحب بطايق", price: "100ج" },
  { name: "6 نسخ عكس", price: "15ج" },
  { name: "بوت كراش", price: "10ج" },
  { name: "تعزيزات", price: "100ج" },
  { name: "طريقة رشق متابعين", price: "؟ج" },
  { name: "بوتات اختراق", price: "10ج" },
  { name: "مكنه حلاقه VGR", price: "600ج" },
  { name: "كتاب ارض زيكولا", price: "120ج" },
  { name: "100 بوت مجال", price: "10ج" },
  { name: "طريقة عمل أكتر من جميل", price: "10ج" },
];

// قسم التصميمات
const designs = [
  { name: "الوجو", price: "25ج" },
  { name: "حزمه 3 لوجهات", price: "65ج" },
  { name: "الاستيكر", price: "10ج" },
  { name: "حزمه 3 استيكرات", price: "25ج" },
  { name: "بانر للواتس اعمال", price: "15ج" },
];

function loadProducts() {
  let box = document.getElementById("products");
  products.forEach(prod => {
    box.innerHTML += `
      <div class="card">
        <h3>${prod.name}</h3>
        <p>${prod.price}</p>
        <div class="btns">
          <div class="icon-btn" onclick="openPayment('${prod.name}','${prod.price}')">شراء</div>
        </div>
      </div>
    `;
  });
}

function loadDesigns() {
  let box = document.getElementById("designs");
  designs.forEach(d => {
    box.innerHTML += `
      <div class="card">
        <h3>${d.name}</h3>
        <p>${d.price}</p>
        <div class="btns">
          <div class="icon-btn" onclick="openPayment('${d.name}','${d.price}')">شراء</div>
        </div>
      </div>
    `;
  });
}

// مودال الدفع
function openPayment(name, price) {
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalPrice").innerText = price;
  document.getElementById("paymentModal").style.display = "block";

  document.getElementById("payWhats").onclick = () => {
    let msg = `المنتج: ${name}%0Aالسعر: ${price}%0Aرقم الكاش: ${cashNumber}`;
    window.open(`https://wa.me/201284070117?text=${msg}`, "_blank");
  };
  
  document.getElementById("payTelegram").onclick = () => {
    let msg = `المنتج: ${name}\nالسعر: ${price}\nرقم الكاش: ${cashNumber}`;
    window.open(`https://t.me/K_A_P_OO7?text=${msg}`, "_blank");
  };
}

function closeModal() {
  document.getElementById("paymentModal").style.display = "none";
}

loadProducts();
loadDesigns();
