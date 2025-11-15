function buy(product, price, data) {
    let message = `🔵 طلب شراء\n------------------\nالمنتج: ${product}\nالسعر: ${price}`;

    if (data && data.trim() !== "") {
        message += `\nالبيانات: ${data}`;
    }

    let encoded = encodeURIComponent(message);

    // رقم الواتساب
    let phone = "201284070117";

    // يوزر التليجرام
    let telegramUser = "K_A_P_OO7";

    // اختيار واتساب أو تليجرام
    let choose = confirm("اضغط OK للشراء عبر واتساب\nاضغط Cancel للشراء عبر تليجرام");

    if (choose) {
        // واتساب
        window.open(`https://wa.me/${phone}?text=${encoded}`);
    } else {
        // تليجرام
        window.open(`https://t.me/${telegramUser}?text=${encoded}`);
    }
}
