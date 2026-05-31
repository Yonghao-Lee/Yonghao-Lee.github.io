// ---------------------------------------------------------------------------
// EDIT ME: everything personal about the site lives here. Change these values
// and the whole page updates. No other file needs touching for content edits.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Yonghao Lee',
  // Short tagline under your name in the hero.
  tagline: 'CS student · mathematics, Mesopotamia & cinema that refuses to explain itself',
  // A sentence or two for the hero subtitle.
  intro:
    'By day I study computer science and chase the quiet certainty of ' +
    'mathematics. By night I read dead languages, quarrel with Jared Diamond ' +
    'in my head, and watch Kubrick until the symmetry starts to ache.',
  // Longer bio for the About section. Each string is its own paragraph.
  about: [
    'I am a computer science student, which means I spend my days turning the ' +
      'world into ones and zeros and my nights wondering whether the world ever ' +
      'agreed to be turned into anything at all. Mathematics I love the way ' +
      'some people love the sea — not because it is calm, but because it is ' +
      'honest, and because somewhere beneath the surface something is always ' +
      'looking back.',
    "I keep a little Sumerian in my pocket, like a key to a house that no " +
      'longer stands. Mesopotamia undoes me: the first cities, the first poems, ' +
      'the first hands to press a reed into wet clay and decide that memory ' +
      "should outlast the body. I don't believe, as Jared Diamond would have " +
      'it, that geography quietly wrote our story in advance — I think people ' +
      'wrote it, stubbornly, with their hands and their gods and their gorgeous ' +
      'mistakes.',
    "When I'm not coding or arguing with dead historians, I watch Kubrick for " +
      'the symmetry and Lynch for the dreams that never quite resolve. ' +
      "I'm drawn to things that feel like both at once — clean on the surface, " +
      "strange underneath. If you have a problem shaped like that, we'll get " +
      'along.',
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
