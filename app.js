const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How fast can wolves sprint?',
      answers: [
        '16-18 mph',
        '26-28 mph',
        '36-38 mph',
        '46-48 mph'
      ],
      correctAnswer: '36-38 mph'
    },
    {
      question: 'What is a wolves average lifespan in the wild?',
      answers: [
        '13 years',
        '14 years',
        '15 years',
        '16 years'
      ],
      correctAnswer: '13 years'
    }
    {
      question: 'How many pounds of meat can a wolf eat in one sitting?',
      answers: [
        '5 pounds',
        '10 pounds',
        '15 pounds',
        '20 pounds'
      ],
      correctAnswer: '20 pounds'
    }
    {
      question: 'True or False: Wolves help improve riparian areas (the wetland areas adjacent to rivers and streams).',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'True'
    }
    {
      question: 'True or False: Wolves will not prey on injured, sick, or old elk, moose, and deer.',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'False'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)