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

// Your projects. Edit, reorder, add, or remove cards freely.
export const projects = [
  {
    title: 'Stereo Mosaicing',
    blurb:
      'Generates a stereo panoramic video from a single moving-camera sequence ' +
      'using manifold mosaicing and Lucas–Kanade optical flow. Slicing narrow ' +
      'vertical strips from different horizontal positions yields left/right-eye ' +
      'views — a "wiggle stereo" 3D effect from one monocular camera.',
    tags: ['Python', 'Computer Vision', 'Optical Flow', 'NumPy'],
    link: 'https://github.com/Yonghao-Lee/Video-Mosaicing',
    linkLabel: 'View on GitHub',
    icon: '🎞️',
  },
  {
    title: 'MNIST Representation Learning',
    blurb:
      'A study of supervised vs. unsupervised representation learning on MNIST: ' +
      'a convolutional autoencoder, an end-to-end classifier, and a linear probe ' +
      'over the frozen encoder — comparing what each objective keeps in the ' +
      'latent space.',
    tags: ['PyTorch', 'Deep Learning', 'Autoencoders', 'Repr. Learning'],
    link: 'https://github.com/Yonghao-Lee/MNIST-Representation-Learning',
    linkLabel: 'View on GitHub',
    icon: '🧠',
  },
  {
    title: 'MLP & Deepfake Detection',
    blurb:
      'Two ML tasks: a Multi-Layer Perceptron that predicts a city\'s country ' +
      'from its latitude/longitude, and a ResNet18 CNN that classifies images ' +
      'as real or AI-generated (deepfake detection).',
    tags: ['PyTorch', 'CNN', 'ResNet18', 'Classification'],
    link: 'https://github.com/Yonghao-Lee/MLP-Optimization-Deepfake-Detection',
    linkLabel: 'View on GitHub',
    icon: '🕵️',
  },
  {
    title: 'Multi-Threaded MapReduce',
    blurb:
      'A thread-safe C++ implementation of the MapReduce paradigm. Processes ' +
      'large datasets in parallel across Map → Shuffle → Reduce stages with ' +
      'multithreading and careful synchronization.',
    tags: ['C++', 'Multithreading', 'Concurrency', 'Systems'],
    link: 'https://github.com/Yonghao-Lee/Multi-Threaded-MapReduce-Framework',
    linkLabel: 'View on GitHub',
    icon: '⚙️',
  },
  {
    title: 'PyDoom',
    blurb:
      'A Doom-style raycasting first-person shooter in pure Python + pygame. ' +
      'Procedural textures, depth-buffered enemy sprites, chasing demons, ' +
      'hitscan shooting, and a full health/kill HUD.',
    tags: ['Python', 'pygame', 'Game Dev', 'Graphics'],
    link: 'https://github.com/Yonghao-Lee/pydoom',
    linkLabel: 'View on GitHub',
    icon: '🎮',
  },
]
