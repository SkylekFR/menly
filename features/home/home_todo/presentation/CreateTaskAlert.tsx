import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

type CreateTaskAlertProps = {
    visible: boolean
    onClose: () => void
    onCreate: (title: string, points: number) => void
}

const CreateTaskAlert = ({ visible, onClose, onCreate }: CreateTaskAlertProps) => {
    const [title, setTitle] = useState('')
    const [points, setPoints] = useState('0')

    const handleCreate = () => {
        const trimmedTitle = title.trim()
        const parsedPoints = Number(points)

        if (!trimmedTitle) {
            return
        }

        if (Number.isNaN(parsedPoints) || parsedPoints < 0) {
            return
        }

        onCreate(trimmedTitle, parsedPoints)
        setTitle('')
        setPoints('0')
    }

    const handleCancel = () => {
        setTitle('')
        setPoints('0')
        onClose()
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={handleCancel}
        >
            <View style={styles.overlay}>
                <View style={styles.card}>
                    <Text style={styles.header}>Ajouter une tâche</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Titre de la tâche"
                        value={title}
                        onChangeText={setTitle}
                        returnKeyType="next"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Points"
                        value={points}
                        onChangeText={setPoints}
                        keyboardType="numeric"
                        returnKeyType="done"
                    />

                    <View style={styles.actions}>
                        <Pressable style={styles.cancelButton} onPress={handleCancel}>
                            <Text style={styles.cancelText}>Annuler</Text>
                        </Pressable>
                        <Pressable style={styles.createButton} onPress={handleCreate}>
                            <Text style={styles.createText}>Créer</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 8,
    },
    header: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 8,
    },
    cancelButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: '#f1f1f1',
    },
    cancelText: {
        color: '#333',
        fontWeight: '600',
    },
    createButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: '#534AB7',
    },
    createText: {
        color: '#fff',
        fontWeight: '600',
    },
})

export default CreateTaskAlert