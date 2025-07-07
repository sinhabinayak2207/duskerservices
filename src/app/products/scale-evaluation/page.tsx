"use client";
import React from 'react';
import ImageCarousel from '@/components/products/ImageCarousel';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductBenefits from '@/components/products/ProductBenefits';
// Testimonials removed
import ProductComparison from '@/components/products/ProductComparison';
import ProductFAQ from '@/components/products/ProductFAQ';
import ProductUseCases from '@/components/products/ProductUseCases';
import ProductRelated from '@/components/products/ProductRelated';
import ProductCTA from '@/components/products/ProductCTA';

export default function ScaleEvaluationPage() {
  // Hero section content
  const heroContent = {
    title: "Scale Evaluation",
    subtitle: "Comprehensive AI Testing",
    description: "Evaluate, benchmark, and improve your AI models with Scale's comprehensive testing framework. From automated testing to human feedback, ensure your models meet the highest standards of quality and reliability.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Schedule Demo",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/demo"
  };
  
  // Carousel images for evaluation platform
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      alt: "AI model evaluation dashboard",
      link: "/products/scale-evaluation/features"
    },
    {
      src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
      alt: "Performance testing visualization",
      link: "/products/scale-evaluation/use-cases"
    },
    {
      src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop",
      alt: "AI quality assurance process",
      link: "/products/scale-evaluation/technology"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      alt: "Team reviewing model performance",
      link: "/products/scale-evaluation/case-studies"
    }
  ];

  // Features section content
  const featuresContent = {
    title: "Comprehensive Model Evaluation",
    subtitle: "SCALE EVALUATION",
    description: "Scale Evaluation provides a complete framework for testing, benchmarking, and monitoring AI models throughout their lifecycle.",
    features: [
      {
        id: 1,
        title: "Benchmark Testing",
        description: "Compare your models against industry standards and competitors with standardized benchmarks and custom test suites.",
        icon: "📊",
        image: "/images/products/feature-benchmark.jpg"
      },
      {
        id: 2,
        title: "Safety Evaluation",
        description: "Assess model safety across dimensions including toxicity, bias, hallucinations, and security vulnerabilities.",
        icon: "🛡️",
        image: "/images/products/feature-safety.jpg"
      },
      {
        id: 3,
        title: "Performance Monitoring",
        description: "Track model performance in production with real-time monitoring, drift detection, and automated alerts.",
        icon: "📈",
        image: "/images/products/feature-monitoring.jpg"
      },
      {
        id: 4,
        title: "Custom Evaluation Datasets",
        description: "Create tailored evaluation datasets that match your specific use cases and requirements.",
        icon: "📂",
        image: "/images/products/feature-datasets.jpg"
      },
      {
        id: 5,
        title: "Comprehensive Analytics",
        description: "Gain insights into model performance with detailed analytics, visualizations, and reporting tools.",
        icon: "📉",
        image: "/images/products/feature-analytics.jpg"
      }
    ]
  };

  // Benefits section content
  const benefitsContent = {
    title: "Why Choose Scale Evaluation",
    subtitle: "BENEFITS",
    description: "Scale Evaluation helps you build better, safer AI models with comprehensive testing and monitoring.",
    benefits: [
      {
        id: 1,
        icon: "🚀",
        title: "Accelerated Development",
        description: "Identify and fix issues faster with comprehensive testing and detailed feedback."
      },
      {
        id: 2,
        icon: "🛡️",
        title: "Enhanced Safety",
        description: "Ensure your models meet the highest standards of safety and reliability."
      },
      {
        id: 3,
        icon: "🔍",
        title: "Quality Assurance",
        description: "Maintain consistent quality across all your AI models and applications."
      },
      {
        id: 4,
        icon: "📈",
        title: "Performance Insights",
        description: "Gain deep insights into model performance and behavior."
      },
      {
        id: 5,
        icon: "🔄",
        title: "Continuous Improvement",
        description: "Iterate and improve your models with ongoing evaluation and feedback."
      },
      {
        id: 6,
        icon: "💰",
        title: "Cost Efficiency",
        description: "Reduce development costs by identifying issues earlier in the development cycle."
      }
    ],
    stats: [
      { value: "60%", label: "Faster issue resolution" },
      { value: "40%", label: "Reduction in model failures" },
      { value: "3x", label: "Improvement in model quality" }
    ]
  };

  // Testimonials section content
  const testimonialsContent = {
    title: "Trusted by AI Leaders",
    subtitle: "TESTIMONIALS",
    testimonials: [
      {
        id: 1,
        name: "Dr. Sarah Chen",
        role: "VP of AI Research",
        company: "TechForward",
        content: "Scale Evaluation has transformed how we test and monitor our AI models. The insights we've gained have significantly improved our model quality and reliability.",
        avatar: "/images/testimonials/avatar1.jpg",
        rating: 5,
        companyLogo: "/images/testimonials/logo1.png"
      },
      {
        id: 2,
        name: "Michael Rodriguez",
        role: "Chief Technology Officer",
        company: "AI Innovations",
        content: "The comprehensive benchmarking capabilities have given us confidence in our models' performance compared to industry standards. It's been invaluable for our development process.",
        avatar: "/images/testimonials/avatar2.jpg",
        rating: 5,
        companyLogo: "/images/testimonials/logo2.png"
      },
      {
        id: 3,
        name: "Jennifer Lee",
        role: "Director of AI Ethics",
        company: "Global Systems",
        content: "Scale's safety evaluation framework has helped us identify and mitigate potential risks before deployment. It's now an essential part of our AI governance process.",
        avatar: "/images/testimonials/avatar3.jpg",
        rating: 4,
        companyLogo: "/images/testimonials/logo3.png"
      }
    ]
  };

  // Comparison section content
  const comparisonContent = {
    title: "Choose Your Plan",
    subtitle: "PRICING",
    features: [
      {
        name: "Evaluation Volume",
        basic: "10K tests/month",
        pro: "100K tests/month",
        enterprise: "Unlimited"
      },
      {
        name: "Automated Testing",
        basic: true,
        pro: true,
        enterprise: true
      },
      {
        name: "Human Feedback",
        basic: "Limited",
        pro: "Standard",
        enterprise: "Premium"
      },
      {
        name: "Benchmark Datasets",
        basic: "Basic set",
        pro: "Extended set",
        enterprise: "Full access"
      },
      {
        name: "Custom Test Creation",
        basic: false,
        pro: true,
        enterprise: true
      },
      {
        name: "Production Monitoring",
        basic: false,
        pro: "Basic",
        enterprise: "Advanced"
      },
      {
        name: "Team Collaboration",
        basic: "Up to 3 users",
        pro: "Up to 15 users",
        enterprise: "Unlimited"
      },
      {
        name: "Support",
        basic: "Email",
        pro: "Email + Chat",
        enterprise: "24/7 Dedicated"
      },
      {
        name: "Compliance Reports",
        basic: false,
        pro: "Basic",
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
        question: "How does Scale Evaluation compare to open-source evaluation tools?",
        answer: "While open-source tools provide basic evaluation capabilities, Scale Evaluation offers a comprehensive solution including curated benchmark datasets, human feedback collection, production monitoring, and specialized testing for safety and bias. Our platform is also designed for enterprise use with collaboration features, compliance reporting, and dedicated support."
      },
      {
        id: 2,
        question: "Can Scale Evaluation work with any AI model?",
        answer: "Yes, Scale Evaluation is model-agnostic and can work with any AI model regardless of architecture, training methodology, or deployment environment. We provide adapters for common frameworks and APIs, and our team can help with custom integrations for specialized models."
      },
      {
        id: 3,
        question: "How does the human feedback component work?",
        answer: "Scale Evaluation provides access to a network of trained evaluators who can assess model outputs based on criteria you define. You can specify evaluation guidelines, quality standards, and specific aspects to focus on. We also offer the option to use your own internal evaluators or subject matter experts for specialized domains."
      },
      {
        id: 4,
        question: "Can we create custom evaluation metrics?",
        answer: "Absolutely. While we provide a comprehensive set of standard metrics, Scale Evaluation allows you to define custom metrics specific to your use case. Our team can also help you design appropriate evaluation frameworks for novel applications where standard metrics may not apply."
      },
      {
        id: 5,
        question: "How does Scale ensure the quality of human evaluations?",
        answer: "We implement multiple quality control measures including calibration tasks, consensus evaluation, periodic audits, and evaluator performance tracking. For enterprise customers, we can also create specialized evaluation teams with domain expertise and additional training specific to your use case."
      }
    ]
  };

  // Use Cases section content
  const useCasesContent = {
    title: "Real-World Applications",
    subtitle: "USE CASES",
    useCases: [
      {
        id: "uc1",
        title: "LLM Evaluation",
        description: "Comprehensively evaluate large language models across dimensions of accuracy, safety, bias, and task-specific performance.",
        image: "/images/products/usecase-llm-evaluation.jpg",
        bullets: [
          "Factual accuracy assessment",
          "Safety and content policy testing",
          "Bias and fairness evaluation",
          "Specialized domain knowledge testing"
        ]
      },
      {
        id: "uc2",
        title: "Computer Vision Safety",
        description: "Ensure computer vision systems perform reliably across diverse scenarios and edge cases.",
        image: "/images/products/usecase-vision-safety.jpg",
        bullets: [
          "Edge case detection and testing",
          "Demographic performance parity",
          "Adversarial example resilience",
          "Safety-critical scenario validation"
        ]
      },
      {
        id: "uc3",
        title: "Regulatory Compliance",
        description: "Generate comprehensive documentation and evidence for AI governance and regulatory requirements.",
        image: "/images/products/usecase-compliance.jpg",
        bullets: [
          "Audit-ready documentation",
          "Bias and fairness assessments",
          "Model cards and datasheets",
          "Ongoing compliance monitoring"
        ]
      }
    ]
  };

  // Related Products section content
  const relatedProductsContent = {
    title: "Related Products",
    subtitle: "EXPLORE MORE",
    products: [
      {
        id: 1,
        title: "Scale Data Engine",
        description: "Build and maintain high-quality datasets for training and fine-tuning your AI models.",
        image: "/images/products/data-engine-card.jpg",
        path: "/products/scale-data-engine",
        gradient: "linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)"
      },
      {
        id: 2,
        title: "Scale GenAI Platform",
        description: "Build, deploy, and manage generative AI applications with our end-to-end platform.",
        image: "/images/products/genai-platform-card.jpg",
        path: "/products/scale-genai-platform",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      },
      {
        id: 3,
        title: "For Model Developers",
        description: "Discover how Scale's solutions can accelerate your AI model development.",
        image: "/images/products/model-developers-card.jpg",
        path: "/products/for-model-developers",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      }
    ]
  };

  // CTA section content
  const ctaContent = {
    title: "Ready to Elevate Your AI Quality?",
    description: "Get started with Scale Evaluation today and ensure your AI models meet the highest standards of quality, safety, and reliability.",
    primaryButtonText: "Start Free Trial",
    secondaryButtonText: "Talk to Sales",
    primaryButtonLink: "/trial",
    secondaryButtonLink: "/contact",
    backgroundImage: "/images/products/evaluation-cta-bg.jpg"
  };

  return (
    <main>
      {/* Hero section with carousel */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left column: Text content */}
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-sm md:text-base font-semibold text-green-500 uppercase tracking-wider">
                {heroContent.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
                  {heroContent.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                {heroContent.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={heroContent.primaryButtonLink}
                  className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
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
      {/* Testimonials section removed */}
      <ProductComparison {...comparisonContent} />
      <ProductFAQ {...faqContent} />
      <ProductRelated {...relatedProductsContent} />
      <ProductCTA {...ctaContent} />
    </main>
  );
}
