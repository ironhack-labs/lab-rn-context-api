export const formatCurrency = (value: string) =>
  parseFloat(value).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
