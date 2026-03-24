import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

interface HomeProps {
  phrase: string;
  author: string;
  onRefresh: () => void;
  onLogout: () => void;
}

export default function HomeLayout({ phrase, author, onRefresh, onLogout }: HomeProps) {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Inspiração do Dia</Text>
        <TouchableOpacity onPress={onLogout} style={s.logoutBtn}>
          <Text style={s.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={s.content}>
        <Text style={s.quoteSymbol}>“</Text>
        <Text style={s.phrase}>{phrase}</Text>
        <Text style={s.author}>— {author}</Text>
      </View>

      <TouchableOpacity style={s.mainBtn} onPress={onRefresh}>
        <Text style={s.mainBtnText}>Nova Frase ✨</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1E293B' },
  logoutText: { color: '#EF4444', fontWeight: 'bold' },
  logoutBtn: { padding: 5 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 },
  quoteSymbol: { fontSize: 80, color: '#6366F1', marginBottom: -30, opacity: 0.3 },
  phrase: { fontSize: 24, textAlign: 'center', color: '#334155', fontStyle: 'italic', lineHeight: 34 },
  author: { fontSize: 16, marginTop: 20, color: '#64748B', fontWeight: 'bold' },
  mainBtn: { backgroundColor: '#6366F1', padding: 20, borderRadius: 15, alignItems: 'center', marginBottom: 30 },
  mainBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});
