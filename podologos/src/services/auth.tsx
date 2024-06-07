import { api } from "./api";
import ToastManager, { Toast } from "toastify-react-native";
interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

type User = {
  email: string;
  password: string;
};

export async function signIn({ email, password }: User) {
  try {
    const user = { email: email, password: password };
    Toast.info("Aguarde...", "");
    const response = await api.post("/auth/signin", user, {
      withCredentials: true,
    });
    Toast.success("Sucesso ao logar");
    return response.data;
  } catch (error) {
    Toast.error("Erro no login", "");
    console.log(error);
  }
}
