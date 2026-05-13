import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Partner } from './types/partners'

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

const Avatar = ({ initials, color, textColor, size = 56 }: AvatarProps) => (
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
  const insets = useSafeAreaInsets()
  const coupleLabel = `${partnerA.name ?? partnerA.initials} & ${partnerB.name ?? partnerB.initials}`

  return (
    <View style={[styles.container, { paddingTop: insets.top + 24 }]}>
      <StatusBar style="light" backgroundColor={PURPLE} />

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
          <Ionicons name="square-outline" size={28} color="#F1EFFF" />
        </TouchableOpacity>
      </View>

      {/* Ligne du bas : avatars + noms */}
      <View style={styles.coupleRow}>
        <Avatar {...partnerA} />

        <View style={styles.coupleInfo}>
          <Text style={styles.coupleNames}>
            {coupleLabel}
          </Text>
          <Text style={styles.coupleSubtitle}>Leur équilibre cette semaine</Text>
        </View>

        <Avatar {...partnerB} />
      </View>

    </View>
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
    paddingHorizontal: 32,
    paddingBottom: 48,
    gap: 14,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  appName: {
    fontSize: 34,
    lineHeight: 38,
    fontWeight: '700',
    color: '#EEEDFE',
  },
  weekLabel: {
    maxWidth: 120,
    fontSize: 22,
    lineHeight: 27,
    fontWeight: '600',
    color: '#34313C',
    marginTop: 10,
  },
  notifButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  coupleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  coupleInfo: {
    flex: 1,  // prend tout l'espace disponible entre les deux avatars
  },
  coupleNames: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
    color: '#EEEDFE',
  },
  coupleSubtitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    color: '#AFA9EC',
    marginTop: 2,
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  avatarText: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700',
  },
})

export default HomeHeader
