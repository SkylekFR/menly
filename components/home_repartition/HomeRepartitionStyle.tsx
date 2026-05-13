
import { StyleSheet } from 'react-native'

const HomeRepartitionStyle = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        padding: 20,
        borderRadius: 12,
        gap: 16,
    },
    informationMessage: {
        fontSize: 14,
        color: '#333',
    },
    partnersContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    partner: {
        alignItems: 'center',
        gap: 4,
    },
    partnerInitials: {
        fontSize: 12,
        color: '#555',
    },
})

export { HomeRepartitionStyle }
