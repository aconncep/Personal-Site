import Mock from "../mock";

const database = {
  information: {
    name: 'Austin Cepalia',
    aboutContent: "I am a software engineer-in-training and computer science student. I'm most proficient in C# + .NET, but I also love working with languages like Python and C.",
    age: 21,
    language: 'C#, Java, Python, C',
    email: 'austin@austincepalia.com',
    freelanceStatus: 'Available for co-op position',
    socialLinks: {
      twitter: 'https://twitter.com/aconncep',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/austin-cepalia-2b1935123/',
      dribbble: '',
      github: 'https://github.com/aconncep'
    },
    brandImage: '/images/me.png',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/resume_v2.pdf'
  },
  services: [
    {
      title: "Software Engineering",
      icon: 'code',
      details: "I love designing and building everything from console applications to Arduino robotics projects."
    },
    {
      title: "Videography",
      icon: 'video',
      details: "I lead a student film team to produce an award-winning documentary, of which I acted as camera operator and editor."
    },
    {
      title: "Education",
      icon: 'book',
      details: "I'm a lifelong learner and educator! I love taking complex programming subjects and breaking them down into simple ideas."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Austin did an excellent job of clearly explaining the various OOP topics in all 7 videos, without leaving any gaps or questions...",
      author: {
        name: 'Peter T',
        designation: 'RealPython.com subscriber'
      }
    },
    {
      id: 2,
      content: "Great course, clear and concise, with poignant examples! 10/10 honestly, wouldn’t know what to improve",
      author: {
        name: 'fjavanderspek',
        designation: 'RealPython.com subscriber'
      }
    },
    {
      id: 3,
      content: "Very good videos. I started learning the concepts of OOP programming at university, but I needed a more visual way to understand the concepts. Thanks!",
      author: {
        name: 'Jean Ferreira',
        designation: 'RealPython.com subscriber'
      }
    },
    {
      id: 4,
      content: "Very useful course - I’ve already added simple logging to my app based on the lessons here. Thanks!",
      author: {
        name: 'Rob Black',
        designation: 'RealPython.com subscriber'
      }
    },
    {
      id: 5,
      content: "...I just wanted to say thanks so much for putting this together! Your presentation is really great, and very helpful to me...this was just what I needed!",
      author: {
        name: 'Doug Farrell',
        designation: 'RealPython.com writer'
      }
    },
  ],
  skills: [
    {
      title: "C#",
      value: 90
    },
    {
      title: ".NET Framework / .NET Core",
      value: 85
    },
    {
      title: "Python 3",
      value: 90
    },
    {
      title: "C",
      value: 80
    },
    {
      title: "HTML/CSS",
      value: 75
    },
    {
      title: "Java",
      value: 85
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "LogicSim",
      subtitle: "Cross-platform application for simulating combinational logic circuits based on a custom HDL.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://github.com/aconncep/LogicSim'
    },
    {
      id: 2,
      title: "ConsoleTowerDefense",
      subtitle: "Fully-featured tower defense game optimized for cross-platform command-line gameplay.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://github.com/aconncep'
    },
    {
      id: 3,
      title: "Bitter",
      subtitle: "A small social media platform for learning and exploration.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://bitter.austincepalia.com'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Frontend Web Developer",
        company: "Abc Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Frontend Web Developer",
        company: "CBA Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "UI/UX Designer",
        company: "Example Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2019",
        graduation: "Master of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "Bachelor of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2015 - 2016",
        graduation: "Higher Schoold Graduation",
        university: "Abc College",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ]
  },
  courses: [
    {
      id: 1,
      title: 'Intro to Object-Oriented Programming (OOP) in Python',
      featuredImage: 'https://files.realpython.com/media/Object-Oriented-Programming-OOP-in-Python-3_Watermarked.0d29780806d5.jpg',
      filesource: '../../blog/intro-object-oriented-programming-oop-python.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Working With JSON Data in Python',
      featuredImage: 'https://files.realpython.com/media/Working-With-JSON-Data-in-Python_Watermarked.66a8fdcb8859.jpg',
      filesource: '../../blog/working-json-data-python.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'Python Development in Visual Studio Code (Setup Guide)',
      featuredImage: 'https://files.realpython.com/media/Python-Development-With-Visual-Studio-Code_Watermarked.a66fa8455247.jpg',
      filesource: '../../blog/python-development-visual-studio-code-setup-guide.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Logging in Python',
      featuredImage: 'https://files.realpython.com/media/Logging-in-Python_Watermarked.4ca8974dc55c.jpg',
      filesource: '../../blog/logging-python.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Traditional Face Detection With Python',
      featuredImage: 'https://files.realpython.com/media/Face-Recognition-with-Python_Watermarked.b2d3b4911af3.jpg',
      filesource: '../../blog/traditional-face-detection-python.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'Python Debugging With pdb',
      featuredImage: 'https://files.realpython.com/media/Python-Debugging-With-Pdb_Watermarked.a50a90b655cf.jpg',
      filesource: '../../blog/python-debugging-pdb.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'The Python range() Function',
      featuredImage: 'https://files.realpython.com/media/Pythons-range-function_Watermark.5e8ea929167e.jpg',
      filesource: '../../blog/python-range-function.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Python Plotting With Matplotlib',
      featuredImage: 'https://files.realpython.com/media/Python_Plotting_With_Matplotlib_Watermark.610acdacc476.jpg',
      filesource: '../../blog/python-plotting-matplotlib.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Inheritance and Composition: A Python OOP Guide',
      featuredImage: 'https://files.realpython.com/media/Inheritance-vs-Composition-in-Python_Watermarked_1.aec726368a97.jpg',
      filesource: '../../blog/inheritance-composition-python.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: "A Beginner's Guide to Pip",
      featuredImage: 'https://files.realpython.com/media/What-is-PIP_Watermarked.c46f49dc33f9.jpg',
      filesource: '../../blog/what-is-pip.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'Pointers and Objects in Python',
      featuredImage: 'https://files.realpython.com/media/Pointers-in-Python_Watermarked.d8551f0cd1d2.jpg',
      filesource: '../../blog/pointers-python.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/course").reply(config => {
  const response = database.courses.slice().reverse();
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});