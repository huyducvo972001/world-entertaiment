export const MoneyFormat = (number) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);

export const NumberFormat = (number) => new Intl.NumberFormat().format(number);
