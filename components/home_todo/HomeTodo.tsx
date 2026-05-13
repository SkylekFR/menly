import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontSize } from '../typography';

export type HomeTodoProps = {
    title: string
    todoItems: TodoItemProps[]
}

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

const HomeTodo = ({
    title,
    todoItems,
}: HomeTodoProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.todoListContainer}>
                {todoItems.map((item, index) => (
                    <TodoItem key={index} text={item.text} description={item.description} pointsEarned={item.pointsEarned} />
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