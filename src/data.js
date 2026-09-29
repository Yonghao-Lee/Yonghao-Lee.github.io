// ---------------------------------------------------------------------------
// EDIT ME: everything personal about the site lives here. Change these values
// and the whole page updates. No other file needs touching for content edits.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Yonghao Lee',
  // Short tagline under your name in the hero.
  tagline: 'B.Sc. Computer Science · The Hebrew University of Jerusalem',
  // A sentence or two for the hero subtitle.
  intro:
    'I build computer-vision and machine-learning systems from first ' +
    'principles — most recently, removing an object from a 3D scene together ' +
    'with its shadow and its reflection.',
  // A short epigraph shown above the About text. Each string is one line.
  epigraph: null,
  // Longer bio for the About section. Each string is its own paragraph.
  about: [
    "I'm a computer science student at the Hebrew University of Jerusalem " +
      '(B.Sc., 2023–2027), working mostly on computer vision and machine ' +
      'learning. Alongside my studies I spent four years as a cyber threat ' +
      'analyst at BrandShield, investigating phishing sites and brand ' +
      "impersonation and getting them taken down. I'm a native speaker of " +
      'English and Chinese, fluent in Hebrew, and conversational in Japanese.',
    'I like problems with a single clean idea underneath them. Most of what I ' +
      'build — computer vision, machine learning, a bit of signal processing — ' +
      'is really an attempt to get at that idea. The work runs on simple fuel: ' +
      'a glass of Almdudler within reach, and pumpernickel bread, which I will ' +
      'defend against all comers.',
    "Away from the keyboard, I read about ancient Mesopotamia, and I know enough " +
      "Sumerian to work my way through a tablet. I've never been convinced by " +
      "Jared Diamond; I don't think geography quietly decided how things turned " +
      'out. People did, with their ideas and their mistakes, and that is the ' +
      'part that holds my attention.',
    'And there is almost always Mahler playing while I work — long symphonies ' +
      'that take their time getting where they are going. I never quite get to ' +
      'the end of them.',
  ],
  // The location line in the contact section (optional — set to '' to hide).
  location: 'Jerusalem, Israel',
}

export const links = {
  email: 'yonghao.lee.il@gmail.com',
  github: 'https://github.com/Yonghao-Lee',
  // Add or remove as you like. Set a value to '' to hide that link.
  linkedin: 'https://www.linkedin.com/in/yonghao-lee-101a77221/',
  twitter: '',
  // CV/résumé PDF served from /public. Set to '' to hide the download button.
  cv: '/Yonghao-Lee-CV.pdf',
}

// Grouped skills. Add/remove groups and items freely.
export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'Java', 'C', 'C++', 'Go', 'MATLAB'],
  },
  {
    group: 'Machine Learning',
    items: ['PyTorch', 'NumPy', 'scikit-learn', 'Pandas', 'spaCy', 'Deep Learning'],
  },
  {
    group: 'Domains',
    items: ['NLP', 'Computer Vision', 'Data Analysis'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Unix', 'Claude Code', 'Matplotlib'],
  },
]

// Your projects. Edit, reorder, add, or remove cards freely.
export const projects = [
  {
    title: "Removing an Object's Light Footprint",
    blurb:
      'Deleting an object from a 3D Gaussian Splatting scene leaves its shadow ' +
      'and reflection behind. This pipeline removes them together — a video ' +
      'diffusion prior (ROSE) edits an orbit render under SAM 2 masks from four ' +
      'clicks, then a fresh 3DGS is re-fit — lifting footprint PSNR from 14.2 ' +
      'to 28.4 dB over plain deletion.',
    tags: ['3D Gaussian Splatting', 'Video Diffusion', 'SAM 2', 'PyTorch', 'Computer Vision'],
    link: 'https://github.com/Yonghao-Lee/light-footprint-removal',
    linkLabel: 'View on GitHub',
    icon: '🪞',
    media: import.meta.env.BASE_URL + 'light-footprint.gif',
    mediaAlt: 'Side by side orbit of a room with a red sphere, its shadow and its mirror reflection — and the same orbit after removal, with object, shadow and reflection gone together',
    mediaWide: true,
  },
  {
    title: 'Score Distillation: SDS & PDS',
    blurb:
      'Text-to-image generation and editing by distilling a pretrained Stable ' +
      'Diffusion model into a single optimizable latent, with no reverse ' +
      'diffusion sampling. Implements Score Distillation Sampling (DreamFusion) ' +
      'for generation and Posterior Distillation Sampling for prompt-guided editing.',
    tags: ['PyTorch', 'Diffusion Models', 'Stable Diffusion', 'SDS / PDS'],
    link: 'https://github.com/Yonghao-Lee/sds-pds-2d',
    linkLabel: 'View on GitHub',
    icon: '🎨',
    media: import.meta.env.BASE_URL + 'sds-pds-thumb.jpg',
    mediaAlt: 'Three source-to-edited image pairs from Posterior Distillation Sampling: a cabin regrown with flowers, a castle under a rainbow, and a red bus turned into a yellow school bus',
    mediaWide: true,
  },
  {
    title: 'Differentiable Rendering',
    blurb:
      'Differentiable rendering from scratch in PyTorch: SIREN neural fields, ' +
      'sphere tracing and volume rendering. It ends in a NeRF trained on the ' +
      'lego scene — the thumbnail is its full-orbit render.',
    tags: ['PyTorch', 'NeRF', 'Volume Rendering', 'Neural Fields'],
    link: 'https://github.com/Yonghao-Lee/differentiable-rendering',
    linkLabel: 'View on GitHub',
    icon: '🧊',
    media: import.meta.env.BASE_URL + 'spin.gif',
    mediaAlt: 'A neural radiance field of the lego scene, rendered from a full orbit',
  },
  {
    title: 'Multi-View 3D Reconstruction',
    blurb:
      'Classical multi-view geometry from scratch: calibration, the normalized ' +
      'eight-point algorithm, essential-matrix pose recovery and rectification, ' +
      'ending in a 3D point cloud triangulated from two views.',
    tags: ['Python', 'Computer Vision', 'Epipolar Geometry', 'Triangulation'],
    link: 'https://github.com/Yonghao-Lee/multi-view-reconstruction',
    linkLabel: 'View on GitHub',
    icon: '📐',
    media: import.meta.env.BASE_URL + 'mvr-spin.gif',
    mediaAlt: 'A 3D point cloud reconstructed from two views, rendered from a full orbit',
  },
  {
    title: 'Stereo Mosaicing',
    blurb:
      'Turns a single moving-camera video into a stereo panorama with manifold ' +
      'mosaicing and Lucas–Kanade optical flow: strips taken at different ' +
      'offsets become left- and right-eye views, 3D from one camera.',
    tags: ['Python', 'Computer Vision', 'Optical Flow', 'NumPy'],
    link: 'https://github.com/Yonghao-Lee/Video-Mosaicing',
    linkLabel: 'View on GitHub',
    icon: '🎞️',
    media: import.meta.env.BASE_URL + 'stereo-mosaic.mp4',
    mediaAlt: 'A stitched panorama of a synthetic depth-layered scene showing the wiggle-stereo parallax effect',
    mediaWide: true,
    mediaRate: 0.7,
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
    title: 'MHC-I Peptide Binding',
    blurb:
      'A PyTorch MLP that predicts which HLA class-I allele will present a given ' +
      '9-mer peptide. Includes an epitope-discovery demo that scans the ' +
      'SARS-CoV-2 Spike protein for high-affinity binders the immune system ' +
      'could target.',
    tags: ['PyTorch', 'Deep Learning', 'Bioinformatics', 'Immunology'],
    link: 'https://github.com/Yonghao-Lee/MHC-Class-I-Peptide-Allele-Classifier',
    linkLabel: 'View on GitHub',
    icon: '🧬',
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
