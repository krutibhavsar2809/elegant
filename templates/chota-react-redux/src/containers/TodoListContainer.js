import TodoList from "../ui/organisms/TodoList/TodoList.component";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  updateTodo,
} from "../state/todo/todo.actions";
import { setVisibilityFilter } from "../state/filters/filters.action";
import { getSelectedFilter } from "../state/filters/filters.selectors";
import { getVisibleTodos } from "../state/todo/todo.selectors";

export default function TodoListContainer() {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(getSelectedFilter);
  const filters = useSelector((state) => state.filters);
  const todo = useSelector((state) =>
    getVisibleTodos(state.todo, selectedFilter.id)
  );

  const todoData = {
    todo,
    filters,
  };

  const events = {
    onTodoCreate: (payload) => dispatch(createTodo(payload)),
    onTodoEdit: (payload) => dispatch(editTodo(payload)),
    onTodoUpdate: (text) =>
      dispatch(updateTodo({ id: todo.currentTodoItem.id, text })),
    onTodoToggleUpdate: (id) => dispatch(toggleTodo(id)),
    onTodoDelete: (payload) => dispatch(deleteTodo(payload)),
    onTodoFilterUpdate: (id) => dispatch(setVisibilityFilter(id)),
  };

  return <TodoList todoData={todoData} events={events} />;
}
