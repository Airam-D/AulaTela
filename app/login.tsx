import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from '../assets/types/navigation';

type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
    const navigation = useNavigation<LoginNavigationProp>();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        // Verifica se o e-mail tem '@' e(&&) a senha tem mais de 6 caracteres
        if (email.includes('@') && senha.length > 6) {
            navigation.navigate('Dashboard', { userName: email, voluntarioId: 'ID-' + Math.random().toString() }); // enviando o nome capturado e um ID gerado aleatoriamente.

                // Exibe no console que o acesso foi permitido
                console.log("✅ Acesso autorizado para:", email);

        } else {
            // Exibe no console que o login falhou por dados inválidos
            console.log("❌ Falha no login: E-mail inválido ou senha muito curta.");
        }
    };

    return (
        <LinearGradient colors={['#003681ff', '#00A5FF', '#003681ff']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={require("../assets/images/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            {/* --- CENTRO: Formulário --- */}
            <View style={styles.formulario}>
                <Text style={styles.formTitle}>Faça seu login</Text>
                {email.length > 0 && (
                    <Text style={styles.feedbackTexto}>
                        Logando como: <Text style={{ fontWeight: 'bold' }}>{email}</Text>
                    </Text>
                )}
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
            </View>
            {/* --- BASE: Botão de Ação --- */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
                    <Text style={styles.buttonTextEntrar}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between", // Distribui Topo, Centro e Base
        paddingVertical: 50, // Espaçamento para não colar nas bordas da tela
    },
    headerContainer: {
        alignItems: 'center',
        width: '100%',
    },
    buttonVoltar: {
        position: 'absolute',
        top: 0,
        left: 20,
        backgroundColor: '#00d4ff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        zIndex: 10,
    },
    logo: {
        width: 250,
        height: 100,
        marginTop: 40, // Espaço para não bater no botão voltar
    },
    formulario: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        width: '85%',
        elevation: 5,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.12)',
    },
    formTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        padding: 10,
        fontSize: 16,
    },
    footer: {
        width: '100%',
        alignItems: 'center',
    },
    buttonEntrar: {
        backgroundColor: '#00d4ff',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 10,
    },
    buttonTextEntrar: {
        color: '#003681',
        fontWeight: 'bold',
        fontSize: 18,
    },
    buttonText: {
        color: '#003681',
        fontWeight: 'bold',
    },
    feedbackTexto: {
        fontSize: 12,
        color: '#666',
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        padding: 5,
        borderRadius: 5,
        textAlign: 'center',
    },
});