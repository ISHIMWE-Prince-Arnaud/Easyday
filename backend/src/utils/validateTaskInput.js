export function validateTaskInput({ title, description, dueDate }) {
  if (!title || !description || !dueDate) {
    return "Please fill all fields";
  }

  const due = new Date(dueDate);
  const today = new Date();
  
  // Set both dates to midnight (00:00:00)
  due.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (isNaN(due.getTime()) || due < today) {
    return "Due date should be today or in the future";
  }

  return null;
}