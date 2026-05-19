
import { StyleSheet } from 'react-native'
import { FontSize } from '../../../components/typography'

const HomeRepartitionStyle = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 12,
        borderColor: '#e5e5e5',
        borderWidth: 1,
        gap: 16,
    },
    informationMessage: {
        fontSize: FontSize.base,
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
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    partnerInitials: {
        fontSize: FontSize.base,
        fontWeight: '700',
    },
    partnerPercent: {
        minWidth: 44,
        textAlign: 'right',
        fontSize: FontSize.lg,
        fontWeight: '700',
        color: '#171717',
    },
})

export { HomeRepartitionStyle }
