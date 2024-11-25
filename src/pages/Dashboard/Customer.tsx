import { Box, Typography } from "@mui/material";
import { FormDialogCustomer } from "../../components/Dashboard/Customer/FormDialogCustomer";
import { UseCustomer } from "../../hooks/Dashboard/useCustomer";
import { DataTableCustomer } from "../../components/Dashboard/Customer/DataTableCustomer";

const Customer = () => {
  const {
    control,
    errors,
    isSubmitting,
    onSubmit,
    handleDeleteCustomer,
    customers,
  } = UseCustomer();
  return (
    <Box padding={4}>
      <Box display={"flex"} justifyContent={"space-between"} marginBottom={6}>
        <Box>
          <Typography component={"h1"} variant="h4">
            Meus Clientes
          </Typography>
          <Typography component={"p"} variant="body1">
            Gerencie os clientes cadastrados no sistema
          </Typography>
        </Box>

        <FormDialogCustomer
          control={control}
          errors={errors}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
        />
      </Box>
      <DataTableCustomer
        customers={customers}
        onDelete={handleDeleteCustomer}
      />
    </Box>
  );
};

export default Customer;
