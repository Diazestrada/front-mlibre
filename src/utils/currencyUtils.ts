export const formatCurrency = (amount: number) => {
  const price = new Intl.NumberFormat("es-AR").format(amount);
  return `$ ${price}`;
};
