import React, { createContext, useEffect, useState } from 'react';
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/axios';

type User = {
  first_name?: string;
  last_name?: string;
  email: string;
  phone_number?: string;
  cep?: string;
  doctor_id?: number;
};

interface AuthContextData {
  signed: boolean;
  user: User | null;
  token: string;
  signIn: (data: SignInData) => Promise<void>;
  signOut(): void;
  setUser?: any;
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
  const [token, setToken] = useState('');

  async function signIn({ email, password }: SignInData) {
    try {
      console.log('Iniciando signIn com:', { email, password });
      const response = await auth.signIn({ email, password });
      console.log('Testando token:', response.token);
      if (response?.token) {
        await AsyncStorage.setItem('@LIFE:token', response.token);
        setToken(response.token);
        await GetUser();
      } else {
        console.log('Erro: Resposta da API não contém token');
      }
    } catch (error) {
      console.log('Erro durante o login:', error.message);
    }
  }

  async function GetUser() {
    try {
      const response = await api.get('/user');
      const data = response.data;
      setUser({
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        cep: data.cep,
        doctor_id: data.doctor_id,
      });
    } catch (error) {
      console.log('Erro ao buscar dados do usuário:', error);
    }
  }

  function signOut() {
    AsyncStorage.removeItem('@LIFE:token');
    setUser(null);
    setToken('');
  }

  useEffect(() => {
    // Tenta obter o token do armazenamento e buscar o usuário quando o aplicativo inicia
    async function initialize() {
      const storedToken = await AsyncStorage.getItem('@LIFE:token');
      if (storedToken) {
        setToken(storedToken);
        await GetUser(); // Obtém o usuário com o token armazenado
      }
    }
    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed, user, setUser, signIn, signOut, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
