// ---------------------------------------------------------------------------
// EDIT ME: everything personal about the site lives here. Change these values
// and the whole page updates. No other file needs touching for content edits.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Yonghao Lee',
  // Short tagline under your name in the hero.
  tagline: 'Computer science student — into math, ancient Mesopotamia, and film',
  // A sentence or two for the hero subtitle.
  intro:
    "I'm a computer science student who likes math more than is strictly " +
    'reasonable. Off the clock I read about ancient Mesopotamia, pick at a ' +
    'little Sumerian, and watch a lot of Kubrick and Lynch.',
  // A short epigraph shown above the About text. Each string is one line.
  epigraph: [
    'The rivers kept their names; the cities did not.',
    "What's left is clay, and the patience of clay —",
    'a few pressed marks where someone counted grain,',
    'or a god, or the days until the rain.',
  ],
  // Longer bio for the About section. Each string is its own paragraph.
  about: [
    'I came to computer science through math, and that is still the part I ' +
      'enjoy most. I like problems with a clean idea underneath them; most of ' +
      'my projects — computer vision, machine learning, a bit of signal ' +
      'processing — are really just excuses to chase that.',
    "Away from code, I read a lot about ancient Mesopotamia and I'm slowly " +
      "learning some Sumerian. I've never quite agreed with Jared Diamond — " +
      "I don't think geography quietly decided how civilizations turned out. " +
      'People did, with their ideas and their mistakes, and that is the part ' +
      'I find interesting.',
    "When I'm not doing either, I'm usually watching Kubrick or Lynch. I have " +
      'a weakness for films that look precise on the surface and stay a little ' +
      'strange underneath.',
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
    items: ['Git', 'Linux', 'Claude Code', 'pygame', 'React', 'Matplotlib'],
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
    title: 'Audio DSP & Watermarking',
    blurb:
      'Digital signal processing on audio: time- and frequency-domain ' +
      'watermarking (injecting energy at 20 kHz via FFT/IFFT, beyond human ' +
      'hearing), spectrogram-based classification, and frequency-ridge ' +
      'tracking for speed-up detection.',
    tags: ['Python', 'DSP', 'FFT', 'Audio'],
    link: 'https://github.com/Yonghao-Lee/Audio-Signal-Processing-Watermarking-and-Frequency-Analysis',
    linkLabel: 'View on GitHub',
    icon: '🔊',
  },
  {
    title: 'Pyramids & Image Blending',
    blurb:
      'Laplacian pyramid blending and hybrid-image creation with NumPy & ' +
      'SciPy — seamlessly merging images across multiple scales and building ' +
      '"hybrid" images whose appearance changes with viewing distance.',
    tags: ['Python', 'Computer Vision', 'NumPy', 'SciPy'],
    link: 'https://github.com/Yonghao-Lee/Pyramids-and-Blending',
    linkLabel: 'View on GitHub',
    icon: '🖼️',
  },
]
