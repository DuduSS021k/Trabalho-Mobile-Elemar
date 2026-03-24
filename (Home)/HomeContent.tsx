import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeLayout from './HomeLayout';

export default function HomeContent({ onLogout }: { onLogout: () => void }) {
  const [phrase, setPhrase] = useState('Buscando inspiração...');
  const [author, setAuthor] = useState('');

  // Lista de frases em Português (Garante que o trabalho funcione offline e sem erros)
  const frasesPT = [
    { q: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", a: "Robert Collier" },
    { q: "Acredite que você pode e você já está no meio do caminho.", a: "Theodore Roosevelt" },
    { q: "A persistência é o caminho do êxito.", a: "Charles Chaplin" },
    { q: "No meio da dificuldade encontra-se a oportunidade.", a: "Albert Einstein" },
    { q: "Sua única limitação é aquela que você impõe em sua própria mente.", a: "Napoleon Hill" },
    { q: "Não espere por circunstâncias ideais. Elas nunca chegam.", a: "Janet Erskine Stuart" },
    { q: "Feito é melhor que perfeito.", a: "Sheryl Sandberg" },
    { q: "A coragem não é a ausência do medo, mas o triunfo sobre ele.", a: "Nelson Mandela" },
    { q: "A única maneira de fazer um excelente trabalho é amar o que você faz.", a: "Steve Jobs" },
    { q: "Comece onde você está. Use o que você tem. Faça o que puder.", a: "Arthur Ashe" }
  ];

  const getPhrase = () => {
    // Sorteia uma frase da nossa lista
    const indiceAleatorio = Math.floor(Math.random() * frasesPT.length);
    const sorteada = frasesPT[indiceAleatorio];
    
    setPhrase(sorteada.q);
    setAuthor(sorteada.a);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user_session');
    onLogout();
  };

  // Carrega uma frase assim que a tela abre
  useEffect(() => { 
    getPhrase(); 
  }, []);

  return (
    <HomeLayout 
      phrase={phrase} 
      author={author} 
      onRefresh={getPhrase} 
      onLogout={handleLogout} 
    />
  );
}
