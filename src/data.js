// ---------------------------------------------------------------------------
// EDIT ME: everything personal about the site lives here. Change these values
// and the whole page updates. No other file needs touching for content edits.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Yonghao Lee',
  // Short tagline under your name in the hero.
  tagline: 'Computer Science student · Machine Learning & Software',
  // A sentence or two for the hero subtitle.
  intro:
    'I build things with code — from machine learning and NLP experiments to ' +
    'games and tools. Currently focused on ML, computer vision, and writing ' +
    'clean, reliable software.',
  // Longer bio for the About section. Each string is its own paragraph.
  about: [
    "Hi, I'm Yonghao — a Computer Science student with a strong interest in " +
      'machine learning, natural language processing, and computer vision. ' +
      'I enjoy taking ideas from a rough sketch all the way to something that ' +
      'actually runs.',
    'My coursework and side projects span classical ML, deep learning, NLP, ' +
      'and 3D/vision work like stereo and feature matching. When I want a ' +
      'break from research-style code, I build games and small tools for fun.',
  ],
  // The location line in the contact section (optional — set to '' to hide).
  location: 'Israel',
}

export const links = {
  email: 'yonghao.lee.il@gmail.com',
  github: 'https://github.com/Yonghao-Lee',
  // Add or remove as you like. Set a value to '' to hide that link.
  linkedin: 'https://www.linkedin.com/in/yonghao-lee-101a77221/',
  twitter: '',
}

// Grouped skills. Add/remove groups and items freely.
export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'C', 'SQL'],
  },
  {
    group: 'Machine Learning',
    items: ['PyTorch', 'NumPy', 'scikit-learn', 'Pandas', 'Deep Learning'],
  },
  {
    group: 'Domains',
    items: ['NLP', 'Computer Vision', 'Data Analysis'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Linux', 'pygame', 'React', 'Matplotlib'],
  },
]

// Your projects. The first one is your published PyDoom game.
export const projects = [
  {
    title: 'PyDoom',
    blurb:
      'A Doom-style raycasting first-person shooter in pure Python + pygame. ' +
      'Procedural textures, depth-buffered enemy sprites, chasing demons, ' +
      'hitscan shooting, and a full health/kill HUD.',
    tags: ['Python', 'pygame', 'Game Dev', 'Graphics'],
    link: 'https://github.com/Yonghao-Lee/pydoom',
    linkLabel: 'View on GitHub',
    // Emoji shown as the project's icon (swap for any you like).
    icon: '🎮',
  },
  {
    // EDIT ME: replace with a real project, or delete this entry.
    title: 'Your Next Project',
    blurb:
      'Replace this card with another project — describe what it does, what ' +
      'you built it with, and what you learned. Edit src/data.js.',
    tags: ['Add', 'your', 'tags'],
    link: 'https://github.com/Yonghao-Lee',
    linkLabel: 'See more on GitHub',
    icon: '🧪',
  },
]
