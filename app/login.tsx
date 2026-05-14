import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from "react-native";
import { RootStackParamList } from '../assets/types/navigation';

type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const { width } = Dimensions.get('window');

export default function Login() {
    const navigation = useNavigation<LoginNavigationProp>();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        if (email.includes('@') && senha.length > 6) {
            navigation.navigate('Dashboard', { userName: email, voluntarioId: 'ID-' + Math.random().toString() });
            console.log("✅ Acesso autorizado");
        } else {
            console.log("❌ Falha no login");
        }
    };

    return (
        <View style={styles.background}>
            <View style={styles.card}>
                {/* LADO ESQUERDO: Branding (Escondido em telas muito pequenas se necessário) */}
                <View style={styles.brandSide}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode="cover"
                    />
                    <Text style={styles.welcomeText}>Bem-vindo à{"\n"}<Text style={styles.brandName}>Abraço Global</Text></Text>
                    <Text style={styles.subText}>Sua ajuda faz a diferença no mundo.</Text>
                </View>

                {/* LADO DIREITO: Formulário */}
                <View style={styles.formSide}>
                    <Text style={styles.formTitle}>Login</Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="nome@email.com"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="........"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Acessar Painel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#0a252e', // Azul bem escuro como no exemplo
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flexDirection: width > 600 ? 'row' : 'column', // Fica horizontal no PC e vertical no Celular
        backgroundColor: '#fff',
        width: width > 900 ? '60%' : '90%',
        maxWidth: 1000,
        height: 500,
        borderRadius: 20,
        overflow: 'hidden', // Garante que o fundo do lado esquerdo respeite o arredondamento
        elevation: 10,
    },
    brandSide: {
        flex: 1,
        backgroundColor: '#12313b', // Tom levemente diferente para o lado da logo
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    formSide: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 30,
    },
    brandName: {
        color: '#00d4ff', // Cor de destaque
        fontWeight: 'bold',
        fontSize: 28,
    },
    subText: {
        color: '#ccc',
        marginTop: 10,
        textAlign: 'center',
    },
    formTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#12313b',
        marginBottom: 30,
        borderBottomWidth: 3,
        borderBottomColor: '#00d4ff',
        alignSelf: 'flex-start',
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#12313b',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: '#003681', // Cor do botão inspirada no seu tema original
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});