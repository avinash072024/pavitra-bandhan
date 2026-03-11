export class Constants {
    public static APP_NAME1: string = 'Pavitra';
    public static APP_NAME2: string = 'Bandhan';
    public static APP_NAME: string = this.APP_NAME1 + ' ' + this.APP_NAME2;
    public static APP_NAME_COMBINE: string = this.APP_NAME1 + this.APP_NAME2;

    // nav links
    public static navLinks: any = [
        { id: 1, path: 'home', label: 'Home' },
        { id: 2, path: 'dashboard', label: 'Dashboard' },
        { id: 3, path: 'search', label: 'Search' },
        { id: 4, path: 'pricing', label: 'Pricing' },
        { id: 5, path: 'about', label: 'About' },
        { id: 6, path: 'contact', label: 'Contact' }
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
}
