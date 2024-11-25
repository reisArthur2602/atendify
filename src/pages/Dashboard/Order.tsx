import { Box, Typography } from "@mui/material";
import { FormDialogOrder } from "../../components/Dashboard/Order/FormDialogOrder";
import { UseOrder } from "../../hooks/Dashboard/useOrder";
import { useEffect, useState } from "react";
import { Category } from "../../types/Category";
import { CategoryServices } from "../../services/Category";

import { CustomerServices } from "../../services/Customer";
import { Customer } from "../../types/Customer";
import { DataTableOrder } from "../../components/Dashboard/Order/DataTableOrder";

const Order = () => {
  const { orders, handleDeleteOrder, handleFinishOrder,...form } = UseOrder();

  const [categories, setCategories] = useState<Category[] | []>([]);
  const [customers, setCustomers] = useState<Customer[] | []>([]);

  const getCategoriesAndCustomers = async () => {
    const [categoryResponse, customerResponse] = await Promise.all([
      CategoryServices.Get(),
      CustomerServices.Get(),
    ]);

    setCategories(categoryResponse);
    setCustomers(customerResponse);
  };

  useEffect(() => {
    getCategoriesAndCustomers();
  }, []);

  return (
    <Box padding={4}>
      <Box display={"flex"} justifyContent={"space-between"} marginBottom={6}>
        <Box>
          <Typography component={"h1"} variant="h4">
            Meus Chamados
          </Typography>
          <Typography component={"p"} variant="body1">
            Gerencie os chamados do sistema
          </Typography>
        </Box>

        <FormDialogOrder
          {...form}
          categories={categories}
          customers={customers}
        />
      </Box>
      <DataTableOrder orders={orders} onDelete={handleDeleteOrder} onFinish={handleFinishOrder} />
    </Box>
  );
};

export default Order;
