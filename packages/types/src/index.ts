export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TimeEntry {
  id: string;
  userId: string;
  startTime: Date;
  endTime: Date;
  description: string;
  createdAt: Date;
  updatedAt: Date;
} 