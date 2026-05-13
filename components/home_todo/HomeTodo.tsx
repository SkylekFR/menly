import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useHomeTodoViewModel } from '../home_todo/HomeTodoViewModel';
import { FontSize } from '../typography';


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
    const { uiState } = useHomeTodoViewModel()
    const { todos, isLoading, error } = uiState

    if (isLoading) return <ActivityIndicator color="#534AB7" />
    if (error) return <Text>{error}</Text>


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{"Tâches de la semaine"}</Text>
            <View style={styles.todoListContainer}>
                {todos.map((item, index) => (
                    <TodoItem key={index} text={item.name} description={item.assignee} pointsEarned={item.points} />
                ))}
            </View>

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
    }

})