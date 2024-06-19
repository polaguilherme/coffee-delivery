export function formattCurrency(
  price: number,
  locale = "pt-BR",
  currency: "BRL" = "BRL"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(price);
}
