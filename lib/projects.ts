interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Social Media Dashboard',
    description: 'A responsive dashboard for social media analytics using Next.js',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Next.js', 'Chart.js', 'API Integration'],
  },
  {
    title: 'AI-powered Chatbot',
    description: 'An intelligent chatbot built with Python and natural language processing',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Python', 'NLP', 'Machine Learning'],
  },
  {
    title: 'Portfolio Website',
    description: 'A stunning portfolio website showcasing web development skills',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React', 'Three.js', 'GSAP'],
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Vue.js', 'Firebase', 'Vuex'],
  },
  {
    title: 'Weather Forecast App',
    description: 'A weather app with location-based forecasts and interactive maps',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['React Native', 'OpenWeatherMap API', 'Geolocation'],
  },
]
