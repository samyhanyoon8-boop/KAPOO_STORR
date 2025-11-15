function buy(product, price, data) {

    // نص الرسالة
    let message = `🔵 طلب شراء\n------------------\nالمنتج: ${product}\nالسعر: ${price}`;

    if (data && data.trim() !== "") {
        message += `\nالبيانات: ${data}`;
    }

    let encoded = encodeURIComponent(message);

    // رقم الواتساب
    let phone = "201284070117";

    // يوزر التليجرام
    let telegramUser = "K_A_P_OO7";

    // إنشاء نافذة اختيار
    let box = document.createElement("div");
    box.style.position = "fixed";
    box.style.top = "0";
    box.style.left = "0";
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.background = "rgba(0,0,0,0.6)";
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.zIndex = "9999";

    box.innerHTML = `
        <div style="
            background:white;
            padding:20px;
            border-radius:12px;
            width:320px;
            text-align:center;
            box-shadow:0 4px 20px rgba(0,0,0,0.2);
        ">
            <h3 style="margin-bottom:15px;">اختر وسيلة الشراء</h3>

            <button id="wBtn" style="
                width:100%;
                padding:12px;
                margin-bottom:10px;
                background:#25D366;
                color:white;
                border:none;
                border-radius:8px;
                font-size:17px;
                cursor:pointer;
            ">شراء عبر واتساب</button>

            <button id="tBtn" style="
                width:100%;
                padding:12px;
                background:#0088cc;
                color:white;
                border:none;
                border-radius:8px;
                font-size:17px;
                cursor:pointer;
            ">شراء عبر تليجرام</button>

            <p style="margin-top:10px; cursor:pointer; color:#444;" id="closeBox">إلغاء</p>
        </div>
    `;

    document.body.appendChild(box);

    // واتساب
    document.getElementById("wBtn").onclick = () => {
        window.open(`https://wa.me/${phone}?text=${encoded}`);
        box.remove();
    };

    // تليجرام
    document.getElementById("tBtn").onclick = () => {
        window.open(`https://t.me/${telegramUser}?text=${encoded}`);
        box.remove();
    };

    // إلغاء
    document.getElementById("closeBox").onclick = () => {
        box.remove();
    };
}
