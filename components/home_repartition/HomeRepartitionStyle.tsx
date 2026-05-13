
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
    partnerListContainer: {
        gap: 14,
    },
    partnerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    partnerBadge: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    partnerInitials: {
        fontSize: 16,
        fontWeight: '700',
    },
    partnerPercent: {
        minWidth: 44,
        textAlign: 'right',
        fontSize: 18,
        fontWeight: '700',
        color: '#171717',
    },
})

export { HomeRepartitionStyle }
