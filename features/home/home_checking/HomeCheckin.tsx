import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type HomeCheckinProps = {
    question: string
    choices: CheckinChoiceProps[]
}


export type CheckinChoiceProps = {
    text: string,
    onPress: () => void
}

const HomeCheckin = (
    {
        question,
        choices,
    }: HomeCheckinProps
) => {
    return (
        <LinearGradient
            colors={['#EEEDFE', '#E1F5EE']}
            start={{ x: 0, y: 0 }}  // départ en haut à gauche
            end={{ x: 1, y: 1 }}    // arrivée en bas à droite
            style={styles.container}
        >

            <Text style={styles.question} >{question}</Text>
            <View style={{
                gap: 8, flexDirection: 'row', flexWrap: 'wrap',

                justifyContent: 'space-between'
            }}>
                {choices.map((choice, index) => (
                    <Text key={index} onPress={choice.onPress} style={styles.choice}>
                        {choice.text}
                    </Text>
                ))}
            </View>
        </LinearGradient>

    );
};

export default HomeCheckin;


const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 16,
        backgroundColor: '#4e72f5',
        borderWidth: 1,
    },
    question: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    choice: {
        fontSize: 14,
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#007AFF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        color: '#007AFF',
        marginBottom: 8,
    },
})