import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContent from './(Auth)/AuthContent';
import HomeContent from './(Home)/HomeContent';

export default function App() {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const session = await AsyncStorage.getItem('user_session');
      setIsLogged(!!session);
    };
    checkSession();
  }, []);

  if (isLogged === null) return null; // Tela de carregamento opcional

  return isLogged ? (
    <HomeContent onLogout={() => setIsLogged(false)} />
  ) : (
    <AuthContent onLoginSuccess={() => setIsLogged(true)} />
  );
}
