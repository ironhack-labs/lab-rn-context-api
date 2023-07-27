export const formatCurrency = (number: string | number) => {
  const formattedNumber = Number(number).toFixed(2);

  const [integerPart, decimalPart] = formattedNumber.split('.');

  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const formattedCurrency = `$${integerWithCommas}.${decimalPart}`;

  return formattedCurrency;
};
