import { Ionicons } from '@expo/vector-icons';
import { Button } from '@react-navigation/elements';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import { FontSize } from '../../../../components/typography';
import CreateTaskAlert from './CreateTaskAlert';
import { useHomeTodoViewModel } from './HomeTodoViewModel';


export type TodoItemProps = {
    text: string,
    description: string,
    pointsEarned: number
}

const TodoItem = ({ text, description, pointsEarned }: TodoItemProps) => {
    return (
        <View style={styles.todoItem}>
            <Ionicons name="notifications-outline" size={18} color="#EEEDFE" style={styles.todoItemIcon} />
            <View style={styles.todoItemTextContainer}>
                <Text style={styles.todoItemText}>{text}</Text>
                <Text
                    numberOfLines={1}
                    style={styles.todoItemDescription}>{description}</Text>
            </View>
            <Text style={styles.todoItemPointsEarned}>+{pointsEarned} pts</Text>
        </View>
    )
}

const HomeTodo = () => {
    const router = useRouter()
    const { uiState, createTask } = useHomeTodoViewModel()
    const { todos, isLoading, error, isMoreTodo } = uiState
    const [showCreateTask, setShowCreateTask] = useState(false)

    const handleCreateTask = async (title: string, points: number) => {
        try {
            await createTask(title, points)
            Alert.alert('Tâche créée', `Titre: ${title}\nPoints: ${points}`)
            setShowCreateTask(false)
        } catch {
            Alert.alert('Erreur', 'Impossible de créer la tâche. Veuillez réessayer.')
        }
    }

    if (isLoading) return <ActivityIndicator color="#534AB7" />
    if (error) return <Text>{error}</Text>

    return (
        <View style={styles.container}>
            <CreateTaskAlert
                visible={showCreateTask}
                onClose={() => setShowCreateTask(false)}
                onCreate={handleCreateTask}
            />

            <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center', justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'column', flexShrink: 1 }}>
                    <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}>
                        <Ionicons name="checkmark-done-outline" size={18} color="#04af26" />
                        <Text style={styles.title}>{"Tâches de la semaine"}</Text>
                    </View>
                    <Text style={{ fontSize: FontSize.sm, color: '#666' }}>{"Voici les tâches à accomplir pour cette semaine."}</Text>
                </View>
                <Button
                    onPress={() => setShowCreateTask(true)}
                    style={styles.addTodoButton} >Ajouter une tâche</Button>
            </View>

            <View style={styles.todoListContainer}>
                {todos.map((item) => (
                    <TodoItem key={item.id} text={item.name} description={item.assignee} pointsEarned={item.points} />
                ))}
            </View>
            {isMoreTodo && (
                <Button
                    onPress={() => router.push('/task-list')}
                    style={styles.seeMoreButton}
                >
                    Voir plus
                </Button>
            )}

        </View>
    )
}

export default HomeTodo;


const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 16,
    },
    todoListContainer: {
        gap: 8,
    },
    title: {
        fontSize: FontSize.lg,
        fontWeight: 'bold',
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: FontSize.base,
        borderWidth: 1,
        gap: 8,
        borderColor: '#E0E0E0',
        borderRadius: 12,
        padding: 8,
        alignItems: 'center',
    },
    todoItemIcon: {
        backgroundColor: '#04af26',
        padding: 12,
        borderRadius: 12,

    },
    todoItemTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 1,
        marginRight: 8,
        flex: 1,
    },
    todoItemText: {
        fontSize: FontSize.base,
    },
    todoItemDescription: {
        fontSize: FontSize.sm,
        color: '#666',
        textOverflow: 'tail',
    },
    todoItemPointsEarned: {
        fontSize: FontSize.base,
        fontWeight: 'bold',

        color: '#04af26',
    },
    addTodoButton: {
        fontSize: FontSize.sm,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        alignSelf: 'center',
    },
    seeMoreButton: {
        alignSelf: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

})
