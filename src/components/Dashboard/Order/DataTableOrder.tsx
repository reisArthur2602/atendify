import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Order } from "../../../types/Order";
import { DetailsOrderDialog } from "./DetailsOrderDialog";
import { DeleteOrderDialog } from "./DeleteOrderDialog";
import { formatUtils } from "../../../utils/format";

type DataTableOrderProps = {
  orders: Order[] | [];
  onDelete: (id: string) => Promise<void>;
};

export const DataTableOrder = ({ onDelete, orders }: DataTableOrderProps) => {

  const hasOrders = orders.length > 0;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Cliente</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Cadastro</TableCell>
          <TableCell>Status</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {hasOrders ? (
          orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.clientId}</TableCell>
              <TableCell>
                {formatUtils.Capitalize(order.category.name)}
              </TableCell>
              <TableCell>
                {formatUtils.DateToDDMMYYYY(new Date(order.created_at))}
              </TableCell>
              <TableCell>{formatUtils.Status(order.status)}</TableCell>
              <TableCell>
                <Box display={"flex"} gap={2}>
                  <DeleteOrderDialog onDelete={() => onDelete(order.id)} />
                  <DetailsOrderDialog order={order} />
                </Box>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} align="center">
              <Box p={2}>
                <Typography>Nenhum chamado foi encontrado</Typography>
              </Box>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
