
# Todo List Application

This is a simple Todo List application implemented in TypeScript. It allows users to manage their tasks, including adding, completing, removing, and updating todos. The application also supports filtering tasks based on completion status and clearing completed tasks.

## Features

- **Add New Todo**: Add a new todo item with a task description and a due date.
- **Complete Todo**: Mark a todo item as completed.
- **Remove Todo**: Remove a todo item from the list.
- **List Todos**: View all todos.
- **Filter Todos**: Filter todos by their completion status (completed or not).
- **Update Todo**: Update the task description of an existing todo.
- **Clear Completed Todos**: Remove all completed todos from the list.

## Usage

1. **Add a New Todo**

   Use the `addTodo()` method to add a new todo to the list. You need to provide a `task` (the description of the todo) and a `dueDate` (when the todo is due).

   ```typescript
   myTodoList.addTodo('Buy groceries', new Date('2025-03-05'));
   myTodoList.addTodo('Prepare presentation', new Date('2025-03-03'));
   ```

2. **Complete a Todo**

   Use the `completeTodo()` method to mark a todo item as completed by its `id`.

   ```typescript
   myTodoList.completeTodo(1);
   ```

3. **Remove a Todo**

   Use the `removeTodo()` method to remove a todo by its `id`.

   ```typescript
   myTodoList.removeTodo(2);
   ```

4. **List All Todos**

   Use the `listTodos()` method to get a list of all todos.

   ```typescript
   const allTodos = myTodoList.listTodos();
   console.log(allTodos);
   ```

5. **Filter Todos by Completion Status**

   Use the `filterTodos()` method to filter todos by their completion status.

   ```typescript
   const completedTodos = myTodoList.filterTodos(true);
   const pendingTodos = myTodoList.filterTodos(false);
   ```

6. **Update a Todo Task**

   Use the `updateTodo()` method to update the task description of an existing todo.

   ```typescript
   myTodoList.updateTodo(2, 'Prepare project presentation');
   ```

7. **Clear Completed Todos**

   Use the `clearCompletedTodos()` method to remove all completed todos from the list.

   ```typescript
   myTodoList.clearCompletedTodos();
   ```

## Methods

### `addTodo(task: string, dueDate: Date): void`

Adds a new todo item with a task description and due date.

### `completeTodo(id: number): void`

Marks the todo item with the given `id` as completed.

### `removeTodo(id: number): void`

Removes the todo item with the given `id` from the list.

### `listTodos(): TodoItem[]`

Returns a list of all todo items.

### `filterTodos(completed: boolean): TodoItem[]`

Filters and returns todo items by their completion status (either `true` for completed or `false` for pending).

### `updateTodo(id: number, newTask: string): void`

Updates the task description of the todo item with the given `id`.

### `clearCompletedTodos(): void`

Removes all completed todo items from the list.

## TodoItem Interface

The `TodoItem` interface represents the structure of a todo item. It includes the following properties:

- `id`: A unique identifier for the todo item (number).
- `task`: A string representing the task description.
- `completed`: A boolean indicating whether the task is completed or not.
- `dueDate`: The date when the todo is due.

### Example TodoItem:
```typescript
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}
```

## Example Usage

```typescript
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
```

## Conclusion

This TypeScript Todo List application provides a clean and simple way to manage tasks with various features, including completion tracking, filtering, and clearing completed tasks. It's an excellent starting point for any task management or productivity application.
