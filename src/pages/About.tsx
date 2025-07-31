import { Users, Award, Globe, Heart, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import aboutImage from '@/assets/about-banking.jpg';

const About = () => {
  const timeline = [
    {
      year: '1974',
      title: 'Founded',
      description: 'SecureBank was established with a vision to provide trusted financial services to the community.'
    },
    {
      year: '1985',
      title: 'First Digital Innovation',
      description: 'Launched one of the first ATM networks in the region, revolutionizing customer access to banking.'
    },
    {
      year: '1998',
      title: 'Online Banking Launch',
      description: 'Pioneered online banking services, making financial management more convenient for customers.'
    },
    {
      year: '2010',
      title: 'Mobile First',
      description: 'Introduced our award-winning mobile banking app, setting new standards for digital banking.'
    },
    {
      year: '2024',
      title: 'AI-Powered Banking',
      description: 'Leading the industry with AI-driven personalized financial advisory and fraud protection.'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We put our customers at the center of everything we do, ensuring their financial success is our priority.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in all our services, continuously improving to exceed expectations.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace technology and innovation to provide cutting-edge banking solutions.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'We are committed to supporting and strengthening the communities we serve.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      description: '20+ years in financial services with expertise in digital transformation and customer experience.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      description: 'Leading our digital innovation with 15+ years in fintech and cybersecurity.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chief Financial Officer',
      description: 'Expert in financial planning and risk management with a track record of sustainable growth.'
    },
    {
      name: 'David Thompson',
      role: 'Head of Customer Experience',
      description: 'Passionate about creating exceptional customer journeys and building lasting relationships.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-bank-primary/80 via-bank-primary/70 to-bank-primary/60"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Building Trust for
              <span className="text-bank-accent"> 50 Years</span>
            </h1>
            <p className="text-xl text-bank-light-text leading-relaxed">
              From our humble beginnings as a community bank to becoming a leader in digital banking innovation, 
              we've remained committed to our core mission: helping people achieve their financial dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At SecureBank, we believe everyone deserves access to exceptional financial services. 
                Our mission is to empower individuals and businesses to achieve their financial goals 
                through innovative banking solutions, personalized service, and unwavering security.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just a bank – we're your financial partner, committed to your success 
                and the prosperity of our communities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-bank-accent/10 p-6 rounded-2xl">
                <div className="text-2xl font-bold text-bank-primary mb-2">500K+</div>
                <div className="text-sm text-muted-foreground">Customers Served</div>
              </div>
              <div className="bg-bank-accent/10 p-6 rounded-2xl">
                <div className="text-2xl font-bold text-bank-primary mb-2">$2B+</div>
                <div className="text-sm text-muted-foreground">Assets Under Management</div>
              </div>
              <div className="bg-bank-accent/10 p-6 rounded-2xl">
                <div className="text-2xl font-bold text-bank-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Branch Locations</div>
              </div>
              <div className="bg-bank-accent/10 p-6 rounded-2xl">
                <div className="text-2xl font-bold text-bank-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five decades of innovation, growth, and unwavering commitment to our customers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-bank-accent">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-bank-accent rounded-full mt-2 mr-8 relative">
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-bank-accent/30" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-bank-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-bank-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals leading SecureBank into the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-bank-accent/10 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-bank-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                      <p className="text-bank-accent font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;