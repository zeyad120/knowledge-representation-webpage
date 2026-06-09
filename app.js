// Quiz Database - Updated with user-provided questions
const quizDatabase = {
  categories: [
    // Quiz 1
    {
      id: 'knowledge-representation',
      title: 'Quiz 1',
      description: 'Test your knowledge on KR concepts',
      icon: '🧠',
      questions: [
        {
          question: 'In which agent does the problem generator is present?',
          options: ['Learning agent', 'Observing agent', 'Reflex agent', 'None of the mentioned'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Wumpus World is a classic problem, best example of _______.',
          options: ['Knowledge based Game', 'Reasoning with Knowledge', 'Single player Game', 'Two player Game'],
          correct: 1,
          explanation: ''
        },
        {
          question: "Uncertainty arises in the Wumpus World because the agent's sensors give only ___________.",
          options: ['Full & Global information', 'Partial & Global Information', 'Partial & local Information', 'Full & local information'],
          correct: 2,
          explanation: ''
        },
        {
          question: "_______________ is an important part of Artificial Intelligence which deals with the tasks and domains of a particular problem. It is considered the logical side of acting.",
          options: ['Reasoning', 'Searching', 'Making Decisions', 'Planning'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'Which search uses the problem specific knowledge beyond the definition of the problem?',
          options: ['Informed search', 'Depth-first search', 'Breadth-first search', 'Uninformed search'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Which function will select the lowest expansion node at first for evaluation?',
          options: ['Breadth-first search', 'Best-first search', 'Depth-first search', 'None of the mentioned'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Which search is complete and optimal when h(n) is consistent?',
          options: ['Best-first search', 'Depth-first search', 'Both Best-first & Depth-first search', 'A* search'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'Which search method will expand the node that is closest to the goal?',
          options: ['Greedy best-first search', 'Best-first search', 'A* search', 'None of the mentioned'],
          correct: 0,
          explanation: ''
        },
        {
          question: "In ______________ , it says that given an initial state S in any domain, performing some necessary actions and obtain a new state S' (which also contains some new terms), called a progression.",
          options: ['Informed search', 'Forward State Space Planning (FSSP)', 'Blind search', 'Backward State Space Planning (BSSP)'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Blocks World Problem is considered as a _____________.',
          options: ['Knowledge based Game', 'Goal Queue Planning', 'Goal Stack Planning', 'Reasoning with Knowledge'],
          correct: 2,
          explanation: ''
        },
        {
          question: '____________ can be thought of as a statement which helps us convey the information about a configuration in Blocks World.',
          options: ['Predicates', 'Operations', 'Preconditions', 'Planning'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'In Artificial Intelligence, ________ techniques are universal problem-solving methods.',
          options: ['Reasoning', 'Planning', 'Learning', 'Search'],
          correct: 3,
          explanation: ''
        },
        {
          question: '___________ is a function which assigns a numeric value to each path.',
          options: ['Effective function', 'Path length', 'Path Cost', 'Path value'],
          correct: 2,
          explanation: ''
        },
        {
          question: '_________ is an action sequence which leads from the start node to the goal node.',
          options: ['Actions', 'Transition Model', 'Solution', 'Optimal Solution'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'The essential properties of search algorithms to compare the efficiency of these algorithms are:',
          options: ['Completeness, Optimality, Time Complexity, Space Complexity', 'Time Complexity, Space Complexity', 'Completeness, Optimality', 'None of the above'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'ON(A,B) in Blocks World Problem is an example of ______________.',
          options: ['Operations', 'Actions', 'Predicates', 'List'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'PICKUP(X) in Blocks World Problem is an example of ______________.',
          options: ['State', 'Predicates', 'Operations', 'Predicates and Operations'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'ONTABLE(A) in Blocks World Problem is an example of ______________.',
          options: ['State', 'Predicates', 'Operations', 'Predicates and Operations'],
          correct: 1,
          explanation: ''
        },
        {
          question: '_______ contains the predicates which will cease to be true once the operation is performed.',
          options: ['DELETE List', 'ADD List', 'Precondition List', 'State List'],
          correct: 0,
          explanation: ''
        },
        {
          question: '__________ on the other hand contains the predicates which will become true once the operation is performed.',
          options: ['DELETE List', 'State List', 'Precondition List', 'ADD List'],
          correct: 3,
          explanation: ''
        }
      ]
    },
    // Quiz 2
    {
      id: 'quiz-2',
      title: 'Quiz 2',
      description: 'Test your knowledge on advanced KR concepts',
      icon: '📚',
      questions: [
        {
          question: 'Knowledge and reasoning also play a crucial role in dealing with __________________ environment.',
          options: ['Completely Observable', 'Partially Observable', 'Neither Completely nor Partially Observable', 'Only Completely and Partially Observable'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Treatment chosen by doctor for a patient for a disease is based on _____________.',
          options: ['Only current symptoms', "Current symptoms plus some knowledge from the textbooks", "Current symptoms plus some knowledge from the textbooks plus experience", 'All of the mentioned'],
          correct: 3,
          explanation: ''
        },
        {
          question: '_____________ is the action of thinking about something in a logical, sensible way.',
          options: ['Knowledge', 'Planning', 'Representation', 'Reasoning'],
          correct: 3,
          explanation: ''
        },
        {
          question: '_______________ is awareness or familiarity gained by experiences of facts, data, and situations.',
          options: ['Knowledge', 'Planning', 'Representation', 'Reasoning'],
          correct: 0,
          explanation: ''
        },
        {
          question: '______________ are those agents who have the capability of maintaining an internal state of knowledge, reason over that knowledge, update their knowledge after observations and take actions.',
          options: ['Goal-Based Agents', 'Utility-Based Agents', 'Learning Agents', 'Knowledge-Based Agents'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'A knowledge-based agent must able to do the following:',
          options: ['An agent should be able to represent states, actions, etc.', 'An agent should be able to incorporate new percepts.', 'An agent can update the internal representation of the world.', 'All of the above'],
          correct: 3,
          explanation: ''
        },
        {
          question: '_____________ is the first level of knowledge-based agent, and in this level, we need to specify what the agent knows, and what the agent goals are.',
          options: ['Physical level', 'Logical level', 'Knowledge level', 'Implementation level'],
          correct: 2,
          explanation: ''
        },
        {
          question: '__________ is the physical representation of logic and knowledge.',
          options: ['Physical level', 'Logical level', 'Knowledge level', 'Implementation level'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'At this level, an automated taxi agent actually implement his knowledge and logic so that he can reach to the destination.',
          options: ['Physical level', 'Implementation level', 'Logical level', 'Knowledge level'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'A knowledge-based agent can be viewed at different levels which are:',
          options: ['Knowledge level, logical level, execution level', 'Knowledge level, Data level, implementation level', 'Logical level, physical level, implementation level', 'Knowledge level, logical level, implementation level'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'Knowledge about the other types of knowledge is called _______.',
          options: ['Heuristic knowledge', 'Meta-knowledge', 'Procedural Knowledge', 'Declarative Knowledge'],
          correct: 1,
          explanation: ''
        },
        {
          question: '____________ is basic knowledge to problem-solving.',
          options: ['Heuristic knowledge', 'Meta-knowledge', 'Structural knowledge', 'Declarative Knowledge'],
          correct: 0,
          explanation: ''
        },
        {
          question: '_____________ is a type of knowledge which is responsible for knowing how to do something.',
          options: ['Heuristic knowledge', 'Meta-knowledge', 'Procedural Knowledge', 'Declarative Knowledge'],
          correct: 2,
          explanation: ''
        },
        {
          question: '______________ depends on the task on which it can be applied.',
          options: ['Heuristic knowledge', 'Meta-knowledge', 'Declarative Knowledge', 'Procedural Knowledge'],
          correct: 0,
          explanation: ''
        },
        {
          question: '______________ describes the relationship that exists between concepts or objects.',
          options: ['Heuristic Knowledge', 'Procedural Knowledge', 'Declarative Knowledge', 'Structural Knowledge'],
          correct: 3,
          explanation: ''
        },
        {
          question: '_____________ is the information which describes a particular object and its attributes.',
          options: ['Heuristic Knowledge', 'Procedural Knowledge', 'Declarative Knowledge', 'Structural Knowledge'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'An Artificial Intelligence system has the following components for displaying intelligent behavior:',
          options: ['Perception, Learning, Knowledge Representation and Reasoning, Planning', 'Perception, Learning, Knowledge Representation and Reasoning, Execution', 'Perception, Learning, Knowledge Representation and Reasoning, Planning, Execution', 'Perception, Learning, Knowledge Representation and Reasoning'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'Following are three operations which are performed by KBA in order to show the intelligent behavior.',
          options: ['Ask, Act, React', 'Tell, Act, Test', 'Tell, Ask, Test', 'Tell, Ask, Perform'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'This operation asks the knowledge base what action should be performed.',
          options: ['Implementation', 'Ask', 'Perform', 'Tell'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'There are mainly four approaches to knowledge representation, which are given below:',
          options: ['Simple relational knowledge, Inheritable knowledge, Inferential knowledge, Procedural knowledge.', 'Meta Knowledge, Heuristic Knowledge, Procedural Knowledge, Declarative Knowledge.', 'Declarative approach, Procedural approach.', 'Declarative knowledge, Procedural knowledge.'],
          correct: 0,
          explanation: ''
        },
        {
          question: '__________ is the simplest way of storing facts which uses the relational method, and each fact about the set of the object is set out systematically in columns.',
          options: ['Inheritable knowledge', 'Inferential knowledge', 'Simple relational knowledge', 'Procedural knowledge'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'In the______________ approach, all data must be stored into a hierarchy of classes.',
          options: ['Inheritable knowledge', 'Inferential knowledge', 'Simple relational knowledge', 'Procedural knowledge'],
          correct: 0,
          explanation: ''
        },
        {
          question: '___________ approach represents knowledge in the form of formal logics.',
          options: ['Inheritable knowledge', 'Inferential knowledge', 'Simple relational knowledge', 'Procedural knowledge'],
          correct: 1,
          explanation: ''
        },
        {
          question: '______________ approach uses small programs and codes which describes how to do specific things, and how to proceed.',
          options: ['Inheritable knowledge', 'Inferential knowledge', 'Simple relational knowledge', 'Procedural knowledge'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'In this approach, one important rule is used which is If-Then rule.',
          options: ['Inheritable knowledge', 'Inferential knowledge', 'Simple relational knowledge', 'Procedural knowledge'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'In this knowledge, we can use various coding languages such as LISP language and Prolog language.',
          options: ['Inheritable knowledge', 'Procedural knowledge', 'Declarative Knowledge', 'Simple relational knowledge'],
          correct: 1,
          explanation: ''
        },
        {
          question: '_____________ is the engineering of such systems which could represent the complex domains effectively.',
          options: ['Software engineering', 'Knowledge engineering', 'Ontological engineering', 'Logical engineering'],
          correct: 1,
          explanation: ''
        },
        {
          question: '____________ is the ability of the system to represent all kinds of knowledge needed in a specific domain.',
          options: ['Representational Adequacy', 'Inferential Adequacy', 'Inferential Efficiency', 'Acquisitional Efficiency'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'There are mainly four ways of knowledge representation which are given as follows:',
          options: ['Logical Representation, Semantic Network Representation, Frame Representation, Production Rules', 'Declarative Representation, Procedural Representation', 'Logical Representation, Declarative Representation', 'IS-A relation (Inheritance), Kind-of-relation'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'In_____________ , agent checks for the condition and if the condition exists then production rule fires and corresponding action is carried out.',
          options: ['Inference Agent', 'Learning Element', 'Semantic Representation', 'Production Rules'],
          correct: 3,
          explanation: ''
        },
        {
          question: '___________ network consists of nodes representing objects and arcs which describe the relationship between those objects.',
          options: ['Inference Agent', 'Learning', 'Semantic', 'Production'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'In this technique, the knowledge is stored via slots and fillers.',
          options: ['Frame Representation', 'Semantic Network Representation', 'Logical Representation', 'Production Rules'],
          correct: 0,
          explanation: ''
        },
        {
          question: '__________ is a language with some concrete rules which deals with propositions and has no ambiguity in representation.',
          options: ['Frame Representation', 'Semantic Network Representation', 'Logical Representation', 'Production Rules'],
          correct: 2,
          explanation: ''
        },
        {
          question: '_________ is the basic method used to represent the knowledge of a machine.',
          options: ['Inference', 'Slot', 'Frame', 'Logic'],
          correct: 3,
          explanation: ''
        }
      ]
    },
    // Quiz 3 (True/False)
    {
      id: 'quiz-3',
      title: 'Quiz 3 true/false',
      description: 'Test your knowledge with true/false questions',
      icon: '✅',
      questions: [
        {
          question: 'One applications of intelligent agents is Information search, retrieval, and navigation.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'AI assistants, like Alexa and Siri, are examples of intelligent agents as they use sensors to perceive a request made by the user and they automatically collect data from the internet with some user\'s help.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Autonomous vehicles could not be considered intelligent agents.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Repetitive office activities cannot be considered as intelligent agents as there is no any creativity in them.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Anything that recognizes the environment through sensors and acts upon the environment initiated through actuators is called AGENTS.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Agents that extract any specifiable information, such as included keywords or publication date is called searching agents.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Intelligent agents can be used for applications in data mining, data analytics and customer service and support (CSS).',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'In medical diagnosis, the patient is considered as an agent.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Wumpus World is a classic problem, best example of Knowledge based Game.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'A plan is considered a sequence of actions, and each action has its preconditions that must be satisfied before it can act and some effects that can be positive or negative.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'If a solution has the lowest cost among all solutions, it is an optimal solution.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'KBA cannot deduce appropriate actions.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'A knowledge-based agent should be able to incorporate new percepts.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'The input is taken by the inference engine of the agent and which also communicate with KB to decide as per the knowledge store in KB.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'The inference engine of KBA regularly updates the KB by learning new knowledge.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'The knowledge-based agent (KBA) takes input from the environment by perceiving the environment.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Logical level is the first level of knowledge-based agent, and in this level, we need to specify what the agent knows, and what the agent goals are.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Knowledge-based agents are composed of two main parts: Data-base and Inference system.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Learning element is a central component of a knowledge-based agent.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Knowledge-base is required for updating knowledge for an agent to learn with experiences and take action as per the knowledge.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Knowledge and reasoning also play a crucial role in dealing with partially observable environment.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'An inference system works mainly in two rules which are given as: Forward chaining and Backward chaining.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Meta Knowledge is the knowledge regarding a specific topic.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Procedural Knowledge gives information about achieving something.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Structural Knowledge is the information which describes a particular object and its attributes.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Heuristic knowledge is rules of thumb based on previous experiences, awareness of approaches, and which are good to work but not guaranteed.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Structural knowledge is to know about something. It includes concepts, facts, and objects.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'The knowledge-based agent takes percept as input and returns an action as output.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'KBA has a counter to indicate the time for the whole process, and this counter is initialized with zero. Each time when the function is called, it performs its three operations: (Tell, Ask, Test).',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'The MAKE-ACTION-QUERY generates a sentence to ask which action should be done at the current time.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'There are mainly two approaches to build a knowledge-based agent: Declarative, Procedural.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'There are mainly two approaches to build a knowledge-based agent: Structural, Procedural.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'In the procedural approach, we directly encode desired behavior as a program code. Which means we just need to write a program that already encodes the desired behavior or agent.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'We can create a knowledge-based agent by initializing with an empty knowledge base and telling the agent all the sentences with which we want to start with. This approach is called procedural approach.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Inheritable knowledge approach contains inheritable knowledge which shows a relation between instance and class, and it is called instance relation.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'A machine sounds like an empty box unless it is encoded with some features or information.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Software engineering is the engineering of such systems which could represent the complex domains effectively.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'General ontologies should be applicable in every type of special-purpose domains with some domain-specific axioms.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'An answer set program consists of given knowledge formulated as facts, rules (head(X) :- body(X).) or constraints.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'ASP (declarative language) contains more lines of code than Python.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'The production rules are expressed in natural language.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Production rule system does not exhibit any learning capabilities, as it does not store the result of the problem for future uses.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'In logical representation technique, the knowledge is stored via slots and fillers.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'In Semantic networks, we can represent our knowledge in the form of graphical networks (graph).',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        }
      ]
    }
  ],
  scores: {} // Store last scores for each category
};

// State Management
let currentCategory = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let score = 0;
let isQuizCompleted = false;
let isNavVisible = false;

// DOM Elements
const categoriesGrid = document.getElementById('categoriesGrid');
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const reviewScreen = document.getElementById('reviewScreen');
const quizTitle = document.getElementById('quizTitle');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');
const quitButton = document.getElementById('quitButton');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const questionGrid = document.getElementById('questionGrid');
const questionNavigation = document.getElementById('questionNavigation');
const navToggleButton = document.getElementById('navToggleButton');
const incorrectPopup = document.getElementById('incorrectPopup');
const themeToggle = document.getElementById('themeToggle');

// Results elements
const scoreNumber = document.getElementById('scoreNumber');
const scoreTotal = document.getElementById('scoreTotal');
const scoreRing = document.getElementById('scoreRing');
const correctCount = document.getElementById('correctCount');
const incorrectCount = document.getElementById('incorrectCount');
const accuracyValue = document.getElementById('accuracyValue');
const reviewButton = document.getElementById('reviewButton');
const homeButton = document.getElementById('homeButton');
const reviewQuestions = document.getElementById('reviewQuestions');
const reviewHomeButton = document.getElementById('reviewHomeButton');

// Initialize App
function init() {
  renderCategories();
  setupEventListeners();
  loadTheme();
}

// Render Categories on Home Screen
function renderCategories() {
  categoriesGrid.innerHTML = '';
  quizDatabase.categories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
      <div class="category-icon">${category.icon}</div>
      <h3 class="category-title">${category.title}</h3>
      <p class="category-description">${category.description}</p>
      <span class="category-count">${category.questions.length} questions</span>
    `;
    card.addEventListener('click', () => startQuiz(category));
    categoriesGrid.appendChild(card);
  });
}

// Start Quiz
function startQuiz(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  userAnswers = {};
  score = 0;
  isQuizCompleted = false;
  isNavVisible = false;
  
  quizTitle.textContent = category.title;
  showScreen('quiz');
  renderQuestion();
  updateProgress();
  renderQuestionGrid();
  updateNavigationButtons();
}

// Render Current Question
function renderQuestion() {
  const question = currentCategory.questions[currentQuestionIndex];
  questionText.textContent = question.question;
  
  optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const optionElement = document.createElement('button');
    optionElement.className = 'option-button';
    optionElement.type = 'button';
    
    const selectedAnswer = userAnswers[currentQuestionIndex];
    const isAnswered = selectedAnswer !== undefined;
    
    if (selectedAnswer === index) {
      optionElement.classList.add('selected');
    }
    
    // If already answered, show feedback and disable
    if (isAnswered) {
      optionElement.disabled = true;
      if (index === question.correct) {
        optionElement.classList.add('correct');
      } else if (index === selectedAnswer && selectedAnswer !== question.correct) {
        optionElement.classList.add('incorrect');
      }
    }
    
    optionElement.innerHTML = `
      <span class="option-label">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${option}</span>
    `;
    optionElement.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(optionElement);
  });
  
  updateQuestionGrid();
}

// Select Answer
function selectAnswer(answerIndex) {
  userAnswers[currentQuestionIndex] = answerIndex;
  const question = currentCategory.questions[currentQuestionIndex];
  const isCorrect = answerIndex === question.correct;
  
  // Show feedback on options
  const options = optionsContainer.querySelectorAll('.option-button');
  options.forEach((option, index) => {
    option.disabled = true;
    if (index === question.correct) {
      option.classList.add('correct');
    } else if (index === answerIndex && !isCorrect) {
      option.classList.add('incorrect');
    }
  });
  
  // Show incorrect popup if wrong
  if (!isCorrect) {
    showIncorrectPopup();
  }
  
  // Update question grid with correct/incorrect status
  updateQuestionGridWithFeedback(currentQuestionIndex, isCorrect);
  
  updateNavigationButtons();
}

// Update Progress Bar
function updateProgress() {
  const total = currentCategory.questions.length;
  const current = currentQuestionIndex + 1;
  const percentage = (current / total) * 100;
  
  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${current} / ${total}`;
}

// Render Question Grid
function renderQuestionGrid() {
  questionGrid.innerHTML = '';
  currentCategory.questions.forEach((_, index) => {
    const gridItem = document.createElement('button');
    gridItem.className = 'question-nav-button';
    gridItem.textContent = index + 1;
    gridItem.addEventListener('click', () => goToQuestion(index));
    questionGrid.appendChild(gridItem);
  });
  updateQuestionGrid();
}

// Update Question Grid
function updateQuestionGrid() {
  const items = questionGrid.querySelectorAll('.question-nav-button');
  items.forEach((item, index) => {
    item.classList.remove('answered', 'current', 'correct', 'incorrect');
    if (index === currentQuestionIndex) {
      item.classList.add('current');
    }
    if (userAnswers[index] !== undefined) {
      const isCorrect = userAnswers[index] === currentCategory.questions[index].correct;
      item.classList.add('answered');
      item.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
  });
}

// Update Question Grid with Feedback (for immediate feedback)
function updateQuestionGridWithFeedback(questionIndex, isCorrect) {
  const items = questionGrid.querySelectorAll('.question-nav-button');
  const item = items[questionIndex];
  if (item) {
    item.classList.add('answered');
    item.classList.add(isCorrect ? 'correct' : 'incorrect');
  }
}

// Go to Specific Question
function goToQuestion(index) {
  currentQuestionIndex = index;
  renderQuestion();
  updateProgress();
  updateNavigationButtons();
}

// Update Navigation Buttons
function updateNavigationButtons() {
  prevButton.disabled = currentQuestionIndex === 0;
  
  const totalQuestions = currentCategory.questions.length;
  
  if (currentQuestionIndex === totalQuestions - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'block';
  } else {
    nextButton.style.display = 'block';
    submitButton.style.display = 'none';
  }
}

// Navigate Questions
function navigate(direction) {
  const totalQuestions = currentCategory.questions.length;
  
  if (direction === 'next' && currentQuestionIndex < totalQuestions - 1) {
    currentQuestionIndex++;
  } else if (direction === 'prev' && currentQuestionIndex > 0) {
    currentQuestionIndex--;
  }
  
  renderQuestion();
  updateProgress();
  updateNavigationButtons();
}

// Submit Quiz
function submitQuiz() {
  calculateScore();
  isQuizCompleted = true;
  showScreen('results');
  renderResults();
}

// Calculate Score
function calculateScore() {
  score = 0;
  currentCategory.questions.forEach((question, index) => {
    if (userAnswers[index] === question.correct) {
      score++;
    }
  });
}

// Render Results
function renderResults() {
  const total = currentCategory.questions.length;
  const percentage = Math.round((score / total) * 100);
  
  scoreNumber.textContent = score;
  scoreTotal.textContent = `/ ${total}`;
  correctCount.textContent = score;
  incorrectCount.textContent = total - score;
  accuracyValue.textContent = `${percentage}%`;
  
  // Update circular progress
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (percentage / 100) * circumference;
  scoreRing.style.strokeDashoffset = offset;
  
  // Save score
  quizDatabase.scores[currentCategory.id] = score;
}

// Review Answers
function reviewAnswers() {
  reviewQuestions.innerHTML = '';
  currentCategory.questions.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correct;
    
    const reviewItem = document.createElement('div');
    reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
    reviewItem.innerHTML = `
      <div class="review-question">
        <span class="review-number">${index + 1}</span>
        <p class="review-text">${question.question}</p>
      </div>
      <div class="review-answer">
        <p class="user-answer">Your answer: ${userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'}</p>
        <p class="correct-answer">Correct answer: ${question.options[question.correct]}</p>
      </div>
    `;
    reviewQuestions.appendChild(reviewItem);
  });
  
  showScreen('review');
}

// Show Screen
function showScreen(screenName) {
  homeScreen.classList.remove('active');
  quizScreen.classList.remove('active');
  resultsScreen.classList.remove('active');
  reviewScreen.classList.remove('active');
  
  switch(screenName) {
    case 'home':
      homeScreen.classList.add('active');
      break;
    case 'quiz':
      quizScreen.classList.add('active');
      break;
    case 'results':
      resultsScreen.classList.add('active');
      break;
    case 'review':
      reviewScreen.classList.add('active');
      break;
  }
}

// Toggle Question Navigation
function toggleNavigation() {
  isNavVisible = !isNavVisible;
  if (isNavVisible) {
    questionNavigation.classList.add('show');
    navToggleButton.textContent = 'Hide Question Navigation';
  } else {
    questionNavigation.classList.remove('show');
    navToggleButton.textContent = 'Show Question Navigation';
  }
}

// Show Incorrect Popup
function showIncorrectPopup() {
  incorrectPopup.classList.add('show');
  setTimeout(() => {
    incorrectPopup.classList.remove('show');
  }, 2000);
}

// Theme Toggle
function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme === 'dark');
}

// Load Theme
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme === 'dark');
}

// Update Theme Icon
function updateThemeIcon(isDark) {
  const themeIcon = themeToggle.querySelector('.theme-icon');
  themeIcon.textContent = isDark ? '☀️' : '🌙';
}

// Setup Event Listeners
function setupEventListeners() {
  prevButton.addEventListener('click', () => navigate('prev'));
  nextButton.addEventListener('click', () => navigate('next'));
  submitButton.addEventListener('click', submitQuiz);
  quitButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
      showScreen('home');
    }
  });
  navToggleButton.addEventListener('click', toggleNavigation);
  reviewButton.addEventListener('click', reviewAnswers);
  homeButton.addEventListener('click', () => showScreen('home'));
  reviewHomeButton.addEventListener('click', () => showScreen('home'));
  themeToggle.addEventListener('click', toggleTheme);
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', init);
