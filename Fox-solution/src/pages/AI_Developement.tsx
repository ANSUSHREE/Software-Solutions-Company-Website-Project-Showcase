
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaFileAlt, FaUsersCog, FaHandshake, FaProjectDiagram, FaMoneyCheckAlt, FaShippingFast, FaIndustry, FaMobileAlt, FaCheck} from 'react-icons/fa';
import { ShieldCheck, CloudCog, BarChart3, Users2, Lock, RefreshCcw, ChevronRight, Touchpad,SquareM,Shuffle,MessageSquare, CheckSquare, Shield, FileCode, Bot,SpellCheck,Clock, DollarSign, PieChart } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import AnimatedButton from '../components/ui/AnimatedButton';
import FAQ from '@/components/ui/faq';
import { TableOfContents } from '../components/ui/TableOfContents';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, } from '@/components/ui/breadcrumb';
import Contact from '@/components/home/Contact';
import { CertificationsSection } from '@/components/ui/Certification';
import TestimonialCarousel from '@/components/ui/Testimonial';
import { title } from 'process';


  const articles = [
      {
          title: "Top 10 ChatGpt Alternatives for Business Use in2025",
          time: "52 mins",
          date: "March 24, 2025",
          image: "https://thimpress.com/wp-content/uploads/2025/03/best-character-ai-alternatives.webp",
          path: "/articles/chatgpt-alternatives"
      },
      {
          title: "Top 25 MVP Development Companies?",
          time: "52 mins",
          date: "February 24, 2025",
          path: "/articles/iot-oil-gas"
      },
      {
          title: "IoT Apps For Oil & Gas Industry-Whats in It?",
          time: "12 mins",
          date: "February 20, 2025",
          path: "/articles/iot-logistics"
      },
      {
          title: "Internet Of Things in Logistic Development",
          time: "11 mins",
          date: "February 18, 2025",
          path: "/articles/iot-education"
      },
  ];

  


const portfolioItems = [
    {
      id: 1,
      title: "Cost management platform development",
      description: "A cost management system for equipment in the construction industry",
      image: "/api/placeholder/600/400",
      link: "https://sumatosoft.com/portfolio/cost-management-platform-development"
    },
    {
      id: 2,
      title: "Graphical user interface for robot operation",
      description: "SumatoSoft developed a graphic user interface (GUI) that helps to communicate with the robot Alfred",
      image: "/api/placeholder/600/400",
      logo: "/api/placeholder/150/50"
    }
  ];

  
    

const contentsMenu = [
  { title: 'AI development services', id: 'AI-development-services' },
  { title: 'Scale', id: 'scale' },
  { title: 'Industry', id: 'industry' },
  { title: 'FAQ video', id: 'faq-video' },
  { title: 'AI Solutions', id: 'AI-Solutions' },
  { title: 'Advence Tech', id: 'Advence-tech' },
  { title: 'Case studies & reviews', id: 'reviews' },
  { title: 'Why Fox-Solution', id: 'why-fox-solution' },  
  { title: 'Engagement', id: 'engagement' },
  { title: 'Strategy', id: 'strategy' },
  { title: 'AI Tech Stack', id: 'AI-tech-stack' },
  { title: 'AI  Model Life Cycle', id: 'AI-life-Cycle' },
  {title:'Cost',id:'AI-Development-cost'},
  {title:'FAQ',id:'faq'},
  { title: 'BLOG', id: 'stroiesSection' },


];


const benefitSections = [
    {
      title: "Non-blocking I/O model",
      description: "Node.js operates on an event-driven, asynchronous architecture. Such an approach means it doesn't block operations while waiting for I/O tasks like database queries or API calls to complete. The result is simple and straightforward: faster response times and better resource utilization."
    },
    {
      title: "Dynamic NPM",
      description: "NPM is Node Package Manager – it's a well-developed tool for downloading and managing open-source libraries and modules. Easy access to thousands of libraries and modules speeds up development and eliminates repetitive code in the application."
    },
    {
      title: "Efficient in solving database queries",
      description: "Node.js efficiently handles multiple database requests simultaneously thanks to their asynchronous processing."
    },
    {
      title: "Good with sync issues",
      description: "Unlike traditional multi-threaded applications that can run into synchronization issues, Node.js' single-threaded event loop prevents data inconsistencies and deadlocks."
    },
    {
      title: "Quick code execution",
      description: "Node.js is built on top of Google's V8 JavaScript engine, which compiles JavaScript into machine code. It makes script execution significantly faster compared to interpreted languages."
    },
    {
      title: "Scalability",
      description: "Node.js supports horizontal and vertical scaling, which gives it enough flexibility to handle increased traffic and manage concurrent connections without straining resources."
    },
    {
        title: "MVP development",
        description: "Development with Node.js is characterized by a quick development cycle and efficient resource utilization. Its lightweight architecture, reusable modules, and non-blocking I/O allow startups to rapidly build, test, and iterate products with minimal costs."
      },
      {
        title: "Full-stack development",
        description: "With Node.js, developers can use JavaScript for both frontend and backend, eliminating the need for different programming languages."
      },
      {
        title: "Vast community",
        description: "Node.js has a large, active developer community, extensive support, and constant sharing of knowledge and best practices."
      },
      {
        title: "Flexibility",
        description: "Node.js supports different architecture types: microservices, monolithic, and serverless computing. Such flexibility allows to building a wide range of applications, from small-scale tools to enterprise-grade platforms."
      },
      {
        title: "Quick data processing",
        description: "With its non-blocking event loop, Node.js efficiently processes real-time data streams. Multiple applications benefit from it, such as live streaming, messaging apps, and real-time analytics."
      },
      {
        title: "Cross-platform compatibility",
        description: "Node.js supports development for web, mobile, and desktop platforms."
      },
      {
        title: "Cost savings",
        description: "Using JavaScript for both the front end and the back end reduces the need for multiple development teams, lowering hiring and operational costs. Node.js' efficient resource usage also helps optimize server costs."
      },
      {
        title: "Single language usage",
        description: "With Node.js, developers can use JavaScript throughout the entire tech stack. This results in faster development cycles and better maintainability."
      },
      {
        title: "Security",
        description: "Security highly depends on the best practice usage and developer expertise. However, Node.js also contributes to application security by supporting various security modules, including JWT authentication."
      }
    ];
  




const CheckIcon = () => (
    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );


  const techCategories = [
    {
      id: 'Data-storage-management',
      title: 'Data storage & management',
      items: ['Cloud storage: Amazon S3, Google Cloud Storage, Azure Blob Storage','Relational databases: PostgreSQL, MySQL,NoSQL databases: Apache Cassandra, MongoDB, DynamoDB','Big Data & Distributed storage: Hadoop HDFS, Databricks']
    },
    {
      id: 'Data-preprocessing-feature-engineering',
      title: 'Data preprocessing & feature engineering',
      items: ['Image processing: OpenCV, Pillow (PIL), scikit-image, Albumentations, NVIDIA DALI',
'Text processing: spaCy, NLTK, Hugging Face Transformers, TextBlob, Gensim',
'Data handling: Pandas, Dask, PySpark, PyArrow']
    },
    {
      id: 'Algorithm-development',
      title: 'Algorithm development',
      items: ['Sobel, Canny, Otsu’s thresholding, Adaptive thresholding, Watershed algorithm',
'Lucas-Kanade method, Farneback method, Erosion, Dilation',
'FFT (Fast Fourier Transform), Wavelet Transforms (scipy.signal)']
    },
    {
      id: 'Machine-learning models',
      title: 'Machine learning models',
      items: ['XGBoost, LightGBM, CatBoost, SVM, k-NN, Random Forest, Decision Trees',
'Naive Bayes, Logistic Regression, Linear Regression']
    },
    {
        id: 'Deep-learning-models',
        title: 'Deep learning models',
        items: ['Image classification & object detection: VGG, ResNet, Inception, MobileNet, EfficientNet, YOLO, YOLOX, SSD, Faster R-CNN',
'Segmentation & generative models: U-Net, AdaptNet, SAM2, Mask R-CNN, DeepLab, GANs, StyleGAN, CycleGAN',
'Sequence models: LSTM']
      },
      {
        id: 'Generative-AI',
        title: 'Generative AI',
        items: ['Large language models: Anthropic Claude 2/3, GPT-4, ChatGPT, Llama 2/3, Mistral, Phi3.5, GPT4All, Cohere, BERT, T5',
'Image & text generation: DALL-E, Stable Diffusion, Hugging Face Transformers',
'Frameworks & APIs: LlamaIndex, LangChain, OpenAI API, Azure OpenAI, AWS Bedrock',
'Vector databases & optimization: Qdrant, PostgreSQL (pgvector), AWS Bedrock Agents, AWS Bedrock Guardrails, AWS Bedrock Knowledge Base, DeepEval, VLLM, Unsloth']
      },
      {
        id: 'Model-training-evaluation',
        title: 'Model training & evaluation',
        items: ['Frameworks: PyTorch, TensorFlow/Keras, JAX',
'Optimization algorithms: SGD, Adam, RMSprop, Adagrad',
'Evaluation tools: MLflow, Ray Train, Ray Tune, Weights & Biases, TensorBoard',
'Validation techniques: Cross-validation, K-fold Validation, Data Splitting']
      },
      {
        id: 'MLOps-Workflow-orchestration',
        title: 'MLOps & Workflow orchestration',
        items: ['Orchestration: Kubeflow, MLflow, TFX (TensorFlow Extended), Apache Airflow',
'CI/CD & DevOps: GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, Terraform',
'Containerization & Scaling: Kubernetes, Docker, Helm, Ray, Azure Pipelines']
      },
      {
        id: 'Model-deployment-integration',
        title: 'Model deployment & integration',
        items: ['Inference servers: TensorFlow Serving, TorchServe, Ray Serve, ONNX Runtime, NVIDIA Triton Inference Server',
'APIs & Frameworks: FastAPI, Django, gRPC',
'Edge & Cloud deployment: TensorFlow Lite, OpenVINO, AWS Greengrass, AWS SageMaker, AWS (ECR, ECS, EKS)']
      }
      , {
        id: 'Monitoring-Logging',
        title: 'Monitoring & Logging',
        items: ['Logging & Analytics: Elastic Stack (ELK – Elasticsearch, Logstash, Kibana), AWS CloudWatch, Azure Monitor',
'Model performance monitoring: Prometheus + Grafana, Datadog, New Relic, Weights & Biases, AWS SageMaker, MLflow, TensorBoard, AzureML, Azure App Insights']
      }
   
  ];

  const developmentProcessSteps = [
    {
      number: "1",
      title: "Exploratory Stage",

   description:"This is the foundational step in artificial intelligence development services, where we identify the opportunities to implement Artificial Intelligence and Machine Learning for a particular business. During this stage, we:",

      points: [
        "analyze the company’s existing data, its quality, volume, variety, and sources;",
"collect, clean, and preprocess data; ",
"Identify business challenges that the AI solution needs to address;",
"Access the company’s existing IT infrastructure to determine how well the existing systems can integrate with AI;",
"system architecture, considering computational and data processing and storing needs;",
"technology stack; ",
"develop the roadmap with steps, milestones, timelines, resources required, and clear goals.",
       
      ],
    },
    {
      number: "2",
      title: "Design and development",
      description: "This step is about developing the framework within which the AI operates, including user interfaces for applications and the backend activities. We work on: ",
      points: [
        "how the app should look and draw mockups;",
"integration with existing systems;", 
"backend system development; ",
"comprehensive testing. ",
        
      ],
    },
    {
      number: "3",
      title: "Model selection and training",
      description: "We establish selection criteria like accuracy, efficiency, scalability, speed, ability to handle different data types, etc. Then we train the model. ",
      points: [
        "model selection: supervised, unsupervised, semi-supervised, reinforcement learning, deep learning;",
"preparation of training, validation, and testing datasets;",
"evaluating the model and parameter tuning;",
"documentation of the model selection process, model training parameters, validation results, and any iterations made.s",
       
      ],
    },
    {
        number: "4",
        title: "Deployment and operational integrity",
        description: "We transition the solution from the development and testing environment into live and operational use.  ",
        points: [
          "deployment planning;", 
"environmental setup;",
"model deployment;", 
"application integration; ",
"data migration;",
"monitoring and logging; ",
"user training and support; ",
"post-deployment monitoring",
  
         
        ],
      },
      {
        number: "5",
        title: "Maintenance and continuous improvement",
        description: "We offer an extra mile in fine-tuning and calibrating the AI system. We monitor the system after the deployment, adjusting its work based on gathered data about its performance and feedback. ",
        points: [
            
           
          ],
      },
  ];

  const AILifeCycle = [
    {
      number: "1",
      title: "Mathematical modeling & formalization",

   description:" Defining a mathematical representation of your business challenge to clearly describe the AI task. Our AI developers identify variables, constraints, goals, and select appropriate AI methods to achieve optimal results."

    },
    {
      number: "2",
      title: "Data collection & preparation",
      description: "We examine your business processes and gather necessary data from all available sources. We establish clear data governance, clean, preprocess, and structure the data  to ensure high-quality inputs for training accurate and effective AI models.",
    },
    {
      number: "3",
      title: "Predictive model development",
      description: "Building and training AI models using relevant datasets, machine learning algorithms, and statistical techniques to achieve accurate, reliable predictions or classifications.",
      
    },
    {
        number: "4",
        title: "AI model validation & optimization",
        description: "Rigorous testing and validation of AI models to measure their performance, accuracy, and reliability. Our AI developers split the datasets into two parts: one is used for training and the other for validation. Our experts  fine-tune the model’s parameters to minimize discrepancies between predicted and actual outputs. ",
      },
      {
        number: "5",
        title: "Deployment & Integration",
        description: "Deploying the AI model into your existing business systems or infrastructure, including integration with your software environment, APIs, cloud platforms, or devices. The model starts to get real-time data inside your business.",
        
      },
      {
        number: "6",
        title: "Continuous AI model monitoring",
        description: "Life-cycle doesn’t end on deployment. During the post-deployment period, our AI developers continuously monitor the model performance, accuracy, and behavior. Our goal here is to detect issues, prevent drift and hallucinations, and maintain consistent results. ",
      },
  ];



const AIDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRefs = useRef([]);
  const [activeModel, setActiveModel] = useState('softwareDevelopment');
  const toggleAccordion = useCallback((index) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  const [activeTab, setActiveTab] = useState('time-material');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, []);


  

  const mvpFaqs = [
    {
        question: "What are AI development services?",
        answer:"AI development services as a general term involve training and implementing artificial intelligence technology. To stay more specific, AI development services are provided by a custom AI ML development company and include machine learning model development, AI-powered automation, data processing, NLP, computer vision, voice recognition, and more."
    },
    {
        question: "How much does it cost to hire an AI developer?",
        answer:"AI developer rates vary based on expertise, location, and project complexity. Hourly rates range from $50 to $250, while full-time AI engineers can cost $80,000 to $250,000 per year. Rates vary when outsourcing to a custom AI development company rather than hiring an in-house employee."
    },
    {
        question: "What does an AI developer do?",
        answer:"AI developers design, build, and optimize machine learning models, neural networks, and AI-driven applications. Responsibilities include data preprocessing, training models, fine-tuning algorithms, integrating AI into systems, and deploying AI models."
     },
    {
        question: "How much does an AI service cost?",
        answer:"AI service costs depend on project scope, complexity, and required AI models. Basic AI solutions start at $10,000–$30,000, while full-scale AI product development can exceed $100,000–$500,000+. You can refer for a free quote to any custom AI development company."
    },
    {
        question: "Who are the top AI developers?",
        answer:"Top AI development companies include OpenAI, Google DeepMind, IBM Watson, Microsoft AI, and NVIDIA AI. Custom AI solution providers include SumatoSoft, DataRobot, and Element AI."
    }
];


  const modelContent = {
    softwareDevelopment: {
      title: "Enterprise AI development",
      description:"Our enterprise-grade AI development solutions are designed from the beginning to be reliable, secure, and high-performance. SumatoSoft develops robust custom AI solutions that seamlessly integrate with your existing infrastructure, support compliance and security needs, and scale effortlessly with your organization. We ensure smooth integration, minimal disruption, and high reliability, enabling large businesses to unlock maximum ROI from AI investments."
    },
    staffAugmentation: {
      title: "Custom AI solutions tailored for SMBs",
 description:"We know how to help growing businesses overcome challenges like limited resources, tight timelines, constant competition, and poor process efficiency. Our tailored AI software development solutions automate repetitive tasks, improve customer engagement, boost efficiency, and deliver valuable insights to help SMBs grow faster without stretching budgets."    },
    dedicatedTeam: {
      title: "PoC & MVP development for startups",
description:"Bring your innovative AI ideas to life quickly. SumatoSoft develops Proof-of-Concepts (PoCs) and Minimum Viable Products (MVPs), helping startups validate concepts, attract investors, and reach the market faster. We transform your vision into reality, accelerating time-to-market and ensuring your AI product is both effective and scalable from day one."    }
  };

  const [activeService, setActiveService] = useState('AI-POC-development');

  const services = [
    { id: 'AI-POC-development', name: 'AI POC development', active: true },
    { id: 'AI-MVP-development', name: 'AI MVP development', active: false },
    { id: 'AI-product-development', name: 'AI product development', active: false },
    { id: 'AI-enterprise-development', name: 'AI enterprise development', active: false }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
  };

  const renderContent = () => {
    switch (activeService) {
      case 'AI-POC-development':
        return (
          <>
            <h2 className="text-4xl font-bold mb-6">AI POC development
            </h2>
            <p className="text-lg text-gray-800 mb-8">
            POC stands for proof of concept. It is a small-scale app demo in the form of a clickable prototype or product feasibility analysis with the aim to quickly test and validate whether the idea is feasible and can deliver intended results.
              </p>
              <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>cost range: $5,000 – $25,000</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>advisory services;</span>
              </li>
              </ul>

            
          </>
        );
      case 'AI-MVP-development':
        return (
          <>
            <h2 className="text-4xl font-bold mb-6">AI MVP development</h2>
            <p className="text-lg text-gray-800 mb-8">
            MVP stands for minimum viable product, which is a simplified but fully functional version of the custom AI solution with core features. MVPs are used to test the market demand, gather user feedback, and refine the product idea.            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>cost range: $50,000 – $150,000</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>timeline: 2-6 months</span>
              </li>
              </ul>
          </>
        );
      case 'AI-product-development':
        return (
          <>
            <h2 className="text-4xl font-bold mb-6">AI product development  </h2>
            <p className="text-lg text-gray-800 mb-8">
            Product here is a fully functional application or system with core and complimentary functionality implemented. It’s a market-ready product capable of delivering both user and business value.            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>cost range: $50,000 – $350,000   </span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>timeline: 3-8 months </span>
              </li>
              </ul>
          </>
        );
      case 'AI-enterprise-development':
        return (
          <>
            <h2 className="text-4xl font-bold mb-6">AI enterprise development
            </h2>
            <p className="text-lg text-gray-800 mb-8">
            An AI enterprise solution is a robust and comprehensive AI system designed for large organizations and complex business logic. The solution features multiple integrations with internal systems, high performance, high security, and support of processing large data volumes.            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>cost range: $250,000 – 1M+</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>timeline: 6+ months</span>
              </li>
              </ul>
          </>
        );
      default:
        return null;
    }
  };


  // Intersection Observer for ScrollSpy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -50% 0px' }
    );

    sectionRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => {
      sectionRefs.current.forEach(ref => ref && observer.unobserve(ref));
    };
  }, []);

  // Assign refs to sections
  const addToRefs = useCallback((el, index) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current[index] = el;
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
          <Navbar />

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Contents Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/90 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Contents</h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <ul className="space-y-4">
            {contentsMenu.map((item, index) => (
              <li
                key={index}
                className={`text-lg p-3 rounded-lg transition-colors ${activeSection === item.id ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-blue-50'}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="p-8 mr-0 bg-gradient-to-r from-[#0a1f44] to-[#0a1f44]">
        {/* Breadcrumb Section */}
        <Breadcrumb className="mt-20 text-white ml-0 md:ml-8 lg:ml-16">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className='text-white hover:text-pink-400 transition-colors duration-200'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/services" className='text-white hover:text-pink-400 transition-colors duration-200'>Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='text-white hover:text-pink-400 transition-colors duration-200'>AI Development</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0a1f44] to-[#0a1f44] text-white py-20 px-4 md:px-16 lg:px-20 -mt-8">
          <div className="max-w-5xl mx-auto text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Custom  
            <span className="text-blue-500"> Artificial Intelligence (AI)  </span> 
          solutions for your business
            
            </h1>
            <p className="mt-6 text-lg text-gray-300 mt-8 mb-8">
            We bring businesses simple and advanced AI-powered solutions, from predictive analytics to intelligent automation. Let’s Make an AI Revolution. Together.
            </p>
  
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 mx-auto gap-4">
              <button className="bg-pink-600 text-white px-5 py-2 font-medium transition-all duration-300 hover:bg-opacity-0 hover:text-blue-600 hover:shadow-md transform hover:-translate-y-0.5 border border-blue-600 inline-flex items-center justify-center w-fit">
               Get In Touch
              </button>
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl mr-2">★★★★★</span>
                <span className="text-gray-200">Clients rate our services 5.0</span>
              </div>
            </div>
          </div>
        </section>
       

        {/* Main Content */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            {/* Main content container with proper layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main content area - takes full width on mobile, 3/4 on desktop */}
              <div className="w-full lg:w-3/4">
                {/* Enterprise Software Section */}
                <section id="AI-development-services" ref={(el) => addToRefs(el, 0)} className="mb-16">
                  <RevealOnScroll>
                    <div className="bg-gray-50 py-3 px-4 md:px-8">
                    <h1 className="text-5xl font-bold mb-12">
                    Our AI software development<span className="text-blue-500"> services </span>
        </h1>
       
       
        <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service 1 */}
          <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">AI/ML strategy consulting service</h2>
            <p className="text-gray-700">
              Every implementation starts with a solid roadmap. Our experts analyze your challenges, business environment, and processes, assess AI feasibility, look for implementation opportunities, craft a strategic plan for AI development and adoption, and calculate ROI. As a result, you will get a clear guide on how to implement AI in your business.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">AI architecture design</h2>
            <p className="text-gray-700">
              We design custom AI architecture that includes the general solution structure, components, workflows, and data management. We ensure that AI models, data pipelines, and computational resources work together, have optimal performance, are ready for future scalability, and deliver maximum business value.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">AI product development</h2>
            <p className="text-gray-700">
              From concept to market-ready AI products, we develop intelligent AI software solutions for multiple industries. Whether it's predictive analytics, automation, or NLP-powered tools, we build AI-driven products that drive results.
            </p>
          </div>
          
          {/* Service 4 */}
          <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Custom AI app development</h2>
            <p className="text-gray-700">
              We develop AI-powered web and mobile apps that leverage machine learning, natural language processing, and computer vision. Unlike off-the-shelf AI software solutions.
            </p>
          </div>
          
          {/* Service 5 */}
          <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">AI integration</h2>
            <p className="text-gray-700">
              We integrate various AI technologies into existing applications and systems to bring the power of AI to them. Whether embedding machine learning models, automating decision-making, or enhancing solutions you currently use, the AI adoption is frictionless.
            </p>
          </div>
          
          {/* Service 6 */}
          <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">AI training and support services</h2>
            <p className="text-gray-700">
              The power of Artificial Intelligence is revealed only when properly used. We empower your team with the knowledge to make the most of AI. We provide comprehensive training programs.
            </p>
          </div>
        
        
        <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">AI as a Service (AIaaS)</h2>
            <p className="text-gray-700">
              We develop platforms that allow us to access AI capabilities on a subscription basis. Our AIaaS solutions feature ready-to-use AI models, well-documented APIs, and cloud-based services that enable every user to leverage AI capabilities.
            </p>
          </div>

          <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">MLOps</h2>
            <p className="text-gray-700">
              We optimize machine learning operations (MLOs) with robust MLOps practices. We help businesses automate model deployment, monitoring, and lifecycle management, ensuring continuous improvement, scalability, and reliability in AI operations.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Generative AI development</h2>
            <p className="text-gray-700">
              How about generating some content? We build AI models capable of creating text, images, code, music, and even videos. As a part of our AI development services, we create custom AI models and fine-tune existing generative AI models such as GPT, Stable Diffusion, and DALL-E. 
            </p>
          </div>

          <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Data engineering</h2>
            <p className="text-gray-700">
              Beside standard AI development services, we help businesses transform messy, inconsistent, and difficult-to-process data into reliable, structured, and easily understandable information.
            </p>
          </div>
          
          {/* Service 5 */}
          <div className="mb-12">
            <div className="w-16 h-16 mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Data mining and management</h2>
            <p className="text-gray-700">
              We extract meaningful patterns from the structured datasets. Our custom AI algorithms thoroughly analyze various data types to find hidden insights and relationships that fuel data-driven decision making.
            </p>
          </div>
        </div>
      </div>
         </div>
        </div>
        </RevealOnScroll>               
        </section>

                <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                  Unlock AI-Powered Growth
                 
                  </h2>
                  <p className="text-xl text-left">
                  Start your journey with custom AI solutions built for business impact.                  </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                    Get in touch
                  </button>
                </div>
              </div>
            </section>

            <section id="scale">

  
{/* Main Content */}
<div className="flex-grow mt-32 mb-16">
  <h1 className="text-5xl font-bold mb-16">
  Custom AI solutions for businesses of any <span className="text-blue-500">scale</span>
  </h1>

  <div className="flex mt-16">
    {/* Left Content */}
    <div className="w-1/2 pr-12">
      <h2 className="text-3xl font-bold mb-6">{modelContent[activeModel].title}</h2>
      <p className="text-lg">
        {modelContent[activeModel].description}
      </p>
    </div>
  
     {/* Right Menu */}
     <div className="w-1/2">
      <div className="flex flex-col">
        <button 
          className={`py-6 px-8 text-left text-lg font-medium ${activeModel === 'softwareDevelopment' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-gray-800 hover:bg-blue-100'}`}
          onClick={() => setActiveModel('softwareDevelopment')}
        >
          Enterprise AI development
        </button>
        
        <button 
          className={`py-6 px-8 text-left text-lg font-medium ${activeModel === 'staffAugmentation' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-gray-800 hover:bg-blue-100'}`}
          onClick={() => setActiveModel('staffAugmentation')}
        >
          Custom AI solutions tailored for SMBs
        </button>
        
        <button 
          className={`py-6 px-8 text-left text-lg font-medium ${activeModel === 'dedicatedTeam' ? 'bg-blue-500 text-white' : 'bg-blue-50 text-gray-800 hover:bg-blue-100'}`}
          onClick={() => setActiveModel('dedicatedTeam')}
        >
          PoC & MVP development for startups
        </button>

        <button 
          className={`py-6 px-8 text-left text-lg font-medium  ${activeModel === 'FindMore' ? 'bg-blue-500 text-red' : 'bg-blue-50 text-gray-800 hover:bg-blue-100'}`}
          onClick={() => setActiveModel('FindMore')}
        >
          Find Out More
        </button>
      </div>
      </div>

    </div>
  </div>
  

   

</section>


<section id="industry">
<div className="flex-1 bg-gray-900 text-white p-8 mb-32 mt-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Enhance your business with <span className="text-blue-400"> industry-focused   </span> AI software
            </h1>
            
            <p className="text-xl mb-16 text-center max-w-4xl mx-auto">
            With a proven track record of artificial intelligence development services in 20+ industries, we deliver top-tier industry-focused custom AI software for new and established businesses. We can offer our expertise in big data analysis, AI development, and machine learning, and we have already brought business value to more than 250 companies across the globe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
            <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-blue-400">
              <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32"  fill="#3398e6" stroke="#3398e6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <rect x="14" y="13" width="1" height="5"></rect> <rect x="17" y="13" width="1" height="5"></rect> <rect x="11" y="13" width="1" height="5"></rect> <path d="M27,3H5C3.3,3,2,4.3,2,6v15c0,1.7,1.3,3,3,3h22c1.7,0,3-1.3,3-3V6C30,4.3,28.7,3,27,3z M24,12c0,0.6-0.4,1-1,1v5 c0.6,0,1,0.4,1,1s-0.4,1-1,1H9c-0.6,0-1-0.4-1-1s0.4-1,1-1v-5c-0.6,0-1-0.4-1-1V9.5c0-0.4,0.3-0.8,0.7-0.9l7-2.5 c0.2-0.1,0.5-0.1,0.7,0l7,2.5C23.7,8.7,24,9.1,24,9.5V12z"></path> <rect x="20" y="13" width="1" height="5"></rect> </g> <g> <path d="M23,28L23,28c-1.1,0-2.1-0.7-2.5-1.8c0-0.1-0.1-0.2-0.1-0.2h-8.9c0,0.1,0,0.2-0.1,0.2C11.1,27.3,10.1,28,9,28h0 c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S23.6,28,23,28z"></path> </g> </g></svg>              </div>
              <h2 className="text-2xl font-bold">Banking and finance</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>trading solutions;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>advisory services;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>customer service automation;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>personalization solutions;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>pattern recognition and fraud prevention.</span>
              </li>
            </ul>
            </div>
            
            <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-blue-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Sales & marketing</h2>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>predictive and prescriptive analytics;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>content curation solutions;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>AI and machine learning-enabled attribution;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>cross-channels personalized interactions;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>personalized and scaling messaging.</span>
              </li>
            </ul>
          </div>
       
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-blue-400">
               
              <svg fill="#3398e6" viewBox="-2.5 0 19 19" xmlns="http://www.w3.org/2000/svg"  stroke="#3398e6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.56 10.11v2.046a3.827 3.827 0 1 1-7.655 0v-.45A3.61 3.61 0 0 1 .851 8.141V5.25a1.682 1.682 0 0 1 .763-1.408 1.207 1.207 0 1 1 .48 1.04.571.571 0 0 0-.135.368v2.89a2.5 2.5 0 0 0 5 0V5.25a.57.57 0 0 0-.108-.334 1.208 1.208 0 1 1 .533-1.018 1.681 1.681 0 0 1 .683 1.352v2.89a3.61 3.61 0 0 1-3.054 3.565v.45a2.719 2.719 0 0 0 5.438 0V10.11a2.144 2.144 0 1 1 1.108 0zm.48-2.07a1.035 1.035 0 1 0-1.035 1.035 1.037 1.037 0 0 0 1.036-1.035z"></path></g></svg>              </div>
              <h2 className="text-2xl font-bold">Healthcare</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>nursing assistants development;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>AI-assisted consultation, diagnosis & treatment;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>managing Medical records and Other Data;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>health Monitoring;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>healthcare System Analysis.</span>
              </li>
            </ul>
            </div>



            <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-blue-400">
              <svg fill="#3398e6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#3398e6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M197.769 791.767l60.672-286.853c2.341-11.066-4.733-21.934-15.799-24.275s-21.934 4.733-24.275 15.799l-60.672 286.853c-2.341 11.066 4.733 21.934 15.799 24.275s21.934-4.733 24.275-15.799zm571.063-286.786l61.778 287.068c2.38 11.058 13.273 18.093 24.33 15.713s18.093-13.273 15.713-24.33l-61.778-287.068c-2.38-11.058-13.273-18.093-24.33-15.713s-18.093 13.273-15.713 24.33z"></path><path d="M967.45 386.902L535.9 208.126c-10.609-4.399-30.569-4.442-41.207-.088L57.821 386.901l436.881 178.857c10.624 4.355 30.583 4.313 41.207-.085L967.45 386.901zM551.583 603.516c-20.609 8.533-51.787 8.599-72.409.145L24.437 417.494c-32.587-13.359-32.587-47.847.009-61.188l454.73-186.174c20.641-8.448 51.818-8.382 72.407.156l448.836 185.936c32.466 13.442 32.466 47.913.004 61.354l-448.84 185.938zm288.673 166.569c-98 57.565-209.669 88.356-325.888 88.356-116.363 0-228.162-30.866-326.246-88.564-9.749-5.735-22.301-2.481-28.036 7.268s-2.481 22.301 7.268 28.036c104.336 61.377 223.297 94.22 347.014 94.22 123.564 0 242.386-32.763 346.634-93.998 9.753-5.729 13.015-18.279 7.286-28.032s-18.279-13.015-28.032-7.286z"></path><path d="M983.919 383.052v296.233c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V383.052c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path></g></svg>
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>differentiated and individualized learning;



.</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>AI tutoring;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>smart content;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>global learning;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>automation of admin tasks</span>
              </li>
            </ul>
            </div>




            <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-blue-400">
               <svg fill="#3398e6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 612 612"  stroke="#3398e6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M391.897,259.865c-0.737-6.115-3.061-11.692-6.633-16.349l24.524-152.198c0.913-5.663-2.72-11.062-8.308-12.353 l-0.274-0.062c-5.588-1.291-11.219,1.971-12.882,7.46l-44.676,147.543c-11.01,5.536-18.653,16.821-18.653,29.964 c0,18.558,15.091,33.658,33.648,33.658c3.458,0,6.728-0.675,9.869-1.647l93.334,48.503c5.135,2.668,11.456,1.002,14.607-3.852 l0.141-0.217c3.152-4.852,2.104-11.305-2.424-14.91L391.897,259.865z M342.023,263.87c0-9.163,7.458-16.621,16.621-16.621 c9.171,0,16.629,7.458,16.629,16.621c0,9.17-7.458,16.629-16.629,16.629C349.481,280.499,342.023,273.041,342.023,263.87z M612,263.87c0,112.658-73.93,208.333-175.809,241.169l-0.005-36.076c82.756-31.396,141.757-111.467,141.757-205.093 c0-120.92-98.38-219.299-219.299-219.299c-120.92,0-219.299,98.379-219.299,219.299c0,12.13,1.034,24.019,2.938,35.62h-34.441 c-1.646-11.646-2.554-23.527-2.554-35.62c0-139.703,113.653-253.356,253.356-253.356C498.347,10.514,612,124.167,612,263.87z M402.81,444.398l-77.99-77.139c-4.938-4.939-11.664-7.664-18.561-7.664h-39.336v-14.729c0-10.984-8.939-19.838-19.923-19.838 H19.841c-10.983,0-19.838,8.854-19.838,19.838v132.82h410.641v-14.473C410.643,456.148,407.833,449.336,402.81,444.398z M368.838,446.953h-75.521c-1.703,0-3.065-1.363-3.065-3.066v-58.322c0-1.703,1.361-3.066,3.065-3.066h14.389 c0.767,0,1.618,0.342,2.214,0.852l61.047,58.324C373.01,443.545,371.647,446.953,368.838,446.953z M410.652,488.66v43.941 c0,10.961-8.886,19.848-19.848,19.848h-21.237c-3.837-26.332-26.53-46.576-53.919-46.576c-27.325,0-50.017,20.244-53.854,46.576 H154.151c-3.837-26.332-26.53-46.576-53.854-46.576c-27.324,0-50.017,20.244-53.854,46.576H19.848 C8.886,552.447,0,543.562,0,532.602V488.66H410.652z M315.709,519.152c-22.732,0-41.208,18.391-41.208,41.123 c0,22.734,18.476,41.211,41.208,41.211c22.733,0,41.124-18.477,41.124-41.211C356.833,537.543,338.442,519.152,315.709,519.152z M315.709,580.881c-11.408,0-20.604-9.195-20.604-20.605c0-11.324,9.195-20.604,20.604-20.604c11.324,0,20.52,9.279,20.52,20.604 C336.229,571.686,327.033,580.881,315.709,580.881z M100.3,519.152c-22.732,0-41.209,18.391-41.209,41.123 c0,22.734,18.477,41.211,41.209,41.211c22.733,0,41.124-18.477,41.124-41.211C141.424,537.543,123.033,519.152,100.3,519.152z M100.3,580.881c-11.409,0-20.604-9.195-20.604-20.605c0-11.324,9.195-20.604,20.604-20.604c11.324,0,20.604,9.279,20.604,20.604 C120.904,571.686,111.624,580.881,100.3,580.881z"></path> </g> </g></svg>
              </div>
              <h2 className="text-2xl font-bold">Logistics & Transportation</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>AI-driven route optimization;



</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                <svg fill="#3398e6" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#3398e6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>store</title> <path d="M0 10.016l4-10.016h24l4 10.016q0 1.664-1.184 2.816t-2.816 1.184-2.816-1.184-1.184-2.816q0 1.664-1.184 2.816t-2.816 1.184-2.816-1.184-1.184-2.816q0 1.664-1.184 2.816t-2.816 1.184-2.816-1.184-1.184-2.816q0 1.664-1.184 2.816t-2.816 1.184-2.816-1.184-1.184-2.816zM2.016 30.016h28v1.984h-28v-1.984zM4 28v-12q2.272 0 4-1.536v9.536h16v-9.536q1.728 1.536 4 1.536v12h-24z"></path> </g></svg>
                </div>
                <span>predictive fleet maintenance;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>intelligent demand forecasting;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>real-time tracking and visibility;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>automated logistics managemen</span>
              </li>
            </ul>
            </div>



            <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-blue-400">
              <svg fill="#3398e6" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#3398e6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>store</title> <path d="M0 10.016l4-10.016h24l4 10.016q0 1.664-1.184 2.816t-2.816 1.184-2.816-1.184-1.184-2.816q0 1.664-1.184 2.816t-2.816 1.184-2.816-1.184-1.184-2.816q0 1.664-1.184 2.816t-2.816 1.184-2.816-1.184-1.184-2.816q0 1.664-1.184 2.816t-2.816 1.184-2.816-1.184-1.184-2.816zM2.016 30.016h28v1.984h-28v-1.984zM4 28v-12q2.272 0 4-1.536v9.536h16v-9.536q1.728 1.536 4 1.536v12h-24z"></path> </g></svg>
              </div>
              <h2 className="text-2xl font-bold">Retail</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>personalized product recommendations;



</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>inventory forecasting and management;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>dynamic pricing optimization;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>customer behavior analytics;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>AI-powered virtual assistants and chatbots.</span>
              </li>
            </ul>
            </div>

            <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-blue-400">
                <svg fill="#3398e6" viewBox="0 0 512 512" version="1.1"  xmlns="http://www.w3.org/2000/svg" stroke="#3398e6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_x35_11_x2C__Factory_x2C__industrial_x2C__industry_x2C__manufacturing_x2C__production"> <g> <path d="M406.934,239.008h33.912v-22.119L406.934,239.008z M360.12,239.008h33.937 v-22.119L360.12,239.008z M313.33,239.008h33.914v-22.119L313.33,239.008z M266.518,239.008h33.913v-22.119L266.518,239.008z M219.704,239.008h33.914v-22.119L219.704,239.008z M172.891,239.008h33.913v-22.119L172.891,239.008z M160.015,123.984v-18.22 h-18.653h-0.097H94.452H94.38H75.727v18.22H160.015z M138.329,82.707H97.412v17.16h40.917V82.707z M160.015,428.162h-56.055 h-0.072h-0.073H89.061h-0.072h-0.097H75.727v35.26h84.288V428.162z M165.935,422.241h274.911V244.928h-43.757h-0.097h-0.022 h-46.693h-0.072h-0.048h-46.693h-0.072h-0.048H256.65h-0.072h-0.048H209.86h-0.096h-0.025h-43.805V422.241z M179.51,283.775 h33.383c1.637,0,2.96,1.324,2.96,2.96v19.11v0.072v82.362v0.073v19.109c0,1.638-1.324,2.96-2.96,2.96H179.51 c-1.612,0-2.937-1.322-2.937-2.96v-19.109v-0.073v-82.362v-0.072v-19.11C176.573,285.1,177.897,283.775,179.51,283.775z M209.933,308.879H182.47v76.441h27.463V308.879z M209.933,391.241H182.47v13.262h27.463V391.241z M182.47,302.958h27.463v-13.263 H182.47V302.958z M233.496,283.775h33.359c1.637,0,2.961,1.324,2.961,2.96v19.11v0.072v82.362v0.073v19.109 c0,1.638-1.324,2.96-2.961,2.96h-33.359c-1.636,0-2.96-1.322-2.96-2.96v-19.109v-0.073v-82.362v-0.072v-19.11 C230.536,285.1,231.859,283.775,233.496,283.775z M263.919,308.879h-27.463v76.441h27.463V308.879z M263.919,391.241h-27.463 v13.262h27.463V391.241z M236.456,302.958h27.463v-13.263h-27.463V302.958z M287.458,283.775h33.382 c1.638,0,2.961,1.324,2.961,2.96v19.11v0.072v82.362v0.073v19.109c0,1.638-1.323,2.96-2.961,2.96h-33.382 c-1.638,0-2.962-1.322-2.962-2.96v-19.109v-0.073v-82.362v-0.072v-19.11C284.496,285.1,285.82,283.775,287.458,283.775z M317.88,308.879h-27.462v76.441h27.462V308.879z M317.88,391.241h-27.462v13.262h27.462V391.241z M290.418,302.958h27.462 v-13.263h-27.462V302.958z M341.443,283.775h33.359c1.636,0,2.96,1.324,2.96,2.96v19.11v0.072v82.362v0.073v19.109 c0,1.638-1.324,2.96-2.96,2.96h-33.359c-1.637,0-2.961-1.322-2.961-2.96v-19.109v-0.073v-82.362v-0.072v-19.11 C338.482,285.1,339.807,283.775,341.443,283.775z M371.842,308.879h-27.463v76.441h27.463V308.879z M371.842,391.241h-27.463 v13.262h27.463V391.241z M344.379,302.958h27.463v-13.263h-27.463V302.958z M395.404,283.775h33.359 c1.638,0,2.961,1.324,2.961,2.96v19.11v0.072v82.362v0.073v19.109c0,1.638-1.323,2.96-2.961,2.96h-33.359 c-1.637,0-2.96-1.322-2.96-2.96v-19.109v-0.073v-82.362v-0.072v-19.11C392.444,285.1,393.768,283.775,395.404,283.775z M425.826,308.879h-27.461v76.441h27.461V308.879z M425.826,391.241h-27.461v13.262h27.461V391.241z M398.365,302.958h27.461 v-13.263h-27.461V302.958z M100.926,262.379c0-1.638,1.349-2.961,2.961-2.961c1.636,0,2.96,1.323,2.96,2.961v159.862h53.167 V244.928H75.727v177.313h10.301V262.379c0-1.638,1.324-2.961,2.96-2.961c1.612,0,2.96,1.323,2.96,2.961v159.862h8.978V262.379z M188.777,445.105c-1.637,0-2.96-1.322-2.96-2.96c0-1.636,1.323-2.96,2.96-2.96h252.069v-11.023H165.935v35.26h274.911v-18.316 H188.777z M165.166,51.177c-0.891-0.217-1.878-0.337-2.913-0.337c-3.394,0-6.474,1.396-8.688,3.61 c-2.238,2.238-3.61,5.319-3.61,8.714c0,3.393,1.372,6.474,3.61,8.688c2.214,2.238,5.295,3.611,8.688,3.611 c3.418,0,6.499-1.373,8.713-3.611c2.214-2.214,3.61-5.295,3.61-8.688c-0.025-1.012-0.073-1.276-0.193-2.287 c-0.144-0.723,0-1.518,0.458-2.166c0.915-1.349,2.744-1.709,4.092-0.795c1.372,0.938,2.912,1.686,4.549,2.215l0.12,0.023 c1.588,0.481,3.321,0.746,5.126,0.746c1.756,0,3.49-0.265,5.078-0.746c1.613-0.48,3.129-1.203,4.525-2.117 c0.217-0.168,0.481-0.289,0.747-0.385c1.54-0.555,3.225,0.264,3.754,1.805c0.842,2.383,2.431,4.452,4.453,5.896l0.073,0.049 c1.997,1.419,4.453,2.262,7.1,2.262c3.273,0,6.258-1.275,8.448-3.369c2.214-2.07,3.659-4.982,3.851-8.184 c0-0.361,0.096-0.723,0.24-1.059c0.65-1.493,2.383-2.19,3.875-1.541c0.746,0.336,1.564,0.578,2.383,0.77 c0.771,0.146,1.613,0.24,2.503,0.24c3.394,0,6.475-1.395,8.712-3.609c2.215-2.238,3.61-5.318,3.61-8.713 c0-3.394-1.396-6.475-3.61-8.688c-2.238-2.238-5.318-3.61-8.712-3.61c-3.273,0-6.258,1.275-8.448,3.346 c-2.214,2.094-3.658,4.982-3.851,8.207c0,0.361-0.097,0.723-0.241,1.06c-0.649,1.491-2.382,2.166-3.875,1.517 c-0.747-0.314-1.541-0.578-2.383-0.746c-0.771-0.17-1.613-0.242-2.503-0.242c-0.794,0-1.564,0.072-2.238,0.193 c-0.698,0.121-1.42,0.338-2.118,0.602c-0.241,0.096-0.505,0.145-0.771,0.193c-1.612,0.168-3.081-0.988-3.273-2.6 c-0.505-4.357-2.624-8.256-5.729-11.023c-3.08-2.744-7.148-4.404-11.601-4.404c-4.838,0-9.194,1.949-12.347,5.102 c-3.177,3.152-5.126,7.533-5.126,12.348c0,0.914,0.072,1.805,0.192,2.647c0.145,0.915,0.362,1.78,0.602,2.6 c0.217,0.722,0.168,1.517-0.192,2.214c-0.747,1.445-2.527,2.021-3.972,1.275c-0.842-0.408-1.708-0.77-2.599-0.986L165.166,51.177z M171.952,137.775c0-1.637,1.324-2.96,2.961-2.96c1.636,0,2.96,1.323,2.96,2.96v64.119l39.617-22.865 c1.396-0.818,3.225-0.338,4.019,1.059c0.818,1.42,0.337,3.225-1.059,4.043l-43.901,25.32c-0.457,0.338-1.035,0.506-1.636,0.506 c-1.637,0-2.961-1.324-2.961-2.96V137.775z M51.875,476.011c-1.636,0-2.96-1.324-2.96-2.937c0-1.638,1.324-2.961,2.96-2.961 h298.811c1.637,0,2.961,1.323,2.961,2.961c0,1.612-1.324,2.937-2.961,2.937H51.875z M226.853,485.999 c-1.637,0-2.96-1.324-2.96-2.961c0-1.612,1.323-2.96,2.96-2.96h206.773c1.636,0,2.961,1.348,2.961,2.96 c0,1.637-1.325,2.961-2.961,2.961H226.853z M454.781,485.999c-1.637,0-2.96-1.324-2.96-2.961c0-1.612,1.323-2.96,2.96-2.96h25.85 c1.637,0,2.96,1.348,2.96,2.96c0,1.637-1.323,2.961-2.96,2.961H454.781z M31.369,485.71c-1.637,0-2.96-1.324-2.96-2.96 c0-1.638,1.323-2.961,2.96-2.961h88.019c1.637,0,2.96,1.323,2.96,2.961c0,1.636-1.323,2.96-2.96,2.96H31.369z M75.727,239.008 h84.288V129.905H75.727V239.008z" ></path> </g> </g> <g id="Layer_1"></g> </g></svg>
              </div>
              <h2 className="text-2xl font-bold">Manufacturing</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>predictive maintenance and asset optimization;







</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>AI-powered quality inspection and defect detection;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>robotic process automation (RPA);</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>supply-chain forecasting and planning;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>automated quality assurance.</span>
              </li>
            </ul>
            </div>


            <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-blue-400">
              <svg fill="#3398e6" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#3398e6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.128"></g><g id="SVGRepo_iconCarrier"> <g data-name="12 site" id="_12_site"> <path d="M17.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,17.5,9.08Z"></path> <path d="M11.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,11.5,9.08Z"></path> <path d="M23.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,23.5,9.08Z"></path> <path d="M58.5,3.5H5.5a2.006,2.006,0,0,0-2,2v53a2.006,2.006,0,0,0,2,2h53a2.006,2.006,0,0,0,2-2V5.5A2.006,2.006,0,0,0,58.5,3.5Zm0,55H5.5V14.67h53Zm0-45.83H5.5V5.5h53Z"></path> <path d="M56.21,9.91a1,1,0,0,1-.01,1.41.96.96,0,0,1-.7.29.976.976,0,0,1-.71-.3l-.79-.8-.79.8a.976.976,0,0,1-.71.3.96.96,0,0,1-.7-.29,1,1,0,0,1-.01-1.41l.81-.83-.81-.82a1.008,1.008,0,0,1,.01-1.42,1,1,0,0,1,1.41.01l.79.81.79-.81a1,1,0,0,1,1.41-.01,1.008,1.008,0,0,1,.01,1.42l-.81.82Z"></path> <path d="M49.5,9.08a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h4A1,1,0,0,1,49.5,9.08Z"></path> <path d="M20.15,42.89l3.63-2.09H41.45A2.889,2.889,0,0,0,44,39.24l5.67-10.71a3.089,3.089,0,0,0-.22-3.22l-.72-1.02a2.906,2.906,0,0,0-2.34-1.22h-.01l-23.57.06-.15-1.54a3.084,3.084,0,0,0-3.03-2.81H13.98a1,1,0,0,0,0,2h5.65a1.09,1.09,0,0,1,1.04,1.02l1.78,17.46-3.37,1.95a3.158,3.158,0,0,0-1.34,2.6v.28a3.113,3.113,0,0,0,2.83,3.13,4.653,4.653,0,0,0-.78,2.59,4.408,4.408,0,1,0,8.81,0,4.684,4.684,0,0,0-.77-2.57H36.9a4.6,4.6,0,0,0-.77,2.57,4.408,4.408,0,1,0,8.81,0,4.684,4.684,0,0,0-.77-2.57h1.81a1,1,0,0,0,0-2H20.79a1.107,1.107,0,0,1-1.05-1.15v-.28A1.211,1.211,0,0,1,20.15,42.89ZM42.24,38.3a.915.915,0,0,1-.79.5H24.41L23.38,28.66l23.96-.01Zm4.14-13.23h.01a.87.87,0,0,1,.71.38l.73,1.02c.03.05.06.11.09.17l-24.75.02-.15-1.53ZM40.53,47.24a2.581,2.581,0,1,1-2.4,2.57A2.494,2.494,0,0,1,40.53,47.24Zm-16.34,0a2.581,2.581,0,1,1-2.4,2.57A2.494,2.494,0,0,1,24.19,47.24Z"></path> </g> </g></svg>
              </div>
              <h2 className="text-2xl font-bold">Ecommerce</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>AI-assisted search;
speech recognition services;





</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>relevant offers for buyers
                virtual agents and intelligent automation tools;</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>personalized shopping experience</span>
              </li>
              
            </ul>
            </div>

            


           
            </div>
            </div>
            </div>
</section>

<section id="faq-video">
            <section className="bg-gray-50 py-16 px-4 md:px-6 mt-24 mb-24">
                  <RevealOnScroll>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        FAQ about <span className="text-blue-600"> AI development </span> at Fox Solution
                        </h2>
                        <ul className="mt-6 space-y-4">
                          {[
 "Our team possesses deep expertise in custom software development services, honed since 2012. We closely observed the evolution of AI technology until 2020, when we expanded our services to AI development and began building AI applications. In 2022, the introduction of ChatGPT further catalyzed our AI expertise, and we have since successfully delivered numerous AI projects.",

                        
].map((point, index) => (
                            <RevealOnScroll key={index} delay={index * 0.1}>
                              <li className="flex items-start text-gray-700">
                                <FaCheck className="text-blue-500 mt-1 mr-3" />
                                <span className="text-lg">{point}</span>
                              </li>
                            </RevealOnScroll>
                          ))}
                        </ul>
                      </div>
                      <RevealOnScroll delay={0.3}>
                        <img
                          src="https://media.istockphoto.com/id/1397678880/photo/closeup-of-a-black-businesswoman-typing-on-a-laptop-keyboard-in-an-office-alone.jpg?s=612x612&w=0&k=20&c=Qj9WWpAoKB0W7k-c68Y-8neN6c1mCExnEO9UKG-eoXY="
                          alt="Company Work Environment"
                          loading="lazy"
                          className="rounded-lg shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </RevealOnScroll>
                    </div>
                  </RevealOnScroll>
                </section>
            </section>

            <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                  From Idea to AI
                 
                  </h2>
                  <p className="text-xl text-left">
                  Get a free consultation on how AI can solve your challenges.                 </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                   Book free Consultation
                  </button>
                </div>
              </div>
            </section>
   
             <section id="AI-Solutions">
             <div className="max-w-7xl mx-auto px-4 py-8 mt-24">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-6">
        AI-Based  <span className="text-blue-500">solutions</span>  we make    
        </h1>
        <p className="text-lg max-w-4xl mx-auto text-gray-700 text-center">
        With strong expertise in multiple business domains, we strive to provide our Clients with top-tier Artificial Intelligence solutions tailored to their specific business needs.
        </p>
      </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* SPA Solution */}
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="44" height="44" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M20 20h24M20 30h24M20 40h12" stroke="currentColor" strokeWidth="2" />
              <path d="M22 12v-4M42 12v-4M22 56v-4M42 56v-4" stroke="currentColor" strokeWidth="2" />
              <path d="M16 18c-2 0-4-1-4-4M48 18c2 0 4-1 4-4M16 46c-2 0-4 1-4 4M48 46c2 0 4 1 4 4" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Conversational tools</h2>
          <p className="text-gray-700">
          Using the power of AI Technology, Machine Learning and NLP, we create chatbots and other dialogue systems that provide a human-independent, contextually sensitive questioning and answering service.
          </p>
        </div>

        {/* IoT Solution */}
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="10" width="20" height="36" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M40 15v4M36 44v4M40 44v8M44 44v4" stroke="currentColor" strokeWidth="2" />
              <circle cx="40" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M15 32c-3 3-3 9 0 12s9 3 12 0" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M20 25c-6 6-6 15 0 21s15 6 21 0" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Recommendation engines</h2>
          <p className="text-gray-700">
          They make personalized offers based on a client’s earlier choices and reviews. Self-taught systems are now a must-have component of software applied in all industries, from media to healthcare and finances.
          </p>
        </div>

        {/* Collaboration Tools Solution */}
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="22" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M22 36c-6 3-10 8-10 14h40c0-6-4-11-10-14" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="44" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M26 28l6-6 6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Expert & classification</h2>
          <p className="text-gray-700">
          We make custom expert and classification systems to solve domain-specific (from healthcare to finances) challenges. Our solutions help business systems to better understand and predict outcomes by identifying source patterns and making valuable suggestions.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="16" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="16" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="48" cy="48" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M32 24v8M16 40v-8h32v8" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Video, image & text analytics</h2>
          <p className="text-gray-700">
          We employ Machine Learning and develop custom business-specific video, image and text analytics applications that will help businesses reduce the required employees’s time and efforts on task performance and yield higher profit margins.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="12" width="40" height="30" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="24" y="20" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M22 42h20M26 42v10M38 42v10" stroke="currentColor" strokeWidth="2" />
              <path d="M24 24h16M24 26h16" stroke="currentColor" strokeWidth="2" />
              <path d="M26 18l2-2 2 2M34 18l2-2 2 2" stroke="currentColor" strokeWidth="2" />
              <text x="30" y="30" fontSize="10" textAnchor="middle" fill="currentColor">ERP</text>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Image, speech, & face recognition</h2>
          <p className="text-gray-700">
          The neural networks created by our artificial intelligence software development team for image, speech and facial recognition solutions can solve complex signal processing or pattern recognition challenges.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="40" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M16 32v12M8 44h16M36 22v6h12" stroke="currentColor" strokeWidth="2" />
              <rect x="32" y="28" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M40 36h4M38 40h8" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Sales intelligence systems</h2>
          <p className="text-gray-700">
          Sales intelligence applications help any type of business, from a small ecommerce shop to a shopping mall, to increase sales by providing insights, efficient recommendations, and valuable predictions.
          </p>
        </div>
        
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 16h36c2 0 4 2 4 4v16c0 2-2 4-4 4H34l-6 8-6-8H10c-2 0-4-2-4-4V20c0-2 2-4 4-4z" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="22" cy="28" r="2" fill="currentColor" />
              <circle cx="28" cy="28" r="2" fill="currentColor" />
              <circle cx="34" cy="28" r="2" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">AI accelerators</h2>
          <p className="text-gray-700">
          AI accelerators are specialized hardware solutions designed to significantly boost the performance of AI applications, particularly neural network training and inference. By using custom-built hardware like GPUs, TPUs, ASICs, or FPGAs, we help businesses achieve rapid data processing, lower latency, and reduced computational costs.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="8" width="40" height="48" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="20" y="16" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="32" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M20 40h24M20 48h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">AI agents and AI-based automation</h2>
          <p className="text-gray-700">
          AI-based agents act as intelligent digital entities that automate routine tasks, assist in decision-making, and handle complex workflows independently.<span className='text-red-500'> We develop AI agents</span> that learn continuously from interactions, improve processes through data-driven insights, and streamline repetitive tasks.
          </p>
        </div>
    
        {/* And More */}
        <div className="flex flex-col items-start">
          <div className="text-blue-500 mb-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="44" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="20" cy="44" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="44" cy="44" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M44 44l-4-4M32 32l-4-4" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Digital AI assistants</h2>
          <p className="text-gray-700">
          Digital AI assistants are intelligent software interfaces designed to interact naturally with users through text or voice communication. Our talented AI developers develop and fine-tune AI assistants, configuring them to understand context, interpret user intent, anticipate user needs, manage conversations, and perform various tasks to enhance customer experience, save resources, and improve operational efficiency.
          </p>
        </div>
      
      </div>



             </section>

             <section id="Advence-tech">

             <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-24">
            <span className="text-blue-500">AI technologies</span> we specialize in
          </h1>
        </header>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* NLP Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Natural Language Processing (NLP)</h2>
              <p className="text-gray-700">
                NLP is a sensational technology that started to transform all industries in 2023 
                after the introduction of ChatGPT. We implemented the most popular NLP solutions 
                like NLTK, spaCy, Gensim, BERT, AllenNLP, and other tools depending on the solution 
                architecture and technology stack.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center ">
              <img src="./AI technologies_Images/nlp.png" alt="NLP visualization" className="max-h-full" />
            </div>
          </div>

          {/* Machine Learning Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Machine Learning (ML)</h2>
              <p className="text-gray-700">
                Machine learning algorithms allow computers to learn from and make decisions based on data. 
                Our AI developers have expertise in implementing all algorithms: supervised learning, 
                unsupervised learning, semi-supervised learning, and reinforcement learning, each with 
                diverse applications such as fraud detection, customer segmentation, and autonomous vehicles.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center ">
              <img src="./AI technologies_Images/ml.png" alt="Machine Learning visualization" className="max-h-full" />
            </div>
          </div>

          {/* Computer Vision Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Computer vision</h2>
              <p className="text-gray-700">
                Computer vision enables machines to interpret and make decisions based on visual data. 
                Using digital images from cameras and videos and deep learning models, computer vision 
                systems can recognize patterns, detect objects, and understand scenes.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center">
              <img src="./AI technologies_Images/Computer-vision.png" alt="Computer Vision visualization" className="max-h-full" />
            </div>
          </div>

          {/* Predictive Analytics Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Predictive analytics</h2>
              <p className="text-gray-700">
                Predictive analytics uses statistical techniques, data mining, and machine learning 
                models to analyze historical data and predict future outcomes. We use algorithms like 
                regression, decision trees, and neural networks to make data-driven predictions.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center ">
              <img src="./AI technologies_Images/Predictive-analytics.png" alt="Predictive Analytics visualization" className="max-h-full" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Speech & Audio recognition</h2>
              <p className="text-gray-700">
              Speech and audio recognition technologies convert spoken language and audio signals into data. To perform such an operation, we leverage deep learning models like RNNs, Transformers, and Whisper-like architectures. Our AI developers implement systems that transcribe speech to text, generate human-like speech synthesis (TTS), perform speaker identification, and recognize audio patterns for call-center automation, voice-controlled systems, and accessibility tools.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center ">
              <img src="./AI technologies_Images/Speech-Audio-recognition.png" alt="Predictive Analytics visualization" className="max-h-full" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Robotic process automation (RPA)</h2>
              <p className="text-gray-700">
              We develop user interfaces and software to interact with robots, send commands, receive status, and configure them.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center">
              <img src="./AI technologies_Images/Robotic-process-automation.png" alt="Predictive Analytics visualization" className="max-h-full" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">AI in IoT</h2>
              <p className="text-gray-700">
              We specialize in IoT development and found AI extremely helpful here. By embedding AI into IoT devices and networks, our AI developers set up systems that can analyze data, learn from it, and make decisions or take actions autonomously.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center">
              <img src="./AI technologies_Images/AI-in-IoT.png" alt="Predictive Analytics visualization" className="max-h-full" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Deep Learning</h2>
              <p className="text-gray-700">
              Deep learning is a subset of machine learning using multilayer neural networks that learn complex data patterns. It enables advanced applications like facial recognition, language translation, image processing, and real-time decision-making, leveraging frameworks like TensorFlow and PyTorch.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center">
              <img src="/AI technologies_Images/Deep-Learning.png" alt="Predictive Analytics visualization" className="max-h-full" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Generative AI</h2>
              <p className="text-gray-700">
              We are experts at generative AI technologies, including GPT models, DALLE, Stable Diffusion, and GANs (Generative Adversarial Networks). We leverage these technologies to bring the power of content creation in multiple formats: text, images, video, code, and audio. Businesses that want to produce original data-backed content can benefit from these technologies.
              </p>
            </div>
            <div className="md:w-1/2 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg flex items-center justify-center">
              <img src="./AI technologies_Images/Generative-AI.png" alt="Predictive Analytics visualization" className="max-h-full" />
            </div>
          </div>
        </div>
        </main>
        </div>

             </section>

             <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                  Turn Data into Action
                 
                  </h2>
                  <p className="text-xl text-left">
                  Schedule a call and discover how AI can work for you.               </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                    Get in touch
                  </button>
                </div>
              </div>
            </section>

            <section id="reviews" className="py-16 bg-gray-50">

            <div className="flex-1 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Recent <span className="text-blue-500">software</span> we developed
          </h1>
          
          <div className="space-y-12">
            {/* First Project */}
            <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="./Blockchain_Development_Images/Umergence-perspr-1.webp" 
                    alt="Cost management platform" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">Cost management platform development</h2>
                  <p className="text-lg mb-6">A cost management system for equipment in the construction industry</p>
                </div>
              </div>
            </div>
            
            {/* Second Project */}
            <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-8 flex flex-col justify-center">
                  
                  <h2 className="text-3xl font-bold mb-4">Graphical user interface for robot operation</h2>
                  <p className="text-lg">SumatoSoft developed a graphic user interface (GUI) that helps to communicate with the robot Alfred</p>
                </div>
                <div className="md:w-2/3">
                  <img 
                    src="./Blockchain_Development_Images/Frame-1787-1.webp" 
                    alt="Robot interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
            <div className="container mx-auto px-4 mt-2">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Our <span className="text-blue-600">Clients Say</span>
                </h2>
                <TestimonialCarousel />
            </div>
        </section> 


        <section id="why-fox-solution">

<div className="max-w-7xl mx-auto px-4 py-8 mt-16">
{/* Header Section */}
<div className="mb-12 text-center">
<h1 className="text-5xl font-bold mb-6">
Why choose   <span className="text-blue-500">Fox-Solution</span> for AI development
</h1>

<div className="grid md:grid-cols-2 gap-6 mb-12 mt-16">
{/* Healthcare */}
<div className="bg-gray-50 p-8 rounded-lg">
<h2 className="text-3xl font-bold mb-4">Cutting-edge technology and innovation</h2>
<p className="text-gray-700 mb-4">
When providing AI development services, we leverage the latest AI advancements and state-of-the-art tools (ML frameworks, NLP models, generative AI technologies) to ensure your business stays ahead in the rapidly evolving AI landscape.
</p>

</div>

{/* Education */}
<div className="bg-gray-50 p-8 rounded-lg">
<h2 className="text-3xl font-bold mb-4">Customized and scalable solutions</h2>
<p className="text-gray-700 mb-4">
With deep over-a-decade expertise in custom development, we tailor our custom AI solutions to match 100% of your business needs, goals, and operations. We prioritize flexibility and scalability, ensuring your AI infrastructure grows seamlessly alongside your business.
</p>

</div>

<div className="bg-gray-50 p-8 rounded-lg">
<h2 className="text-3xl font-bold mb-4">User-centric design and development</h2>
<p className="text-gray-700 mb-4">
We believe that AI should enhance human experience, not replace it. Our user-centric approach ensures that every custom AI solution we develop with our AI development services is intuitive, accessible, and seamlessly integrated into your workflows.    

</p>

</div>


<div className="bg-gray-50 p-8 rounded-lg">
<h2 className="text-3xl font-bold mb-4">Security, privacy, and compliance</h2>
<p className="text-gray-700 mb-4">
As an ISO 27001 certified custom AI development company, we adhere to the highest international standards for information security when providing AI development services. We follow key privacy and compliance regulations, including GDPR, the EU AI Act, and specific national and state-level regulations.
</p>

</div>


<div className="bg-gray-50 p-8 rounded-lg">
<h2 className="text-3xl font-bold mb-4">Effortless Integration, maximum Impact</h2>
<p className="text-gray-700 mb-4">
We ensure your custom AI solutions integrate seamlessly into existing workflows, minimizing disruption and maximizing value. We ensure compatibility with a wide range of platforms and technologies, provide early support and employee training, may develop a transition plan to a new solution, write comprehensive documentation, and double-check all functionality with automated testing before the release.</p>

</div>
<div className="bg-gray-50 p-8 rounded-lg">
<h2 className="text-3xl font-bold mb-4">Quality-driven MLOps</h2>
<p className="text-gray-700 mb-4">
We utilize robust MLOps practices to streamline deployment, continuously monitor model performance, and ensure your AI models remain accurate, reliable, and efficient. Our MLops practices include: model versioning, automated CI/CD pipelines, automated retraining & continuous integration, containerization, and more.</p>

</div>
</div>
</div>
</div>
</section>

<section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                  AI that Delivers Business Value
                 
                  </h2>
                  <p className="text-xl text-left">
                  Contact us and get a roadmap tailored to your needs.               </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                    Book a Call Now
                  </button>
                </div>
              </div>
            </section>


 
             <section id="engagement">
                <div className="flex flex-col mt-16 mb-16">
      {/* Main content */}
      <div className="flex flex-1">
        {/* Content area */}
        <div className="flex-1 p-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-black">Engagement </span>
              <span className="text-blue-500">Models</span>
              <span className="text-black">  For AI services</span>
            </h1>
          </header>

          {/* Pricing Tabs */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-4 gap-8 w-full max-w-4xl">

            <button 
                className={`flex flex-col items-center p-4 border-b-2 ${activeTab === 'consulting' ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-500'}`}
                onClick={() => handleTabClick('consulting')}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 mb-2">
                  <Shuffle size={24} className="text-gray-500" />
                </div>
                <span className="text-lg">Consulting</span>
              </button>

              <button 
                className={`flex flex-col items-center p-4 border-b-2 ${activeTab === 'time-material' ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-500'}`}
                onClick={() => handleTabClick('time-material')}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-blue-500 mb-2">
                  <Clock size={24} className="text-blue-500" />
                </div>
                <span className="text-lg">Time & Material</span>
              </button>
              
              <button 
                className={`flex flex-col items-center p-4 border-b-2 ${activeTab === 'fixed-price' ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-500'}`}
                onClick={() => handleTabClick('fixed-price')}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 mb-2">
                  <DollarSign size={24} className="text-gray-500" />
                </div>
                <span className="text-lg">Fixed Price</span>
              </button>
              
              <button 
                className={`flex flex-col items-center p-4 border-b-2 ${activeTab === 'dedicated-team' ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-500'}`}
                onClick={() => handleTabClick('dedicated-team')}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 mb-2">
                  <ChevronRight size={24} className="text-gray-500" />
                </div>
                <span className="text-lg">Dedicated Team</span>
              </button>
            </div>
          </div>

          
          <div className="max-w-4xl mx-auto">
            {activeTab === 'time-material' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Time & Material (T&M)</h2>
                <p className="text-lg text-gray-700 mb-8">
                Under the Time & Material model, billing of AI development services is monthly and based on actual development efforts (person-hours) from the previous month. This flexible model includes:
                </p>
                <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">unfixed budget with agreed hourly rates;</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">unfixed project scope allowing ongoing adjustments;</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">billing reflects only actual work performed.</span>
            </li>
          </ul>
              </div>
            )}
            
            {activeTab === 'fixed-price' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Fixed price</h2>
                <p className="text-lg text-gray-700 mb-8">
                In the Fixed Price model, we agree on a predefined budget and clearly defined project scope. It provides high predictability but limited flexibility, making it ideal for:              
                  </p>
                  <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">projects with well-defined and stable requirements;</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">short- to medium-term engagements;</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">prototypes, PoCs, or MVPs with a limited budget.</span>
            </li>
          </ul>
              </div>
            )}
            
            {activeTab === 'dedicated-team' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Dedicated team</h2>
                <p className="text-lg text-gray-700 mb-8">
                With the Dedicated Team model, you get specialists fully dedicated to your project, managed directly by you. Billing is based on fixed monthly payments calculated from specialists’ monthly salaries. This includes:               
                 </p>
                 <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">long-term engagements;</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">management of team members by your in-house team or project manager;</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">transparency, ownership, and control of team tasks and progress.</span>
            </li>
          </ul>
              </div>
            )}


{activeTab === 'consulting' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Consulting</h2>
                <p className="text-lg text-gray-700 mb-8">
                We provide expert guidance and strategic recommendations for your AI initiatives. Our team helps define your AI strategy, assess feasibility, optimize architecture, and ensure alignment with your business goals.                 </p>
                
              </div>
            )}

          </div>

          
          
        </div>
        </div>
        </div>
                </section>


             <section id="strategy">
             <div className="flex-1 bg-gray-900 text-white p-8 mb-8 mt-16">
             <div className="max-w-6xl mx-auto">
            
                </div>
                <img src='./AI technologies_Images/AI_Strategy.png'></img>
                </div>

                <section id="development-process" ref={(el) => addToRefs(el, 1)} className="bg-white py-16 px-4 md:px-6">
                  <RevealOnScroll>
                    <div className="max-w-4xl mx-auto">
                      <div className="space-y-12">
                        {developmentProcessSteps.map((step, index) => (
                          <RevealOnScroll key={index} delay={index * 0.2}>
                            <div className="relative flex items-start">
                              <div className="absolute left-0 transform -translate-x-1/2 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
                                {step.number}
                              </div>

                              {index !== 4 && (
                                <div className="absolute left-0 top-12 w-1 h-full bg-gray-300 ml-5"></div>
                              )}

                              <div className="ml-16">
                                <h3 className="text-2xl font-semibold text-gray-900">
                                  {step.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{step.description}</p>
                                <ul className="mt-4 space-y-2">
                                  {step.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start text-gray-700">
                                      <span className="text-blue-500 font-bold mr-2">✔</span>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </RevealOnScroll>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                </section>



             </section>


             

            
             <section id="contact" className="bg-[#1a365d] text-white rounded-lg p-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                  Custom AI, Real Results
                 
                  </h2>
                  <p className="text-xl text-left">
                  Book a meeting and see what’s possible with our team.</p>                </div>
                <div className="md:w-1/3 flex justify-end">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 whitespace-nowrap">
                    Book a Meeting
                  </button>
                </div>
              </div>
            </section>
   
            <section  id="AI-tech-stack"className="bg-white py-12 px-4 md:px-6">
                  <div className="max-w-6xl mx-auto mt-16">
                    <RevealOnScroll>
                      <h1 className="text-3xl md:text-4xl font-light text-black text-center">
                     <span className="text-blue-500 font-semibold"> AI tech stack </span>  for our AI development services

                      </h1>
                       
                      <div className="flex flex-col md:flex-row p-4 bg-gray-50 mt-16">
               <div className="flex-grow md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map through tech categories */}
          {techCategories.map(category => (
            <div key={category.id} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
               
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
                        
                      
                    </RevealOnScroll>
                  </div>
                </section>


                <section id="AI-life-Cycle" ref={(el) => addToRefs(el, 1)} className="bg-white py-16 px-4 md:px-6">
                  <RevealOnScroll>
                    <div className="max-w-4xl mx-auto mt-12 mb-8">
                        <h1 className='text-center text-4xl font-bold '>AI model <span className='text-blue-500'>lifecycle</span></h1>
                      <div className="space-y-12 mt-16">
                        {AILifeCycle.map((step, index) => (
                          <RevealOnScroll key={index} delay={index * 0.2}>
                            <div className="relative flex items-start">
                              <div className="absolute left-0 transform -translate-x-1/2 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">
                                {step.number}
                              </div>

                              {index !== 5 && (
                                <div className="absolute left-0 top-12 w-1 h-full bg-gray-300 ml-5"></div>
                              )}

                              <div className="ml-16">
                                <h3 className="text-2xl font-semibold text-gray-900">
                                  {step.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{step.description}</p>
                              </div>
                            </div>
                          </RevealOnScroll>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                </section>

                <section id="AI-Development-cost">
            <div className="flex mt-12  mb-16">
      {/* Main content */}
      <div className="flex-1 p-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center ">
            <span className="text-black">AI Development </span>
            <span className="text-blue-500"> Cost</span>
          </h1>
        </header>

        <div className="flex max-w-6xl mx-auto mt-32">
          <div className="w-1/3">
            <div className="bg-blue-50 rounded-l">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`w-full text-left px-8 py-6 transition-colors ${
                    activeService === service.id ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
                  }`}
                  onClick={() => handleServiceClick(service.id)}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Content for selected service */}
          <div className="w-2/3 px-8">
            {renderContent()}
          </div>
        </div>

        
      </div>
      </div>
            </section>            
          
                
                <section id="contactsection" className='mt-32'>
                <Contact/>
                </section>
                <section id="faq" className="px-4 mb-32 mt-32">
                  <FAQ faqs={mvpFaqs}/>
                  <a className='text-red-500'>Load More  </a>
                </section>

                <section id="stroiesSection">
                <section id="stories" className="px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
              We have awesome <span className="text-blue-600">stories</span> to tell you
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-gray-100 p-4 rounded-xl">
                  <img
                      src={articles[0].image}
                      alt={articles[0].title}
                      className="rounded-xl mb-4 w-[800px] h-[260px] hover:scale-105 transition-transform duration-300"
                  />
                  <Link
                      to={articles[0].path}
                      className="text-xl font-semibold text-black hover:text-red-500 transition-colors"
                  >
                      {articles[0].title}
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">
                      🕒 {articles[0].time} | {articles[0].date}
                  </p>
              </section>

              <section>
                  {articles.slice(1).map((article, index) => (
                      <div key={index} className="mb-6 border-b pb-4">
                          <Link
                              to={article.path}
                              className="text-lg font-medium text-black hover:text-red-500 transition-colors"
                          >
                              {article.title}
                          </Link>
                          <p className="text-gray-500 text-sm mt-1">
                              🕒 {article.time} | {article.date}
                          </p>
                      </div>
                  ))}
              </section>
          </div>

          <p className="text-red-500 font-medium mt-6 cursor-pointer hover:underline">
              All articles &gt;
          </p>
      </section>
                </section>
                
              </div>
               
              {/* Table of Contents - hidden on mobile, shown on desktop */}
              <div className="hidden lg:block w-1/4">
                <div className="sticky top-24 pl-4">
                  <TableOfContents
                    sections={contentsMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIDevelopment;