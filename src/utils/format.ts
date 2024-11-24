const DateToDDMMYYYY = (date: Date) =>
  new Intl.DateTimeFormat("pt-BR").format(date);

export const formatUtils = { DateToDDMMYYYY };
