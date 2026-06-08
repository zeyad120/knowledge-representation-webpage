// Quiz Database - Add your questions here
const quizDatabase = {
    categories: [
        {
            id: 'knowledge-representation',
            title: 'Quiz 1',
            description: 'Test your knowledge on KR concepts',
            icon: '🧠',
            questions: [
                {
                    question: 'In which agent does the problem generator is present?',
                    options: [
                        'Learning agent',
                        'Observing agent',
                        'Reflex agent',
                        'None of the mentioned'
                    ],
                    correct: 0,
                    explanation: 'The problem generator is present in a learning agent, which helps in generating new problems to learn from.'
                },
                {
                    question: 'Wumpus World is a classic problem, best example of _______.',
                    options: [
                        'Knowledge based Game',
                        'Reasoning with Knowledge',
                        'Single player Game',
                        'Two player Game'
                    ],
                    correct: 1,
                    explanation: 'Wumpus World is a classic example of reasoning with knowledge, where an agent must make decisions based on incomplete information.'
                },
                {
                    question: 'Uncertainty arises in the Wumpus World because the agent\'s sensors give only ___________.',
                    options: [
                        'Full & Global information',
                        'Partial & Global Information',
                        'Partial & local Information',
                        'Full & local information'
                    ],
                    correct: 2,
                    explanation: 'Uncertainty arises because the agent\'s sensors provide only partial and local information about the environment.'
                },
                {
                    question: '_______________ is an important part of Artificial Intelligence which deals with the tasks and domains of a particular problem. It is considered the logical side of acting.',
                    options: [
                        'Reasoning',
                        'Searching',
                        'Making Decisions',
                        'Planning'
                    ],
                    correct: 3,
                    explanation: 'Planning is an important part of AI that deals with tasks and domains of a particular problem, considered the logical side of acting.'
                },
                {
                    question: 'Which search uses the problem specific knowledge beyond the definition of the problem?',
                    options: [
                        'Informed search',
                        'Depth-first search',
                        'Breadth-first search',
                        'Uninformed search'
                    ],
                    correct: 0,
                    explanation: 'Informed search uses problem-specific knowledge (heuristics) beyond the basic problem definition to guide the search.'
                },
                {
                    question: 'Which function will select the lowest expansion node at first for evaluation?',
                    options: [
                        'Breadth-first search',
                        'Best-first search',
                        'Depth-first search',
                        'None of the mentioned'
                    ],
                    correct: 1,
                    explanation: 'Best-first search uses an evaluation function to select the lowest expansion node for evaluation.'
                },
                {
                    question: 'Which search is complete and optimal when h(n) is consistent?',
                    options: [
                        'Best-first search',
                        'Depth-first search',
                        'Both Best-first & Depth-first search',
                        'A* search'
                    ],
                    correct: 3,
                    explanation: 'A* search is both complete and optimal when the heuristic function h(n) is consistent (monotonic).'
                },
                {
                    question: 'Which search method will expand the node that is closest to the goal?',
                    options: [
                        'Greedy best-first search',
                        'Best-first search',
                        'A* search',
                        'None of the mentioned'
                    ],
                    correct: 0,
                    explanation: 'Greedy best-first search expands the node that appears to be closest to the goal based on the heuristic function.'
                },
                {
                    question: 'In ______________ , it says that given an initial state S in any domain, performing some necessary actions and obtain a new state S\' (which also contains some new terms), called a progression.',
                    options: [
                        'Informed search',
                        'Forward State Space Planning (FSSP)',
                        'Blind search',
                        'Backward State Space Planning (BSSP)'
                    ],
                    correct: 1,
                    explanation: 'Forward State Space Planning (FSSP) describes progression from an initial state to a new state through actions.'
                },
                {
                    question: 'Blocks World Problem is considered as a _____________.',
                    options: [
                        'Knowledge based Game',
                        'Goal Queue Planning',
                        'Goal Stack Planning',
                        'Reasoning with Knowledge'
                    ],
                    correct: 2,
                    explanation: 'Blocks World Problem is considered as Goal Stack Planning, where goals are stacked and achieved in order.'
                },
                {
                    question: '____________ can be thought of as a statement which helps us convey the information about a configuration in Blocks World.',
                    options: [
                        'Predicates',
                        'Operations',
                        'Preconditions',
                        'Planning'
                    ],
                    correct: 0,
                    explanation: 'Predicates are statements that convey information about a configuration in Blocks World, such as ON(A,B).'
                },
                {
                    question: 'In Artificial Intelligence, ________ techniques are universal problem-solving methods.',
                    options: [
                        'Reasoning',
                        'Planning',
                        'Learning',
                        'Search'
                    ],
                    correct: 3,
                    explanation: 'Search techniques are universal problem-solving methods in AI, applicable across various domains.'
                },
                {
                    question: '___________ is a function which assigns a numeric value to each path.',
                    options: [
                        'Effective function',
                        'Path length',
                        'Path Cost',
                        'Path value'
                    ],
                    correct: 2,
                    explanation: 'Path Cost is a function that assigns a numeric value to each path, representing the cost of that path.'
                },
                {
                    question: '_________ is an action sequence which leads from the start node to the goal node.',
                    options: [
                        'Actions',
                        'Transition Model',
                        'Solution',
                        'Optimal Solution'
                    ],
                    correct: 2,
                    explanation: 'A Solution is an action sequence that leads from the start node to the goal node.'
                },
                {
                    question: 'The essential properties of search algorithms to compare the efficiency of these algorithms are:',
                    options: [
                        'Completeness, Optimality, Time Complexity, Space Complexity',
                        'Time Complexity, Space Complexity',
                        'Completeness, Optimality',
                        'None of the above'
                    ],
                    correct: 0,
                    explanation: 'The essential properties are Completeness, Optimality, Time Complexity, and Space Complexity for comparing search algorithms.'
                },
                {
                    question: 'ON(A,B) in Blocks World Problem is an example of ______________.',
                    options: [
                        'Operations',
                        'Actions',
                        'Predicates',
                        'List'
                    ],
                    correct: 2,
                    explanation: 'ON(A,B) is a predicate that describes the relationship where block A is on top of block B.'
                },
                {
                    question: 'PICKUP(X) in Blocks World Problem is an example of ______________.',
                    options: [
                        'State',
                        'Predicates',
                        'Operations',
                        'Predicates and Operations'
                    ],
                    correct: 2,
                    explanation: 'PICKUP(X) is an operation that represents the action of picking up block X.'
                },
                {
                    question: 'ONTABLE(A) in Blocks World Problem is an example of ______________.',
                    options: [
                        'State',
                        'Predicates',
                        'Operations',
                        'Predicates and Operations'
                    ],
                    correct: 1,
                    explanation: 'ONTABLE(A) is a predicate that indicates block A is on the table.'
                },
                {
                    question: '_______ contains the predicates which will cease to be true once the operation is performed.',
                    options: [
                        'DELETE List',
                        'ADD List',
                        'Precondition List',
                        'State List'
                    ],
                    correct: 0,
                    explanation: 'The DELETE List contains predicates that will no longer be true after the operation is performed.'
                },
                {
                    question: '__________ on the other hand contains the predicates which will become true once the operation is performed.',
                    options: [
                        'DELETE List',
                        'State List',
                        'Precondition List',
                        'ADD List'
                    ],
                    correct: 3,
                    explanation: 'The ADD List contains predicates that will become true after the operation is performed.'
                }
            ]
        },
        {
            id: 'quiz-2',
            title: 'Quiz 2',
            description: 'Test your knowledge on advanced KR concepts',
            icon: '📚',
            questions: [
                {
                    question: 'Knowledge and reasoning also play a crucial role in dealing with __________________ environment.',
                    options: [
                        'Completely Observable',
                        'Partially Observable',
                        'Neither Completely nor Partially Observable',
                        'Only Completely and Partially Observable'
                    ],
                    correct: 1,
                    explanation: 'Knowledge and reasoning are crucial for dealing with partially observable environments where the agent cannot see everything.'
                },
                {
                    question: 'Treatment chosen by doctor for a patient for a disease is based on _____________.',
                    options: [
                        'Only current symptoms',
                        'Current symptoms plus some knowledge from the textbooks',
                        'Current symptoms plus some knowledge from the textbooks plus experience',
                        'All of the mentioned'
                    ],
                    correct: 3,
                    explanation: 'Medical treatment is based on current symptoms, textbook knowledge, and the doctor\'s experience.'
                },
                {
                    question: '_____________ is the action of thinking about something in a logical, sensible way.',
                    options: [
                        'Knowledge',
                        'Planning',
                        'Representation',
                        'Reasoning'
                    ],
                    correct: 3,
                    explanation: 'Reasoning is the action of thinking about something in a logical, sensible way.'
                },
                {
                    question: '_______________ is awareness or familiarity gained by experiences of facts, data, and situations.',
                    options: [
                        'Knowledge',
                        'Planning',
                        'Representation',
                        'Reasoning'
                    ],
                    correct: 0,
                    explanation: 'Knowledge is awareness or familiarity gained by experiences of facts, data, and situations.'
                },
                {
                    question: '______________ are those agents who have the capability of maintaining an internal state of knowledge, reason over that knowledge, update their knowledge after observations and take actions.',
                    options: [
                        'Goal-Based Agents',
                        'Utility-Based Agents',
                        'Learning Agents',
                        'Knowledge-Based Agents'
                    ],
                    correct: 3,
                    explanation: 'Knowledge-Based Agents maintain an internal state of knowledge, reason over it, update it after observations, and take actions.'
                },
                {
                    question: 'A knowledge-based agent must able to do the following:',
                    options: [
                        'An agent should be able to represent states, actions, etc.',
                        'An agent should be able to incorporate new percepts.',
                        'An agent can update the internal representation of the world.',
                        'All of the above'
                    ],
                    correct: 3,
                    explanation: 'A knowledge-based agent must be able to represent states/actions, incorporate new percepts, and update its internal representation.'
                },
                {
                    question: '_____________ is the first level of knowledge-based agent, and in this level, we need to specify what the agent knows, and what the agent goals are.',
                    options: [
                        'Physical level',
                        'Logical level',
                        'Knowledge level',
                        'Implementation level'
                    ],
                    correct: 2,
                    explanation: 'The Knowledge level is the first level where we specify what the agent knows and what its goals are.'
                },
                {
                    question: '__________ is the physical representation of logic and knowledge.',
                    options: [
                        'Physical level',
                        'Logical level',
                        'Knowledge level',
                        'Implementation level'
                    ],
                    correct: 1,
                    explanation: 'The Logical level is the physical representation of logic and knowledge.'
                },
                {
                    question: 'At this level, an automated taxi agent actually implement his knowledge and logic so that he can reach to the destination.',
                    options: [
                        'Physical level',
                        'Implementation level',
                        'Logical level',
                        'Knowledge level'
                    ],
                    correct: 1,
                    explanation: 'At the Implementation level, an agent actually implements its knowledge and logic to achieve goals.'
                },
                {
                    question: 'A knowledge-based agent can be viewed at different levels which are:',
                    options: [
                        'Knowledge level, logical level, execution level',
                        'Knowledge level, Data level, implementation level',
                        'Logical level, physical level, implementation level',
                        'Knowledge level, logical level, implementation level'
                    ],
                    correct: 3,
                    explanation: 'A knowledge-based agent can be viewed at Knowledge level, logical level, and implementation level.'
                },
                {
                    question: 'Knowledge about the other types of knowledge is called _______.',
                    options: [
                        'Heuristic knowledge',
                        'Meta-knowledge',
                        'Procedural Knowledge',
                        'Declarative Knowledge'
                    ],
                    correct: 1,
                    explanation: 'Meta-knowledge is knowledge about other types of knowledge.'
                },
                {
                    question: '____________ is basic knowledge to problem-solving.',
                    options: [
                        'Heuristic knowledge',
                        'Meta-knowledge',
                        'Structural knowledge',
                        'Declarative Knowledge'
                    ],
                    correct: 0,
                    explanation: 'Heuristic knowledge is basic knowledge used for problem-solving.'
                },
                {
                    question: '_____________ is a type of knowledge which is responsible for knowing how to do something.',
                    options: [
                        'Heuristic knowledge',
                        'Meta-knowledge',
                        'Procedural Knowledge',
                        'Declarative Knowledge'
                    ],
                    correct: 2,
                    explanation: 'Procedural Knowledge is responsible for knowing how to do something.'
                },
                {
                    question: '______________ depends on the task on which it can be applied.',
                    options: [
                        'Heuristic knowledge',
                        'Meta-knowledge',
                        'Declarative Knowledge',
                        'Procedural Knowledge'
                    ],
                    correct: 0,
                    explanation: 'Heuristic knowledge depends on the task on which it can be applied.'
                },
                {
                    question: '______________ describes the relationship that exists between concepts or objects.',
                    options: [
                        'Heuristic Knowledge',
                        'Procedural Knowledge',
                        'Declarative Knowledge',
                        'Structural Knowledge'
                    ],
                    correct: 3,
                    explanation: 'Structural Knowledge describes the relationships that exist between concepts or objects.'
                },
                {
                    question: '_____________ is the information which describes a particular object and its attributes.',
                    options: [
                        'Heuristic Knowledge',
                        'Procedural Knowledge',
                        'Declarative Knowledge',
                        'Structural Knowledge'
                    ],
                    correct: 2,
                    explanation: 'Declarative Knowledge is information that describes a particular object and its attributes.'
                },
                {
                    question: 'An Artificial Intelligence system has the following components for displaying intelligent behavior:',
                    options: [
                        'Perception, Learning, Knowledge Representation and Reasoning, Planning',
                        'Perception, Learning, Knowledge Representation and Reasoning, Execution',
                        'Perception, Learning, Knowledge Representation and Reasoning, Planning, Execution',
                        'Perception, Learning, Knowledge Representation and Reasoning'
                    ],
                    correct: 2,
                    explanation: 'AI systems require Perception, Learning, Knowledge Representation and Reasoning, Planning, and Execution for intelligent behavior.'
                },
                {
                    question: 'Following are three operations which are performed by KBA in order to show the intelligent behavior.',
                    options: [
                        'Ask, Act, React',
                        'Tell, Act, Test',
                        'Tell, Ask, Test',
                        'Tell, Ask, Perform'
                    ],
                    correct: 2,
                    explanation: 'Knowledge-Based Agents perform Tell, Ask, and Test operations to show intelligent behavior.'
                },
                {
                    question: 'This operation asks the knowledge base what action it should perform.',
                    options: [
                        'Implementation',
                        'Ask',
                        'Perform',
                        'Tell'
                    ],
                    correct: 1,
                    explanation: 'The Ask operation queries the knowledge base to determine what action to perform.'
                },
                {
                    question: 'There are mainly four approaches to knowledge representation, which are given below:',
                    options: [
                        'Simple relational knowledge, Inheritable knowledge, Inferential knowledge, Procedural knowledge.',
                        'Meta Knowledge, Heuristic Knowledge, Procedural Knowledge, Declarative Knowledge.',
                        'Declarative approach, Procedural approach.',
                        'Declarative knowledge, Procedural knowledge.'
                    ],
                    correct: 0,
                    explanation: 'The four approaches are Simple relational knowledge, Inheritable knowledge, Inferential knowledge, and Procedural knowledge.'
                },
                {
                    question: '__________ is the simplest way of storing facts which uses the relational method, and each fact about a set of the object is set out systematically in columns.',
                    options: [
                        'Inheritable knowledge',
                        'Inferential knowledge',
                        'Simple relational knowledge',
                        'Procedural knowledge'
                    ],
                    correct: 2,
                    explanation: 'Simple relational knowledge is the simplest way of storing facts using the relational method with columns.'
                },
                {
                    question: 'In the______________ approach, all data must be stored into a hierarchy of classes.',
                    options: [
                        'Inheritable knowledge',
                        'Inferential knowledge',
                        'Simple relational knowledge',
                        'Procedural knowledge'
                    ],
                    correct: 0,
                    explanation: 'In the Inheritable knowledge approach, all data must be stored into a hierarchy of classes.'
                },
                {
                    question: '___________ approach represents knowledge in the form of formal logics.',
                    options: [
                        'Inheritable knowledge',
                        'Inferential knowledge',
                        'Simple relational knowledge',
                        'Procedural knowledge'
                    ],
                    correct: 1,
                    explanation: 'The Inferential knowledge approach represents knowledge in the form of formal logics.'
                },
                {
                    question: '______________ approach uses small programs and codes which describes how to do specific things, and how to proceed.',
                    options: [
                        'Inheritable knowledge',
                        'Inferential knowledge',
                        'Simple relational knowledge',
                        'Procedural knowledge'
                    ],
                    correct: 3,
                    explanation: 'The Procedural knowledge approach uses small programs and codes to describe how to do specific things.'
                },
                {
                    question: 'In this approach, one important rule is used which is If-Then rule.',
                    options: [
                        'Inheritable knowledge',
                        'Inferential knowledge',
                        'Simple relational knowledge',
                        'Procedural knowledge'
                    ],
                    correct: 1,
                    explanation: 'The Inferential knowledge approach uses the important If-Then rule.'
                },
                {
                    question: 'In this knowledge, we can use various coding languages such as LISP language and Prolog language.',
                    options: [
                        'Inheritable knowledge',
                        'Procedural knowledge',
                        'Declarative Knowledge',
                        'Simple relational knowledge'
                    ],
                    correct: 1,
                    explanation: 'Procedural knowledge can be implemented using various coding languages like LISP and Prolog.'
                },
                {
                    question: '_____________ is the engineering of such systems which could represent the complex domains effectively.',
                    options: [
                        'Software engineering',
                        'Knowledge engineering',
                        'Ontological engineering',
                        'Logical engineering'
                    ],
                    correct: 1,
                    explanation: 'Knowledge engineering is the engineering of systems that can represent complex domains effectively.'
                },
                {
                    question: '____________ is the ability of the system to represent all kinds of knowledge needed in a specific domain.',
                    options: [
                        'Representational Adequacy',
                        'Inferential Adequacy',
                        'Inferential Efficiency',
                        'Acquisitional Efficiency'
                    ],
                    correct: 0,
                    explanation: 'Representational Adequacy is the ability of the system to represent all kinds of knowledge needed in a specific domain.'
                },
                {
                    question: 'There are mainly four ways of knowledge representation which are given as follows:',
                    options: [
                        'Logical Representation, Semantic Network Representation, Frame Representation, Production Rules',
                        'Declarative Representation, Procedural Representation',
                        'Logical Representation, Declarative Representation',
                        'IS-A relation (Inheritance), Kind-of-relation'
                    ],
                    correct: 0,
                    explanation: 'The four ways are Logical Representation, Semantic Network Representation, Frame Representation, and Production Rules.'
                },
                {
                    question: 'In_____________ , agent checks for the condition and if the condition exists then production rule fires and corresponding action is carried out.',
                    options: [
                        'Inference Agent',
                        'Learning Element',
                        'Semantic Representation',
                        'Production Rules'
                    ],
                    correct: 3,
                    explanation: 'In Production Rules, the agent checks conditions and if they exist, the rule fires and the action is carried out.'
                },
                {
                    question: '___________ network consists of nodes representing objects and arcs which describe the relationship between those objects.',
                    options: [
                        'Inference Agent',
                        'Learning',
                        'Semantic',
                        'Production'
                    ],
                    correct: 2,
                    explanation: 'Semantic network consists of nodes representing objects and arcs describing relationships between them.'
                },
                {
                    question: 'In this technique, the knowledge is stored via slots and fillers.',
                    options: [
                        'Frame Representation',
                        'Semantic Network Representation',
                        'Logical Representation',
                        'Production Rules'
                    ],
                    correct: 0,
                    explanation: 'Frame Representation stores knowledge via slots and fillers.'
                },
                {
                    question: '__________ is a language with some concrete rules which deals with propositions and has no ambiguity in representation.',
                    options: [
                        'Frame Representation',
                        'Semantic Network Representation',
                        'Logical Representation',
                        'Production Rules'
                    ],
                    correct: 2,
                    explanation: 'Logical Representation is a language with concrete rules dealing with propositions with no ambiguity.'
                },
                {
                    question: '_________ is the basic method used to represent the knowledge of a machine.',
                    options: [
                        'Inference',
                        'Slot',
                        'Frame',
                        'Logic'
                    ],
                    correct: 3,
                    explanation: 'Logic is the basic method used to represent the knowledge of a machine.'
                }
            ]
        },
        {
            id: 'quiz-3',
            title: 'Quiz 3 true/false',
            description: 'Test your knowledge with true/false questions',
            icon: '✅',
            questions: [
                {
                    question: 'One applications of intelligent agents is Information search, retrieval, and navigation.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Intelligent agents are indeed used for information search, retrieval, and navigation applications.'
                },
                {
                    question: 'AI assistants, like Alexa and Siri, are examples of intelligent agents as they use sensors to perceive a request made by the user and they automatically collect data from the internet with some user\'s help.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'AI assistants like Alexa and Siri are intelligent agents that use sensors to perceive requests and collect data from the internet.'
                },
                {
                    question: 'Autonomous vehicles could not be considered intelligent agents.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'Autonomous vehicles are actually excellent examples of intelligent agents as they perceive the environment and act upon it.'
                },
                {
                    question: 'Repetitive office activities cannot be considered as intelligent agents as there is no any creativity in them.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'Repetitive office activities can be automated by intelligent agents even without creativity, as they follow predefined rules and patterns.'
                },
                {
                    question: 'Anything that recognizes the environment through sensors and acts upon the environment initiated through actuators is called AGENTS.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Agents are defined as entities that perceive their environment through sensors and act upon it through actuators.'
                },
                {
                    question: 'Agents that extract any specifiable information, such as included keywords or publication date is called searching agents.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Searching agents are designed to extract specifiable information like keywords, publication dates, and other metadata.'
                },
                {
                    question: 'Intelligent agents can be used for applications in data mining, data analytics and customer service and support (CSS).',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Intelligent agents are widely used in data mining, analytics, and customer service applications.'
                },
                {
                    question: 'In medical diagnosis, the patient is considered as an agent.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'In medical diagnosis, the AI system is the agent, not the patient. The patient is the subject being diagnosed.'
                },
                {
                    question: 'Wumpus World is a classic problem, best example of Knowledge based Game.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'Wumpus World is a classic example of reasoning with knowledge, not specifically a knowledge-based game.'
                },
                {
                    question: 'A plan is considered a sequence of actions, and each action has its preconditions that must be satisfied before it can act and some effects that can be positive or negative.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'A plan is indeed a sequence of actions where each action has preconditions that must be met and effects that can be positive or negative.'
                },
                {
                    question: 'If a solution has the lowest cost among all solutions, it is an optimal solution.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'An optimal solution is defined as the solution with the lowest cost among all possible solutions.'
                },
                {
                    question: 'KBA cannot deduce appropriate actions.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'Knowledge-Based Agents (KBA) can deduce appropriate actions using their knowledge base and inference engine.'
                },
                {
                    question: 'A knowledge-based agent should be able to incorporate new percepts.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'A knowledge-based agent must be able to incorporate new percepts to update its understanding of the environment.'
                },
                {
                    question: 'The input is taken by the inference engine of the agent and which also communicate with KB to decide as per the knowledge store in KB.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'The inference engine takes input and communicates with the knowledge base to make decisions based on stored knowledge.'
                },
                {
                    question: 'The inference engine of KBA regularly updates the KB by learning new knowledge.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'The inference engine can update the knowledge base by learning and incorporating new knowledge.'
                },
                {
                    question: 'The knowledge-based agent (KBA) takes input from the environment by perceiving the environment.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'KBA takes input from the environment through perception using sensors.'
                },
                {
                    question: 'Logical level is the first level of knowledge-based agent, and in this level, we need to specify what the agent knows, and what the agent goals are.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'The Knowledge level is the first level, not the Logical level. The Knowledge level specifies what the agent knows and its goals.'
                },
                {
                    question: 'Knowledge-based agents are composed of two main parts: Data-base and Inference system.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Knowledge-based agents are composed of a Knowledge Base (KB) and an Inference Engine (system).'
                },
                {
                    question: 'Learning element is a central component of a knowledge-based agent.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'The central components of a knowledge-based agent are the Knowledge Base and Inference Engine, not a learning element.'
                },
                {
                    question: 'Knowledge-base is required for updating knowledge for an agent to learn with experiences and take action as per the knowledge.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'The knowledge base stores knowledge that the agent uses to learn from experiences and take actions.'
                },
                {
                    question: 'Knowledge and reasoning also play a crucial role in dealing with partially observable environment.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Knowledge and reasoning are essential for dealing with partially observable environments where the agent cannot see everything.'
                },
                {
                    question: 'An inference system works mainly in two rules which are given as: Forward chaining and Backward chaining.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Inference systems primarily use forward chaining and backward chaining as their main reasoning methods.'
                },
                {
                    question: 'Meta Knowledge is the knowledge regarding a specific topic.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'Meta-knowledge is knowledge about other types of knowledge, not knowledge about a specific topic.'
                },
                {
                    question: 'Procedural Knowledge gives information about achieving something.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Procedural knowledge is about how to do something or achieve a goal.'
                },
                {
                    question: 'Structural Knowledge is the information which describes a particular object and its attributes.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'Declarative knowledge describes a particular object and its attributes, not structural knowledge.'
                },
                {
                    question: 'Heuristic knowledge is rules of thumb based on previous experiences, awareness of approaches, and which are good to work but not guaranteed.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Heuristic knowledge consists of rules of thumb based on experience that are generally effective but not guaranteed.'
                },
                {
                    question: 'Structural knowledge is to know about something. It includes concepts, facts, and objects.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'Declarative knowledge includes concepts, facts, and objects about something. Structural knowledge describes relationships.'
                },
                {
                    question: 'The knowledge-based agent takes percept as input and returns an action as output.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'A knowledge-based agent takes percepts as input and returns actions as output.'
                },
                {
                    question: 'KBA has a counter to indicate the time for the whole process, and this counter is initialized with zero. Each time when the function is called, it performs its three operations: (Tell, Ask, Test).',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'KBA does not use a counter with Tell, Ask, Test operations in this manner.'
                },
                {
                    question: 'The MAKE-ACTION-QUERY generates a sentence to ask which action should be done at the current time.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'MAKE-ACTION-QUERY generates a sentence to ask which action should be performed at the current time.'
                },
                {
                    question: 'There are mainly two approaches to build a knowledge-based agent: Declarative, Procedural.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'The two main approaches to build a knowledge-based agent are Declarative and Procedural.'
                },
                {
                    question: 'There are mainly two approaches to build a knowledge-based agent: Structural, Procedural.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'The two main approaches are Declarative and Procedural, not Structural and Procedural.'
                },
                {
                    question: 'In the procedural approach, we directly encode desired behavior as a program code. Which means we just need to write a program that already encodes the desired behavior or agent.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'In the procedural approach, desired behavior is directly encoded as program code.'
                },
                {
                    question: 'We can create a knowledge-based agent by initializing with an empty knowledge base and telling the agent all the sentences with which we want to start with. This approach is called procedural approach.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'This describes the declarative approach, not the procedural approach.'
                },
                {
                    question: 'Inheritable knowledge approach contains inheritable knowledge which shows a relation between instance and class, and it is called instance relation.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Inheritable knowledge shows the relation between instance and class, called instance relation.'
                },
                {
                    question: 'A machine sounds like an empty box unless it is encoded with some features or information.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'A machine without encoded knowledge or features is essentially empty and non-functional.'
                },
                {
                    question: 'Software engineering is the engineering of such systems which could represent the complex domains effectively.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'Knowledge engineering, not software engineering, deals with systems that represent complex domains effectively.'
                },
                {
                    question: 'General ontologies should be applicable in every type of special-purpose domains with some domain-specific axioms.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'General ontologies are designed to be applicable across various special-purpose domains with domain-specific axioms.'
                },
                {
                    question: 'An answer set program consists of given knowledge formulated as facts, rules (head(X) :- body(X).) or constraints.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Answer Set Programming uses facts, rules, and constraints to formulate knowledge.'
                },
                {
                    question: 'ASP (declarative language) contains more lines of code than Python.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'ASP is typically more concise than Python, requiring fewer lines of code for the same functionality.'
                },
                {
                    question: 'The production rules are expressed in natural language.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Production rules can be expressed in natural language-like syntax for readability.'
                },
                {
                    question: 'Production rule system does not exhibit any learning capabilities, as it does not store the result of the problem for the future uses.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Traditional production rule systems do not have learning capabilities and don\'t store results for future use.'
                },
                {
                    question: 'In logical representation technique, the knowledge is stored via slots and fillers.',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 1,
                    explanation: 'Frame representation uses slots and fillers, not logical representation.'
                },
                {
                    question: 'In Semantic networks, we can represent our knowledge in the form of graphical networks (graph).',
                    options: [
                        'True',
                        'False'
                    ],
                    correct: 0,
                    explanation: 'Semantic networks represent knowledge as graphical networks with nodes and edges.'
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
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const incorrectPopup = document.getElementById('incorrectPopup');
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const reviewScreen = document.getElementById('reviewScreen');
const categoriesGrid = document.getElementById('categoriesGrid');
const quizTitle = document.getElementById('quizTitle');
const quitButton = document.getElementById('quitButton');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const navToggleButton = document.getElementById('navToggleButton');
const questionNavigation = document.getElementById('questionNavigation');
const questionGrid = document.getElementById('questionGrid');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');
const scoreNumber = document.getElementById('scoreNumber');
const scoreRing = document.getElementById('scoreRing');
const correctCount = document.getElementById('correctCount');
const incorrectCount = document.getElementById('incorrectCount');
const accuracyValue = document.getElementById('accuracyValue');
const reviewButton = document.getElementById('reviewButton');
const homeButton = document.getElementById('homeButton');
const reviewHomeButton = document.getElementById('reviewHomeButton');
const reviewQuestions = document.getElementById('reviewQuestions');

// Theme Toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', newTheme);
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Screen Management
function switchScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// Render Categories
function renderCategories() {
    categoriesGrid.innerHTML = '';
    quizDatabase.categories.forEach(category => {
        const lastScore = quizDatabase.scores[category.id] || null;
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <h3 class="category-title">${category.title}</h3>
            <p class="category-description">${category.description}</p>
            <div class="category-meta">
                <span class="category-count">${category.questions.length} Questions</span>
                ${lastScore !== null ? `<span class="category-score">Last: ${lastScore}/${category.questions.length}</span>` : ''}
            </div>
            <button class="start-button" data-category="${category.id}">Start Quiz</button>
        `;
        categoriesGrid.appendChild(card);
    });

    // Add click listeners to start buttons
    document.querySelectorAll('.start-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            startQuiz(button.dataset.category);
        });
    });

    // Add click listeners to cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const button = card.querySelector('.start-button');
            startQuiz(button.dataset.category);
        });
    });
}

// Start Quiz
function startQuiz(categoryId) {
    currentCategory = quizDatabase.categories.find(c => c.id === categoryId);
    currentQuestionIndex = 0;
    userAnswers = {};
    score = 0;
    isQuizCompleted = false;
    isNavVisible = false;
    
    quizTitle.textContent = currentCategory.title;
    questionNavigation.classList.remove('show');
    navToggleButton.textContent = 'Show Question Navigation';
    
    switchScreen(quizScreen);
    loadQuestion();
    generateQuestionGrid();
    saveQuizState();
}

// Load Question
function loadQuestion() {
    const question = currentCategory.questions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentCategory.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} / ${currentCategory.questions.length}`;
    
    // Render options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.dataset.index = index;
        
        // Check if already answered
        if (userAnswers[currentQuestionIndex] !== undefined) {
            button.disabled = true;
            if (index === question.correct) {
                button.classList.add('correct');
            } else if (index === userAnswers[currentQuestionIndex] && index !== question.correct) {
                button.classList.add('incorrect');
            }
            if (index === userAnswers[currentQuestionIndex]) {
                button.classList.add('answered');
            }
        }
        
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
    
    // Update navigation buttons
    prevButton.disabled = currentQuestionIndex === 0;
    
    // Show/hide next and submit buttons based on question position
    const isLastQuestion = currentQuestionIndex === currentCategory.questions.length - 1;
    if (isLastQuestion) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
    
    // Update question grid
    updateQuestionGrid();
    
    saveQuizState();
}

// Select Option
function selectOption(index) {
    if (userAnswers[currentQuestionIndex] !== undefined) return;
    
    const question = currentCategory.questions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = index;
    
    if (index === question.correct) {
        score++;
    } else {
        showIncorrectPopup();
    }
    
    // Update UI
    const buttons = optionsContainer.querySelectorAll('.option-button');
    buttons.forEach((button, i) => {
        button.disabled = true;
        if (i === question.correct) {
            button.classList.add('correct');
        } else if (i === index && i !== question.correct) {
            button.classList.add('incorrect');
        }
        if (i === index) {
            button.classList.add('answered');
        }
    });
    
    updateQuestionGrid();
    saveQuizState();
}

// Show Incorrect Popup
function showIncorrectPopup() {
    incorrectPopup.classList.add('show');
    setTimeout(() => {
        incorrectPopup.classList.remove('show');
    }, 2000);
}

// Generate Question Grid
function generateQuestionGrid() {
    questionGrid.innerHTML = '';
    currentCategory.questions.forEach((_, index) => {
        const button = document.createElement('button');
        button.className = 'question-nav-button';
        button.textContent = index + 1;
        button.dataset.index = index;
        button.addEventListener('click', () => jumpToQuestion(index));
        questionGrid.appendChild(button);
    });
}

// Update Question Grid
function updateQuestionGrid() {
    const buttons = questionGrid.querySelectorAll('.question-nav-button');
    buttons.forEach((button, index) => {
        button.classList.remove('current', 'answered', 'incorrect');
        if (index === currentQuestionIndex) {
            button.classList.add('current');
        }
        if (userAnswers[index] !== undefined) {
            const question = currentCategory.questions[index];
            if (userAnswers[index] === question.correct) {
                button.classList.add('answered');
            } else {
                button.classList.add('incorrect');
            }
        }
    });
}

// Jump to Question
function jumpToQuestion(index) {
    currentQuestionIndex = index;
    loadQuestion();
}

// Toggle Question Navigation
function toggleQuestionNavigation() {
    isNavVisible = !isNavVisible;
    if (isNavVisible) {
        questionNavigation.classList.add('show');
        navToggleButton.textContent = 'Hide Question Navigation';
    } else {
        questionNavigation.classList.remove('show');
        navToggleButton.textContent = 'Show Question Navigation';
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Submit Quiz
function submitQuiz() {
    isQuizCompleted = true;
    
    // Save score
    quizDatabase.scores[currentCategory.id] = score;
    localStorage.setItem('quizDatabase', JSON.stringify(quizDatabase));
    
    showResults();
    clearQuizState();
}

// Show Results
function showResults() {
    const totalQuestions = currentCategory.questions.length;
    const incorrectAnswers = totalQuestions - score;
    const accuracy = Math.round((score / totalQuestions) * 100);
    
    scoreNumber.textContent = score;
    document.querySelector('.score-total').textContent = `/ ${totalQuestions}`;
    correctCount.textContent = score;
    incorrectCount.textContent = incorrectAnswers;
    accuracyValue.textContent = `${accuracy}%`;
    
    // Animate circular progress
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (accuracy / 100) * circumference;
    scoreRing.style.strokeDashoffset = offset;
    
    switchScreen(resultsScreen);
}

// Review Answers
function reviewAnswers() {
    reviewQuestions.innerHTML = '';
    
    currentCategory.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const card = document.createElement('div');
        card.className = 'review-question-card';
        card.innerHTML = `
            <h4 class="review-question-text">Q${index + 1}: ${question.question}</h4>
            <div class="review-options">
                ${question.options.map((option, i) => {
                    let classes = 'review-option';
                    if (i === question.correct) classes += ' correct';
                    if (i === userAnswer && !isCorrect) classes += ' incorrect';
                    if (i === userAnswer) classes += ' user-answer';
                    return `
                        <div class="${classes}">
                            <span class="review-option-label">${String.fromCharCode(65 + i)}.</span>
                            <span class="review-option-text">${option}</span>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="review-explanation">
                <div class="review-explanation-label">Explanation:</div>
                <div class="review-explanation-text">${question.explanation}</div>
            </div>
        `;
        reviewQuestions.appendChild(card);
    });
    
    switchScreen(reviewScreen);
}

// Save Quiz State
function saveQuizState() {
    const state = {
        categoryId: currentCategory?.id,
        questionIndex: currentQuestionIndex,
        userAnswers: userAnswers,
        score: score,
        isCompleted: isQuizCompleted
    };
    localStorage.setItem('quizState', JSON.stringify(state));
}

// Load Quiz State
function loadQuizState() {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        const state = JSON.parse(savedState);
        if (state.categoryId && !state.isCompleted) {
            currentCategory = quizDatabase.categories.find(c => c.id === state.categoryId);
            currentQuestionIndex = state.questionIndex;
            userAnswers = state.userAnswers;
            score = state.score;
            isQuizCompleted = state.isCompleted;
            
            quizTitle.textContent = currentCategory.title;
            switchScreen(quizScreen);
            loadQuestion();
            generateQuestionGrid();
            return true;
        }
    }
    return false;
}

// Clear Quiz State
function clearQuizState() {
    localStorage.removeItem('quizState');
}

// Quit Quiz
function quitQuiz() {
    clearQuizState();
    currentCategory = null;
    currentQuestionIndex = 0;
    userAnswers = {};
    score = 0;
    isQuizCompleted = false;
    renderCategories();
    switchScreen(homeScreen);
}

// Load Quiz Database
function loadQuizDatabase() {
    const saved = localStorage.getItem('quizDatabase');
    if (saved) {
        const parsed = JSON.parse(saved);
        quizDatabase.scores = parsed.scores || {};
    }
}

// Initialize
function init() {
    loadTheme();
    loadQuizDatabase();
    
    // Try to load saved quiz state
    if (!loadQuizState()) {
        renderCategories();
        switchScreen(homeScreen);
    }
    
    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    quitButton.addEventListener('click', quitQuiz);
    navToggleButton.addEventListener('click', toggleQuestionNavigation);
    prevButton.addEventListener('click', previousQuestion);
    nextButton.addEventListener('click', nextQuestion);
    submitButton.addEventListener('click', submitQuiz);
    reviewButton.addEventListener('click', reviewAnswers);
    homeButton.addEventListener('click', quitQuiz);
    reviewHomeButton.addEventListener('click', quitQuiz);
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);
