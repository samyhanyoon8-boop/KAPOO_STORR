// =====================
// رسالة الترحيب
// =====================
function closeDialog() {
    document.getElementById("welcomeDialog").style.display = "none";
}

// =====================
// بيانات التواصل
// =====================
const whatsappGeneral = "201284070117"; // العادي
const telegramUser = "K_A_P_OO7";
const whatsappOnly = "201204390990"; // منتجات واتساب فقط

// =====================
// قائمة كل المنتجات
// =====================
const products = [
    {name:"60 شده", price:"43ج", waOnly:false},
    {name:"325 شده", price:"215ج", waOnly:false},
    {name:"170 شده", price:"55ج", waOnly:false},
    {name:"كريستاله حمرا", price:"140ج", waOnly:false},
    {name:"سيزون", price:"200ج", waOnly:false},
    {name:"برايم عادي", price:"48ج", waOnly:false},
    {name:"برايم بلص", price:"420ج", waOnly:false},

    {name:"طريقة أرقام فيك", price:"20ج", waOnly:false},
    {name:"طريقة عمل موقع", price:"30ج", waOnly:false},
    {name:"طريقة سحب صور", price:"30ج", waOnly:false},
    {name:"ملف سحب بيانات", price:"20ج", waOnly:false},
    {name:"بوت سحب رقم من اليوزر", price:"20ج", waOnly:false},
    {name:"بوت سحب محادثات الشخص", price:"20ج", waOnly:false},
    {name:"عضوية أسبوعية", price:"70ج", waOnly:false},
    {name:"عضوية شهرية", price:"350ج", waOnly:false},
    {name:"بويا باس", price:"60ج", waOnly:false},

    {name:"كرت فكه 17ج", price:"17ج", waOnly:false},
    {name:"كرت فكه 20ج", price:"20ج", waOnly:false},
    {name:"كرت فكه 28ج", price:"28ج", waOnly:false},
    {name:"كرت فكه 36ج", price:"36ج", waOnly:false},

    {name:"100 نجمة تليجرام", price:"70ج", waOnly:false},
    {name:"اشتراك مميز شهر", price:"200ج", waOnly:false},
    {name:"موظف سحب داتا", price:"10ج", waOnly:false},

    // منتجات واتساب فقط
    {name:"لوجو", price:"25ج", waOnly:true},
    {name:"حزمة 3 لوجهات", price:"65ج", waOnly:true},
    {name:"استيكر", price:"10ج", waOnly:true},
    {name:"حزمة 3 استيكرات", price:"25ج", waOnly:true},
    {name:"بانر واتساب أعمال", price:"15ج", waOnly:true},

    // إضافات حديثة
    {name:"طريقة حرق جوجل", price:"20ج", waOnly:false},
    {name:"مواقع دارك ويب", price:"15ج", waOnly:false},
    {name:"سدادات أنف للسباحة", price:"20ج", waOnly:false},
    {name:"توثيق منصة بايبت", price:"100ج", waOnly:false},
    {name:"طريقة تثبيت أي حاجة على أندرويد 15", price:"10ج", waOnly:false},
    {name:"اشتراك كانفا شهر", price:"40ج", waOnly:false},
    {name:"سحب بطايق", price:"100ج", waOnly:false},
    {name:"6 نسخ عكس", price:"15ج", waOnly:false},
    {name:"بوت كراش", price:"10ج", waOnly:false},
    {name:"تعزيزات", price:"100ج", waOnly:false},
    {name:"طريقة رشق متابعين", price:"20ج", waOnly:false},
    {name:"بوتات اختراق", price:"10ج", waOnly:false},
    {name:"ماكينة حلاقة VGR", price:"600ج", waOnly:false},
    {name:"كتاب أرض زيكولا", price:"120ج", waOnly:false},
    { name:"100 بوت مجال", price:"10ج", waOnly:false },
];

// =====================
// توليد المنتجات في الصفحة
// =====================
const container = document.querySelector(".products");

products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
        <h3>${p.name}</h3>
        <p>السعر: ${p.price}</p>
        <div class="btns">
            <button class="whatsapp" onclick="buyWhatsapp('${p.name}','${p.price}',${p.waOnly})">واتساب</button>
            ${p.waOnly ? "" : `<button class="telegram" onclick="buyTelegram('${p.name}','${p.price}')">تيلجرام</button>`}
        </div>
    `;

    container.appendChild(card);
});

// =====================
// فتح واتساب
// =====================
function buyWhatsapp(name, price, waOnly) {
    const num = waOnly ? whatsappOnly : whatsappGeneral;
    const msg = encodeURIComponent(`عايز اشتري: ${name}\nالسعر: ${price}`);
    window.open(`https://wa.me/${num}?text=${msg}`);
}

// =====================
// فتح تيلجرام
// =====================
function buyTelegram(name, price) {
    const msg = encodeURIComponent(`عايز اشتري: ${name} - السعر: ${price}`);
    window.open(`https://t.me/${telegramUser}?text=${msg}`);
}
