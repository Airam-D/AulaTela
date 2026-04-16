// Importações
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from '../assets/types/navigation';


type ApresentacaoNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Apresentacao'>;

export default function Apresentacao() {
    const navigation = useNavigation<ApresentacaoNavigationProp>();

    const aoPressionar = () => {
        console.log("🚀 O botão foi apertado com sucesso!");
    };


    return (
        <LinearGradient
            colors={['#003681ff', '#00A5FF', '#003681ff']}
            style={styles.container}
        >
            {/* --- TOPO: Botão de Login --- */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.buttonEntrar}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonTextSmall}>Voltar</Text>
                </TouchableOpacity>
            </View>

            {/* --- CENTRO: Logo e Frase --- */}
            <View style={styles.centerContainer}>
                <Image
                    source={require("../assets/images/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.text}>
                    Transformando vidas através da tecnologia
                </Text>
            </View>

            {/* --- BASE: Botão de Projetos --- */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.buttonProjetos}
                    onPress={aoPressionar}
                >
                    <Text style={styles.buttonText}>Conhecer projetos</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between", // Empurra os blocos para as extremidades
        paddingVertical: 50,
    },
    header: {
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'flex-start', // Alinha o botão de login à esquerda
    },
    centerContainer: {
        alignItems: 'center',
        width: '100%',
    },
    logo: {
        width: 300,
        height: 150,
        marginBottom: 20,
    },
    text: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal: 20,
    },
    footer: {
        width: '100%',
        alignItems: 'center',
    },
    buttonEntrar: {
        backgroundColor: '#00d4ff',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    buttonProjetos: {
        backgroundColor: '#00d4ff',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    buttonText: {
        color: '#003681',
        fontWeight: 'bold',
        fontSize: 18,
    },
    buttonTextSmall: {
        color: '#003681',
        fontWeight: 'bold',
        fontSize: 14,
    },
    headerContainer: {
        alignItems: 'center',
        width: '100%',
    },
});