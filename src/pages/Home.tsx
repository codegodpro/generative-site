import React, { useState } from 'react';
import { ArrowRight, Shield, Smartphone, CreditCard, TrendingUp, Calculator, DollarSign, PieChart, Building, Users, Award, CheckCircle, Home as HomeIcon, Car, Briefcase, CreditCard as CardIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Home = () => {
  const promotionalCards = [
    {
      title: 'Your Needs',
      subtitle: 'Distinguished Loans',
      description: 'Your needs are distinct. Your loan is distinguished.',
      image: '/attached_assets/generated_images/Banking_loan_professional_image_5c558072.png',
      link: '/loans'
    },
    {
      title: 'Maximum Card',
      subtitle: 'Everything You Need',
      description: 'Maximum Card, provides everything you need.',
      image: '/attached_assets/generated_images/Maximum_credit_card_product_3a804f7d.png',
      link: '/maximum'
    },
    {
      title: 'İşCep',
      subtitle: 'Mobile Banking',
      description: "Turkey's most comprehensive mobile banking app İşCep!",
      image: '/attached_assets/generated_images/Mobile_banking_app_interface_b9a0faf2.png',
      link: '/iscep'
    },
    {
      title: 'Capital Market',
      subtitle: 'Investment Products',
      description: 'Wide Range of Capital Market Products is at İşbank!',
      image: '/attached_assets/generated_images/Capital_market_investment_concept_1761434e.png',
      link: '/deposit-and-investment'
    }
  ];

  const services = [
    { icon: HomeIcon, title: 'Mortgage', subtitle: 'Loan Services' },
    { icon: Calculator, title: 'Calculators', subtitle: 'Financial Tools' },
    { icon: PieChart, title: 'Deposits', subtitle: 'Investment' },
    { icon: TrendingUp, title: 'Investment', subtitle: 'Portfolio' },
    { icon: CreditCard, title: 'Loan Cards', subtitle: 'Easy Credit' },
    { icon: Briefcase, title: 'Corporate', subtitle: 'Business Banking' },
    { icon: CardIcon, title: 'Credit Cards', subtitle: 'All Cards' },
    { icon: Users, title: 'Funding and', subtitle: 'Support' }
  ];

  const additionalServices = [
    { icon: Shield, title: 'Internet Banking', subtitle: 'Digital Services' },
    { icon: Smartphone, title: 'Mobile Banking', subtitle: 'Apps' },
    { icon: Building, title: 'ATM & Branches', subtitle: 'Locations' },
    { icon: Award, title: 'Awards & Recognition', subtitle: 'Achievements' },
    { icon: CheckCircle, title: 'Customer Services', subtitle: 'Support' }
  ];

  const exchangeRates = [
    { currency: 'USD', buy: '30.9458', sell: '31.0298', flag: '🇺🇸' },
    { currency: 'EUR', buy: '33.8441', sell: '33.9508', flag: '🇪🇺' },
    { currency: 'GBP', buy: '39.1429', sell: '39.4419', flag: '🇬🇧' },
    { currency: 'Gold', buy: '4,293.67', sell: '4,340.71', flag: '🥇' }
  ];

  const newsArticles = [
    {
      title: 'Digital transformation in banking reaches all branches',
      description: 'Banking services modernization continues with new digital solutions...',
      date: '2 days ago'
    },
    {
      title: 'New Student Support Project Launched',
      description: 'Supporting education with special loan packages for students...',
      date: '3 days ago'
    },
    {
      title: 'Annual Fund Campaign Announced',
      description: 'Contributing to community development with our annual social responsibility project...',
      date: '1 week ago'
    }
  ];

  const lifeServices = [
    {
      title: 'Mortgage Account Packages Need',
      description: 'Mortgage account applications are now much easier. Get the home of your dreams.',
      image: '👨‍👩‍👧‍👦'
    },
    {
      title: 'EFT Service Available 24/7',
      description: 'Transfer money anytime with 24/7 EFT service availability.',
      image: '💳'
    },
    {
      title: 'Financial Planning for Young People',
      description: 'Special financial planning packages designed for young people and students.',
      image: '🎓'
    }
  ];

  const additionalServices = [
    { icon: Shield, title: 'Internet Banking', subtitle: 'Digital Services' },
    { icon: Smartphone, title: 'Mobile Banking', subtitle: 'Apps' },
    { icon: Building, title: 'ATM & Branches', subtitle: 'Locations' },
    { icon: Award, title: 'Awards & Recognition', subtitle: 'Achievements' },
    { icon: CheckCircle, title: 'Customer Services', subtitle: 'Support' }
  ];

  const exchangeRates = [
    { currency: 'USD', buy: '30.9458', sell: '31.0298', flag: '🇺🇸' },
    { currency: 'EUR', buy: '33.8441', sell: '33.9508', flag: '🇪🇺' },
    { currency: 'GBP', buy: '39.1429', sell: '39.4419', flag: '🇬🇧' },
    { currency: 'Gold', buy: '4,293.67', sell: '4,340.71', flag: '🥇' }
  ];

  const newsArticles = [
    {
      title: 'Digital transformation in banking reaches all branches',
      description: 'Banking services modernization continues with new digital solutions...',
      date: '2 days ago'
    },
    {
      title: 'New Student Support Project Launched',
      description: 'Supporting education with special loan packages for students...',
      date: '3 days ago'
    },
    {
      title: 'Annual Fund Campaign Announced',
      description: 'Contributing to community development with our annual social responsibility project...',
      date: '1 week ago'
    }
  ];

  const lifeServices = [
    {
      title: 'Mortgage Account Packages Need',
      description: 'Mortgage account applications are now much easier. Get the home of your dreams.',
      image: '👨‍👩‍👧‍👦'
    },
    {
      title: 'EFT Service Available 24/7',
      description: 'Transfer money anytime with 24/7 EFT service availability.',
      image: '💳'
    },
    {
      title: 'Financial Planning for Young People',
      description: 'Special financial planning packages designed for young people and students.',
      image: '🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-bank-soft-gray">
      <Navigation />
      
      {/* Promotional Cards Carousel Section */}
      <section className="py-6 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {promotionalCards.map((card, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                  <Card className={`${card.color} border-0 overflow-hidden card-3d shadow-3d transform transition-all duration-300 hover:scale-105`}>
                    <CardContent className="p-6">
                      <div className={card.textColor}>
                        <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                        <p className="text-2xl font-bold mb-1">{card.subtitle}</p>
                        <p className="text-sm opacity-90">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass-card border-0 shadow-3d hover:shadow-3d-hover" />
            <CarouselNext className="glass-card border-0 shadow-3d hover:shadow-3d-hover" />
          </Carousel>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto glass-card shadow-3d">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center text-bank-primary mb-8">Loan Calculator</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4 border-b border-border pb-4">
                    <button 
                      onClick={() => setActiveTab('need')}
                      className={`font-semibold pb-2 transition-all duration-200 ${
                        activeTab === 'need' 
                          ? 'text-bank-primary border-b-2 border-bank-primary' 
                          : 'text-muted-foreground hover:text-bank-primary'
                      }`}
                    >
                      Need
                    </button>
                    <button 
                      onClick={() => setActiveTab('housing')}
                      className={`font-semibold pb-2 transition-all duration-200 ${
                        activeTab === 'housing' 
                          ? 'text-bank-primary border-b-2 border-bank-primary' 
                          : 'text-muted-foreground hover:text-bank-primary'
                      }`}
                    >
                      Housing
                    </button>
                    <button 
                      onClick={() => setActiveTab('vehicle')}
                      className={`font-semibold pb-2 transition-all duration-200 ${
                        activeTab === 'vehicle' 
                          ? 'text-bank-primary border-b-2 border-bank-primary' 
                          : 'text-muted-foreground hover:text-bank-primary'
                      }`}
                    >
                      Vehicle
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Need Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Need Loan Interest Rate" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Personal Loan</SelectItem>
                          <SelectItem value="vehicle">Vehicle Loan</SelectItem>
                          <SelectItem value="housing">Housing Loan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Loan Amount (TL)</label>
                        <Input placeholder="100,000" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Term (Month)</label>
                        <Input placeholder="12" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Monthly Payment</p>
                    <p className="text-3xl font-bold text-bank-primary">11,577.13 TL</p>
                    <p className="text-sm text-muted-foreground mt-1">Interest Rate: %4.2</p>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <Button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white shadow-3d hover:shadow-3d-hover transition-all duration-300">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="flex-1 shadow-3d hover:shadow-3d-hover transition-all duration-300">
                      Loan Details
                    </Button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    *This calculation is informational and the actual loan conditions may vary.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="text-center card-3d glass-card cursor-pointer">
                <CardContent className="p-4">
                  <div className="icon-container mx-auto mb-2 w-fit">
                    <service.icon className="h-6 w-6 text-bank-primary" />
                  </div>
                  <h4 className="font-semibold text-xs text-bank-primary">{service.title}</h4>
                  <p className="text-xs text-muted-foreground">{service.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center card-3d glass-card cursor-pointer">
                <CardContent className="p-6">
                  <div className="icon-container mx-auto mb-3 w-fit">
                    <service.icon className="h-8 w-8 text-bank-primary" />
                  </div>
                  <h4 className="font-semibold text-sm text-bank-primary mb-1">{service.title}</h4>
                  <p className="text-xs text-muted-foreground">{service.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Rates */}
      <section className="py-8 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <Card className="glass-card shadow-3d">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-bank-primary mb-6">SecureBank Exchange Rates</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {exchangeRates.map((rate, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{rate.flag}</div>
                    <div className="font-bold text-bank-primary mb-1">{rate.currency}</div>
                    <div className="text-sm text-muted-foreground">
                      <div>Buy: {rate.buy}</div>
                      <div>Sell: {rate.sell}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6 justify-center">
                <Button variant="outline" size="sm" className="shadow-3d hover:shadow-3d-hover transition-all duration-300">View All Rates</Button>
                <Button className="bg-pink-500 hover:bg-pink-600 text-white shadow-3d hover:shadow-3d-hover transition-all duration-300" size="sm">Exchange Calculator</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* News Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-bank-primary mb-6">SecureBank News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {newsArticles.map((article, index) => (
              <Card key={index} className="card-3d glass-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-bank-primary mb-3">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                  <p className="text-xs text-muted-foreground">{article.date}</p>
                  <Button variant="link" className="text-bank-accent p-0 h-auto mt-2 hover:scale-105 transition-all duration-200">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline">View All News</Button>
          </div>
        </div>
      </section>

      {/* Life Services */}
      <section className="py-8 bg-bank-soft-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-bank-primary mb-6 text-center">With You at Every Moment of Life!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lifeServices.map((service, index) => (
              <Card key={index} className="card-3d glass-card">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.image}</div>
                  <h3 className="font-semibold text-bank-primary mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link" className="text-bank-accent p-0 h-auto hover:scale-105 transition-all duration-200">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Blog Posts</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
