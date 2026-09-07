import { HeartPulse, BookOpen, Users, Leaf } from 'lucide-react'

export const initiatives = [
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Medical camps, health checkups and awareness programs.',
    points: ['Medical camps', 'Blood donation', 'Eye & dental checkups', 'BP & sugar testing'],
    bg: '#EAF8F7',
    iconColor: '#0F8B8D',
  },
  {
    id: 'education',
    icon: BookOpen,
    title: 'Education',
    description: 'Skill development, awareness and learning opportunities.',
    points: ['Poster-making competitions', 'Anaemia awareness', 'Life skills', 'Career guidance'],
    bg: '#EAF1FB',
    iconColor: '#063B5C',
  },
  {
    id: 'community-support',
    icon: Users,
    title: 'Community Support',
    description: 'Empowering underprivileged communities.',
    points: ['Women empowerment', 'Senior citizen support', 'Disaster relief', 'Community collaboration'],
    bg: '#FFF0EC',
    iconColor: '#FF6B4A',
  },
  {
    id: 'environment',
    icon: Leaf,
    title: 'Environment',
    description: 'Awareness and initiatives for a cleaner, healthier tomorrow.',
    points: ['Tree plantation', 'Waste management', 'Environmental awareness', 'Cleaner neighbourhoods'],
    bg: '#EEF7EC',
    iconColor: '#2E8B57',
  },
]
