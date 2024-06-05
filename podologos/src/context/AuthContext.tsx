"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { recoverUserInformation, SignInRequest } from "../services/auth";
import { api } from "../services/api";

type User = {
  birthdate: any;
  contact_method: string;
  creation_date: string;
  edition_date: string;
  email: string;
  first_name: string;
  is_active: boolean;
  last_access_date: string;
  profile_picture_url: string;
  resetPasswordExpires: any;
  resetPasswordToken: any;
  User_Subject: any;
  surname: string;
  telephone: string;
  user_id: number;
  username: string;
  students: any;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  reloadUserInformation: () => Promise<void>;
};

type SignInResponse = {
  token: string;
  user: User;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  /* console.log(user, "user"); */

  const isAuthenticated = !!user;

  async function reloadUserInformation() {
    recoverUserInformation().then((response: any) => {
      /* console.log(response, "user"); */
      if (response?.user) {
        setUser(response.user);
      }
    });
  }

  async function signIn({ email, password }: SignInData) {
    const { user } = (await SignInRequest({
      email,
      password,
    })) as SignInResponse;

    setUser(user);
    await reloadUserInformation();
  }

  useEffect(() => {
    reloadUserInformation();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, reloadUserInformation }}
    >
      {children}
    </AuthContext.Provider>
  );
}
