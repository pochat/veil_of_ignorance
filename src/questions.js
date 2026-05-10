const questions = [
  {
    id: 1,
    question: "You’re about to enter the world. Should the hospital you'll be born at, be public or private?",
    questionBeforeLifeChoice: "Will you be born rich or poor?",
    answers: [

      {
        text: "Public healthcare. Accessible to anyone but unbelievable waiting lines.",
        type: "poor",
        outcomes: {
          poor: "The public system saved you! You received care despite having no money.",
          rich: "You had to wait in long lines despite your wealth. Frustrating!"
        }
      },

      {
        text: "Private healthcare. Fast Service, Better Doctors, but at a cost.",
        type: "rich",
        outcomes: {
          poor: "You couldn't afford the fees. You were turned away at the door.",
          rich: "Your wealth bought you the best surgeons. You recovered instantly!"
        }
      }
    ]
  },

{
    id: 2,
    question: "You're a school-age child. Should education be private or public?",
    questionBeforeLifeChoice: "Will you study at private or public school?",
    answers: [
      {
        text: "Public Education.",
        type: "poor",
        outcomes: {
          poor: "The public education system welcomed you",
          rich: "You never had access to the best teachers"
        }
      },
      {
        text: "Private Education.",
        type: "rich",
        outcomes: {
          poor: "You couldn't afford the fees. You were turned away at the door.",
          rich: "Your wealth bought you the best teachers."
        }
      }
    ]
  }
]

export default questions;