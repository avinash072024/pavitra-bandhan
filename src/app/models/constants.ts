export class Constants {
    public static APP_NAME1: string = 'Pavitra';
    public static APP_NAME2: string = 'Bandhan';
    public static APP_NAME: string = this.APP_NAME1 + ' ' + this.APP_NAME2;
    public static APP_NAME_COMBINE: string = this.APP_NAME1 + this.APP_NAME2;

    // nav links
    public static navLinks: any = [
        { id: 1, path: '/home', label: 'Home' },
        { id: 2, path: '/dashboard', label: 'Dashboard' },
        { id: 3, path: '/search', label: 'Search' },
        { id: 4, path: '/premium-plans', label: 'Pricing' },
        { id: 5, path: '/about', label: 'About' },
        { id: 6, path: '/contact', label: 'Contact' }
    ]

    // Success Stories
    public static successStories: any = [
        {
            name: 'Rahul & Sneha',
            date: 'Matched in Jan 2026',
            text: 'Pavitra Bandhan helped us find exactly what we were looking for. Highly recommended!',
            img: 'https://www.hindustantimes.com/ht-img/img/2025/06/22/400x225/Bengaluru_couple_1750565311542_1750565324209.jpg'
        },
        {
            name: 'Amit & Priya',
            date: 'Matched in Dec 2025',
            text: 'The verification process made me feel safe. I found my soulmate within two months!',
            img: 'https://media.istockphoto.com/id/1028444298/photo/young-beautiful-couple-on-sofa-stock-image.jpg?s=612x612&w=0&k=20&c=on2Pc0KeJ7X3goTTRYy7cJqT69sHJq1MTVngccdq0w4='
        },
        {
            name: 'Vikram & Anjali',
            date: 'Matched in Nov 2025',
            text: 'The community filters are amazing. We share the same values and cultural background.',
            img: 'https://previews.123rf.com/images/asphoto777/asphoto7771901/asphoto777190100020/115443773-love-story-of-indian-couple-posed-outdoor.jpg'
        },
        {
            name: 'Rohan & Meera',
            date: 'Matched in Oct 2025',
            text: 'Simple, elegant, and effective. Thank you Pavitra Bandhan for bringing us together.',
            img: 'https://images.indianexpress.com/2026/03/Karnataka.jpg?w=1200'
        },
        {
            name: 'Arjun & Kavya',
            date: 'Matched in Sept 2025',
            text: 'A truly modern platform that respects our traditions. Finding love was never this easy.',
            img: 'https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ];

    // search profiles
    public static profiles: any = [
        // { id: 'PB-0001', name: 'Rajesh Kumar', age: 28, profession: 'Software Architect', location: 'Pune', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true },
        // { id: 'PB-0002', name: 'Sneha Kapoor', age: 26, profession: 'Graphic Designer', location: 'Mumbai', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false },
        // { id: 'PB-0003', name: 'Amit Sharma', age: 30, profession: 'Civil Engineer', location: 'Delhi', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true },
        // { id: 'PB-0004', name: 'Priya Iyer', age: 25, profession: 'Chartered Accountant', location: 'Chennai', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false },
        // { id: 'PB-0005', name: 'Vikram Singh', age: 32, profession: 'Marketing Manager', location: 'Bangalore', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true },
        // { id: 'PB-0006', name: 'Anjali Gupta', age: 27, profession: 'HR Specialist', location: 'Hyderabad', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false },
        // { id: 'PB-0007', name: 'Rohan Mehta', age: 29, profession: 'Product Manager', location: 'Ahmedabad', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true },
        // { id: 'PB-0008', name: 'Kavita Reddy', age: 26, profession: 'Content Creator', location: 'Bangalore', isPremium: true, gender: 'Female', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false },
        // { id: 'PB-0009', name: 'Siddharth Das', age: 31, profession: 'Doctor (MD)', location: 'Kolkata', isPremium: false, gender: 'Male', img: 'https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true },
        // { id: 'PB-0010', name: 'Meera Nair', age: 25, profession: 'Classical Dancer', location: 'Kochi', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false },
        // { id: 'PB-0011', name: 'Arjun Verma', age: 28, profession: 'Financial Analyst', location: 'Gurgaon', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true },
        // { id: 'PB-0012', name: 'Ishani Roy', age: 24, profession: 'Lawyer', location: 'Delhi', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false },
        // { id: 'PB-0013', name: 'Sandeep Patil', age: 33, profession: 'Farmer & Business', location: 'Kolhapur', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true },
        // { id: 'PB-0014', name: 'Aditi Joshi', age: 26, profession: 'Fashion Designer', location: 'Jaipur', isPremium: true, gender: 'Female', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false },
        // { id: 'PB-0015', name: 'Manoj Bajpayee', age: 30, profession: 'Chef', location: 'Lucknow', isPremium: false, gender: 'Male', img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true },
        // { id: 'PB-0016', name: 'Ritu Phogat', age: 27, profession: 'Sports Coach', location: 'Chandigarh', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false },
        // { id: 'PB-0017', name: 'Abhishek Jain', age: 29, profession: 'UX Designer', location: 'Indore', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true },
        // { id: 'PB-0018', name: 'Pooja Hegde', age: 25, profession: 'Architect', location: 'Surat', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false },
        // { id: 'PB-0019', name: 'Varun Dhawan', age: 28, profession: 'Stock Broker', location: 'Mumbai', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true },
        // { id: 'PB-0020', name: 'Kiara Advani', age: 26, profession: 'Professor', location: 'Pune', isPremium: true, gender: 'Female', img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false }

        {
            id: 'PB-0001', name: 'Rajesh Kumar', age: 28, profession: 'Software Architect', location: 'Pune', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true,
            bio: 'A tech enthusiast who loves building scalable systems. Beyond code, I enjoy trekking in the Sahyadris and playing the guitar. Looking for a partner who values both innovation and tradition.'
        },
        {
            id: 'PB-0002', name: 'Sneha Kapoor', age: 26, profession: 'Graphic Designer', location: 'Mumbai', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false,
            bio: 'Creativity is my language. I spend my days designing brands and my weekends exploring Mumbai\'s art galleries. Looking for a soulmate who appreciates art and a good cup of filter coffee.'
        },
        {
            id: 'PB-0003', name: 'Amit Sharma', age: 30, profession: 'Civil Engineer', location: 'Delhi', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true,
            bio: 'Building structures by day and memories by night. I am a grounded person who loves historical architecture and long drives. Seeking a partner who is family-oriented and ready to build a life together.'
        },
        {
            id: 'PB-0004', name: 'Priya Iyer', age: 25, profession: 'Chartered Accountant', location: 'Chennai', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false,
            bio: 'I love numbers as much as I love Carnatic music. I am a balance-sheet expert with a fun-loving heart. I value honesty and am looking for someone with a good sense of humor.'
        },
        {
            id: 'PB-0005', name: 'Vikram Singh', age: 32, profession: 'Marketing Manager', location: 'Bangalore', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true,
            bio: 'Driven professional with a passion for brand building. I enjoy marathon running and exploring Bangalore\'s diverse food scene. Looking for an independent woman with similar zest for life.'
        },
        {
            id: 'PB-0006', name: 'Anjali Gupta', age: 27, profession: 'HR Specialist', location: 'Hyderabad', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false,
            bio: 'I’m an extrovert who loves connecting with people. My life revolves around my family and my love for Hyderabadi Biryani. I am looking for a compassionate partner who believes in mutual growth.'
        },
        {
            id: 'PB-0007', name: 'Rohan Mehta', age: 29, profession: 'Product Manager', location: 'Ahmedabad', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true,
            bio: 'A strategist who loves solving problems. I enjoy reading non-fiction and occasional weekend cooking experiments. Looking for someone intelligent, kind, and ambitious.'
        },
        {
            id: 'PB-0008', name: 'Kavita Reddy', age: 26, profession: 'Content Creator', location: 'Bangalore', isPremium: true, gender: 'Female', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false,
            bio: 'Life is a story, and I love telling it through my lens. I am a digital nomad at heart but firmly rooted in my values. Seeking someone who is supportive and adventurous.'
        },
        {
            id: 'PB-0009', name: 'Siddharth Das', age: 31, profession: 'Doctor (MD)', location: 'Kolkata', isPremium: false, gender: 'Male', img: 'https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true,
            bio: 'Dedicated to my profession and patients. I find solace in Rabindra Sangeet and the quiet corners of Kolkata. Looking for a simple, educated woman who understands the life of a doctor.'
        },
        {
            id: 'PB-0010', name: 'Meera Nair', age: 25, profession: 'Classical Dancer', location: 'Kochi', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false,
            bio: 'Dance is my soul. I am a traditionalist who loves the serenity of Kerala backwaters. I am looking for a life partner who respects art and shares a love for travel.'
        },
        {
            id: 'PB-0011', name: 'Arjun Verma', age: 28, profession: 'Financial Analyst', location: 'Gurgaon', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true,
            bio: 'Always tracking the markets but never losing track of family. I enjoy golf and watching thrillers. Seeking an ambitious and understanding partner.'
        },
        {
            id: 'PB-0012', name: 'Ishani Roy', age: 24, profession: 'Lawyer', location: 'Delhi', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false,
            bio: 'Fierce in the courtroom, gentle at home. I am passionate about social justice and animal welfare. Looking for a partner who is intellectually stimulating and kind.'
        },
        {
            id: 'PB-0013', name: 'Sandeep Patil', age: 33, profession: 'Farmer & Business', location: 'Kolhapur', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true,
            bio: 'Rooted in the soil, growing in business. I take pride in my heritage and modern farming techniques. Looking for a simple girl who loves nature and family values.'
        },
        {
            id: 'PB-0014', name: 'Aditi Joshi', age: 26, profession: 'Fashion Designer', location: 'Jaipur', isPremium: true, gender: 'Female', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false,
            bio: 'I find beauty in textiles and colors. Jaipur is my home, but my dreams are global. Looking for someone who is stylish, cultured, and supportive of my career.'
        },
        {
            id: 'PB-0015', name: 'Manoj Bajpayee', age: 30, profession: 'Chef', location: 'Lucknow', isPremium: false, gender: 'Male', img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true,
            bio: 'Cooking is my passion; feeding people is my joy. I love the Awadhi culture and hospitality. Seeking a partner who is a foodie and appreciates the finer things in life.'
        },
        {
            id: 'PB-0016', name: 'Ritu Phogat', age: 27, profession: 'Sports Coach', location: 'Chandigarh', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false,
            bio: 'Disciplined, energetic, and a fitness freak. I believe in a healthy body and a healthy mind. Looking for an active partner who enjoys sports and fitness.'
        },
        {
            id: 'PB-0017', name: 'Abhishek Jain', age: 29, profession: 'UX Designer', location: 'Indore', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true,
            bio: 'I focus on making things simple and useful. I love photography and weekend bike trips. Seeking a creative and empathetic partner.'
        },
        {
            id: 'PB-0018', name: 'Pooja Hegde', age: 25, profession: 'Architect', location: 'Surat', isPremium: false, gender: 'Female', img: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false,
            bio: 'I love designing modern spaces with traditional hearts. I am a fan of literature and classical music. Looking for a visionary partner.'
        },
        {
            id: 'PB-0019', name: 'Varun Dhawan', age: 28, profession: 'Stock Broker', location: 'Mumbai', isPremium: true, gender: 'Male', img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: true,
            bio: 'Living life in the fast lane of Mumbai. I enjoy high-stakes finance and high-energy nights. Seeking a partner who is vibrant and adaptable.'
        },
        {
            id: 'PB-0020', name: 'Kiara Advani', age: 26, profession: 'Professor', location: 'Pune', isPremium: true, gender: 'Female', img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400', isVerified: false,
            bio: 'Education is my calling. I am a quiet soul who loves libraries and historical documentaries. Looking for a calm and intellectual life partner.'
        }
    ]
}
