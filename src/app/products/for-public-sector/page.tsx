"use client";
import React from 'react';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductBenefits from '@/components/products/ProductBenefits';
import ProductTestimonials from '@/components/products/ProductTestimonials';
import ProductComparison from '@/components/products/ProductComparison';
import ProductFAQ from '@/components/products/ProductFAQ';
import ProductUseCases from '@/components/products/ProductUseCases';
import ProductRelated from '@/components/products/ProductRelated';
import ProductCTA from '@/components/products/ProductCTA';
import ImageCarousel from '@/components/products/ImageCarousel';

export default function ForPublicSectorPage() {
  // Hero section content
  const heroContent = {
    title: "For Public Sector",
    subtitle: "Government & Public Services",
    description: "Empower public sector organizations with Scale's AI solutions designed to enhance service delivery, improve decision-making, and drive operational efficiency while maintaining the highest standards of security and compliance.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Schedule Demo",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/demo"
  };
  
  // Carousel images for hero section
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2069&auto=format&fit=crop",
      alt: "Government building with modern technology",
      link: "/products/for-public-sector/features"
    },
    {
      src: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop",
      alt: "Public sector data visualization dashboard",
      link: "/products/for-public-sector/use-cases"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      alt: "Smart city infrastructure visualization",
      link: "/products/for-public-sector/case-studies"
    },
    {
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      alt: "Public service delivery optimization",
      link: "/products/for-public-sector/technology"
    }
  ];

  // Features section content
  const featuresContent = {
    title: "Public Sector Solutions",
    subtitle: "GOVERNMENT AI",
    description: "Our suite of AI solutions is specifically designed to address the unique challenges faced by public sector organizations.",
    features: [
      {
        id: 1,
        title: "Secure Data Processing",
        description: "Process sensitive government data with our secure, compliant infrastructure that meets the highest security standards.",
        icon: "shield"
      },
      {
        id: 2,
        title: "Intelligent Document Processing",
        description: "Automate document processing and data extraction to streamline administrative workflows and reduce backlogs.",
        icon: "file-text"
      },
      {
        id: 3,
        title: "Decision Support Systems",
        description: "Enhance decision-making with AI-powered analytics and insights based on comprehensive data analysis.",
        icon: "trending-up"
      },
      {
        id: 4,
        title: "Citizen Service Optimization",
        description: "Improve citizen services through intelligent automation, predictive analytics, and personalized experiences.",
        icon: "users"
      }
    ]
  };

  // Benefits section content
  const benefitsContent = {
    title: "Public Sector Benefits",
    subtitle: "TRANSFORMATIVE IMPACT",
    description: "Discover how Scale's AI solutions can transform public sector operations and service delivery.",
    benefits: [
      {
        id: 1,
        title: "Operational Efficiency",
        description: "Streamline processes and reduce administrative burden through intelligent automation and workflow optimization.",
        icon: "settings"
      },
      {
        id: 2,
        title: "Enhanced Service Delivery",
        description: "Provide faster, more responsive services to citizens through AI-powered systems and predictive capabilities.",
        icon: "zap"
      },
      {
        id: 3,
        title: "Data-Driven Governance",
        description: "Make informed policy decisions based on comprehensive data analysis and predictive insights.",
        icon: "bar-chart-2"
      },
      {
        id: 4,
        title: "Cost Reduction",
        description: "Optimize resource allocation and reduce operational costs while maintaining or improving service quality.",
        icon: "dollar-sign"
      }
    ],
    stats: [
      {
        value: "40%",
        label: "Reduction in Processing Time"
      },
      {
        value: "30%",
        label: "Operational Cost Savings"
      },
      {
        value: "60%",
        label: "Improved Citizen Satisfaction"
      }
    ]
  };

  // Use cases section content
  const useCasesContent = {
    title: "Public Sector Use Cases",
    subtitle: "APPLICATIONS",
    description: "Explore how our AI solutions are being applied across various public sector domains.",
    useCases: [
      {
        id: "usecase1",
        title: "Smart City Management",
        description: "Optimize urban infrastructure, traffic flow, and resource allocation with AI-powered analytics and predictive modeling.",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2064&auto=format&fit=crop",
        bullets: [
          "Real-time traffic management and optimization",
          "Intelligent energy distribution and conservation",
          "Predictive maintenance for urban infrastructure",
          "Data-driven urban planning and development"
        ]
      },
      {
        id: "usecase2",
        title: "Public Health Analytics",
        description: "Enhance public health monitoring, resource allocation, and emergency response with advanced data analytics.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        bullets: [
          "Epidemic outbreak prediction and monitoring",
          "Healthcare resource optimization and allocation",
          "Population health trend analysis",
          "Emergency response coordination and planning"
        ]
      },
      {
        id: "usecase3",
        title: "Regulatory Compliance",
        description: "Streamline regulatory processes and ensure compliance through intelligent document processing and analysis.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
        bullets: [
          "Automated regulatory document processing",
          "Compliance monitoring and risk assessment",
          "Policy impact analysis and forecasting",
          "Regulatory reporting and documentation"
        ]
      },
      {
        id: "usecase4",
        title: "Citizen Engagement",
        description: "Improve citizen services and engagement through personalized, AI-powered communication and service delivery.",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop",
        bullets: [
          "Personalized citizen service portals",
          "AI-powered virtual assistants for public inquiries",
          "Sentiment analysis for public feedback",
          "Targeted communication for public services"
        ]
      }
    ]
  };

  // Testimonials section content
  const testimonialsContent = {
    title: "Public Sector Success Stories",
    subtitle: "TESTIMONIALS",
    testimonials: [
      {
        id: 1,
        name: "Director Thomas Johnson",
        content: "Scale's AI solutions have transformed our document processing workflow, reducing processing time by 45% and allowing our staff to focus on higher-value tasks that directly benefit our citizens.",
        role: "Director of Digital Transformation",
        company: "Metropolitan City Government",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        rating: 5
      },
      {
        id: 2,
        name: "Dr. Maria Sanchez",
        content: "The predictive analytics capabilities provided by Scale have significantly enhanced our public health monitoring and response systems, enabling us to allocate resources more effectively during critical situations.",
        role: "Chief Data Officer",
        company: "State Health Department",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        rating: 5
      },
      {
        id: 3,
        name: "Commissioner Robert Lee",
        content: "Implementing Scale's AI solutions for regulatory compliance has streamlined our processes, reduced errors, and improved overall efficiency. The security and compliance features have been particularly valuable for our sensitive operations.",
        role: "Commissioner",
        company: "Federal Regulatory Agency",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        rating: 5
      }
    ]
  };

  // Comparison section content
  const comparisonContent = {
    title: "Why Choose Scale for Public Sector",
    subtitle: "COMPETITIVE ADVANTAGE",
    description: "See how Scale's public sector solutions compare to alternatives.",
    comparisonTable: {
      headers: ["Features", "Scale", "Competitors"],
      rows: [
        ["Security & Compliance", "FedRAMP, HIPAA, CJIS compliant", "Variable compliance levels"],
        ["Specialized for Government", "Purpose-built for public sector", "Generic solutions adapted"],
        ["Implementation Time", "Rapid deployment", "Extended timelines"],
        ["Total Cost of Ownership", "Optimized for public budgets", "Unpredictable scaling costs"],
        ["Data Sovereignty", "Complete control & ownership", "Limited control options"],
        ["Training & Support", "Specialized government team", "General technical support"]
      ]
    }
  };

  // FAQ section content
  const faqContent = {
    title: "Frequently Asked Questions",
    subtitle: "FAQs",
    faqs: [
      {
        id: 1,
        question: "How does Scale ensure data security and compliance with government regulations?",
        answer: "Scale's solutions are built with security-first architecture and comply with major government standards including FedRAMP, FISMA, NIST 800-53, and CMMC. We implement end-to-end encryption, secure access controls, and regular security audits to protect sensitive government data."
      },
      {
        id: 2,
        question: "Can Scale's AI solutions integrate with our existing government systems?",
        answer: "Yes, our solutions are designed to integrate seamlessly with existing government IT infrastructure, including legacy systems. We provide APIs, connectors, and custom integration services to ensure smooth implementation without disrupting current operations."
      },
      {
        id: 3,
        question: "What kind of training and support does Scale provide for public sector implementations?",
        answer: "We offer comprehensive training programs specifically designed for government personnel, including role-based training, documentation, and ongoing support. Our dedicated public sector support team understands government operations and provides specialized assistance throughout the implementation and beyond."
      },
      {
        id: 4,
        question: "How does Scale address the unique procurement requirements of public sector organizations?",
        answer: "Scale is experienced with government procurement processes and holds various contract vehicles to simplify acquisition. We work with GSA schedules, GWAC contracts, and state-specific procurement vehicles, and our team can assist with RFP responses and compliance documentation."
      },
      {
        id: 5,
        question: "What is the typical implementation timeline for public sector projects?",
        answer: "Implementation timelines vary based on project scope, but our modular approach allows for phased implementation with initial capabilities deployed within weeks rather than months. We work closely with agencies to develop realistic timelines that align with their operational needs and budget cycles."
      }
    ]
  };

  // Related products section content
  const relatedProductsContent = {
    title: "Related Products",
    subtitle: "EXPLORE MORE",
    description: "Discover other Scale products that complement our public sector solutions.",
    products: [
      {
        id: 1,
        title: "For Government",
        description: "Specialized AI solutions for federal government agencies and operations.",
        image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=2070&auto=format&fit=crop",
        path: "/products/for-government",
        gradient: "linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)"
      },
      {
        id: 2,
        title: "Scale Donovan",
        description: "Advanced document intelligence for processing government documents efficiently.",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2290&auto=format&fit=crop",
        path: "/products/scale-donovan",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      },
      {
        id: 3,
        title: "Scale Evaluation",
        description: "Comprehensive evaluation framework for government AI systems.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        path: "/products/scale-evaluation",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      }
    ]
  };

  // CTA section content
  const ctaContent = {
    title: "Transform Your Public Services with AI",
    description: "Get started with Scale's public sector solutions and enhance your service delivery today.",
    primaryButtonText: "Request Demo",
    secondaryButtonText: "Contact Sales",
    primaryButtonLink: "/demo",
    secondaryButtonLink: "/contact",
    backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
  };

  return (
    <main>
      {/* Hero section with carousel */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left column: Text content */}
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-sm md:text-base font-semibold text-blue-500 uppercase tracking-wider">
                {heroContent.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                  {heroContent.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                {heroContent.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={heroContent.primaryButtonLink}
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                >
                  {heroContent.primaryButtonText}
                </a>
                <a
                  href={heroContent.secondaryButtonLink}
                  className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors border border-gray-700"
                >
                  {heroContent.secondaryButtonText}
                </a>
              </div>
            </div>
            
            {/* Right column: Image carousel */}
            <div className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <ImageCarousel images={carouselImages} height={400} />
            </div>
          </div>
        </div>
      </section>
      
      <ProductFeatures {...featuresContent} />
      <ProductBenefits {...benefitsContent} />
      <ProductUseCases {...useCasesContent} />
      <ProductTestimonials {...testimonialsContent} />
      <ProductComparison {...comparisonContent} />
      <ProductFAQ {...faqContent} />
      <ProductRelated {...relatedProductsContent} />
      <ProductCTA {...ctaContent} />
    </main>
  );
}
