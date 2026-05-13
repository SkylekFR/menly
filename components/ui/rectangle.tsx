import React from 'react'
import { StyleSheet, View } from 'react-native'

type RectangleProps = {
    value: number
    color: string
    height?: number
    backgroundColor?: string
    accessibilityLabel?: string
}

const Rectangle = ({
    value,
    color,
    height = 16,
    backgroundColor = '#F7F5F0',
    accessibilityLabel,
}: RectangleProps) => {
    const boundedValue = Math.max(0, Math.min(value, 100))

    return (
        <View
            style={[
                styles.track,
                {
                    height,
                    borderRadius: height / 2,
                    backgroundColor,
                },
            ]}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="progressbar"
            accessibilityValue={{ min: 0, max: 100, now: boundedValue }}
        >
            <View
                style={[
                    styles.fill,
                    {
                        width: `${boundedValue}%`,
                        borderRadius: height / 2,
                        backgroundColor: color,
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    track: {
        flex: 1,
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
    },
})

export default Rectangle
