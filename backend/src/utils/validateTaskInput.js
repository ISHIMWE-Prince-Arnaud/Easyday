export function validateTaskInput({ title, description, dueDate }) {
  if (!title || !description || !dueDate) {
    return "Please fill all fields";
  }
  const due = new Date(dueDate);
  if (isNaN(due.getTime()) || due < new Date()) {
    return "Due date should be greater than current date";
  }
  return null;
}