const questions = [
  {
    id: 1,
    question: "You’re about to enter the world. Should the hospital you'll be born at, be public or private?",
    questionBeforeLifeChoice: "Will you be born rich or poor?",
    answers: [

      {
        text: "Public healthcare. Accessible to anyone but extremly slow waiting lines.",
        type: "poor",
        outcomes: {
          poor: "The public system saved you! You received care despite having no money.",
          rich: "Even though you are wealthy, you had to wait."
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
    question: "You're about 10 years old. Should education be private or public?",
    questionBeforeLifeChoice: "Will you study at private or public school?",
    answers: [
      {
        text: "Public Education.",
        type: "poor",
        outcomes: {
          poor: "The public education system welcomed you.",
          rich: "You never had access to the best teachers"
        }
      },
      {
        text: "Private Education.",
        type: "rich",
        outcomes: {
          poor: "You couldn't afford the tuition fees and turned away at the door.",
          rich: "Your wealth bought you the best teachers."
        }
      }
    ]
  },

{
    id: 3,
    question: "You made it to 25 years old. Should your salary be based on your skills?",
    questionBeforeLifeChoice: "Will you be paid more or same as everyone else",
    answers: [
      {
        text: "Same Salary for Everyone.",
        type: "poor",
        outcomes: {
          poor: "You were paid the same as everyone else.",
          rich: "Despite your knowledge, you were paid the same as your peers."
        }
      },
      {
        text: "Salary must be based on skills.",
        type: "rich",
        outcomes: {
          poor: "You need to study harder.",
          rich: "You are paid more because you know more."
        }
      }
    ]
  }

]

export default questions;