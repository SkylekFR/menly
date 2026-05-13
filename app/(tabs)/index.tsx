import HomeHeader from '@/components/HomeHeader';
import HomeCheckin from '@/components/home_checking/HomeCheckin';
import HomeRepartition from '@/components/home_repartition/HomeRepartition';
import HomeTodo from '@/components/home_todo/HomeTodo';
import { Partner } from '@/components/types/partners';
import { ScrollView, StyleSheet, View } from 'react-native';

const partnerA: Partner = { initials: "SA", name: "Sara", color: "#6ED7B5", textColor: "#102B25", repartition: 95 };
const partnerB: Partner = { initials: "AL", name: "Alex", color: "#FFA77F", textColor: "#2B1510", repartition: 5 };
const weekLabel = "Semaine du 12 mai";

const handleNotificationPress = () => {
  // Handle notification press
};

const partners = [partnerA, partnerB];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
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
      <HomeTodo />
      <HomeCheckin
        question='Comment vous sesntez-vous cette semaine ?'
        choices={[
          { text: 'Bien', onPress: () => console.log('Choix : Bien') },
          { text: 'Moyen', onPress: () => console.log('Choix : Moyen') },
          { text: 'Mal', onPress: () => console.log('Choix : Mal') }
        ]}
      />
    </ScrollView>
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
