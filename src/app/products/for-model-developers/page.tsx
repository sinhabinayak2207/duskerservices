"use client";
import React from 'react';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductBenefits from '@/components/products/ProductBenefits';
// Testimonials removed
import ProductComparison from '@/components/products/ProductComparison';
import ProductFAQ from '@/components/products/ProductFAQ';
import ProductUseCases from '@/components/products/ProductUseCases';
import ProductRelated from '@/components/products/ProductRelated';
import ProductCTA from '@/components/products/ProductCTA';
import ImageCarousel from '@/components/products/ImageCarousel';

export default function ForModelDevelopersPage() {
  // Hero section content
  const heroContent = {
    title: "For Model Developers",
    subtitle: "AI Model Development",
    description: "Accelerate your AI model development with Scale's comprehensive toolkit designed specifically for model developers. From data preparation to model evaluation and optimization, we provide the tools and infrastructure you need.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Schedule Demo",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/demo"
  };
  
  // Carousel images for hero section
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
      alt: "AI model visualization dashboard",
      link: "/products/for-model-developers/features"
    },
    {
      src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
      alt: "Neural network architecture diagram",
      link: "/products/for-model-developers/use-cases"
    },
    {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      alt: "Model training visualization",
      link: "/products/for-model-developers/case-studies"
    },
    {
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2070&auto=format&fit=crop",
      alt: "AI model performance metrics",
      link: "/products/for-model-developers/technology"
    }
  ];

  // Features section content
  const featuresContent = {
    title: "Developer-Centric Tools",
    subtitle: "MODEL DEVELOPMENT",
    description: "Our suite of tools is designed to address the unique challenges faced by AI model developers.",
    features: [
      {
        id: 1,
        title: "Data Preparation",
        description: "Access high-quality, diverse datasets and powerful data preparation tools to build robust training datasets.",
        icon: "database"
      },
      {
        id: 2,
        title: "Model Training",
        description: "Leverage our scalable infrastructure for efficient model training with advanced monitoring and optimization.",
        icon: "cpu"
      },
      {
        id: 3,
        title: "Evaluation Framework",
        description: "Comprehensively evaluate your models with our extensive testing framework and benchmarking tools.",
        icon: "chart-bar"
      },
      {
        id: 4,
        title: "Deployment Pipeline",
        description: "Streamline the journey from development to production with our robust deployment pipeline.",
        icon: "cloud-upload"
      }
    ]
  };

  // Benefits section content
  const benefitsContent = {
    title: "Why Choose Scale",
    subtitle: "DEVELOPER BENEFITS",
    description: "Discover how Scale's solutions can accelerate your AI model development journey.",
    benefits: [
      {
        id: 1,
        title: "Faster Development Cycles",
        description: "Reduce time-to-market with our streamlined workflows and automated processes.",
        icon: "clock"
      },
      {
        id: 2,
        title: "Superior Model Performance",
        description: "Achieve better accuracy and reliability with our high-quality data and evaluation tools.",
        icon: "chart-line"
      },
      {
        id: 3,
        title: "Cost Efficiency",
        description: "Optimize resource utilization and reduce infrastructure costs with our scalable solutions.",
        icon: "dollar-sign"
      },
      {
        id: 4,
        title: "Expert Support",
        description: "Access our team of AI experts for guidance and support throughout your development journey.",
        icon: "users"
      }
    ],
    stats: [
      {
        value: "60%",
        label: "Faster Model Development"
      },
      {
        value: "40%",
        label: "Improved Model Accuracy"
      },
      {
        value: "50%",
        label: "Reduced Infrastructure Costs"
      }
    ]
  };

  // Use cases section content
  const useCasesContent = {
    title: "Model Development Use Cases",
    subtitle: "APPLICATIONS",
    description: "Explore how our tools can be applied across various model development scenarios.",
    useCases: [
      {
        id: "usecase1",
        title: "Computer Vision Models",
        description: "Build and train state-of-the-art computer vision models with our specialized datasets and tools.",
        image: "/images/products/usecase-computer-vision.jpg",
        bullets: [
          "Access to high-quality, diverse datasets",
          "Specialized tools for image processing and annotation",
          "State-of-the-art model architectures and training techniques",
          "Real-time performance monitoring and optimization"
        ]
      },
      {
        id: "usecase2",
        title: "Natural Language Processing",
        description: "Develop advanced NLP models with our comprehensive text data and evaluation framework.",
        image: "/images/products/usecase-nlp.jpg",
        bullets: [
          "Access to large-scale, diverse text datasets",
          "Comprehensive evaluation framework for NLP tasks",
          "State-of-the-art model architectures and training techniques",
          "Real-time performance monitoring and optimization"
        ]
      },
      {
        id: "usecase3",
        title: "Multimodal Models",
        description: "Create powerful multimodal AI systems that combine vision, text, and other modalities.",
        image: "/images/products/usecase-multimodal.jpg",
        bullets: [
          "Access to multimodal datasets and tools",
          "Comprehensive evaluation framework for multimodal tasks",
          "State-of-the-art model architectures and training techniques",
          "Real-time performance monitoring and optimization"
        ]
      },
      {
        id: "usecase4",
        title: "Reinforcement Learning",
        description: "Accelerate reinforcement learning model development with our simulation environments and tools.",
        image: "/images/products/usecase-reinforcement-learning.jpg",
        bullets: [
          "Access to simulation environments and tools",
          "Comprehensive evaluation framework for reinforcement learning tasks",
          "State-of-the-art model architectures and training techniques",
          "Real-time performance monitoring and optimization"
        ]
      }
    ]
  };

  // Testimonials section content
  const testimonialsContent = {
    title: "What Developers Say",
    subtitle: "TESTIMONIALS",
    testimonials: [
      {
        id: 1,
        name: "Dr. Sarah Chen",
        content: "Scale's tools have dramatically accelerated our research team's ability to develop and deploy state-of-the-art computer vision models. The quality of data and evaluation framework are unmatched.",
        role: "Lead AI Researcher",
        company: "TechVision Labs",
        avatar: "/images/testimonials/sarah-chen.jpg",
        rating: 5
      },
      {
        id: 2,
        name: "Michael Rodriguez",
        content: "As an NLP specialist, I've tried many platforms, but Scale stands out for its comprehensive approach to model development. Their data quality and evaluation tools have helped us achieve breakthrough performance.",
        role: "Senior ML Engineer",
        company: "LanguageTech AI",
        avatar: "/images/testimonials/michael-rodriguez.jpg",
        rating: 5
      },
      {
        id: 3,
        name: "Dr. James Wilson",
        content: "Scale's platform has been instrumental in helping our team develop multimodal models that combine vision and language. Their infrastructure and support have saved us countless hours.",
        role: "Director of AI Research",
        company: "Fusion AI",
        avatar: "/images/testimonials/james-wilson.jpg",
        rating: 5
      }
    ]
  };

  // Comparison section content
  const comparisonContent = {
    title: "Why Choose Scale",
    subtitle: "COMPETITIVE ADVANTAGE",
    description: "See how Scale's model development solutions compare to alternatives.",
    comparisonTable: {
      headers: ["Features", "Scale", "Competitors"],
      rows: [
        ["Data Quality", "Premium curated datasets", "Variable quality"],
        ["Evaluation Framework", "Comprehensive & customizable", "Limited scope"],
        ["Infrastructure", "Scalable & optimized", "Often requires setup"],
        ["Expert Support", "Dedicated AI specialists", "General technical support"],
        ["Integration", "Seamless workflow", "Often fragmented"],
        ["Cost Efficiency", "Optimized resource usage", "Unpredictable scaling costs"]
      ]
    },
    features: [
      {
        name: "Data Quality",
        basic: "Limited",
        pro: "Good",
        enterprise: "Premium"
      },
      {
        name: "Support",
        basic: "Email only",
        pro: "Email & Chat",
        enterprise: "24/7 Dedicated"
      },
      {
        name: "API Access",
        basic: false,
        pro: true,
        enterprise: true
      }
    ]
  };

  // FAQ section content
  const faqContent = {
    title: "Frequently Asked Questions",
    subtitle: "FAQs",
    faqs: [
      {
        id: 1,
        question: "What types of models can I develop with Scale's platform?",
        answer: "Scale supports development across a wide range of AI domains including computer vision, natural language processing, multimodal systems, reinforcement learning, and more. Our tools are designed to be flexible and adaptable to various model architectures and frameworks."
      },
      {
        id: 2,
        question: "How does Scale help with data preparation for model training?",
        answer: "We provide access to high-quality, diverse datasets across multiple domains. Our data preparation tools include annotation, augmentation, cleaning, and validation capabilities to ensure your models are trained on the best possible data."
      },
      {
        id: 3,
        question: "What evaluation metrics and benchmarks does Scale offer?",
        answer: "Our evaluation framework includes a comprehensive set of metrics for different model types, including accuracy, precision, recall, F1 score, BLEU, ROUGE, and domain-specific metrics. We also offer benchmarking against industry standards and custom evaluation protocols."
      },
      {
        id: 4,
        question: "Can I integrate Scale's tools with my existing development workflow?",
        answer: "Yes, our platform is designed to integrate seamlessly with popular ML frameworks, version control systems, and CI/CD pipelines. We provide APIs and SDKs for easy integration with your existing tools and workflows."
      },
      {
        id: 5,
        question: "What kind of support does Scale offer for model developers?",
        answer: "We provide technical support from AI specialists who understand the challenges of model development. Our support includes documentation, tutorials, office hours, and dedicated assistance for enterprise customers."
      }
    ]
  };

  // Related products section content
  const relatedProductsContent = {
    title: "Related Products",
    subtitle: "EXPLORE MORE",
    description: "Discover other Scale products that complement your model development workflow.",
    products: [
      {
        id: 1,
        title: "Scale Data Engine",
        description: "Access high-quality, diverse datasets to train your AI models.",
        image: "/images/products/data-engine-card.jpg",
        path: "/products/scale-data-engine",
        gradient: "linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)"
      },
      {
        id: 2,
        title: "Scale Evaluation",
        description: "Comprehensively evaluate and benchmark your AI models.",
        image: "/images/products/evaluation-card.jpg",
        path: "/products/scale-evaluation",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      },
      {
        id: 3,
        title: "Scale GenAI Platform",
        description: "Build and deploy generative AI applications with our end-to-end platform.",
        image: "/images/products/genai-platform-card.jpg",
        path: "/products/scale-genai-platform",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      }
    ]
  };

  // CTA section content
  const ctaContent = {
    title: "Ready to Accelerate Your Model Development?",
    description: "Get started with Scale's comprehensive toolkit for AI model developers today.",
    primaryButtonText: "Start Free Trial",
    secondaryButtonText: "Talk to Sales",
    primaryButtonLink: "/trial",
    secondaryButtonLink: "/contact",
    backgroundImage: "/images/products/model-developers-cta-bg.jpg"
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
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
      {/* Testimonials section removed */}
      <ProductComparison {...comparisonContent} />
      <ProductFAQ {...faqContent} />
      <ProductRelated {...relatedProductsContent} />
      <ProductCTA {...ctaContent} />
    </main>
  );
}
