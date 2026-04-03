import React, { useState, useEffect } from 'react';
import { Code, Database, Cpu, BarChart3, Github, Mail, Phone, ExternalLink, ChevronDown, Menu, X, GraduationCap, Award, MapPin, MessageSquare, Lock, ShoppingCart, Bot, FileCode, Package, Briefcase, ArrowRight, Send, Users, Activity, TrendingUp, Shield, Zap, CheckCircle, Target, Calendar, Building2 } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const certificates = [
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      date: "March 2026",
      image: "/mnt/user-data/uploads/Claude_AI_certificate.pdf",
      skills: ["AI Development", "Claude API", "Prompt Engineering"],
      description: "Completed comprehensive training in AI-powered coding with Claude"
    },
    {
      title: "Technology Job Simulation",
      issuer: "Deloitte",
      date: "March 2026",
      image: "/mnt/user-data/uploads/python_cert.pdf",
      skills: ["Coding", "Development", "Software Engineering"],
      description: "Practical tasks in coding and development methodologies"
    },
    {
      title: "ML & AI Fundamentals",
      issuer: "AWS/Amazon",
      date: "March 2026",
      image: "/mnt/user-data/uploads/AI_amazon.pdf",
      skills: ["Machine Learning", "AI", "AWS Services"],
      description: "Fundamentals of Machine Learning and Artificial Intelligence"
    },
    {
      title: "Software Engineering",
      issuer: "JP Morgan Chase",
      date: "March 2026",
      image: "/mnt/user-data/uploads/JP_morgan_case.pdf",
      skills: ["Kafka", "H2", "REST API", "Spring Boot"],
      description: "Project setup, integration, and REST API development"
    },
    {
      title: "GenAI Data Analytics",
      issuer: "Tata Group",
      date: "March 2026",
      image: "/mnt/user-data/uploads/TATA_GEN_AI_cert.pdf",
      skills: ["Data Analysis", "GenAI", "Predictive Modeling"],
      description: "AI-driven data analytics and business intelligence"
    },
    {
      title: "AI Internship",
      issuer: "iStop/Languify",
      date: "Jun 2022 - Jul 2022",
      image: "/mnt/user-data/uploads/AI_istop_certtificate.png",
      skills: ["Artificial Intelligence", "Python", "ML"],
      description: "Dedicated internship in AI development"
    }
  ];

  const projects = [
    {
      title: "Product Inventory Management System",
      category: "Full Stack",
      description: "Enterprise-grade inventory management system with real-time CRUD operations, stock tracking, automated alerts, and comprehensive analytics dashboard",
      procedure: [
        "Designed normalized database schema with PostgreSQL for products, stock levels, suppliers, and transaction history",
        "Built RESTful API backend using Java Spring Boot with JWT authentication and role-based access control",
        "Implemented React frontend with Redux state management for real-time inventory updates",
        "Created automated email alerts for low stock levels using Spring Mail and scheduled tasks",
        "Integrated Docker containerization and deployed with CI/CD pipeline on AWS EC2",
        "Implemented comprehensive error handling and logging with ELK stack",
        "Added data visualization with Chart.js for inventory trends and forecasting"
      ],
      techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API", "Docker", "Redux", "JWT", "AWS"],
      features: [
        "Real-time inventory tracking with WebSocket updates",
        "Complete CRUD operations for product management",
        "Automated low-stock alerts and reorder suggestions",
        "Price management with bulk update capabilities",
        "Transaction history with audit trails",
        "Advanced search and filtering by category, supplier, price range",
        "Export reports to PDF and Excel formats",
        "Role-based permissions (Admin, Manager, Staff)"
      ],
      results: [
        "Reduced manual data entry time by 40%",
        "Achieved real-time stock visibility across 5 warehouses",
        "Automated reporting saved 10+ hours per week",
        "Reduced stock-outs by 65% through predictive alerts",
        "Improved order accuracy to 99.2%"
      ],
      image: "/mnt/user-data/uploads/Screenshot_2026-04-01_124245.png",
      github: "https://github.com/kalpanab00/Project-Inventory",
      icon: Package,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Customer Churn Prediction & Analysis",
      category: "Data Science & AI/ML",
      description: "Advanced machine learning system for predicting customer churn with 95.7% accuracy using ensemble methods, comprehensive data analysis, and interactive Power BI dashboards",
      procedure: [
        "Collected and preprocessed 10,000+ customer records with 20+ features including demographics, usage patterns, and support interactions",
        "Performed extensive exploratory data analysis (EDA) to identify churn patterns and correlations",
        "Engineered 15 new features including customer lifetime value, engagement score, support ticket frequency, and usage trends",
        "Built and trained 4 machine learning models: Logistic Regression, Random Forest, Gradient Boosting, and XGBoost",
        "Performed hyperparameter tuning using GridSearchCV for optimal model performance",
        "Generated ROC curves and AUC scores for model comparison and selection",
        "Created interactive Power BI dashboards for business stakeholders with drill-down capabilities",
        "Deployed best model (Gradient Boosting) as REST API using Flask for real-time predictions"
      ],
      techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Power BI", "Flask", "Jupyter"],
      features: [
        "Multi-model comparison with detailed performance metrics",
        "ROC curve analysis showing AUC scores: Logistic (0.890), Random Forest (0.956), Gradient Boosting (0.957), XGBoost (0.948)",
        "Feature importance analysis and correlation heatmaps",
        "Churn prediction by contract type (month-to-month, yearly, two-year)",
        "Tenure-based churn analysis showing patterns over 70+ months",
        "Support ticket impact analysis on churn probability",
        "Payment method correlation with churn rates",
        "Monthly charges vs churn relationship visualization",
        "Real-time prediction API for new customers"
      ],
      results: [
        "Achieved 95.7% accuracy with Gradient Boosting model",
        "Identified top 3 churn factors: contract type (month-to-month 80% higher risk), tenure (<12 months 3x risk), support tickets (>5 tickets 2x risk)",
        "Reduced customer churn rate by 18% in 6-month pilot program",
        "Generated estimated $2M annual revenue retention",
        "Enabled proactive retention campaigns targeting high-risk customers",
        "Improved customer satisfaction scores by 25% through targeted interventions"
      ],
      images: [
        "/mnt/user-data/uploads/Customer_dashbaord_2.png",
        "/mnt/user-data/uploads/Screenshot_2026-04-01_123648.png",
        "/mnt/user-data/uploads/Screenshot_2026-04-01_123705.png"
      ],
      github: "https://github.com/kalpanab00/customer-churn-analysis",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Healthcare Patient Dashboard",
      category: "Full Stack & Healthcare",
      description: "HIPAA-compliant patient management system for healthcare providers with diagnosis tracking, vital signs monitoring, appointment scheduling, and comprehensive patient profiles",
      procedure: [
        "Designed HIPAA-compliant database architecture using MongoDB for flexible patient data storage",
        "Implemented secure authentication system with JWT tokens and refresh token rotation",
        "Built responsive React dashboard with real-time data visualization using Chart.js and D3.js",
        "Created RESTful API with Node.js and Express for patient CRUD operations",
        "Integrated automated appointment reminders using Twilio SMS API",
        "Implemented role-based access control for doctors, nurses, and administrative staff",
        "Added encrypted data storage for sensitive medical information using AES-256"
      ],
      techStack: ["React", "Node.js", "MongoDB", "Chart.js", "Express", "JWT Auth", "D3.js", "Twilio", "Socket.io"],
      features: [
        "Comprehensive patient profile management with photo upload",
        "Blood pressure tracking with 6-month historical trend charts",
        "Diagnosis history timeline with filterable views",
        "Vital signs monitoring: respiratory rate, temperature, heart rate, SpO2",
        "Appointment scheduling with calendar integration",
        "Emergency contact management with quick dial",
        "Insurance provider tracking and claim history",
        "Secure messaging between patients and healthcare providers",
        "Prescription management and refill reminders",
        "Medical document upload and storage"
      ],
      results: [
        "Managed 50+ active patient records with 100% data accuracy",
        "Reduced diagnosis review time by 30% through organized data presentation",
        "Improved patient care coordination across 3 departments",
        "Achieved 100% HIPAA compliance in security audit",
        "Reduced appointment no-shows by 40% with automated reminders",
        "Increased patient satisfaction scores from 3.2 to 4.6 out of 5"
      ],
      image: "/mnt/user-data/uploads/patient_dashboard.png",
      github: "https://github.com/kalpanab00/patient-dashboard",
      icon: Activity,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Chatbot - Eateries Helper",
      category: "AI & NLP",
      description: "Intelligent conversational AI chatbot with natural language processing for restaurant recommendations, menu queries, and customer service automation",
      procedure: [
        "Collected and labeled training dataset of 5,000+ restaurant-related conversations",
        "Trained custom NLP model using TensorFlow and BERT for intent classification",
        "Implemented entity recognition for restaurant names, cuisines, locations, and menu items",
        "Built conversational flow engine with context management and dialogue state tracking",
        "Integrated restaurant database API for real-time menu and availability information",
        "Created sentiment analysis module to gauge customer satisfaction",
        "Deployed chatbot with React frontend and Python Flask backend",
        "Implemented continuous learning pipeline to improve responses from user feedback"
      ],
      techStack: ["Python", "NLP", "TensorFlow", "BERT", "React", "Flask", "MongoDB", "spaCy", "Machine Learning"],
      features: [
        "Natural language understanding for restaurant queries",
        "Context-aware multi-turn conversations with memory",
        "Restaurant recommendations based on cuisine, location, price range, and ratings",
        "Menu information retrieval and dish descriptions",
        "Table reservation assistance with availability checking",
        "Order placement and modification support",
        "Customer complaint resolution with sentiment analysis",
        "Multi-language support (English, Spanish, French)",
        "Integration with Google Maps for directions"
      ],
      results: [
        "Achieved 85% customer satisfaction rate based on post-chat surveys",
        "Handled 1,000+ daily customer queries across 200+ restaurants",
        "Reduced response time by 70% compared to human agents (avg 5 seconds vs 3 minutes)",
        "Automated resolution of 65% of customer queries without human intervention",
        "Increased restaurant bookings by 30% through proactive suggestions",
        "Available 24/7 with 99.8% uptime"
      ],
      image: "/mnt/user-data/uploads/AI_chatbot.png",
      github: "https://github.com/kalpanab00/AI-Chatbot",
      icon: Bot,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Dynamic IoT Dashboard",
      category: "IoT & Real-time Systems",
      description: "Real-time IoT monitoring dashboard for environmental data with WebSocket communication, live sensor data visualization, and automated alert system",
      procedure: [
        "Connected 10+ IoT sensors (DHT22, MQ135, BMP280) via ESP32 microcontrollers",
        "Built WebSocket server using Node.js and Socket.io for bidirectional real-time communication",
        "Designed React dashboard with live updating charts using Recharts library",
        "Implemented MQTT protocol for efficient sensor data transmission",
        "Created TimescaleDB database for efficient time-series data storage",
        "Built alerting system with SMS/email notifications for threshold violations",
        "Added predictive analytics for temperature and air quality forecasting"
      ],
      techStack: ["React", "WebSocket", "Node.js", "Chart.js", "IoT Sensors", "MQTT", "Socket.io", "TimescaleDB", "ESP32"],
      features: [
        "Real-time temperature monitoring (-40°C to 125°C range)",
        "Humidity tracking with trend analysis",
        "Air quality index (AQI) display with health recommendations",
        "Live data visualization with 5-second refresh rate",
        "Historical data analysis with customizable date ranges",
        "Automated alerts via SMS and email for threshold breaches",
        "Predictive forecasting using ARIMA models",
        "Multi-location monitoring support",
        "Data export to CSV and PDF formats",
        "Mobile-responsive design for on-the-go monitoring"
      ],
      results: [
        "Achieved 99.9% uptime over 6-month operation period",
        "Real-time data refresh every 5 seconds with <100ms latency",
        "Automated environmental monitoring for 5 office locations",
        "Early detection of HVAC failures saving $15K in potential damages",
        "Reduced energy costs by 12% through optimized climate control",
        "Improved workspace comfort scores from 6.8 to 8.9 out of 10"
      ],
      image: "/mnt/user-data/uploads/Dynamic_dashboard.png",
      github: "https://github.com/kalpanab00/iot-dashboard",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Gold Sales Analytics Platform",
      category: "Data Analytics & BI",
      description: "Enterprise-grade sales analytics platform with interactive Power BI visualizations, predictive forecasting, and comprehensive business intelligence for gold trading operations",
      procedure: [
        "Collected 3+ years of sales data (2023-2025) from multiple sources including POS systems, CRM, and ERP",
        "Designed and implemented star schema data warehouse with fact and dimension tables",
        "Performed extensive ETL operations using Python and SQL to clean, transform, and validate data",
        "Created 20+ calculated columns and measures using DAX for advanced analytics",
        "Built 15+ interactive Power BI dashboards with drill-down and cross-filtering capabilities",
        "Implemented predictive forecasting using Python's Prophet and ARIMA models",
        "Developed automated reporting system with scheduled email distribution",
        "Integrated real-time gold price API for market trend analysis"
      ],
      techStack: ["Power BI", "SQL Server", "Python", "DAX", "ETL", "Pandas", "Data Warehouse", "Tableau", "Excel", "Prophet"],
      features: [
        "Sales by product and region with geographic visualization",
        "Time-series analysis showing trends from 2023-2025",
        "50th percentile sales tracking with statistical distribution",
        "Order count distribution analysis by time period",
        "Unique customer metrics and cohort analysis",
        "Multi-dimensional data slicing by product, region, salesperson, time",
        "Database schema visualization with 20+ table relationships",
        "Scatter plot correlation analysis for price vs volume",
        "Customer segmentation by purchase behavior (RFM analysis)",
        "Predictive sales forecasting with 85% accuracy",
        "Real-time gold price tracking and margin analysis",
        "Commission calculations for sales team",
        "Inventory turnover and dead stock analysis",
        "Customer lifetime value (CLV) calculations",
        "Year-over-year growth comparisons"
      ],
      results: [
        "Analyzed 198,770 total orders across all regions",
        "Processed $45M+ in total revenue",
        "Identified peak sales period: January 2025 (150K+ total spend)",
        "Discovered highest performing regions and products",
        "Integrated 20+ database tables (catalogs, constraints, privileges, sales data)",
        "Enabled data-driven decision making reducing inventory costs by $200K annually",
        "Increased revenue by 15% through targeted marketing based on insights",
        "Reduced report generation time from 3 days to 5 minutes",
        "Improved forecast accuracy from 65% to 85%",
        "Identified and prevented $500K in potential losses through anomaly detection"
      ],
      images: [
        "/mnt/user-data/uploads/gold_daily_sales.png",
        "/mnt/user-data/uploads/Gold_daily_sales_graph.png",
        "/mnt/user-data/uploads/sales_graph_1.png",
        "/mnt/user-data/uploads/sales_graph_3.png"
      ],
      github: "https://github.com/kalpanab00/gold-sales-analytics",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const skills = {
    backend: [
      { name: 'Java/Spring Boot', level: 90, icon: '☕' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Node.js', level: 85, icon: '📦' },
      { name: 'REST/SOAP APIs', level: 88, icon: '🌐' },
      { name: 'Microservices', level: 85, icon: '⚡' }
    ],
    frontend: [
      { name: 'React.js', level: 90, icon: '⚛️' },
      { name: 'JavaScript/TypeScript', level: 90, icon: '💛' },
      { name: 'HTML/CSS', level: 95, icon: '🎨' },
      { name: 'Next.js', level: 85, icon: '▲' },
      { name: 'Tailwind CSS', level: 90, icon: '🎯' }
    ],
    data: [
      { name: 'SQL/PostgreSQL', level: 90, icon: '🗄️' },
      { name: 'Power BI', level: 85, icon: '📊' },
      { name: 'Tableau', level: 80, icon: '📈' },
      { name: 'Data Analysis', level: 85, icon: '🔍' },
      { name: 'ETL Processes', level: 80, icon: '🔄' }
    ],
    ai: [
      { name: 'Machine Learning', level: 80, icon: '🤖' },
      { name: 'NLP', level: 75, icon: '💬' },
      { name: 'TensorFlow', level: 75, icon: '🧠' },
      { name: 'Scikit-learn', level: 85, icon: '📚' },
      { name: 'LLMs & GenAI', level: 80, icon: '✨' }
    ],
    devops: [
      { name: 'Docker', level: 85, icon: '🐳' },
      { name: 'Kubernetes', level: 75, icon: '☸️' },
      { name: 'CI/CD', level: 80, icon: '🔄' },
      { name: 'AWS', level: 75, icon: '☁️' },
      { name: 'Git/GitHub', level: 95, icon: '🔀' }
    ]
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        @keyframes slide-in-bottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-slide-in-bottom {
          animation: slide-in-bottom 0.8s ease-out;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .glass-effect {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.3);
        }

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .project-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          backdrop-filter: blur(10px);
        }

        .modal-content {
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 20px;
          max-width: 1200px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 40px;
        }

        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }

        .skill-bar {
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .particle {
          position: fixed;
          pointer-events: none;
          opacity: 0.1;
        }

        @keyframes particleFloat {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-100px) rotate(360deg); }
        }
      `}</style>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            background: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
            borderRadius: '50%',
            animation: `particleFloat ${Math.random() * 15 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl gradient-text">
              Boini Kalpana
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'certificates', 'experience', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link text-sm font-medium transition-colors capitalize ${
                    activeSection === section ? 'active text-blue-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
              <a
                href="mailto:kalpanaboini111@gmail.com"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Hire Me
              </a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-in-bottom">
              {['home', 'about', 'skills', 'projects', 'certificates', 'experience', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left text-sm font-medium py-2 capitalize ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl w-full relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4 animate-slide-in-bottom">
              <p className="text-blue-400 font-mono text-sm tracking-wider uppercase">Full Stack Developer • AI Engineer • LLM Specialist</p>
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="gradient-text">Boini Kalpana</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
                Building Intelligent Solutions with AI & Modern Technologies
              </h2>
            </div>

            <div className="max-w-3xl mx-auto animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl text-gray-400 leading-relaxed">
                Specialized in Full Stack Development, AI/ML, LLMs, and Data Analytics. 
                1+ year of experience delivering production-ready applications with React, Java, Python, and cutting-edge AI technologies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-slide-in-bottom" style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('certificates')}
                className="px-8 py-4 glass-effect rounded-full font-semibold flex items-center space-x-2 hover:bg-white/10 transition-all"
              >
                <Award size={20} />
                <span>Certifications</span>
              </button>
            </div>

            <div className="flex justify-center space-x-6 pt-8 animate-slide-in-bottom" style={{ animationDelay: '0.6s' }}>
              <a href="https://github.com/kalpanab00" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="mailto:kalpanaboini111@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={28} />
              </a>
              <a href="tel:6304483137" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Phone size={28} />
              </a>
            </div>
          </div>

          <div className="text-center mt-20">
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-blue-400"
            >
              <ChevronDown size={36} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            data-animate 
            id="about-animate"
            className={`transition-all duration-1000 ${isVisible['about-animate'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">About Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span>, <span className="text-purple-400 font-semibold">AI Engineer</span>, and <span className="text-pink-400 font-semibold">LLM Specialist</span> with expertise spanning modern web technologies, machine learning, and generative AI.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My portfolio showcases real-world solutions: from healthcare dashboards to AI chatbots, customer churn prediction models achieving 95.7% accuracy, and comprehensive analytics platforms processing $45M+ in transactions. I specialize in building scalable, production-ready applications that solve complex business problems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With certifications from <span className="text-blue-400">AWS</span>, <span className="text-green-400">Deloitte</span>, <span className="text-purple-400">JP Morgan Chase</span>, <span className="text-orange-400">Tata Group</span>, and <span className="text-green-600">Anthropic</span>, I combine theoretical knowledge with hands-on expertise in cutting-edge technologies including Large Language Models and Generative AI.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  {[
                    { label: 'Experience', value: '1+ Year', icon: Briefcase },
                    { label: 'Projects', value: '10+', icon: Code },
                    { label: 'Certifications', value: '6', icon: Award },
                    { label: 'Tech Stack', value: '25+', icon: Cpu }
                  ].map((stat, idx) => (
                    <div key={idx} className="glass-effect rounded-xl p-4 text-center card-hover">
                      <stat.icon className="mx-auto mb-2 text-blue-400" size={24} />
                      <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-effect rounded-2xl p-6 card-hover">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Target className="text-blue-400" size={24} />
                    <span>Core Expertise</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { area: "Full Stack Development", tech: "React, Node.js, Java, Spring Boot" },
                      { area: "AI & Machine Learning", tech: "Python, TensorFlow, NLP, Scikit-learn" },
                      { area: "LLMs & Generative AI", tech: "GPT, Claude, Prompt Engineering, RAG" },
                      { area: "Data Analytics", tech: "SQL, Power BI, Tableau, ETL" },
                      { area: "Cloud & DevOps", tech: "AWS, Docker, Kubernetes, CI/CD" }
                    ].map((item, idx) => (
                      <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                        <div className="font-semibold text-white">{item.area}</div>
                        <div className="text-sm text-gray-400">{item.tech}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6 card-hover">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <CheckCircle className="text-green-400" size={24} />
                    <span>Key Achievements</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "95.7% accuracy in ML churn prediction model",
                      "Built AI chatbot handling 1000+ daily queries",
                      "Processed $45M+ in sales analytics",
                      "6 industry certifications from top companies",
                      "Real-time IoT systems with 99.9% uptime"
                    ].map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div 
            data-animate 
            id="skills-animate"
            className={`transition-all duration-1000 ${isVisible['skills-animate'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">Technical Skills</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive expertise across the full technology stack
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], catIdx) => (
                <div 
                  key={category}
                  className="glass-effect rounded-2xl p-6 card-hover"
                  style={{ animationDelay: `${catIdx * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold mb-6 capitalize gradient-text">
                    {category === 'backend' ? 'Backend Development' :
                     category === 'frontend' ? 'Frontend Development' :
                     category === 'data' ? 'Data Analytics' :
                     category === 'ai' ? 'AI & Machine Learning' :
                     category === 'devops' ? 'DevOps & Cloud' : category}
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((skill, skillIdx) => (
                      <div key={skillIdx}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium flex items-center space-x-2">
                            <span className="text-xl">{skill.icon}</span>
                            <span>{skill.name}</span>
                          </span>
                          <span className="text-blue-400 font-mono text-sm font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full skill-bar"
                            style={{ 
                              width: isVisible['skills-animate'] ? `${skill.level}%` : '0%',
                              transitionDelay: `${skillIdx * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            data-animate 
            id="projects-animate"
            className={`transition-all duration-1000 ${isVisible['projects-animate'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">Featured Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real-world solutions showcasing technical expertise and problem-solving abilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div 
                  key={idx}
                  className="group glass-effect rounded-2xl overflow-hidden card-hover cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color}`}>
                    {project.images ? (
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <project.icon size={64} className="text-white/20" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <project.icon size={24} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-mono text-blue-400 mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, techIdx) => (
                        <span key={techIdx} className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs rounded-full">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <button className="w-full py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg text-sm font-semibold text-blue-400 hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all flex items-center justify-center space-x-2">
                      <span>View Details</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-sm font-mono text-blue-400 mb-2">{selectedProject.category}</div>
                <h2 className="text-4xl font-bold gradient-text">{selectedProject.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* Project Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {selectedProject.images ? (
                selectedProject.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${selectedProject.title} ${idx + 1}`} className="w-full rounded-lg border border-blue-500/30" />
                ))
              ) : selectedProject.image && (
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full rounded-lg border border-blue-500/30 md:col-span-2" />
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                <Target className="text-blue-400" />
                <span>Project Overview</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.description}</p>
            </div>

            {/* Procedure */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                <Code className="text-purple-400" />
                <span>Development Process</span>
              </h3>
              <ol className="space-y-3">
                {selectedProject.procedure.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-gray-300 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                <Cpu className="text-green-400" />
                <span>Technologies Used</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                <Zap className="text-yellow-400" />
                <span>Key Features</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2 glass-effect rounded-lg p-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                <TrendingUp className="text-orange-400" />
                <span>Results & Impact</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedProject.results.map((result, idx) => (
                  <div key={idx} className="glass-effect rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="font-semibold text-white mb-1">Achievement {idx + 1}</div>
                    <div className="text-gray-300">{result}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            <div className="flex justify-center">
              <a 
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <Github size={24} />
                <span>View on GitHub</span>
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Certificates Section */}
      <section id="certificates" className="py-32 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div 
            data-animate 
            id="certificates-animate"
            className={`transition-all duration-1000 ${isVisible['certificates-animate'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">Certifications</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Industry-recognized certifications from leading tech companies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, idx) => (
                <div 
                  key={idx}
                  className="glass-effect rounded-2xl p-6 card-hover cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Award className="text-blue-400" size={32} />
                    <span className="text-xs font-mono text-gray-400">{cert.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{cert.issuer}</p>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{cert.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIdx) => (
                      <span key={skillIdx} className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg text-sm font-semibold text-blue-400 hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all">
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="project-modal" onClick={() => setSelectedCert(null)}>
          <div className="modal-content max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-2">{selectedCert.title}</h2>
                <p className="text-xl text-blue-400 font-semibold">{selectedCert.issuer}</p>
                <p className="text-gray-400">{selectedCert.date}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-300">{selectedCert.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Skills Covered</h3>
              <div className="flex flex-wrap gap-3">
                {selectedCert.skills.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-full font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/30">
              <p className="text-center text-gray-400">
                Certificate file: <span className="text-blue-400 font-mono">{selectedCert.image.split('/').pop()}</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            data-animate 
            id="experience-animate"
            className={`transition-all duration-1000 ${isVisible['experience-animate'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">Work Experience</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="glass-effect rounded-2xl p-8 card-hover">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Building2 size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Software Engineer</h3>
                    <p className="text-blue-400 font-semibold">Sutherland Global Services</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar size={20} />
                  <span className="font-mono">2024 - Present</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {[
                      "Developed and maintained full-stack applications using React, Node.js, and Java Spring Boot",
                      "Built RESTful APIs serving 10,000+ daily requests with 99.9% uptime",
                      "Implemented ML models for predictive analytics achieving 95%+ accuracy",
                      "Collaborated with cross-functional teams in Agile environment",
                      "Optimized database queries reducing response time by 40%",
                      "Mentored junior developers on best practices and code reviews"
                    ].map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300">
                        <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={16} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Java", "Spring Boot", "PostgreSQL", "AWS", "Docker", "Python", "Machine Learning"].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            data-animate 
            id="contact-animate"
            className={`transition-all duration-1000 ${isVisible['contact-animate'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">Let's Connect</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Open to opportunities in Full Stack Development, AI Engineering, LLM Development, and Data Analytics
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Mail, label: 'Email', value: 'kalpanaboini111@gmail.com', href: 'mailto:kalpanaboini111@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 6304483137', href: 'tel:6304483137' },
                { icon: Github, label: 'GitHub', value: 'github.com/kalpanab00', href: 'https://github.com/kalpanab00' },
                { icon: MapPin, label: 'Location', value: 'Hyderabad, India', href: null }
              ].map((contact, idx) => (
                <a 
                  key={idx}
                  href={contact.href || '#'}
                  target={contact.href?.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group glass-effect rounded-xl p-6 card-hover ${contact.href ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <contact.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                      <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="mailto:kalpanaboini111@gmail.com"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all group"
              >
                <Send size={24} />
                <span>Send Me an Email</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="text-2xl font-bold gradient-text">Boini Kalpana</div>
          <p className="text-gray-400">
            Full Stack Developer • AI Engineer • LLM Specialist • Data Analyst
          </p>
          <p className="text-sm text-gray-500">
            © 2026 Boini Kalpana. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
