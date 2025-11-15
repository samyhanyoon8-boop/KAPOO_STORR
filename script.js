function buy(product, price, data) {
  let message = `🚀 طلب شراء\n\nالمنتج: ${product}\nالسعر: ${price}`;

  if (data && data.trim() !== "") {
    message += `\nالبيانات: ${data}`;
  }

  let encoded = encodeURIComponent(message);

  // رقم الواتساب
  let phone = "201284070117";

  // لينك التيلجرام
  let telegramUser = "K_A_P_OO7";

  // يسأل الزبون يفتح إيه
  let choose = confirm("اضغط OK للواتساب\nواضغط Cancel للتليجرام");

  if (choose) {
    // واتساب
    window.open(`https://wa.me/${phone}?text=${encoded}`);
  } else {
    // تيلجرام
    window.open(`https://t.me/${telegramUser}?text=${encoded}`);
  }
}
