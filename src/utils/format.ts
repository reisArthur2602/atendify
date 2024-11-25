const DateToDDMMYYYY = (date: Date) =>
  new Intl.DateTimeFormat("pt-BR").format(date);

const CPF = (cpf: string): string => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

const Capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Phone = (celular: string): string => {
  return celular.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};

const Status = (status: boolean) => {
  switch (status) {
    case true:
      return "Finalizada";
    case false:
      return "Em Aberto";
  }
};

export const formatUtils = { DateToDDMMYYYY, CPF, Phone, Capitalize, Status };
