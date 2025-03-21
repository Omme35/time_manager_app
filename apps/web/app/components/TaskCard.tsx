import { Card } from "../ui/Card";

interface TaskCardProps {
  title: string;
  dueDate: string;
  onComplete: () => void;
}

export function TaskCard({ title, dueDate, onComplete }: TaskCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500">{dueDate}</p>
      </div>
      <button 
        onClick={onComplete}
        className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
      >
        Mark Complete
      </button>
    </div>
  );
} 