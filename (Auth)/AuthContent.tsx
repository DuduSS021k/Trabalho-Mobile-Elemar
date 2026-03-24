import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthLayout from './AuthLayout';

export default function AuthContent({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    if (!email || !pass) return Alert.alert("Aviso", "Preencha tudo!");

    if (isLogin) {
      const storedPass = await AsyncStorage.getItem(`user_${email}`);
      if (storedPass === pass) {
        await AsyncStorage.setItem('user_session', email);
        onLoginSuccess();
      } else {
        Alert.alert("Erro", "Dados incorretos.");
      }
    } else {
      await AsyncStorage.setItem(`user_${email}`, pass);
      Alert.alert("Sucesso", "Usuário salvo! Faça login agora.");
      setIsLogin(true);
    }
  };

  return (
    <AuthLayout 
      email={email} setEmail={setEmail} 
      pass={pass} setPass={setPass} 
      isLogin={isLogin} onAction={handleAuth} 
      setIsLogin={setIsLogin} 
    />
  );
}