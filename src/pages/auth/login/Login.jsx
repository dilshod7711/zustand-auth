import { Button, Paper, Title, TextInput, PasswordInput } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { AUTH } from "../../../API/api";
import useAuthStore from "../../../store/authStore";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required("Username majburiy"),
    password: yup
      .string()
      .min(6, "Password kamida 6 ta belgidan iborat bo'lishi kerak")
      .required("Password majburiy"),
  })
  .required();

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutate: loginMutate, isLoading } = useMutation({
    mutationFn: (body) => AUTH.post("/auth/login", body),
    onSuccess: (res) => {
      login(res.data);
      notifications.show({
        title: "Login muvaffaqiyatli!",
        color: "green",
      });
      navigate("/profile");
    },
    onError: (err) => {
      notifications.show({
        title: err?.response?.data?.message || "Xatolik yuz berdi",
        color: "red",
      });
    },
  });

  const onSubmit = (data) => {
    loginMutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Paper shadow="xl" p={40} radius="md" className="w-full max-w-sm">
        <Title order={2} align="center" mb={30}>
          Login
        </Title>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <TextInput
            {...register("username")}
            placeholder="Username kiriting"
            error={errors.username?.message}
          />
          <PasswordInput
            {...register("password")}
            placeholder="Password kiriting"
            error={errors.password?.message}
          />
          <Button type="submit" fullWidth loading={isLoading}>
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
