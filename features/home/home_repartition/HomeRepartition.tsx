import React from 'react';
import { Text, View } from 'react-native';
import { Partner } from '../../../components/types/partners'; // On réutilise le type Partner défini dans HomeHeader
import Rectangle from '../../../components/ui/rectangle';
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
            <View style={styles.partnerListContainer}>
                {partners.map((partner, index) => (
                    <View key={index} style={styles.partnerRow}>
                        <View style={[styles.partnerBadge, { backgroundColor: `${partner.color}33` }]}>
                            <Text style={[styles.partnerInitials, { color: partner.textColor }]}>
                                {partner.initials}
                            </Text>
                        </View>
                        <Rectangle
                            value={partner.repartition}
                            color={partner.color}
                            accessibilityLabel={`Répartition ${partner.initials}`}
                        />
                        <Text style={styles.partnerPercent}>{partner.repartition}%</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default HomeRepartition

