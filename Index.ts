// 1. Define the TodoItem interface
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;  // Added dueDate property
}

// 2. Implement the TodoList class
class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    // 3. Add a new todo item
    addTodo(task: string, dueDate: Date): void {
        const newTodo: TodoItem = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
    }

    // 4. Mark a todo item as completed
    completeTodo(id: number): void {
        const todo = this.findTodoById(id);
        if (todo) {
            todo.completed = true;
        } else {
            console.error(`Todo with id ${id} not found.`);
        }
    }

    // 5. Remove a todo item
    removeTodo(id: number): void {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
        } else {
            console.error(`Todo with id ${id} not found.`);
        }
    }

    // 6. List all todo items
    listTodos(): TodoItem[] {
        return this.todos;
    }

    // 7. Filter todos by completed status
    filterTodos(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    // 8. Update the task description
    updateTodo(id: number, newTask: string): void {
        const todo = this.findTodoById(id);
        if (todo) {
            todo.task = newTask;
        } else {
            console.error(`Todo with id ${id} not found.`);
        }
    }

    // 9. Clear all completed todos
    clearCompletedTodos(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
    }

    // Private helper method to find a todo by id
    private findTodoById(id: number): TodoItem | undefined {
        return this.todos.find(todo => todo.id === id);
    }
}

// Example Usage
const myTodoList = new TodoList();
myTodoList.addTodo('Buy groceries', new Date('2025-03-05'));
myTodoList.addTodo('Prepare presentation', new Date('2025-03-03'));

console.log('All Todos:', myTodoList.listTodos());

myTodoList.completeTodo(1);
console.log('Completed Todos:', myTodoList.filterTodos(true));

myTodoList.updateTodo(2, 'Prepare project presentation');
console.log('Updated Todos:', myTodoList.listTodos());

myTodoList.clearCompletedTodos();
console.log('After Clearing Completed:', myTodoList.listTodos());

myTodoList.removeTodo(2);
console.log('After Removing Todo 2:', myTodoList.listTodos());
