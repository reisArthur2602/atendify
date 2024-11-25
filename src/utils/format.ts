const DateToDDMMYYYY = (date: Date) =>
  new Intl.DateTimeFormat("pt-BR").format(date);

const CPF = (cpf: string): string => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};


const Phone = (celular: string): string => {
  return celular.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};

export const formatUtils = { DateToDDMMYYYY, CPF, Phone };
