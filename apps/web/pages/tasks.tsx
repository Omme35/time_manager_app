import RootLayout from "../app/components/RootLayout";
import { TaskCard } from "../app/components/TaskCard";
import { Card } from "../app/ui/Card";
import styles from "../app/styles/page.module.css";

export default function TasksPage() {
  return (
    <RootLayout>
      <div className={styles.page}>
        <h1 className="text-2xl font-bold mb-6">Tasks</h1>
        <Card>
          <div className="space-y-4">
            <TaskCard 
              title="Complete Project Proposal"
              dueDate="Due in 2 days"
              onComplete={() => console.log('Completing task...')}
            />
            
            <TaskCard 
              title="Review Documentation"
              dueDate="Due tomorrow"
              onComplete={() => console.log('Completing task...')}
            />

            {/* Add task button */}
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Add New Task
            </button>
          </div>
        </Card>
      </div>
    </RootLayout>
  );
} 