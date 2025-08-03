import { ArrowRight, Wallet, CreditCard, Smartphone, TrendingUp, Shield, Clock, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import personalImage from '@/assets/personal-banking.jpg';

const Personal = () => {
  const services = [
    {
      icon: Wallet,
      title: 'Savings Accounts',
      description: 'High-yield savings accounts with competitive interest rates and no minimum balance requirements.',
      features: ['Up to 3.5% APY', 'No monthly fees', 'FDIC insured', 'Mobile banking access'],
      cta: 'Open Savings Account'
    },
    {
      icon: CheckCircle,
      title: 'Checking Accounts',
      description: 'Flexible checking accounts designed for your everyday banking needs with premium benefits.',
      features: ['No minimum balance', 'Free ATM withdrawals', 'Online bill pay', 'Overdraft protection'],
      cta: 'Open Checking Account'
    },
    {
      icon: CreditCard,
      title: 'Credit Cards',
      description: 'Reward credit cards with cashback, travel points, and fraud protection features.',
      features: ['Up to 3% cashback', 'No annual fee', 'Travel insurance', '24/7 fraud monitoring'],
      cta: 'Apply for Credit Card'
    },
    {
      icon: Smartphone,
      title: 'Mobile Banking',
      description: 'Award-winning mobile app with advanced features for banking on the go.',
      features: ['Instant transfers', 'Mobile check deposit', 'Biometric security', 'Spending insights'],
      cta: 'Download App'
    },
    {
      icon: TrendingUp,
      title: 'Investment Services',
      description: 'Professional investment advisory services to help grow your wealth over time.',
      features: ['Portfolio management', 'Retirement planning', 'Financial advisory', 'Tax-efficient investing'],
      cta: 'Schedule Consultation'
    },
    {
      icon: Shield,
      title: 'Personal Loans',
      description: 'Competitive personal loans for major purchases, debt consolidation, or life events.',
      features: ['Low interest rates', 'Flexible terms', 'Quick approval', 'No prepayment penalty'],
      cta: 'Apply for Loan'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Customer Support',
      description: 'Round-the-clock support through phone, chat, and email.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Multi-layer security with fraud monitoring and instant alerts.'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in customer service and digital banking.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-bank-primary/85 via-bank-primary/75 to-bank-primary/65"
          style={{
            backgroundImage: `url(${personalImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Banking Made
              <span className="text-bank-accent"> Personal</span>
            </h1>
            <p className="text-xl text-bank-light-text mb-8 leading-relaxed">
              Discover a full range of personal banking services designed to simplify your financial life. 
              From everyday checking to long-term investments, we have the tools to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-bank-accent text-bank-primary hover:bg-bank-accent/90">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="glass-card border-white text-white hover:bg-white hover:text-bank-primary">
                Schedule Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Personal Banking Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your finances effectively, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card border transform transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="icon-container mb-4">
                    <service.icon className="h-6 w-6 text-bank-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-bank-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                   <Button className="w-full bg-bank-primary hover:bg-bank-primary/90 text-white transition-all duration-300">
                     {service.cta}
                   </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Personal Banking?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience banking that puts you first with personalized service and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-bank-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-bank-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Start Saving Today
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With our high-yield savings accounts, your money works harder for you. 
                  See how much you could earn with competitive interest rates.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-bank-accent" />
                    <span className="text-muted-foreground">No minimum balance required</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-bank-accent" />
                    <span className="text-muted-foreground">FDIC insured up to $250,000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-bank-accent" />
                    <span className="text-muted-foreground">Mobile and online access</span>
                  </div>
                </div>
              </div>
              
              <Card className="glass-card border">
                <CardHeader>
                  <CardTitle className="text-center">Savings Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-bank-accent/5 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-bank-accent mb-2">3.5%</div>
                    <div className="text-sm text-muted-foreground">Annual Percentage Yield</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Initial Deposit</label>
                      <div className="text-2xl font-bold text-foreground">$10,000</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">After 1 Year</label>
                      <div className="text-2xl font-bold text-bank-accent">$10,350</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-bank-accent text-bank-primary hover:bg-bank-accent/90 transition-all duration-300">
                    Open Savings Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-bank-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Better Banking?
          </h2>
          <p className="text-xl text-bank-light-text mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to SecureBank for their personal banking needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-bank-accent text-bank-primary hover:bg-bank-accent/90">
              Open Account Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="glass-card border-white text-white hover:bg-white hover:text-bank-primary">
              Talk to an Agent
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Personal;