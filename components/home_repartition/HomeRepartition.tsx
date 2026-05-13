import React from 'react';
import { Text, View } from 'react-native';
import { Partner } from '../types/partners'; // On réutilise le type Partner défini dans HomeHeader
import { HomeRepartitionStyle as styles } from './HomeRepartitionStyle';

type HomeRepartitionProps = {
    informationMessage: string
    partners: Partner[]
}

const HomeRepartition = ({
    informationMessage,
    partners,
}: HomeRepartitionProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.informationMessage}>{informationMessage}</Text>
            <View style={styles.partnersContainer}>
                {partners.map((partner, index) => (
                    <View key={index} style={styles.partner}>
                        <Text style={styles.informationMessage}>{partner.initials}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default HomeRepartition
 