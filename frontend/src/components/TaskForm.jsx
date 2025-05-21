const TaskForm = ({ task, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      ></textarea>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="btn btn-primary"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;