import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useSignUp } from "../../hooks/Sign/useSignUp";

type FormSignUpProps = ReturnType<typeof useSignUp>;

export const FormSignUp = ({
  control,
  errors,
  onSubmit,
  isSubmitting,
}: FormSignUpProps) => {
  return (
    <Box
      component={"div"}
      display={"flex"}
      flexDirection={"column"}
      gap={6}
      maxWidth={"440px"}
      width={"100%"}
    >
      <Box component={"div"} display={"flex"} flexDirection={"column"}>
        <Typography component={"h2"} variant="h2">
          Cadastrar
        </Typography>
        <Typography component={"p"} variant="body1">
          Preencha o formulário para criar sua conta
        </Typography>
      </Box>

      <Box
        component={"form"}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        onSubmit={onSubmit}
      >
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              placeholder="Digite o seu nome"
              {...field}
              label="Nome"
              error={!!errors.username}
              helperText={errors.username?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Digite o seu email"
              label="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="******"
              label="Senha"
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
              type="password"
              disabled={isSubmitting}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={isSubmitting}
        >
          Acessar
        </Button>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        gap={0.5}
        justifyContent={"center"}
      >
        <Typography component={"p"} variant="body2">
          Já possui uma conta?
        </Typography>
        <Link href="/sign/in" variant="body2">
          Faça login
        </Link>
      </Box>
    </Box>
  );
};
