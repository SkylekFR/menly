import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FontSize } from '@/components/typography'
import { useTaskListViewModel } from './TaskListViewModel'

const TaskListScreen = () => {
    const { uiState } = useTaskListViewModel()
    const { tasks, isLoading, error } = uiState

    if (isLoading) {
        return <ActivityIndicator color="#534AB7" />
    }

    if (error) {
        return <Text style={styles.errorText}>{error}</Text>
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.header}>Liste des tâches</Text>
            {tasks.map((task) => (
                <View key={task.id} style={styles.taskCard}>
                    <View style={styles.taskHeader}>
                        <Ionicons name="list" size={18} color="#534AB7" />
                        <Text style={styles.taskTitle}>{task.title}</Text>
                    </View>
                    <Text style={styles.taskDescription}>{task.description ?? 'Pas de description'}</Text>
                    <View style={styles.taskMeta}>
                        <Text style={styles.taskMetaText}>Assigné à {task.assignee || 'N/A'}</Text>
                        <Text style={styles.taskMetaText}>+{task.points} pts</Text>
                    </View>
                    {task.deadline ? <Text style={styles.taskDeadline}>Deadline: {task.deadline}</Text> : null}
                </View>
            ))}
        </ScrollView>
    )
}

export default TaskListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        padding: 16,
        gap: 12,
    },
    header: {
        fontSize: FontSize.lg,
        fontWeight: '700',
        marginBottom: 12,
    },
    taskCard: {
        backgroundColor: '#F5F5FF',
        borderRadius: 16,
        padding: 16,
        gap: 8,
    },
    taskHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    taskTitle: {
        fontSize: FontSize.lg,
        fontWeight: '700',
        color: '#1F1F5E',
    },
    taskDescription: {
        fontSize: FontSize.sm,
        color: '#555',
    },
    taskMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    taskMetaText: {
        fontSize: FontSize.sm,
        color: '#666',
    },
    taskDeadline: {
        fontSize: FontSize.sm,
        color: '#534AB7',
        fontWeight: '600',
    },
    errorText: {
        padding: 16,
        color: '#BB2525',
    },
})
