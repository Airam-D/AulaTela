import { MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert, Platform } from 'react-native';
import { RootStackParamList } from '../../assets/types/navigation';

type PerfilRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

export default function PerfilTab() {
    const route = useRoute<PerfilRouteProp>();
    const { userName = 'Voluntário' } = route.params || {};

    const scaleAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const isWeb = Platform.OS === 'web';
        Animated.parallel([
            Animated.spring(scaleAnim, {
                toValue: 1,
                useNativeDriver: !isWeb,
            }),
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: !isWeb,
            }),
        ]).start();
    }, [scaleAnim, opacityAnim]);

    const achievements = [
        { icon: 'star', title: 'Iniciante', desc: 'Primeiro voluntariado' },
        { icon: 'trending-up', title: 'Progressista', desc: '50 horas' },
        { icon: 'favorite', title: 'Altruísta', desc: 'Adora ajudar' },
    ];

    const handleEditarInteresses = () => {
        console.log("Botão pressionado!");
        Alert.alert(
            "Editar Interesses", // Título
            "Quais causas você prefere ajudar?", // Mensagem
            [
                {
                    text: "Educação",
                    onPress: () => console.log("Causa selecionada: Educação")
                },
                {
                    text: "Meio Ambiente",
                    onPress: () => console.log("Causa selecionada: Meio Ambiente")
                },
                {
                    text: "Saúde",
                    onPress: () => console.log("Causa selecionada: Saúde")
                },
                {
                    text: "Cancelar",
                    style: "destructive" // Fica vermelho no iOS
                }
            ]
        );
    };

    return (
        <LinearGradient colors={['#001a4d', '#003681', '#00A5FF']} style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Profile Header */}
                <Animated.View
                    style={[
                        styles.profileHeader,
                        {
                            transform: [{ scale: scaleAnim }],
                            opacity: opacityAnim,
                        },
                    ]}
                >
                    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.avatarGradient}>
                        <Text style={styles.avatarText}>{userName.charAt(0).toUpperCase()}</Text>
                        <View style={styles.onlineIndicator} />
                    </LinearGradient>
                    <Text style={styles.profileName}>{userName}</Text>
                    <Text style={styles.profileRole}>Voluntário Ativo</Text>
                    <View style={styles.verifiedBadge}>
                        <MaterialIcons name="verified" size={16} color="#00A5FF" />
                        <Text style={styles.verifiedText}>Perfil Verificado</Text>
                    </View>
                </Animated.View>

                {/* Stats Cards */}
                <View style={styles.statsContainer}>
                    <Animated.View
                        style={[styles.statBox, { opacity: opacityAnim }]}
                    >
                        <LinearGradient colors={['#FF6B6B20', '#FF6B6B05']} style={styles.statBoxGradient}>
                            <MaterialIcons name="favorite" size={32} color="#FF6B6B" />
                            <Text style={styles.statValue}>12</Text>
                            <Text style={styles.statLabel}>Horas de Voluntariado</Text>
                        </LinearGradient>
                    </Animated.View>

                    <Animated.View
                        style={[styles.statBox, { opacity: opacityAnim }]}
                    >
                        <LinearGradient colors={['#4ECDC420', '#4ECDC405']} style={styles.statBoxGradient}>
                            <MaterialIcons name="people" size={32} color="#4ECDC4" />
                            <Text style={styles.statValue}>3</Text>
                            <Text style={styles.statLabel}>Projetos</Text>
                        </LinearGradient>
                    </Animated.View>
                </View>

                {/* Info Section */}
                <Text style={styles.sectionTitle}>Informações Pessoais</Text>
                <LinearGradient colors={['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.05)']} style={styles.infoCard}>
                    <View style={styles.infoRow}>
                        <View style={styles.infoLeft}>
                            <MaterialIcons name="email" size={20} color="#00A5FF" />
                            <Text style={styles.infoLabel}>E-mail</Text>
                        </View>
                        <Text style={styles.infoValue}>{userName}</Text>
                    </View>

                    <View style={styles.infoDivider} />

                    <View style={styles.infoRow}>
                        <View style={styles.infoLeft}>
                            <MaterialIcons name="location-on" size={20} color="#4ECDC4" />
                            <Text style={styles.infoLabel}>Localização</Text>
                        </View>
                        <Text style={styles.infoValue}>São Paulo, SP</Text>
                    </View>

                    <View style={styles.infoDivider} />

                    <View style={styles.infoRow}>
                        <View style={styles.infoLeft}>
                            <MaterialIcons name="calendar-today" size={20} color="#FFE66D" />
                            <Text style={styles.infoLabel}>Membro desde</Text>
                        </View>
                        <Text style={styles.infoValue}>Maio 2026</Text>
                    </View>
                </LinearGradient>

                {/* Achievements */}
                <Text style={styles.sectionTitle}>Conquistas</Text>
                <View style={styles.achievementsGrid}>
                    {achievements.map((achievement, index) => (
                        <Animated.View
                            key={index}
                            style={[
                                styles.achievementCard,
                                {
                                    transform: [
                                        {
                                            translateY: opacityAnim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [20, 0],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        >
                            <LinearGradient colors={['#667eea30', '#764ba205']} style={styles.achievementGradient}>
                                <MaterialIcons name={achievement.icon as any} size={28} color="#667eea" />
                                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                                <Text style={styles.achievementDesc}>{achievement.desc}</Text>
                            </LinearGradient>
                        </Animated.View>
                    ))}
                </View>

                {/* Action Buttons */}
                <TouchableOpacity
                    style={styles.botaoEditar}
                    onPress={handleEditarInteresses}
                >
                    <MaterialIcons name="edit" size={20} color="#fff" />
                    <Text style={styles.botaoTexto}>Editar Interesses</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 24,
    },
    avatarGradient: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        elevation: 8,
    },
    avatarText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 4,
        right: 4,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#4ECDC4',
        borderWidth: 3,
        borderColor: '#001a4d',
    },
    profileName: {
        fontSize: 26,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 4,
    },
    profileRole: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '500',
        marginBottom: 12,
    },
    verifiedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: 'rgba(0,165,255,0.2)',
        borderRadius: 12,
        gap: 4,
    },
    verifiedText: {
        color: '#00A5FF',
        fontWeight: '600',
        fontSize: 12,
    },
    statsContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    statBox: {
        flex: 1,
    },
    statBoxGradient: {
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        elevation: 4,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 8,
    },
    statLabel: {
        fontSize: 11,
        color: 'rgba(255,255,255,0.8)',
        marginTop: 4,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 12,
        marginTop: 8,
    },
    infoCard: {
        padding: 16,
        borderRadius: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    infoLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    infoLabel: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
        fontWeight: '600',
    },
    infoValue: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    infoDivider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    achievementsGrid: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    achievementCard: {
        flex: 1,
    },
    achievementGradient: {
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 3,
    },
    achievementTitle: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 8,
    },
    achievementDesc: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 10,
        marginTop: 2,
    },
    botaoEditar: {
        backgroundColor: '#00d4ff',
        flexDirection: 'row',
        padding: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        elevation: 5,
        gap: 10
    },
    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});
