import React, { createContext, useState } from "react";
import * as auth from "../services/auth";

type User = {
  email: string;
};

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  signOut(): void;
}
type SignInData = {
  email: string;
  password: string;
};

type RegisterData = {
  profile_picture: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  cep: string;
  password: string;
};

type Response = {
  token: string;
  user: User;
};
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const signed = !!user;


  async function signIn({ email, password }: SignInData) {
    const { user } = (await auth.signIn({
      email,
      password,
    })) as Response;
    setUser(user);
  }

  
  async function register({
    profile_picture,
    first_name,
    last_name,
    phone_number,
    cep,
    password,
    email,
  }: RegisterData) {
    const { user } = (await auth.register({
      profile_picture,
      first_name,
      last_name,
      phone_number,
      cep,
      password,
      email,
    })) as Response;
    setUser(user);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed, user, register, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
