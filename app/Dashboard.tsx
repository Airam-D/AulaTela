// Criar o dashboard
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../assets/types/navigation';

// Definição dos tipos para as rotas
type DashboardNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
type DashboardRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

export default function Dashboard() {
    const navigation = useNavigation<DashboardNavigationProp>();
    const route = useRoute<DashboardRouteProp>();

    // Mantendo exatamente como você fez
    const { userName, voluntarioId } = route.params || { userName: 'Usuário', voluntarioId: 'ID-desconhecido' };

    return (
        <LinearGradient colors={['#003681ff', '#00A5FF', '#003681ff']} style={styles.container}>

            {/* Caixa (Card) branca centralizada */}
            <View style={styles.card}>

                {/* Texto de boas-vindas dentro da box */}
                <Text style={styles.welcomeText}>
                    Olá, <Text style={styles.userNameHighlight}>{userName}</Text>,{'\n'}que bom ter você aqui para ajudar!
                </Text>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonDanger]} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}>
                        <Text style={styles.buttonText}>Sair (Redefinir)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={() => navigation.navigate('Apresentacao')}>
                        <Text style={styles.buttonText}>Conhecer a ONG</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center", // Centraliza a box no meio da tela
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: 400, // Limite para não ficar muito largo no navegador
        padding: 25,
        borderRadius: 20,
        alignItems: 'center',
        // Sombras
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10,
    },
    welcomeText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333',
        marginBottom: 30,
        lineHeight: 24,
    },
    userNameHighlight: {
        fontWeight: 'bold',
        color: '#003681',
    },
    buttonGroup: {
        width: '100%',
        gap: 12, // Espaço entre os botões
    },
    button: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPrimary: {
        backgroundColor: '#00A5FF',
    },
    buttonSecondary: {
        backgroundColor: '#F0F0F0',
    },
    buttonDanger: {
        backgroundColor: '#E33535',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#003681',
    },
});