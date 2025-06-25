"use client";
import React from 'react';
import ImageCarousel from '@/components/products/ImageCarousel';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductBenefits from '@/components/products/ProductBenefits';
import ProductTestimonials from '@/components/products/ProductTestimonials';
import ProductComparison from '@/components/products/ProductComparison';
import ProductFAQ from '@/components/products/ProductFAQ';
import ProductUseCases from '@/components/products/ProductUseCases';
import ProductRelated from '@/components/products/ProductRelated';
import ProductCTA from '@/components/products/ProductCTA';

export default function ScaleDonovanPage() {
  // Hero section content
  const heroContent = {
    title: "Scale Donovan",
    subtitle: "AI for Government & Defense",
    description: "Accelerate mission-critical AI applications with Scale Donovan, our specialized platform designed for government, defense, and public sector organizations. Meet the highest standards of security, compliance, and performance.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Schedule Demo",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/demo"
  };
  
  // Carousel images for Donovan platform
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=2070&auto=format&fit=crop",
      alt: "Secure government data center",
      link: "/products/scale-donovan/features"
    },
    {
      src: "https://images.unsplash.com/photo-1551703599-1a9c1e0d1f34?q=80&w=2070&auto=format&fit=crop",
      alt: "Defense technology systems",
      link: "/products/scale-donovan/use-cases"
    },
    {
      src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2070&auto=format&fit=crop",
      alt: "Secure AI operations center",
      link: "/products/scale-donovan/technology"
    },
    {
      src: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=2069&auto=format&fit=crop",
      alt: "Government cybersecurity interface",
      link: "/products/scale-donovan/case-studies"
    }
  ];

  // Features section content
  const featuresContent = {
    title: "Secure AI for Government & Defense",
    subtitle: "SCALE DONOVAN",
    description: "Scale Donovan provides secure, compliant AI solutions tailored for government and defense applications.",
    features: [
      {
        id: 1,
        title: "Secure Data Handling",
        description: "Process sensitive and classified data with the highest security standards and compliance protocols.",
        icon: "🔒",
        image: "/images/products/feature-secure-data.jpg"
      },
      {
        id: 2,
        title: "Mission-Specific Models",
        description: "Develop and deploy AI models tailored for specific government and defense mission requirements.",
        icon: "💻",
        image: "/images/products/feature-mission-models.jpg"
      },
      {
        id: 3,
        title: "Cleared Personnel",
        description: "Work with Scale's team of cleared professionals who understand government requirements and security protocols.",
        icon: "👤",
        image: "/images/products/feature-cleared-personnel.jpg"
      },
      {
        id: 4,
        title: "Compliance Automation",
        description: "Streamline compliance with automated documentation, audit trails, and governance frameworks.",
        icon: "✅",
        image: "/images/products/feature-compliance.jpg"
      },
      {
        id: 5,
        title: "Flexible Deployment",
        description: "Deploy in air-gapped environments, government clouds, or on-premises infrastructure as required.",
        icon: "🖥️",
        image: "/images/products/feature-deployment.jpg"
      }
    ]
  };

  // Benefits section content
  const benefitsContent = {
    title: "Why Choose Scale Donovan",
    subtitle: "BENEFITS",
    description: "Scale Donovan helps government and defense organizations leverage AI while maintaining security and compliance.",
    benefits: [
      {
        id: 1,
        icon: "🔒",
        title: "Enhanced Security",
        description: "Maintain the highest levels of data security and protection for sensitive information."
      },
      {
        id: 2,
        icon: "📝",
        title: "Regulatory Compliance",
        description: "Meet stringent government regulations and compliance requirements with built-in safeguards."
      },
      {
        id: 3,
        icon: "🚀",
        title: "Mission Acceleration",
        description: "Accelerate mission outcomes with AI solutions tailored for government and defense use cases."
      },
      {
        id: 4,
        icon: "💰",
        title: "Cost Efficiency",
        description: "Optimize resource allocation and reduce operational costs with AI-powered automation."
      },
      {
        id: 5,
        icon: "👥",
        title: "Domain Expertise",
        description: "Leverage Scale's experience working with defense and intelligence communities."
      },
      {
        id: 6,
        icon: "🔄",
        title: "Continuous Improvement",
        description: "Benefit from ongoing enhancements and updates tailored for government requirements."
      }
    ],
    stats: [
      { value: "99.9%", label: "Security compliance rate" },
      { value: "40%", label: "Faster mission execution" },
      { value: "60%", label: "Reduction in manual processes" }
    ]
  };

  // Testimonials section content
  const testimonialsContent = {
    title: "Trusted by Government Leaders",
    subtitle: "TESTIMONIALS",
    testimonials: [
      {
        id: 1,
        name: "Col. James Wilson",
        role: "Director of Technology",
        company: "Defense Agency",
        content: "Scale Donovan has been instrumental in helping us leverage AI for mission-critical applications while maintaining the highest security standards.",
        avatar: "/images/testimonials/avatar4.jpg",
        rating: 5,
        companyLogo: "/images/testimonials/logo4.png"
      },
      {
        id: 2,
        name: "Dr. Elizabeth Chen",
        role: "Chief Information Officer",
        company: "Government Department",
        content: "The ability to deploy in our secure environment with cleared personnel has made Scale Donovan our go-to partner for AI initiatives.",
        avatar: "/images/testimonials/avatar5.jpg",
        rating: 5,
        companyLogo: "/images/testimonials/logo5.png"
      },
      {
        id: 3,
        name: "Michael Roberts",
        role: "Compliance Director",
        company: "Federal Agency",
        content: "Scale's compliance automation has significantly reduced the time and effort required to meet our stringent regulatory requirements.",
        avatar: "/images/testimonials/avatar6.jpg",
        rating: 4,
        companyLogo: "/images/testimonials/logo6.png"
      }
    ]
  };

  // Comparison section content
  const comparisonContent = {
    title: "Choose Your Plan",
    subtitle: "SOLUTIONS",
    features: [
      {
        name: "Security Classification",
        basic: "Unclassified",
        pro: "Secret",
        enterprise: "Top Secret/SCI"
      },
      {
        name: "Deployment Environment",
        basic: "Commercial Cloud",
        pro: "Gov Cloud",
        enterprise: "Air-gapped/SCIF"
      },
      {
        name: "Data Processing",
        basic: "Limited volume",
        pro: "Standard volume",
        enterprise: "High volume"
      },
      {
        name: "Cleared Personnel",
        basic: "Limited access",
        pro: "Standard access",
        enterprise: "Dedicated team"
      },
      {
        name: "Mission Support",
        basic: "Basic",
        pro: "Advanced",
        enterprise: "Comprehensive"
      },
      {
        name: "Edge Deployment",
        basic: false,
        pro: "Limited",
        enterprise: "Full support"
      },
      {
        name: "Custom Model Development",
        basic: false,
        pro: "Limited",
        enterprise: "Full support"
      },
      {
        name: "Support",
        basic: "Standard",
        pro: "Priority",
        enterprise: "24/7 Dedicated"
      },
      {
        name: "Compliance Documentation",
        basic: "Basic",
        pro: "Standard",
        enterprise: "Comprehensive"
      }
    ]
  };

  // FAQ section content
  const faqContent = {
    title: "Frequently Asked Questions",
    subtitle: "FAQ",
    faqs: [
      {
        id: 1,
        question: "What security certifications does Scale Donovan have?",
        answer: "Scale Donovan maintains a comprehensive set of security certifications including FedRAMP High, IL4/5, CMMC Level 3, ITAR compliance, and more. Our infrastructure and processes are regularly audited to ensure compliance with the latest government security requirements. We can provide detailed documentation on our security posture upon request."
      },
      {
        id: 2,
        question: "Can Scale Donovan work in classified environments?",
        answer: "Yes, Scale Donovan is specifically designed to operate in classified environments up to Top Secret/SCI. We have cleared personnel, secure facilities, and specialized infrastructure to support classified AI projects. We can deploy in government clouds, on-premises in SCIFs, or in hybrid configurations based on your requirements."
      },
      {
        id: 3,
        question: "How does Scale support tactical edge deployment?",
        answer: "Scale Donovan includes specialized capabilities for tactical edge deployment including model compression for size and latency optimization, offline operation modes, hardened hardware integration, and synchronization protocols for intermittent connectivity scenarios. Our team has extensive experience deploying AI solutions in austere and contested environments."
      },
      {
        id: 4,
        question: "What types of government-specific AI use cases does Scale support?",
        answer: "Scale Donovan supports a wide range of government-specific use cases including intelligence analysis, threat detection, autonomous systems, logistics optimization, predictive maintenance, disaster response, satellite imagery analysis, and more. Our team can work with you to adapt our platform to your specific mission requirements."
      },
      {
        id: 5,
        question: "How does Scale handle procurement for government agencies?",
        answer: "Scale has established procurement vehicles including GSA Schedule, SEWP, and various contract vehicles with defense and intelligence agencies. We also have experience with OTAs, SBIRs, and direct contracts. Our government solutions team can guide you through the most efficient procurement path for your organization."
      }
    ]
  };

  // Use Cases section content
  const useCasesContent = {
    title: "Mission Applications",
    subtitle: "USE CASES",
    useCases: [
      {
        id: "uc1",
        title: "Intelligence Analysis",
        description: "Accelerate intelligence analysis with AI-powered tools for processing, analyzing, and deriving insights from diverse intelligence sources.",
        image: "/images/products/usecase-intelligence.jpg",
        bullets: [
          "Multi-source intelligence fusion",
          "Pattern recognition and anomaly detection",
          "Automated report generation",
          "Real-time threat assessment"
        ]
      },
      {
        id: "uc2",
        title: "ISR Enhancement",
        description: "Enhance Intelligence, Surveillance, and Reconnaissance capabilities with advanced computer vision and sensor fusion.",
        image: "/images/products/usecase-isr.jpg",
        bullets: [
          "Object detection and tracking",
          "Change detection and monitoring",
          "Multi-sensor data integration",
          "Automated target recognition"
        ]
      },
      {
        id: "uc3",
        title: "Mission Planning",
        description: "Optimize mission planning and execution with AI-powered decision support and resource allocation tools.",
        image: "/images/products/usecase-mission-planning.jpg",
        bullets: [
          "Resource optimization and allocation",
          "Risk assessment and mitigation",
          "Scenario simulation and wargaming",
          "Real-time adaptation to changing conditions"
        ]
      }
    ]
  };

  // Related Products section content
  const relatedProductsContent = {
    title: "Related Solutions",
    subtitle: "EXPLORE MORE",
    products: [
      {
        id: 1,
        title: "For Government",
        description: "Discover how Scale's solutions can transform government operations with AI.",
        image: "/images/products/government-card.jpg",
        path: "/products/for-government",
        gradient: "linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)"
      },
      {
        id: 2,
        title: "For Public Sector",
        description: "AI solutions designed for public sector challenges and requirements.",
        image: "/images/products/public-sector-card.jpg",
        path: "/products/for-public-sector",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      },
      {
        id: 3,
        title: "Scale Data Engine",
        description: "Build and maintain high-quality datasets for training and fine-tuning your AI models.",
        image: "/images/products/data-engine-card.jpg",
        path: "/products/scale-data-engine",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      }
    ]
  };

  // CTA section content
  const ctaContent = {
    title: "Ready to Accelerate Your Mission?",
    description: "Get started with Scale Donovan today and transform how your organization leverages AI for mission-critical applications.",
    primaryButtonText: "Request Consultation",
    secondaryButtonText: "Download Capabilities Brief",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/resources/donovan-brief",
    backgroundImage: "/images/products/donovan-cta-bg.jpg"
  };

  return (
    <main>
      {/* Hero section with carousel */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left column: Text content */}
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-sm md:text-base font-semibold text-purple-500 uppercase tracking-wider">
                {heroContent.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
                  {heroContent.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                {heroContent.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={heroContent.primaryButtonLink}
                  className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
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
