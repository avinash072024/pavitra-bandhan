export class Constants {
    public static APP_NAME1: string = 'Pavitra';
    public static APP_NAME2: string = 'Bandhan';
    public static APP_NAME: string = this.APP_NAME1 + ' ' + this.APP_NAME2;
    public static APP_NAME_COMBINE: string = this.APP_NAME1 + this.APP_NAME2;

    // nav links
    public static navLinks: any = [
        // { id: 1, path: '/home', label: 'Home' },
        { id: 2, path: '/dashboard', label: 'Dashboard' },
        { id: 3, path: '/profiles', label: 'Profiles' },
        { id: 4, path: '/premium-plans', label: 'Pricing' },
        { id: 5, path: '/about', label: 'About' },
        { id: 6, path: '/contact', label: 'Contact' }
    ]

    // Success Stories
    public static successStories: any = [
        {
            id: '102',
            names: 'Aniket & Snehal',
            location: 'Mumbai',
            weddingDate: '12th Dec 2025',
            coupleImg: 'https://images.pexels.com/photos/2055236/pexels-photo-2055236.jpeg?auto=compress&cs=tinysrgb&w=600',
            testimonial: 'I was hesitant at first, but Pavitra Bandhans filters helped me find someone who shares my love for travel and culture. It was instant magic!'
        },
        {
            id: '085',
            names: 'Rahul & Priya',
            location: 'Delhi',
            weddingDate: '15th Jan 2026',
            coupleImg: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
            testimonial: 'The verification process gave me peace of mind. I met Rahul here, and within six months, our families were celebrating our union.'
        },
        {
            id: '094',
            names: 'Vikram & Aditi',
            location: 'Bangalore',
            weddingDate: '02-02-2026',
            coupleImg: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
            testimonial: 'We are both busy professionals. This platform made it easy to connect with someone who understands my lifestyle and values. Highly recommended!'
        },
        {
            id: '103',
            names: 'Rahul & Sneha',
            location: 'Pune',
            weddingDate: 'Matched in Jan 2026',
            coupleImg: 'https://www.hindustantimes.com/ht-img/img/2025/06/22/400x225/Bengaluru_couple_1750565311542_1750565324209.jpg',
            testimonial: 'Pavitra Bandhan helped us find exactly what we were looking for. Highly recommended!'
        },
        {
            id: '104',
            names: 'Amit & Priya',
            location: 'Hyderabad',
            weddingDate: 'Matched in Dec 2025',
            coupleImg: 'https://media.istockphoto.com/id/1028444298/photo/young-beautiful-couple-on-sofa-stock-image.jpg?s=612x612&w=0&k=20&c=on2Pc0KeJ7X3goTTRYy7cJqT69sHJq1MTVngccdq0w4=',
            testimonial: 'The verification process made me feel safe. I found my soulmate within two months!'
        },
        {
            id: '105',
            names: 'Vikram & Anjali',
            location: 'Chennai',
            weddingDate: 'Matched in Nov 2025',
            coupleImg: 'https://previews.123rf.com/images/asphoto777/asphoto7771901/asphoto777190100020/115443773-love-story-of-indian-couple-posed-outdoor.jpg',
            testimonial: 'The community filters are amazing. We share the same values and cultural background.'
        },
        {
            id: '106',
            names: 'Rohan & Meera',
            location: 'Kolkata',
            weddingDate: 'Matched in Oct 2025',
            coupleImg: 'https://images.indianexpress.com/2026/03/Karnataka.jpg?w=1200',
            testimonial: 'Simple, elegant, and effective. Thank you Pavitra Bandhan for bringing us together.'
        },
        {
            id: '107',
            names: 'Arjun & Kavya',
            location: 'Ahmedabad',
            weddingDate: 'Matched in Sept 2025',
            coupleImg: 'https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=600',
            testimonial: 'A truly modern platform that respects our traditions. Finding love was never this easy.'
        }
    ];

    // search profiles
    public static profiles: any = [
        {
            id: 'PB-0001', name: 'Rajesh Kumar', age: 28, profession: 'Software Architect',
            location: 'Pune, Maharashtra, India', isPremium: true, gender: 'Male',
            img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: true, maritalStatus: 'Never Married', salary: '24 LPA',
            education: 'M.Tech in Computer Science', languages: ['English', 'Hindi', 'Marathi'],
            bio: 'A tech enthusiast who loves building scalable systems. Beyond code, I enjoy trekking in the Sahyadris and playing the guitar. Looking for a partner who values both innovation and tradition.'
        },
        {
            id: 'PB-0002', name: 'Sneha Kapoor', age: 26, profession: 'Graphic Designer',
            location: 'Mumbai, Maharashtra, India', isPremium: false, gender: 'Female',
            img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: false, maritalStatus: 'Never Married', salary: '12 LPA',
            education: 'B.Des from NID', languages: ['English', 'Hindi', 'Punjabi'],
            bio: 'Creativity is my language. I spend my days designing brands and my weekends exploring Mumbai\'s art galleries. Looking for a soulmate who appreciates art and a good cup of filter coffee.'
        },
        {
            id: 'PB-0003', name: 'Amit Sharma', age: 30, profession: 'Civil Engineer',
            location: 'New Delhi, Delhi, India', isPremium: true, gender: 'Male',
            img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: true, maritalStatus: 'Divorced', salary: '18 LPA',
            education: 'B.E. Civil Engineering', languages: ['English', 'Hindi'],
            bio: 'Building structures by day and memories by night. I am a grounded person who loves historical architecture and long drives. Seeking a partner who is family-oriented and ready to build a life together.'
        },
        {
            id: 'PB-0004', name: 'Priya Iyer', age: 25, profession: 'Chartered Accountant',
            location: 'Chennai, Tamil Nadu, India', isPremium: false, gender: 'Female',
            img: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: false, maritalStatus: 'Never Married', salary: '15 LPA',
            education: 'CA, M.Com', languages: ['English', 'Tamil', 'Hindi'],
            bio: 'I love numbers as much as I love Carnatic music. I am a balance-sheet expert with a fun-loving heart. I value honesty and am looking for someone with a good sense of humor.'
        },
        {
            id: 'PB-0005', name: 'Vikram Singh', age: 32, profession: 'Marketing Manager',
            location: 'Bangalore, Karnataka, India', isPremium: true, gender: 'Male',
            img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: true, maritalStatus: 'Never Married', salary: '22 LPA',
            education: 'MBA in Marketing', languages: ['English', 'Hindi', 'Kannada'],
            bio: 'Driven professional with a passion for brand building. I enjoy marathon running and exploring Bangalore\'s diverse food scene. Looking for an independent woman with similar zest for life.'
        },
        {
            id: 'PB-0006', name: 'Anjali Gupta', age: 27, profession: 'HR Specialist',
            location: 'Hyderabad, Telangana, India', isPremium: false, gender: 'Female',
            img: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: false, maritalStatus: 'Never Married', salary: '9 LPA',
            education: 'MBA in HR', languages: ['English', 'Hindi', 'Telugu'],
            bio: 'I’m an extrovert who loves connecting with people. My life revolves around my family and my love for Hyderabadi Biryani. I am looking for a compassionate partner who believes in mutual growth.'
        },
        {
            id: 'PB-0007', name: 'Rohan Mehta', age: 29, profession: 'Product Manager',
            location: 'Ahmedabad, Gujarat, India', isPremium: true, gender: 'Male',
            img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: true, maritalStatus: 'Never Married', salary: '20 LPA',
            education: 'B.Tech + MBA', languages: ['English', 'Gujarati', 'Hindi'],
            bio: 'A strategist who loves solving problems. I enjoy reading non-fiction and occasional weekend cooking experiments. Looking for someone intelligent, kind, and ambitious.'
        },
        {
            id: 'PB-0008', name: 'Kavita Reddy', age: 26, profession: 'Content Creator',
            location: 'Bangalore, Karnataka, India', isPremium: true, gender: 'Female',
            img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: false, maritalStatus: 'Never Married', salary: '14 LPA',
            education: 'B.A. in Journalism', languages: ['English', 'Telugu', 'Hindi'],
            bio: 'Life is a story, and I love telling it through my lens. I am a digital nomad at heart but firmly rooted in my values. Seeking someone who is supportive and adventurous.'
        },
        {
            id: 'PB-0009', name: 'Siddharth Das', age: 31, profession: 'Doctor (MD)',
            location: 'Kolkata, West Bengal, India', isPremium: false, gender: 'Male',
            img: 'https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: true, maritalStatus: 'Never Married', salary: '18 LPA',
            education: 'MD Internal Medicine', languages: ['English', 'Bengali', 'Hindi'],
            bio: 'Dedicated to my profession and patients. I find solace in Rabindra Sangeet and the quiet corners of Kolkata. Looking for a simple, educated woman who understands the life of a doctor.'
        },
        {
            id: 'PB-0010', name: 'Meera Nair', age: 25, profession: 'Classical Dancer',
            location: 'Kochi, Kerala, India', isPremium: false, gender: 'Female',
            img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: false, maritalStatus: 'Never Married', salary: '6 LPA',
            education: 'B.A. in Fine Arts', languages: ['English', 'Malayalam'],
            bio: 'Dance is my soul. I am a traditionalist who loves the serenity of Kerala backwaters. I am looking for a life partner who respects art and shares a love for travel.'
        },
        {
            id: 'PB-0011', name: 'Arjun Verma', age: 28, profession: 'Financial Analyst',
            location: 'Gurgaon, Haryana, India', isPremium: true, gender: 'Male',
            img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: true, maritalStatus: 'Never Married', salary: '16 LPA',
            education: 'CFA, B.Com', languages: ['English', 'Hindi'],
            bio: 'Always tracking the markets but never losing track of family. I enjoy golf and watching thrillers. Seeking an ambitious and understanding partner.'
        },
        {
            id: 'PB-0012', name: 'Ishani Roy', age: 24, profession: 'Lawyer',
            location: 'Lucknow, Uttar Pradesh, India', isPremium: false, gender: 'Female',
            img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: false, maritalStatus: 'Never Married', salary: '11 LPA',
            education: 'LLB (Hons)', languages: ['English', 'Hindi', 'Urdu'],
            bio: 'Fierce in the courtroom, gentle at home. I am passionate about social justice and animal welfare. Looking for a partner who is intellectually stimulating and kind.'
        },
        {
            id: 'PB-0013', name: 'Sandeep Patil', age: 33, profession: 'Farmer & Business',
            location: 'Kolhapur, Maharashtra, India', isPremium: true, gender: 'Male',
            img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: true, maritalStatus: 'Widowed', salary: '10 LPA',
            education: 'B.Sc in Agriculture', languages: ['Marathi', 'Hindi'],
            bio: 'Rooted in the soil, growing in business. I take pride in my heritage and modern farming techniques. Looking for a simple girl who loves nature and family values.'
        },
        {
            id: 'PB-0014', name: 'Aditi Joshi', age: 26, profession: 'Fashion Designer',
            location: 'Jaipur, Rajasthan, India', isPremium: true, gender: 'Female',
            img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: false, maritalStatus: 'Never Married', salary: '8 LPA',
            education: 'Degree in Fashion Design', languages: ['English', 'Hindi', 'Marwari'],
            bio: 'I find beauty in textiles and colors. Jaipur is my home, but my dreams are global. Looking for someone who is stylish, cultured, and supportive of my career.'
        },
        {
            id: 'PB-0015', name: 'Manoj Bajpayee', age: 30, profession: 'Chef',
            location: 'Lucknow, Uttar Pradesh, India', isPremium: false, gender: 'Male',
            img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: true, maritalStatus: 'Never Married', salary: '14 LPA',
            education: 'Hotel Management', languages: ['English', 'Hindi'],
            bio: 'Cooking is my passion; feeding people is my joy. I love the Awadhi culture and hospitality. Seeking a partner who is a foodie and appreciates the finer things in life.'
        },
        {
            id: 'PB-0016', name: 'Ritu Phogat', age: 27, profession: 'Sports Coach',
            location: 'Chandigarh, Punjab, India', isPremium: false, gender: 'Female',
            img: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: false, maritalStatus: 'Never Married', salary: '7 LPA',
            education: 'B.P.Ed (Physical Education)', languages: ['Hindi', 'Punjabi'],
            bio: 'Disciplined, energetic, and a fitness freak. I believe in a healthy body and a healthy mind. Looking for an active partner who enjoys sports and fitness.'
        },
        {
            id: 'PB-0017', name: 'Abhishek Jain', age: 29, profession: 'UX Designer',
            location: 'Indore, Madhya Pradesh, India', isPremium: true, gender: 'Male',
            img: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: true, maritalStatus: 'Never Married', salary: '19 LPA',
            education: 'B.Des', languages: ['English', 'Hindi'],
            bio: 'I focus on making things simple and useful. I love photography and weekend bike trips. Seeking a creative and empathetic partner.'
        },
        {
            id: 'PB-0018', name: 'Pooja Hegde', age: 25, profession: 'Architect',
            location: 'Surat, Gujarat, India', isPremium: false, gender: 'Female',
            img: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: false, maritalStatus: 'Never Married', salary: '13 LPA',
            education: 'B.Arch', languages: ['English', 'Gujarati', 'Hindi'],
            bio: 'I love designing modern spaces with traditional hearts. I am a fan of literature and classical music. Looking for a visionary partner.'
        },
        {
            id: 'PB-0019', name: 'Varun Dhawan', age: 28, profession: 'Stock Broker',
            location: 'Mumbai, Maharashtra, India', isPremium: true, gender: 'Male',
            img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: true, maritalStatus: 'Divorced', salary: '30 LPA',
            education: 'BBA in Finance', languages: ['English', 'Hindi', 'Marathi'],
            bio: 'Living life in the fast lane of Mumbai. I enjoy high-stakes finance and high-energy nights. Seeking a partner who is vibrant and adaptable.'
        },
        {
            id: 'PB-0020', name: 'Kiara Advani', age: 26, profession: 'Professor',
            location: 'Pune, Maharashtra, India', isPremium: true, gender: 'Female',
            img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
            isVerified: false, maritalStatus: 'Never Married', salary: '10 LPA',
            education: 'Ph.D. in Literature', languages: ['English', 'Hindi', 'Marathi'],
            bio: 'Education is my calling. I am a quiet soul who loves libraries and historical documentaries. Looking for a calm and intellectual life partner.'
        }
    ]

    public static testimonials: any = [
        {
            id: 1,
            names: 'Rahul & Sneha',
            location: 'Mumbai',
            weddingDate: 'Dec 2025',
            img: 'https://i.pravatar.cc/100?u=1',
            quote: 'The filters were so precise! I found someone who loves high-altitude trekking just as much as I do. Truly grateful.'
        },
        {
            id: 2,
            names: 'Amit & Priya',
            location: 'Delhi',
            weddingDate: 'Jan 2026',
            img: 'https://i.pravatar.cc/100?u=2',
            quote: 'Verification was my main concern. Pavitra Bandhans strict profile checks gave us the confidence to meet and start our journey.'
        },
        {
            id: 3,
            names: 'Vikram & Aditi',
            location: 'Bangalore',
            weddingDate: 'Feb 2026',
            img: 'https://i.pravatar.cc/100?u=4',
            quote: 'As busy professionals, we did not have time for endless searching. The AI-matching suggested exactly what we were both looking for.'
        },
        {
            id: 4,
            names: 'Rohan & Meera',
            location: 'Pune',
            weddingDate: 'Nov 2025',
            img: 'https://i.pravatar.cc/100?u=4',
            quote: 'I loved how I could control my photo privacy. It felt safe, respectful, and modern. We found each other in just three months!'
        },
        {
            id: 5,
            names: 'Arjun & Ishani',
            location: 'Hyderabad',
            weddingDate: 'Oct 2025',
            img: 'https://i.pravatar.cc/100?u=5',
            quote: 'Our families were very involved in the process. This platform bridges the gap between traditional values and modern convenience perfectly.'
        },
        {
            id: 6,
            names: 'Siddharth & Kavita',
            location: 'Kolkata',
            weddingDate: 'Mar 2026',
            img: 'https://i.pravatar.cc/100?u=6',
            quote: 'The customer support team helped us at every step. It feels like a community, not just a website. Highly recommended for serious seekers.'
        }
    ];
}
