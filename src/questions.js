const questions = [
  {
    id: 1,
    question: "You’re about to enter the world. Should hospitals be public or private?",
    questionBeforeLifeChoice: "Will you be born rich or poor?",
    answers: [
      {
        text: "Public hospitals. (Free but longer wait times)",
        type: "poor",
        outcomes: {
          poor: "You received care even though your family had no money.",
          rich: "You had to wait months for treatment despite being wealthy."
        }
      },
      {
        text: "Private hospitals. (Expensive but faster care)",
        type: "rich",
        outcomes: {
          poor: "Your family struggled to afford treatment.",
          rich: "You received immediate care from top doctors."
        }
      }
    ]
  },

  {
    id: 2,
    question: "You’re now 10 years old. Should schools be public or private?",
    questionBeforeLifeChoice: "Will you go to a public or private school?",
    answers: [
      {
        text: "Public education. (Free but lower quality)",
        type: "poor",
        outcomes: {
          poor: "You were able to go to school for free.",
          rich: "You never had access to the best teachers and resources."
        }
      },
      {
        text: "Private education. (Expensive but higher quality)",
        type: "rich",
        outcomes: {
          poor: "Your family couldn’t afford tuition.",
          rich: "You had access to elite teachers and opportunities."
        }
      }
    ]
  },

  {
    id: 3,
    question: "You are now 25 and looking for jobs. How should salaries work?",
    questionBeforeLifeChoice: "Will you be poorly or highly skilled?",
    answers: [
      {
        text: "Everyone earns the same salary.",
        type: "poor",
        outcomes: {
          poor: "You earned the same amount as everyone else.",
          rich: "Your extra skills didn’t increase your income."
        }
      },
      {
        text: "People with more skills earn more money.",
        type: "rich",
        outcomes: {
          poor: "You struggled to compete against higher skilled workers.",
          rich: "Your skills earned you a much higher salary."
        }
      }
    ]
  },

  {
    id: 4,
    question: "You’re now an adult looking for a home. How should housing work?",
    questionBeforeLifeChoice: "Will you be able to afford a home?",
    answers: [
      {
        text: "The government provides housing for everyone.",
        type: "poor",
        outcomes: {
          poor: "You were guaranteed a place to live.",
          rich: "You had the same type of housing as everyone else."
        }
      },
      {
        text: "People should buy their own homes.",
        type: "rich",
        outcomes: {
          poor: "Housing prices were too expensive for you.",
          rich: "You bought a large home in a wealthy neighborhood."
        }
      }
    ]
  },
{
  id: 5,
  question: "You are now more aware about taxes. Who should be taxed more?",
  questionBeforeLifeChoice: "Will you be rich or poor?",
  answers: [
    {
      text: "Rich people should pay higher taxes.",
      type: "poor",
      outcomes: {
        poor: "Higher taxes on the rich helped pay for services you depended on.",
        rich: "A large amount of your wealth went to taxes."
      }
    },
    {
      text: "Poor and rich people should pay similar taxes.",
      type: "rich",
      outcomes: {
        poor: "Taxes took a large part of the little money you earned.",
        rich: "You kept more of the money you made."
      }
    }
  ]
},

{
  id: 6,
  question: "You are close to retirement. How should pensions work?",
  questionBeforeLifeChoice: "Will you retire rich or poor?",
  answers: [
    {
      text: "Everyone should receive the same pension.",
      type: "poor",
      outcomes: {
        poor: "You received enough money to retire safely.",
        rich: "You received the same pension as everyone else."
      }
    },
    {
      text: "People should earn extra retirement money through their own efforts.",
      type: "rich",
      outcomes: {
        poor: "You struggled because you couldn't save enough money.",
        rich: "Your savings and investments gave you a comfortable retirement."
      }
    }
  ]
  }
]

export default questions;