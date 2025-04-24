import { Users, Heart, Globe, Award } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Users className="h-8 w-8 text-primary" />,
            title: 'Community Focused',
            description: 'We connect local restaurants with food lovers in your community, supporting small businesses and creating a vibrant food culture.'
        },
        {
            icon: <Heart className="h-8 w-8 text-primary" />,
            title: 'Quality Assured',
            description: 'Every restaurant on our platform is carefully vetted to ensure the highest quality of food and service for our customers.'
        },
        {
            icon: <Globe className="h-8 w-8 text-primary" />,
            title: 'Global Flavors',
            description: 'Discover authentic cuisines from around the world, all available in your neighborhood through our diverse restaurant partners.'
        },
        {
            icon: <Award className="h-8 w-8 text-primary" />,
            title: 'Best Experience',
            description: 'We strive to provide the best food delivery experience with real-time tracking, secure payments, and excellent customer support.'
        }
    ];

    const team = [
        {
            name: 'Jay kabdwal',
            role: 'Founder & CEO',
            image: 'https://images.app.goo.gl/2FeuBxdVRdDA9DvEA'
        },
        {
            name: 'Garima Bisht',
            role: 'Head of Operations',
            image: 'https://images.app.goo.gl/2FeuBxdVRdDA9DvEA'
        },
        {
            name: 'Vishal daa',
            role: 'Tech Lead',
            image: 'https://images.app.goo.gl/2FeuBxdVRdDA9DvEA'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        About LocalFoodie
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Connecting food lovers with the best local restaurants.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        At LocalFoodie, we believe in the power of local food to bring communities together.
                        Our mission is to support local restaurants while providing food lovers with easy access
                        to the best culinary experiences in their neighborhood.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Have questions or suggestions? We'd love to hear from you.
                        Contact us at support@localfoodie.com or follow us on social media.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300">
                            Contact Us
                        </button>
                        <button className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">
                            Join Our Team
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About; 