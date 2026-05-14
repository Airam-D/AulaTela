import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

// 1. COMPONENTE DE INTERFACE
// Adicionei a prop 'onPress' para o botão interno
const ONGCard = ({ item, onPress }: { item: any, onPress: () => void }) => (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <View style={[styles.iconContainer, { backgroundColor: item.color + '20' }]}>
                <MaterialIcons name={item.icon as any} size={28} color={item.color} />
            </View>
        </View>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardCause}>{item.cause}</Text>

        {/* BOTÃO ADICIONADO AQUI */}
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Mostrar detalhes</Text>
            <MaterialIcons name="chevron-right" size={20} color="#fff" />
        </TouchableOpacity>
    </View>
);

export default function ExplorarTab() {
    const [loading, setLoading] = useState(true);
    const [listaOngs, setListaOngs] = useState<any[]>([]);
    const isFocused = useIsFocused();

    const dadosOngs = [
        { id: '1', name: 'ONG Água Limpa', cause: 'Saneamento Básico', icon: 'water', color: '#4ECDC4', desc: 'Trabalhamos para levar água potável a comunidades isoladas.' },
        { id: '2', name: 'Instituto Educação', cause: 'Educação', icon: 'school', color: '#95E1D3', desc: 'Reforço escolar e distribuição de material didático.' },
        { id: '3', name: 'Rede Solidária', cause: 'Assistência Social', icon: 'people', color: '#FFE66D', desc: 'Apoio a famílias em situação de vulnerabilidade extrema.' },
    ];

    const mostrarDetalhes = (ong: any) => {
        Alert.alert(
            ong.name,
            `${ong.desc}\n\nCausa: ${ong.cause}`,
            [
                { text: "Fechar", style: "cancel" },
                { text: "Quero Ajudar!", onPress: () => console.log("Interesse na ONG: " + ong.name) }
            ]
        );
    };

    useEffect(() => {
        if (isFocused) {
            setLoading(true);
            const timer = setTimeout(() => {
                setListaOngs(dadosOngs);
                setLoading(false);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isFocused]);

    if (loading) {
        return (
            <LinearGradient colors={['#001a4d', '#003681']} style={styles.fullScreen}>
                <ActivityIndicator size="large" color="#00d4ff" />
                <Text style={styles.loadingText}>Carregando ONGs</Text>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient colors={['#001a4d', '#003681', '#00A5FF']} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Explorar</Text>
            </View>

            <FlatList
                data={listaOngs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    /* Removi o TouchableOpacity de volta do card para o clique ser apenas no botão */
                    <ONGCard item={item} onPress={() => mostrarDetalhes(item)} />
                )}
                contentContainerStyle={styles.listContent}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1 
    },
    fullScreen: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    loadingText: { 
        color: '#fff', 
        marginTop: 20, 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    header: { 
        padding: 24, 
        paddingTop: 60 
    },
    title: { 
        fontSize: 32, 
        fontWeight: '800', 
        color: '#fff' 
    },
    listContent: { 
        padding: 20 
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
        elevation: 4,
    },
    cardHeader: { marginBottom: 10 },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardTitle: { 
        fontSize: 18, 
        fontWeight: '700', 
        color: '#001a4d' 
    },
    cardCause: { 
        fontSize: 14, 
        color: '#666', 
        marginBottom: 15 
    },
    // NOVOS ESTILOS PARA O BOTÃO
    button: {
        backgroundColor: '#003681',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 12,
        marginTop: 5
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 5
    }
});