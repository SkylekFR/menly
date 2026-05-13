import HomeHeader from '@/components/HomeHeader';
import HomeRepartition from '@/components/home_repartition/HomeRepartition';
import { Partner } from '@/components/types/partners';
import { StyleSheet, View } from 'react-native';

const partnerA: Partner = { initials: "SA", name: "Sara", color: "#6ED7B5", textColor: "#102B25" };
const partnerB: Partner = { initials: "AL", name: "Alex", color: "#FFA77F", textColor: "#2B1510" };
const weekLabel = "Semaine du 12 mai";

const handleNotificationPress = () => {
  // Handle notification press
};

const partners = [partnerA, partnerB];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader
        partnerA={partnerA}
        partnerB={partnerB}
        weekLabel={weekLabel}
        onNotificationPress={handleNotificationPress}
      />
      <View style={styles.content}>
        <HomeRepartition
          informationMessage='Repartition de la semaine'
          partners={partners}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 12,
    gap: 16,
    marginTop: -32,
  },
});
