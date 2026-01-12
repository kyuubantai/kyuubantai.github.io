export const translations = {
  en: {
    nav: { about: "About Me", xp: "Experiences", work: "Projects", contact: "Contact" },
    hero: { 
        title: "It's a pleasure to meet you !", 
        ageText: "I am KITA Djessy-Alberto, 21 years old",
        subtitle: "Student at Claude Bernard University Lyon 1 | C++/Python Developer" },
    about: {
      title: "About Me",
      p1: "Since little, i already have a thing with informatics, my mom said that when i was in kindergarten, when others worked with PCs assigned to us, i was the only one who knew how to work from my teacher's computer station. Later on, this passion was always with me everywhere, in sci-fi movies, books, videogames, Youtube videos or even what's actually happening with ai and its big development.",
      p2: "Now, i want to be part of this story, gaining skills and experiences to one day, live in this sci-fi world I've always dreamt of since little.",
      p3: "And if you share the same dream with me, why not walk together in this crazy but amazing journey ? "
    },
    xp: {
        title: "Skills/Experiences",
        progTitle: "Programming Languages",
        progItems: [
            { name: "C++", score: "4/5" },
            { name: "Python", score: "4/5" },
            { name: "C#", score: "4/5" },
            { name: "Java", score: "3/5" },
            { name: "SQL", score: "3/5" },
        ],
        otherProgTitle : "Logic & Functional Programming",
        otherProgItems: [
            { name: "Scheme", score: "3/5" },
            { name: "Ocaml", score: "3/5" },
            { name: "Prolog", score: "2/5" },
        ],
        webTitle:"Web Technologies",
        webItems: [
            { name: "HTML/CSS", score: "4/5" },
            { name: "PHP/Javascript", score: "3/5" },
            { name: "Node/React", score: "3/5" },
            { name: "phpMyAdmin/MySQL", score: "4/5" },
        ],
        toolsTitle: "Tools",
        toolsItems: [
            { name: "Linux(Debian)", score: "3/5" },
            { name: "Git", score: "3/5" },
            { name: "Unity", score: "4/5" },
        ],
        softTitle: "Soft Skills",
        softItems: [
            { name: "Communication", score: "5/5" },
            { name: "Customer support", score: "5/5" },
            { name: "Teamwork", score: "4/5" },
            { name: "Autonomy", score: "5/5" },
        ],
        languageTitle:"Languages",
        languageItems: [
            { name: "French", score: "5/5(native)" },
            { name: "English", score: "5/5(C1)" },
            { name: "Spanish", score: "2/5(B1/B2)" },
        ], 
    },
    work: {
      title: "Projects",
      indivTitle: "Individual Projects",
      groupTitle: "Contributions in Group/Business Projects",
      projects: [
        {
          id: "tas",
          name: "TAS (Tool-Assisted Speedrun)",
          link: "https://github.com/kyuubantai/TAS-project",
          description: "A project built in C++/Python, inspired by Super Mario Bros speedruns. The goal is to create an optimization tool using search algorithms.",
          tech: "C++, Python, pybind11",
          status: "Work in progress",
          isIndividual: true
        },
        {
          id: "prison",
          name: "Prison Escape",
          link: "https://github.com/Tutur699/projetam2espbelkit",
          description: "A video game in Unity where players are prisonners or cops and the goal is to escape for one side or capture prisonners for the other side. The purpose of this project was to create an AI enemy and perform the Turing test to the players.",
          contribution: "Inventory system and AI behavior tree.",
          tech: "Unity, C#",
          status: "Unfinished",
          isIndividual: false
        },
        {
          id: "SW",
          name: "SmallWorld",
          link: "https://github.com/NumCaps69/ProjetJavaSmallWorld",
          description: "A game built in Java based on the board game called : SmallWorld.",
          contribution: "Loop core for the game and counting points system.",
          tech: "Java",
          status: "Unfinished",
          isIndividual: false
        },
        {
          id: "anta",
          name: "L'Antagoniste",
          link: "https://github.com/kyuubantai/l-antagoniste",
          description: "A turn based video game in C++.",
          contribution: "Combat System.",
          tech: "C++",
          status: "Unfinished",
          isIndividual: false
        }
      ]
    },
    contact :{
        title:"Contact",
        p:"Feel free to contact me by mail or via social networks !",
        link: "kitapro@outlook.com",
    }
  },

  fr: {
    nav: { about: "À propos", xp: "Expériences", work: "Projets", contact: "Contact" },
    hero: { 
        title: "Ravi de faire votre connaissance !",
        ageText: "Je suis KITA Djessy-Alberto, 21 ans",
        subtitle: "Étudiant à l'Université Lyon 1 | Développeur C++/Python" },
    about: {
      title: "À propos de moi",
      p1: "Depuis petit, j'ai toujours eu un penchant pour l'informatique, ma mère disait lorsque j'étais à la maternelle, quand les autres travaillaient sur les ordis qui nous étaient attribués, j'étais le seul qui savait comment travailler depuis le poste de ma maîtresse. Plus tard, cette passion m'a toujours accompagné, que ça soit dans les films de science-fiction, les livres, jeux-vidéos, vidéos Youtube ou même ce qu'il se passe actuellement avec l'ia et son développement à vitesse grand V. ",
      p2: "Aujourd'hui, je veux faire partie de cette histoire, en accumulant des compétences et expériences pour un jour vivre dans ce monde de science-fiction que j'ai tant rêvé étant petit.",
      p3: "Et si vous partagez ce même rêve, pourquoi pas partir ensemble dans cette folle mais incroyable aventure ?"
    },
    xp: {
        title: "Compétences/Experiences",
        progTitle: "Langages de programmation",
        progItems: [
            { name: "C++", score: "4/5" },
            { name: "Python", score: "4/5" },
            { name: "C#", score: "4/5" },
            { name: "Java", score: "3/5" },
            { name: "SQL", score: "3/5" },
        ],
        otherProgTitle : "Programmation fonctionnelle et logique",
        otherProgItems: [
            { name: "Scheme", score: "3/5" },
            { name: "Ocaml", score: "3/5" },
            { name: "Prolog", score: "2/5" },
        ],
        webTitle:"Technologies du Web",
        webItems: [
            { name: "HTML/CSS", score: "4/5" },
            { name: "PHP/Javascript", score: "3/5" },
            { name: "Node/React", score: "3/5" },
            { name: "phpMyAdmin/MySQL", score: "4/5" },
        ],
        toolsTitle: "Outils informatiques",
        toolsItems: [
            { name: "Linux(Debian)", score: "3/5" },
            { name: "Git", score: "3/5" },
            { name: "Unity", score: "4/5" },
        ],
        softTitle: "Autres compétences",
        softItems: [
            { name: "Communication", score: "5/5" },
            { name: "Service client", score: "5/5" },
            { name: "Travail d'équipe", score: "4/5" },
            { name: "Autonomie", score: "5/5" },
        ],
        languageTitle:"Langues",
        languageItems: [
            { name: "Français", score: "5/5(natif)" },
            { name: "Anglais", score: "5/5(C1)" },
            { name: "Espagnol", score: "2/5(B1/B2)" },
        ], 
    },
    work: {
      title: "Projets",
      indivTitle: "Projets individuels",
      groupTitle: "Contributions dans des projets de groupe/business",
      projects: [
        {
          id: "tas",
          name: "TAS (Tool-Assisted Speedrun)",
          link: "https://github.com/kyuubantai/TAS-project",
          description: "Projet construit en C++/Python, inspiré par les speedruns de Super Mario Bros. Le but est de créer un outil d'optimisation en utilisant des algorithmes de recherche.",
          tech: "C++, Python, pybind11",
          status: "Work in progress",
          isIndividual: true
        },
        {
          id: "prison",
          name: "Prison Escape",
          link: "https://github.com/Tutur699/projetam2espbelkit",
          description: "Un jeu vidéo sur Unity où des joueurs sont soit des prisonniers soit des policiers et le but est pour l'un de s'échapper de la prison et pour l'autre de les capturer. L'objectif de ce projet était de créer un IA ennemie et effectuer un test de Turing aux joueurs.",
          contribution: "Système d'inventaire complet et le comportement de l'IA. ",
          tech: "Unity, C#",
          status: "Unfinished",
          isIndividual: false
        },
        {
          id: "SW",
          name: "SmallWorld",
          link: "https://github.com/NumCaps69/ProjetJavaSmallWorld",
          description: "Un jeu codé en Java basé sur le jeu de société SmallWorld.",
          contribution: "Boucle principale du jeu et système de points.",
          tech: "Java",
          status: "Unfinished",
          isIndividual: false
        },
        {
          id: "anta",
          name: "L'Antagoniste",
          link: "https://github.com/kyuubantai/l-antagoniste",
          description: "Un jeu vidéo tour par tour codé en C++.",
          contribution: "Système de combat.",
          tech: "C++",
          status: "Unfinished",
          isIndividual: false
        }
      ]
    },
    contact :{
        title:"Contact",
        p:"N'hésitez pas à me contacter par mail ou via mes réseaux!",
        link: "kitapro@outlook.com",
    }
  }
};