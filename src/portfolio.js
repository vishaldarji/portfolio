const header = {
    // all the properties are optional - can be left empty or deleted
    // homepage: 'https://rajshekhar26.github.io/cleanfolio',
    homepage: 'index.html',
    title: 'Portfolio',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Mohan Gadhavi',
    role: 'Front End Developer',
    description:
      'Passionate frontend developer skilled in HTML, CSS, JavaScript, React, and design principles, merging technical expertise with a graphic design background for compelling and seamless web experiences.',
    resume: 'https://drive.google.com/file/d/1sfwiOWMySaNdqZgTcPucXC_IcQyVtGDX/view?usp=sharing',
    social: {
      linkedin: 'https://www.linkedin.com/in/mohangadhavi31/',
      github: 'https://github.com/MohanGadhavi',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Task-Meta App',
      description:
        'Application designed for NGOs for managing day to day tasks along with facilitating collaboration between people, sub-organisations & departments',
      stack: ['ReactJS', 'Java', 'SQL'],
      sourceCode: '',
      livePreview: '',
    },
    {
      name: 'Currency Converter',
      description:
        'Crafted a ReactJS Currency Converter with real-time API integration and sleek UI using Tailwind CSS',
      stack: ['ReactJS', 'Tailwind', 'JS'],
      sourceCode: '',
      livePreview: '',
    },
    {
      name: 'To-Do App',
      description:
        'Developed a robust React To-Do App with Tailwind CSS, enabling seamless task management, editing, and local data persistence.',
      stack: ['React', 'Tailwind', 'JS'],
      sourceCode: '',
      livePreview: '',
    },
    {
      name: 'Weather Forecasting App',
      description:
        'Built a responsive ReactJS weather app for real-time updates and forecasts, featuring an intuitive and visually appealing interface.',
      stack: ['React', 'Material UI', 'Tailwind'],
      sourceCode: '',
      livePreview: '',
    },
    {
      name: 'E-Commerce Clone',
      description:
        '?????',
      stack: ['React', 'Material UI', 'Tailwind'],
      sourceCode: '',
      livePreview: '',
    },
    {
      name: 'FoodDelivery App',
      description:
        '?????',
      stack: ['JS', 'CSS', 'HTML'],
      sourceCode: 'https://github.com/MohanGadhavi/food_delivery_webapp.git',
      livePreview: 'https://mohangadhavi.github.io/food_delivery_webapp/',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind',
    'Material UI',
    'BootStrap',
    'Git',
    'Python',
    'SQL',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'gadhavimohan71@mail.com',
  }
  
  export { header, about, projects, skills, contact }
  