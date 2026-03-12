export type Gender = 'Male' | 'Female' | 'Other';

export interface Profile {
    id: string;
    name: string;
    age: number;
    profession: string;
    location: string;
    isPremium: boolean;
    gender: Gender;
    img: string;
    bio?: string;      // Optional field for detail view
    education?: string; // Optional field for advanced filtering
    isVerified: boolean;
}
