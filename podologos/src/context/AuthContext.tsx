import React, { createContext, useState } from "react";
import * as auth from "../services/auth";

interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
  signOut(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
