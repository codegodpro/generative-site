import { ArrowRight, Shield, Smartphone, CreditCard, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-banking.jpg';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Banking',
      description: 'Advanced encryption and fraud protection to keep your money safe.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Banking',
      description: 'Bank anywhere, anytime with our award-winning mobile app.'
    },
    {
      icon: CreditCard,
      title: 'Smart Cards',
      description: 'Contactless payments with cashback rewards and no annual fees.'
    },
    {
      icon: TrendingUp,
      title: 'Investment Tools',
      description: 'Grow your wealth with our professional investment advisory services.'
    }
  ];

  const stats = [
    { number: '500K+', label: 'Happy Customers' },
    { number: '50+', label: 'Years of Trust' },
    { number: '$2B+', label: 'Assets Managed' },
    { number: '99.9%', label: 'Uptime' }
  ];

  const partners = [
    'Visa', 'Mastercard', 'FDIC', 'Swift', 'Zelle'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-bank-primary via-bank-primary/90 to-bank-primary/80"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Banking Made
              <span className="text-bank-accent"> Simple</span> &
              <span className="text-bank-accent"> Secure</span>
            </h1>
            <p className="text-xl text-bank-light-text mb-8 leading-relaxed">
              Experience the future of banking with our innovative digital solutions. 
              From everyday banking to long-term investments, we're here to help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-bank-accent text-bank-primary hover:bg-bank-accent/90">
                Open Account Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bank-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose SecureBank?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with personalized service to provide you with the best banking experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="bg-bank-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-bank-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-bank-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-bank-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-bank-light-text mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SecureBank with their financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-bank-accent text-bank-primary hover:bg-bank-accent/90">
              Open Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bank-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Trusted by industry leaders</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-lg font-semibold text-muted-foreground">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;