import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { useSignIn } from "../../hooks/Sign/useSignIn";

type FormSignInProps = ReturnType<typeof useSignIn>;

export const FormSignIn = ({
  control,
  errors,
  onSubmit,
  isSubmitting,
}: FormSignInProps) => {
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
          Entrar
        </Typography>
        <Typography component={"p"} variant="body1">
          Preencha o formulário para entrar na sua conta
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
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Digite seu email"
              label="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              disabled={isSubmitting}
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
          Ainda não possui uma conta?
        </Typography>
        <Link href="/sign/up" variant="body2">
          Criar uma conta
        </Link>
      </Box>
    </Box>
  );
};
