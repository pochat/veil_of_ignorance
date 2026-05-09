const questions = [
  {
    id: 1,
    question: "You’re about to enter the world. Should hospitals be public or private?",
    answers: [
      {
        text: "Public healthcare. Longer waits, but nobody is denied care.",
        type: "poor"
      },
      {
        text: "Private healthcare. Better treatment and faster service, for those who can pay.",
        type: "rich"
      }
    ]
  },

  {
    id: 2,
    question: "What should schools prioritize?",
    answers: [
      {
        text: "Leadership and entrepreneurship",
        type: "rich"
      },
      {
        text: "Equal access for all students",
        type: "poor"
      }
    ]
  }
]

export default questions;