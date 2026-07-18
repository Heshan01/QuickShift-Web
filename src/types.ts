export type UserRole = 'seeker' | 'poster' | 'admin';
<<<<<<< HEAD
export type VerificationStatus = 'pending' | 'verified' | 'rejected';
=======
>>>>>>> 01f43b8177998ccf6f3b3385d3985989ccf061a5

export interface UserProfile {
  uid: string;
  role: UserRole;
  fullName: string;
<<<<<<< HEAD
  idNumber: string;
=======
>>>>>>> 01f43b8177998ccf6f3b3385d3985989ccf061a5
  phone: string;
  email: string;
  photoURL: string | null;
  isBlocked: boolean;
<<<<<<< HEAD
  verificationStatus: VerificationStatus;
=======
>>>>>>> 01f43b8177998ccf6f3b3385d3985989ccf061a5
  createdAt: any; // Timestamp
  preferredCategories?: string[]; // seeker-only
  businessName?: string | null; // poster-only
}

export type JobStatus = 'pending' | 'approved' | 'rejected' | 'closed';

export interface Job {
  id: string;
  posterId: string;
  posterName?: string; // joined or loaded
  title: string;
  description: string;
  hourlyRate: number;
  estimatedDuration: string | null;
  category: string;
  contactPhone: string;
  district: string;
  city: string;
  address: string;
  searchKeywords: string[];
  photoURL: string | null;
  status: JobStatus;
  rejectionReason: string | null;
  createdAt: any; // Timestamp
  updatedAt: any; // Timestamp
}

export type ApplicationStatus = 'applied' | 'accepted' | 'rejected';

export interface JobApplication {
  id: string;
  jobId: string;
  seekerId: string;
  posterId: string;
  status: ApplicationStatus;
  appliedAt: any; // Timestamp
  
  // Joined fields for UI convenience
  jobTitle?: string;
  jobCategory?: string;
  jobCity?: string;
  jobHourlyRate?: number;
  seekerName?: string;
  seekerPhone?: string;
  seekerEmail?: string;
}
