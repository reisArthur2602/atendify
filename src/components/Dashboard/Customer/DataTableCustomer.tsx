import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";

import { DeleteCustomerDialog } from "./DeleteCustomerDialog";
import { DetailsCustomerDialog } from "./DetailsCustomerDialog";
import { formatUtils } from "../../../utils/format";
import { Customer } from "../../../types/Customer";

type DataTableCustomerProps = {
  customers: Customer[] | [];
  onDelete: (id: string) => Promise<void>;
};

export const DataTableCustomer = ({
  customers,
  onDelete,
}: DataTableCustomerProps) => {
  const hasCustomers = customers.length > 0;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Nome</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Telefone</TableCell>
          <TableCell>Cadastro</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {hasCustomers ? (
          customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.id}</TableCell>
              <TableCell>{formatUtils.Capitalize(customer.name)}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>
                {formatUtils.DateToDDMMYYYY(new Date(customer.created_at))}
              </TableCell>
              <TableCell>
                <Box display={"flex"} gap={2}>
                  <DeleteCustomerDialog
                    onDelete={() => onDelete(customer.id)}
                  />
                  <DetailsCustomerDialog customer={customer} />
                </Box>
              </TableCell>
            </TableRow>
          ))
        ) : (
          // Exibe uma mensagem caso não existam dados
          <TableRow>
            <TableCell colSpan={3} align="center">
              <Box p={2}>
                <Typography>Nenhum cliente foi encontrada</Typography>
              </Box>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
