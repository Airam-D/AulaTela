import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function DashboardTab() {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  const stats = [
    { icon: 'favorite', label: 'Projetos', value: '12', color: '#FF6B6B' },
    { icon: 'people', label: 'Voluntários', value: '248', color: '#4ECDC4' },
    { icon: 'trending-up', label: 'Impacto', value: '95%', color: '#FFE66D' },
    { icon: 'star', label: 'Avaliação', value: '4.9', color: '#95E1D3' },
  ];

  return (
    <LinearGradient colors={['#001a4d', '#003681', '#00A5FF']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <Animated.View style={[styles.header, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.greeting}>Bem-vindo! 👋</Text>
          <Text style={styles.subGreeting}>Continue fazendo a diferença</Text>
        </Animated.View>

        {/* Featured Card */}
        <Animated.View style={[styles.featuredCard, { transform: [{ scale: scaleAnim }] }]}>
          <LinearGradient colors={['#667eea', '#764ba2']} style={styles.gradientCard}>
            <View style={styles.cardContent}>
              <MaterialIcons name="volunteer-activism" size={48} color="#fff" />
              <Text style={styles.cardTitle}>Sua Jornada Voluntária</Text>
              <Text style={styles.cardDescription}>Descubra oportunidades para ajudar comunidades</Text>
              <View style={styles.progressBar}>
                <LinearGradient colors={['#00D4FF', '#0099FF']} style={styles.progressFill} />
              </View>
              <Text style={styles.progressText}>75% Complete</Text>
            </View>
          </LinearGradient>
        </Animated.View>

        {/* Stats Grid */}
        <Text style={styles.sectionTitle}>Estatísticas Gerais</Text>
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <Animated.View
              key={index}
              style={[
                styles.statCard,
                {
                  transform: [
                    {
                      translateY: scaleAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <LinearGradient
                colors={[stat.color + '20', stat.color + '05']}
                style={styles.statGradient}
              >
                <View style={[styles.statIcon, { backgroundColor: stat.color + '30' }]}>
                  <MaterialIcons name={stat.icon as any} size={24} color={stat.color} />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </LinearGradient>
            </Animated.View>
          ))}
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        <View style={styles.actionsContainer}>
          <LinearGradient colors={['#FF6B6B', '#FF8E72']} style={styles.actionBtn}>
            <MaterialIcons name="calendar-today" size={24} color="#fff" />
            <Text style={styles.actionText}>Agendar</Text>
          </LinearGradient>
          <LinearGradient colors={['#4ECDC4', '#44A08D']} style={styles.actionBtn}>
            <MaterialIcons name="map" size={24} color="#fff" />
            <Text style={styles.actionText}>Mapa</Text>
          </LinearGradient>
        </View>
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
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },
  featuredCard: {
    marginBottom: 24,
  },
  gradientCard: {
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 8,
  },
  cardContent: {
    padding: 24,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginBottom: 16,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    width: '75%',
    height: '100%',
  },
  progressText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    marginTop: 8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    width: '48%',
    marginBottom: 12,
  },
  statGradient: {
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 4,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003681',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    elevation: 5,
    gap: 8,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
