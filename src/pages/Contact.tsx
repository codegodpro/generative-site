import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      description: 'Speak with our customer service team',
      details: '1-800-SECURE-1',
      subtext: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us your questions or concerns',
      details: 'support@securebank.com',
      subtext: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Find a branch or ATM near you',
      details: '150+ locations nationwide',
      subtext: 'Branch locator available'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'When you can reach us',
      details: 'Mon-Fri: 8am-6pm EST',
      subtext: 'Weekend support available'
    }
  ];

  const branches = [
    {
      name: 'Downtown Financial District',
      address: '123 Financial Plaza, New York, NY 10005',
      phone: '(212) 555-0123',
      hours: 'Mon-Fri: 9am-5pm, Sat: 9am-2pm'
    },
    {
      name: 'Midtown Business Center',
      address: '456 Business Ave, New York, NY 10018',
      phone: '(212) 555-0456',
      hours: 'Mon-Fri: 8:30am-5:30pm, Sat: 9am-1pm'
    },
    {
      name: 'Brooklyn Heights Branch',
      address: '789 Heights Road, Brooklyn, NY 11201',
      phone: '(718) 555-0789',
      hours: 'Mon-Fri: 9am-4pm, Sat: 10am-2pm'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bank-primary to-bank-primary/90 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get in <span className="text-bank-accent">Touch</span>
            </h1>
            <p className="text-xl text-bank-light-text leading-relaxed">
              We're here to help with all your banking needs. Reach out to us through any of the methods below, 
              and our team will be happy to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass-card border transform transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-8">
                  <div className="icon-container mx-auto mb-6 w-fit">
                    <method.icon className="h-8 w-8 text-bank-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-3">{method.description}</p>
                  <div className="text-bank-primary font-semibold mb-1">{method.details}</div>
                  <div className="text-sm text-muted-foreground">{method.subtext}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-24 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <Card className="glass-card border">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <Input type="email" placeholder="john.doe@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <Input type="tel" placeholder="(555) 123-4567" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <Input placeholder="How can we help you?" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <Textarea 
                        placeholder="Please describe your inquiry or how we can assist you..."
                        rows={5}
                      />
                    </div>
                    
                    <Button className="w-full bg-bank-primary hover:bg-bank-primary/90 text-white transition-all duration-300">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Branch Locations */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Branch Locations</h2>
              <p className="text-muted-foreground mb-8">
                Visit us at one of our convenient locations throughout the city.
              </p>
              
              <div className="space-y-6">
                {branches.map((branch, index) => (
                  <Card key={index} className="glass-card border">
                    <CardHeader>
                      <CardTitle className="text-lg text-bank-primary">{branch.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-bank-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{branch.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-bank-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{branch.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-bank-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{branch.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="w-full bg-bank-accent text-bank-primary hover:bg-bank-accent/90 transition-all duration-300">
                  Find All Locations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Quick answers to common questions about our banking services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <Card className="glass-card border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What are your customer service hours?</h3>
                  <p className="text-muted-foreground">Our customer service is available 24/7 by phone. Online chat support is available Monday-Friday 8am-8pm EST.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">How do I open a new account?</h3>
                  <p className="text-muted-foreground">You can open an account online, by phone, or by visiting any of our branch locations. The process typically takes 15-20 minutes.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Is mobile banking secure?</h3>
                  <p className="text-muted-foreground">Yes, our mobile banking uses bank-level encryption, biometric authentication, and real-time fraud monitoring to protect your accounts.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">What if I lose my debit card?</h3>
                  <p className="text-muted-foreground">Report lost cards immediately through our mobile app, online banking, or by calling our 24/7 customer service line for immediate card blocking.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;