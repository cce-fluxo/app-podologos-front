import { api } from "./api";
import { Toast } from "toastify-react-native";
import { IncomingMessage, ServerResponse } from "http";

type User = {
  email: string;
  password: string;
};

export async function SignInRequest({ email, password }: User) {
  try {
    const user = { email: email, password: password };
    const response = await api.post("/auth/signin", user, {
      withCredentials: true,
    });

    return response.data;
  } catch (error: any) {
    error?.response?.data?.message[0];
    console.log(error);
  }
}

export async function recoverUserInformation() {
  try {
    const { data } = await api.get("/auth/me", {
      withCredentials: true,
    });
    /* console.log(data, "me"); */
    return data;
  } catch (error) {
    console.log(error);
  }
}
