import React, { createContext, useState } from "react";
import * as auth from "../services/auth";

type User = {
  email: string;
};

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  signOut(): void;
}
type SignInData = {
  email: string;
  password: string;
};

type signInResponse = {
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
    })) as signInResponse;
    setUser(user);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
