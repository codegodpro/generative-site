import { ArrowRight, Building, CreditCard, TrendingUp, Users, Shield, Clock, Award, CheckCircle, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import commercialImage from '@/assets/commercial-banking.jpg';

const Commercial = () => {
  const services = [
    {
      icon: Building,
      title: 'Business Checking',
      description: 'Comprehensive checking accounts designed to meet the unique needs of your business operations.',
      features: ['No monthly maintenance fees', 'Free online banking', 'Mobile deposits', 'Unlimited transactions'],
      cta: 'Open Business Account'
    },
    {
      icon: CreditCard,
      title: 'Business Credit Cards',
      description: 'Flexible credit solutions with rewards programs tailored for business expenses and cash flow.',
      features: ['Reward points on purchases', 'Expense management tools', 'Employee cards', 'Fraud protection'],
      cta: 'Apply for Business Card'
    },
    {
      icon: TrendingUp,
      title: 'Business Loans',
      description: 'Competitive loan options for equipment financing, expansion, and working capital needs.',
      features: ['Competitive rates', 'Flexible terms', 'Quick approval process', 'Dedicated loan officers'],
      cta: 'Apply for Loan'
    },
    {
      icon: Users,
      title: 'Payroll Services',
      description: 'Streamlined payroll management with direct deposit, tax filing, and employee self-service.',
      features: ['Automated payroll processing', 'Tax compliance', 'Employee portal', 'HR support'],
      cta: 'Setup Payroll'
    },
    {
      icon: PieChart,
      title: 'Cash Management',
      description: 'Advanced cash management solutions to optimize your business liquidity and operations.',
      features: ['ACH processing', 'Wire transfers', 'Account reconciliation', 'Fraud prevention'],
      cta: 'Learn More'
    },
    {
      icon: Shield,
      title: 'Merchant Services',
      description: 'Accept payments anywhere with our secure point-of-sale and online payment solutions.',
      features: ['Credit card processing', 'Online payments', 'Mobile solutions', 'Real-time reporting'],
      cta: 'Get Quote'
    }
  ];

  const testimonials = [
    {
      company: 'TechStart Solutions',
      quote: 'SecureBank has been instrumental in our growth. Their business banking solutions helped us scale from a startup to a thriving company.',
      author: 'Jennifer Martinez, CEO'
    },
    {
      company: 'Green Valley Manufacturing',
      quote: 'The commercial lending team understood our industry needs and provided financing that enabled our equipment upgrade.',
      author: 'Robert Kim, Operations Director'
    },
    {
      company: 'Downtown Restaurants Group',
      quote: 'Their merchant services and cash management tools have streamlined our operations across all locations.',
      author: 'Maria Santos, CFO'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Dedicated Relationship Manager',
      description: 'Personal banker who understands your business and industry.'
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Specialized knowledge across various business sectors.'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security for your business transactions.'
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
            backgroundImage: `url(${commercialImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Banking for
              <span className="text-bank-accent"> Business Success</span>
            </h1>
            <p className="text-xl text-bank-light-text mb-8 leading-relaxed">
              Empower your business with comprehensive commercial banking solutions. From startup financing 
              to enterprise cash management, we provide the tools and expertise to fuel your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-bank-accent text-bank-primary hover:bg-bank-accent/90 shadow-3d hover:shadow-3d-hover">
                Schedule Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="glass-card border-white text-white hover:bg-white hover:text-bank-primary shadow-3d hover:shadow-3d-hover">
                Get Consultation
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
              Commercial Banking Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial services designed to support businesses of all sizes and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card shadow-3d hover:shadow-3d-hover card-3d border-0">
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
                  
                  <Button className="w-full bg-bank-primary hover:bg-bank-primary/90 text-white shadow-3d hover:shadow-3d-hover transition-all duration-300">
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Business Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses that have partnered with us for their financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card shadow-3d hover:shadow-3d-hover card-3d border-0">
                <CardContent className="p-8">
                  <div className="text-bank-accent text-4xl mb-4">"</div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-bank-accent">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Commercial Banking?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience banking that understands business with personalized service and industry expertise.
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

      {/* Industry Focus Section */}
      <section className="py-16 lg:py-24 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We provide specialized banking solutions across diverse industries with tailored expertise.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Technology', 'Healthcare', 'Manufacturing', 'Retail', 'Real Estate', 'Professional Services', 'Hospitality', 'Construction'].map((industry, index) => (
                <div key={index} className="glass-card p-6 rounded-lg shadow-3d hover:shadow-3d-hover transform transition-all duration-300 hover:scale-105">
                  <div className="text-bank-primary font-semibold">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Large CTA Section */}
      <section className="py-16 lg:py-24 bg-bank-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-bank-light-text mb-8 leading-relaxed">
              Let's discuss how our commercial banking solutions can support your business goals. 
              Schedule a consultation with our business banking specialists today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Button size="lg" className="bg-bank-accent text-bank-primary hover:bg-bank-accent/90 shadow-3d hover:shadow-3d-hover">
                Schedule Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="glass-card border-white text-white hover:bg-white hover:text-bank-primary shadow-3d hover:shadow-3d-hover">
                Apply Now
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-bank-accent mb-2">$50M+</div>
                <div className="text-bank-light-text">Business Loans Funded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bank-accent mb-2">2,500+</div>
                <div className="text-bank-light-text">Business Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bank-accent mb-2">98%</div>
                <div className="text-bank-light-text">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Commercial;