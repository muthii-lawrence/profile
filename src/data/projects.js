export const projects = [
  {
    id: "254-elite-safaris",
    title: "254 Elite Safaris",
    subtitle: "A seamless travel booking experience in Kenya",
    description: `
      254 Elite Safaris is a responsive travel and airport transfer website built using React, Tailwind CSS, and Web3Forms.
      It serves as a platform for travelers to explore curated safari packages, book airport pickups, and get in touch with the team directly.
  
      The platform emphasizes clean aesthetics, fast loading, and user-friendly design to provide a reliable first impression
      for both international and local tourists. The site is optimized for mobile and includes a backendless contact system.
    `,
    challenges: `
      The main challenge was designing a fast-loading, elegant platform that works across all screen sizes while maintaining local brand identity.
      Another challenge involved integrating a form submission process without a backend, using Web3Forms to handle message delivery securely and efficiently.
  
      Additionally, showcasing multiple travel packages with a balance between visual appeal and fast load time was critical for user engagement.
    `,
    solutions: `
      - Designed a grid-based responsive layout with Tailwind CSS and Framer Motion for animations
      - Integrated Web3Forms for contact and booking form submissions without the need for a backend
      - Added SEO-friendly metadata, alt tags, and optimized images for performance and discoverability
      - Created a structured UX flow from homepage to booking with clear CTAs and fast navigation
      - Used modular React components to ensure maintainability and future scalability
    `,
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Web3Forms",
      "Vite",
    ],
    image: "/sf.jpg", // Replace with actual
    gallery: ["/pk.jpg", "/tr.jpg", "/ct.jpg"],
    demoLink: "https://254elitesafaris.co.ke",
    githubLink: "https://github.com/muthii-lawrence/Safari_wings",
    year: "2025",
    client: "254 Elite Safaris",
    role: "Frontend Developer & Designer",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    subtitle: "A modern shopping experience",
    description: `
        This project is a comprehensive e-commerce platform built with React, Redux, and a headless CMS.
        It features a responsive design, product filtering, cart functionality, and secure payment integration.
        
        The platform was designed with scalability in mind, allowing for easy addition of new products and categories.
        Performance optimization techniques were implemented to ensure fast loading times and a smooth user experience.
      `,
    challenges: `
        One of the main challenges was implementing a robust state management solution that could handle complex
        product filtering, sorting, and cart operations. Redux was used for global state management, with custom
        middleware for handling async operations and persisting cart data.
        
        Another challenge was optimizing the performance of product listing pages with potentially hundreds of items.
        This was addressed through virtualized lists, lazy loading, and efficient image optimization.
      `,
    solutions: `
        - Implemented Redux with a normalized store structure for efficient data access
        - Created a responsive design system using Tailwind CSS with custom utility classes
        - Built a modular component library for consistent UI elements across the platform
        - Integrated Stripe for secure payment processing with custom checkout flow
        - Added comprehensive testing using Jest and React Testing Library
      `,
    technologies: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
    ],
    image:
      "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540151812223-c30b3fab58e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    ],
    demoLink: "#",
    githubLink: "#",
    year: "2022",
    client: "RetailTech Inc.",
    role: "Lead Developer",
  },
  {
    id: "task-management",
    title: "Task Management App",
    subtitle: "Streamlined team productivity",
    description: `
        A productivity tool for teams to manage projects, tasks, and deadlines with real-time updates.
        This application was built with Next.js and MongoDB to provide a seamless experience across devices.
        
        The app features drag-and-drop task management, user authentication, role-based permissions,
        and real-time notifications to keep team members updated on project progress.
      `,
    challenges: `
        The main challenge was implementing real-time updates across multiple clients while maintaining
        performance. We utilized WebSockets for instant updates and implemented optimistic UI updates
        to ensure a responsive experience.
        
        Another challenge was designing an intuitive interface that worked well on both desktop and mobile
        devices, requiring a responsive design approach with careful consideration for touch interactions.
      `,
    solutions: `
        - Implemented WebSocket connections for real-time updates between clients
        - Created a responsive UI that adapts to different screen sizes and input methods
        - Built a robust authentication system with role-based access control
        - Designed an intuitive drag-and-drop interface for task management
        - Integrated with calendar APIs for deadline management and reminders
      `,
    technologies: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Socket.io",
      "Auth0",
      "React DnD",
    ],
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    ],
    demoLink: "#",
    githubLink: "#",
    year: "2023",
    client: "AgileWorks",
    role: "Full Stack Developer",
  },
  {
    id: "ecovert-Initiative",
    title: "Ecovert Sustainable Advertising",
    subtitle: "Reducing plastic waste through innovative bottle alternatives",
    description: `
      Ecovert is a sustainability-focused initiative aimed at eliminating single-use plastic bottles by introducing eco-friendly packaging options.
      The project promotes the use of aluminum bottles and carton-based containers as viable, recyclable, and biodegradable alternatives to plastic.
      
      This platform showcases Ecovert's mission, educates the public on environmental impact, and engages users through informative campaigns,
      success stories, and SDG-aligned actions.
    `,
    challenges: `
      A major challenge was creating a compelling digital narrative that educates consumers on sustainable packaging while driving behavior change.
      It was essential to visually differentiate aluminum and carton solutions from traditional packaging and highlight their environmental benefits.
      
      Another challenge was organizing SDG-aligned content (specifically SDG 6: Clean Water and Sanitation, and SDG 14: Life Below Water) in a
      way that’s both informative and action-oriented.
    `,
    solutions: `
      - Designed an engaging React-based website to present Ecovert’s mission, solutions, and campaigns
      - Built modular story pages for each SDG goal with contextual impact and user calls to action
      - Used animated illustrations and infographics to simplify complex sustainability topics
      - Integrated interactive CTAs to encourage pledges, donations, and educational resource sharing
      - Prioritized accessibility and responsiveness to reach a broad audience across devices
    `,
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "Web3Forms",
      "Figma",
    ],
    image: "/ec1.jpg", // Replace with custom Ecovert image if available
    gallery: ["/ec3.jpg", "/ec2.jpg", "/ec1.jpg"],
    demoLink: "https://ecovert.netlify.app/", // Replace with your actual link
    githubLink: null,
    year: "2025",
    client: "Ecovert Initiative",
    role: "Creative Developer & Sustainability Designer",
  },
  {
    id: "travel-blog",
    title: "Travel Blog",
    subtitle: "Sharing adventures around the world",
    description: `
        A beautiful travel blog with a custom theme focusing on typography and photography.
        This project was designed to showcase travel experiences with a focus on visual storytelling
        and immersive content presentation.
        
        The blog features location-based content organization, interactive maps of travel routes,
        and integration with social media platforms for content sharing and engagement.
      `,
    challenges: `
        The main challenge was creating a visually appealing design that highlighted photography
        while maintaining fast load times. This required implementing advanced image optimization
        techniques and lazy loading for media-rich content.
        
        Another challenge was designing an intuitive content management system for the blog owner
        to easily update and organize travel stories, photos, and location data without technical expertise.
      `,
    solutions: `
        - Implemented a custom WordPress theme with optimized image handling
        - Created a responsive design that adapts to different screen sizes and orientations
        - Integrated with mapping services to display travel routes and locations
        - Designed a custom admin interface for intuitive content management
        - Built advanced SEO features to improve discoverability of content
      `,
    technologies: [
      "Figma",
      "WordPress",
      "CSS",
      "JavaScript",
      "PHP",
      "Google Maps API",
    ],
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    ],
    demoLink: "#",
    githubLink: null,
    year: "2021",
    client: "Wanderlust Journals",
    role: "Designer & WordPress Developer",
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    subtitle: "Personal health management",
    description: `
        A healthcare app that helps users track medications, appointments, and health metrics.
        Built with React Native and Firebase, this cross-platform mobile application provides
        tools for patients to manage their healthcare journey effectively.
        
        The app includes features for medication reminders, appointment scheduling, symptom tracking,
        and secure communication with healthcare providers through an integrated messaging system.
      `,
    challenges: `
        A significant challenge was ensuring HIPAA compliance and data security while providing
        a seamless user experience. This required implementing secure storage solutions and
        encryption for all sensitive health information.
        
        Another challenge was creating an intuitive interface for users of all ages and technical
        abilities, many of whom might have accessibility needs or limited familiarity with mobile apps.
      `,
    solutions: `
        - Implemented secure data storage and transmission protocols compliant with healthcare regulations
        - Designed an accessible interface with considerations for various user needs and abilities
        - Created a flexible notification system for medication reminders and appointments
        - Built integration capabilities with wearable devices for health metrics tracking
        - Developed offline functionality for access to critical information without internet connectivity
      `,
    technologies: [
      "React Native",
      "Firebase",
      "Expo",
      "Redux",
      "Google Cloud Functions",
      "HealthKit API",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    ],
    demoLink: "#",
    githubLink: "#",
    year: "2023",
    client: "HealthTrack Solutions",
    role: "Mobile App Developer",
  },
  {
    id: "restaurant-booking",
    title: "Restaurant Booking System",
    subtitle: "Streamlining restaurant reservations",
    description: `
        A complete reservation system for restaurants with table management and customer notifications.
        This full-stack application was built with Vue.js, Node.js, and MongoDB to provide an efficient
        solution for restaurant reservation management.
        
        The system includes features for table assignment, capacity management, customer profiles,
        and automated notification systems for confirmations and reminders.
      `,
    challenges: `
        The main challenge was designing a flexible system that could adapt to different restaurant
        layouts, reservation policies, and peak hours. This required developing a customizable
        configuration system for restaurant administrators.
        
        Another challenge was handling concurrent reservations and preventing double-bookings while
        maintaining system performance, especially during high-traffic periods.
      `,
    solutions: `
        - Created a visual table management interface for restaurant staff
        - Implemented a reservation algorithm to optimize table assignments based on party size
        - Built an automated notification system for reservation confirmations and reminders
        - Designed a customer-facing booking interface optimized for both mobile and desktop
        - Developed comprehensive analytics to help restaurants understand booking patterns
      `,
    technologies: [
      "Vue.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Twilio API",
    ],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    ],
    demoLink: "#",
    githubLink: "#",
    year: "2022",
    client: "DineEase Technologies",
    role: "Full Stack Developer",
  },
];
