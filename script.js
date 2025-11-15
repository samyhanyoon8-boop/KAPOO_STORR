function buy(product, price, data) {

    let message = `🔵 طلب شراء\n------------------\nالمنتج: ${product}\nالسعر: ${price}`;

    if (data && data.trim() !== "") {
        message += `\nالبيانات: ${data}`;
    }

    let encoded = encodeURIComponent(message);

    let phone = "201284070117";
    let telegramUser = "K_A_P_OO7";

    // نافذة اختيار
    let box = document.createElement("div");
    box.style.position = "fixed";
    box.style.top = "0";
    box.style.left = "0";
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.background = "rgba(0,0,0,0.4)";
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.zIndex = "9999";

    box.innerHTML = `
        <div style="
            background:white;
            padding:20px;
            width:320px;
            border-radius:12px;
            text-align:center;
            font-size:18px;
        ">
            <p style="margin-bottom:18px; font-size:17px;">اختار طريقة الشراء:</p>

            <div style="display:flex; gap:10px;">

                <button id="wBtn" style="
                    flex:1;
                    padding:12px;
                    border:none;
                    border-radius:8px;
                    background:#25D366;
                    color:white;
                    font-size:16px;
                    cursor:pointer;
                ">واتساب</button>

                <button id="tBtn" style="
                    flex:1;
                    padding:12px;
                    border:none;
                    border-radius:8px;
                    background:#0088cc;
                    color:white;
                    font-size:16px;
                    cursor:pointer;
                ">تيلجرام</button>

            </div>

            <p id="closeBox" style="margin-top:15px; cursor:pointer; font-size:14px; color:#444;">
                إلغاء
            </p>
        </div>
    `;

    document.body.appendChild(box);

    document.getElementById("wBtn").onclick = () => {
        window.open(`https://wa.me/${phone}?text=${encoded}`);
        box.remove();
    };

    document.getElementById("tBtn").onclick = () => {
        window.open(`https://t.me/${telegramUser}?text=${encoded}`);
        box.remove();
    };

    document.getElementById("closeBox").onclick = () => box.remove();
}
