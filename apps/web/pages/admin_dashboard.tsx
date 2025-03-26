import RootLayout from "../app/components/RootLayout";
import styles from "../app/styles/page.module.css";
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <RootLayout>
      <div className={styles.page}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            <p>Welcome Paco </p> 
            <p>The Chakra Keeper</p>
            <p>Finder of lost .jsons</p>
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </RootLayout>
  );
} 
