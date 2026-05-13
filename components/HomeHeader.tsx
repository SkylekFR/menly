import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Partner } from './types/partners';
import { FontSize } from './typography';

// ─── Types ────────────────────────────────────────────────────────────────────
// On type explicitement les props : pas de "any", pas de props implicites.
// C'est le contrat du composant — ce qu'il attend, rien de plus.


type HomeHeaderProps = {
  partnerA: Partner
  partnerB: Partner
  weekLabel: string
  onNotificationPress: () => void
}

// ─── Sous-composants ──────────────────────────────────────────────────────────
// Principe S de SOLID : chaque composant a une seule responsabilité.
// Avatar ne sait faire qu'une chose : afficher des initiales dans un cercle.
// On le garde dans ce fichier car il n'a pas vocation à être utilisé ailleurs.

type AvatarProps = {
  initials: string
  color: string
  textColor: string
  size?: number
}

const Avatar = ({ initials, color, textColor, size = 36 }: AvatarProps) => (
  <View style={[
    styles.avatar,
    {
      width: size,
      height: size,
      borderRadius: size / 2,  // toujours la moitié pour un cercle parfait
      backgroundColor: color,
    }
  ]}>
    <Text style={[styles.avatarText, { color: textColor }]}>
      {initials}
    </Text>
  </View>
)

// ─── Composant principal ───────────────────────────────────────────────────────
// On exporte uniquement ce composant — le reste est privé à ce fichier.

const HomeHeader = ({
  partnerA,
  partnerB,
  weekLabel,
  onNotificationPress,
}: HomeHeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>


        {/* Ligne du haut : nom de l'app + cloche */}
        <View style={styles.topRow}>
          <View>
            <Text style={styles.appName}>menly</Text>
            <Text style={styles.weekLabel}>{weekLabel}</Text>
          </View>

          <TouchableOpacity
            onPress={onNotificationPress}
            style={styles.notifButton}
            accessibilityLabel="Notifications"  // important pour l'accessibilité
            accessibilityRole="button"
          >
            <Ionicons name="notifications-outline" size={18} color="#EEEDFE" />
          </TouchableOpacity>
        </View>

        {/* Ligne du bas : avatars + noms */}
        <View style={styles.coupleRow}>
          <Avatar {...partnerA} />

          <View style={styles.coupleInfo}>
            <Text style={styles.coupleNames}>
              {partnerA.initials} & {partnerB.initials}
            </Text>
            <Text style={styles.coupleSubtitle}>Leur équilibre cette semaine</Text>
          </View>

          <Avatar {...partnerB} />
        </View>

      </View>
    </SafeAreaProvider>
  )
}

// ─── Styles ────────────────────────────────────────────────────────────────────
// StyleSheet.create optimise les styles au runtime (validation + perf).
// On regroupe les styles en bas, séparés de la logique — clean code.
// Pas de styles inline dans le JSX sauf pour les valeurs dynamiques (cf. Avatar).

const PURPLE = '#7F77DD'  // constante nommée plutôt qu'un magic string répété

const styles = StyleSheet.create({
  container: {
    backgroundColor: PURPLE,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    gap: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  appName: {
    fontSize: FontSize.lg,
    fontWeight: '500',
    color: '#EEEDFE',
  },
  weekLabel: {
    fontSize: FontSize.sm,
    color: '#AFA9EC',
    marginTop: 2,
  },
  notifButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coupleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  coupleInfo: {
    flex: 1,  // prend tout l'espace disponible entre les deux avatars
  },
  coupleNames: {
    fontSize: 13,
    fontWeight: '500',
    color: '#EEEDFE',
  },
  coupleSubtitle: {
    fontSize: FontSize.sm,
    color: '#AFA9EC',
    marginTop: 1,
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  avatarText: {
    fontSize: 13,
    fontWeight: '500',
  },
})

export default HomeHeader