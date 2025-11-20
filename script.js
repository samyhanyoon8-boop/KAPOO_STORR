const products = [
  { name: "60شده", price: "43ج", waOnly: false },
  { name: "325شده", price: "215ج", waOnly: false },
  { name: "170شده", price: "55ج", waOnly: false },
  { name: "كريستاله حمرا", price: "140ج", waOnly: false },
  { name: "سيزون", price: "200ج", waOnly: false },
  { name: "برايم عادي", price: "48ج", waOnly: false },
  { name: "بريم بلس", price: "420ج", waOnly: false },
  { name: "طريقه ارقام فيك", price: "20ج", waOnly: false },
  { name: "طريقه عمل موقع", price: "30ج", waOnly: false },
  { name: "طريقه سحب صور", price: "30ج", waOnly: false },
  { name: "ملف سحب بينات", price: "20ج", waOnly: false },
  { name: "بوت سحب رقم من اليوزر", price: "20ج", waOnly: false },
  { name: "بوت سحب محدثات الشخص", price: "20ج", waOnly: false },
  { name: "عضويه اسبوعيه", price: "70ج", waOnly: false },
  { name: "عضويه شهريه", price: "350ج", waOnly: false },
  { name: "بويا باس", price: "60ج", waOnly: false },
  { name: "كرت فكه", price: "17ج", waOnly: false },
  { name: "كرت فكه", price: "20ج", waOnly: false },
  { name: "كرت فكه", price: "28ج", waOnly: false },
  { name: "كرت فكه", price: "36ج", waOnly: false },
  { name: "100نجمه تلي", price: "70ج", waOnly: false },
  { name: "اشتراك مميز شهر", price: "200ج", waOnly: false },
  { name: "موظف سحب داتا", price: "10ج", waOnly: false },
  { name: "طريقة حرق جوجل", price: "20ج", waOnly: false },
  { name: "مواقع دارك ويب", price: "15ج", waOnly: false },
  { name: "سدادات انف للسباحه", price: "سعر عند الطلب", waOnly: false },
  { name: "توثيق منصه بايبت", price: "100ج", waOnly: false },
  { name: "طريقة تثبيت اي حاجه اندرويد 15", price: "10ج", waOnly: false },
  { name: "اشتراك كانفا شهر", price: "40ج", waOnly: false },
  { name: "سحب بطايق", price: "100ج", waOnly: false },
  { name: "6 نسخ عكس", price: "15ج", waOnly: false },
  { name: "بوت كراش", price: "10ج", waOnly: false },
  { name: "تعزيزات", price: "100ج", waOnly: false },
  { name: "طريقة رشق متابعين", price: "سعر عند الطلب", waOnly: false },
  { name: "بوتات اختراق", price: "10ج", waOnly: false },
  { name: "مكنه حلاقه VGR", price: "600ج", waOnly: false },
  { name: "كتاب ارض زيكولا", price: "120ج", waOnly: false },
  { name: "100 بوت مجال", price: "10ج", waOnly: false },
  { name: "طريقة عمل أكتر من جميل", price: "10ج", waOnly: false },
  { name: "الوجو", price: "35ج", waOnly: true },
  { name: "حزمه 3 لوجهات", price: "90ج", waOnly: true },
  { name: "الاستيكر", price: "15ج", waOnly: true },
  { name: "حزمه 3 استيكرات", price: "35ج", waOnly: true },
  { name: "بانر للواتس اعمال", price: "25ج", waOnly: true }
];

const waNumber = "201284070117";
const waOnlyNumber = "201204390990";
const telegramUser = "K_A_P_OO7";

const container = document.getElementById("products");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product");
  if(product.waOnly) card.classList.add("wa-only");

  card.innerHTML = `
    <div>
      <span class="product-name">${product.name}</span>
      <span class="price">${product.price}</span>
    </div>
    <div class="buttons">
      <a class="btn whatsapp" target="_blank" href="https://wa.me/${product.waOnly ? waOnlyNumber : waNumber}?text=أريد شراء ${encodeURIComponent(product.name)} بسعر ${encodeURIComponent(product.price)}">واتساب</a>
      ${!product.waOnly ? `<a class="btn telegram" target="_blank" href="https://t.me/${telegramUser}">تليجرام</a>` : ""}
    </div>
  `;
  container.appendChild(card);
});

// نافذة الترحيب
const modal = document.getElementById("welcomeModal");
document.getElementById("closeModal").addEventListener("click", () => {
  modal.style.display = "none";
});
