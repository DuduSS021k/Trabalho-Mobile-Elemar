import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

interface AuthProps {
  email: string; setEmail: (t: string) => void;
  pass: string; setPass: (t: string) => void;
  isLogin: boolean; onAction: () => void;
  setIsLogin: (v: boolean) => void;
}

export default function AuthLayout({ email, setEmail, pass, setPass, isLogin, onAction, setIsLogin }: AuthProps) {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={s.container}>
      <View style={s.card}>
        <Text style={s.title}>{isLogin ? 'MotivApp Login' : 'Criar Conta'}</Text>
        <TextInput style={s.input} placeholder="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" />
        <TextInput style={s.input} placeholder="Senha" value={pass} onChangeText={setPass} secureTextEntry />
        
        <TouchableOpacity style={s.button} onPress={onAction}>
          <Text style={s.buttonText}>{isLogin ? 'Entrar' : 'Cadastrar'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={s.link}>{isLogin ? 'Ainda não tem conta? Clique aqui' : 'Já possui conta? Entre'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#6366F1', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#FFF', padding: 25, borderRadius: 25, elevation: 10 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#F3F4F6', padding: 15, borderRadius: 12, marginBottom: 15 },
  button: { backgroundColor: '#4338CA', padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  link: { color: '#6366F1', textAlign: 'center', marginTop: 20, fontWeight: '500' }
});