import {
  Button,
  Container,
  PasswordInput,
  Text,
  TextInput,
  Paper,
  Title,
} from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { AUTH } from "../../../API/api";
import useAuthStore from "../../../store/authStore";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const { mutate: loginMutate, isLoading } = useMutation({
    mutationFn: (body) => AUTH.post("/auth/login", body),
    onSuccess: (res) => {
      login(res);
      notifications.show({
        title: "Login muvaffaqiyatli!",
        color: "green",
      });
      navigate("/profile");
    },
    onError: (err) => {
      notifications.show({
        title: err?.response?.data?.message || "Xatolik",
        color: "red",
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    loginMutate(newUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Paper shadow="xl" p={40} radius="md" className="w-full max-w-sm">
        <Title order={2} align="center" mb={30}>
          Login
        </Title>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextInput name="username" placeholder="Username kiriting" required />
          <PasswordInput
            name="password"
            placeholder="Password kiriting"
            required
          />
          <Button type="submit" fullWidth loading={isLoading}>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
