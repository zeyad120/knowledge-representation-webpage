// Quiz Database - Updated with user-provided questions
const quizDatabase = {
  categories: [
    // Merged Quiz 1, 2, 3 - Reasoning and Agents - Lec. 1, 2, 3
    {
      id: 'reasoning-agents-lec-1-2-3',
      title: 'Reasoning and Agents - Lec. 1, 2, 3',
      description: 'Test your knowledge on KR concepts, advanced KR, and agents',
      icon: '🧠',
      questions: [
        // Quiz 1 Questions (20 questions)
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
        },
        // Quiz 2 Questions (34 questions)
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
        },
        // Quiz 3 Questions (34 questions)
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
    },
    // Quiz 4 - Reasoning and Agents
    {
      id: 'reasoning-agents',
      title: 'Reasoning and Agents - Questions on Lec. 4, 5, 6',
      description: 'Test your knowledge on Reasoning and Agents',
      icon: '🤖',
      questions: [
        // MCQ Questions (1-55)
        {
          question: '_______________ is a language with some concrete rules which deals with propositions and has no ambiguity in representation.',
          options: ['Logical Representation', 'Reasoning with Knowledge', 'Frame Representation', 'Semantic Network Representation'],
          correct: 0,
          explanation: ''
        },
        {
          question: '________________ means drawing a conclusion based on various conditions.',
          options: ['Reasoning with Knowledge', 'Frame Representation', 'Semantic Network Representation', 'Logical Representation'],
          correct: 0,
          explanation: ''
        },
        {
          question: '______________ is the basic method used to represent the knowledge of a machine.',
          options: ['Planning', 'Reasoning', 'Logic', 'Knowledge'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'Logical representation can be categorized into mainly two logics:',
          options: ['Declarative, Procedural', 'Propositional, Predicate', 'Inheritable, Inferential', 'Logical, Declarative'],
          correct: 1,
          explanation: ''
        },
        {
          question: '________________is the simplest form of logic where all the statements are made by propositions.',
          options: ['Declarative Logic', 'Procedural Logic', 'Propositional Logic', 'Predicate Logic'],
          correct: 2,
          explanation: ''
        },
        {
          question: '_______________ is a technique of knowledge representation in logical and mathematical form. It is also called Boolean logic as it works on 0 and 1.',
          options: ['Declarative Logic', 'Propositional Logic', 'Procedural Logic', 'Predicate Logic'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'In propositional logic, there are two types of Propositions:',
          options: ['Atomic Propositions, Compound propositions', 'Propositional, Predicate', 'Declarative, Procedural', 'None of the above'],
          correct: 0,
          explanation: ''
        },
        {
          question: '_________________ are constructed by combining simpler or atomic propositions, using parenthesis and logical connectives.',
          options: ['Atomic propositions', 'Logical propositions', 'Compound propositions', 'All of the above'],
          correct: 2,
          explanation: ''
        },
        {
          question: '______________ are used to connect two simpler propositions or representing a sentence logically.',
          options: ['Logical connectives', 'Logical presenters', 'Logical Forms', 'Logical Actors'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'A sentence such as ¬ P is called ____________ of P. A literal can be either Positive literal or negative literal.',
          options: ['Not', 'Negation', 'Conjunction', 'Disjunction'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'A sentence which has ∨ connective, such as P ∨ Q. is called ___________, where P and Q are the propositions.',
          options: ['Not', 'Negation', 'Conjunction', 'Disjunction'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'A sentence such as P → Q, is called _____________. It is also known as if-then rule.',
          options: ['Implication', 'Negation', 'Conjunction', 'Disjunction'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'A sentence such as P⇔ Q is a ____________ sentence.',
          options: ['Implication', 'Biconditional', 'Conjunction', 'Disjunction'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'The syntax of propositional logic defines the allowable sentences for the______________.',
          options: ['Frame Representation', 'Semantic Network Representation', 'Logical Representation', 'knowledge representation'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'A proposition formula which is always false is called ____________.',
          options: ['tautology', 'Boolean logic', 'Contradiction', 'Propositional logic'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'A proposition formula which is always true is called ____________.',
          options: ['tautology', 'Boolean logic', 'Contradiction', 'Propositional logic'],
          correct: 0,
          explanation: ''
        },
        {
          question: '__________ is the mental process of deriving logical conclusion and making predictions from available knowledge, facts, and beliefs. It is a way to infer facts from existing data.',
          options: ['Planning', 'Reasoning', 'Contradiction', 'Propositional logic'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'In Artificial Intelligence, the ____________ is essential so that the machine can also think rationally as a human brain, and can perform like a human.',
          options: ['Planning', 'Knowledge', 'Logical Representation', 'Reasoning'],
          correct: 3,
          explanation: ''
        },
        {
          question: '_________________is a type of propositional logic in AI, and it requires various rules and facts. It is sometimes referred to as top-down reasoning.',
          options: ['Inductive Reasoning', 'Abductive Reasoning', 'Deductive Reasoning', 'Common Sense Reasoning'],
          correct: 2,
          explanation: ''
        },
        {
          question: '_________________ is a type of propositional logic, which is also known as cause-effect reasoning or bottom-up reasoning.',
          options: ['Inductive Reasoning', 'Abductive Reasoning', 'Deductive Reasoning', 'Common Sense Reasoning'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'In __________________, we use historical data or various premises to generate a generic rule, for which premises support the conclusion.',
          options: ['Inductive Reasoning', 'Abductive Reasoning', 'Deductive Reasoning', 'Common Sense Reasoning'],
          correct: 2,
          explanation: ''
        },
        {
          question: '_______________is a form of logical reasoning which starts with single or multiple observations then seeks to find the most likely explanation or conclusion for the observation.',
          options: ['Inductive Reasoning', 'Abductive Reasoning', 'Deductive Reasoning', 'Common Sense Reasoning'],
          correct: 1,
          explanation: ''
        },
        {
          question: '______________is an informal form of reasoning, which can be gained through experiences.',
          options: ['Inductive Reasoning', 'Abductive Reasoning', 'Deductive Reasoning', 'Common Sense Reasoning'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'In______________, once the conclusion is taken, then it will remain the same even if we add some other information to existing information in our knowledge base.',
          options: ['Inductive Reasoning', 'Abductive Reasoning', 'monotonic reasoning', 'Deductive Reasoning'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'To solve _________________, we can derive the valid conclusion from the available facts only, and it will not be affected by new facts.',
          options: ['monotonic problems', 'Abductive Reasoning', 'Deductive Reasoning', 'Common Sense Reasoning'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'In______________, some conclusions may be invalidated if we add some more information to our knowledge base.',
          options: ['Monotonic Reasoning', 'Non-monotonic reasoning', 'Deductive Reasoning', 'Common Sense Reasoning'],
          correct: 1,
          explanation: ''
        },
        {
          question: '________________ deals with incomplete and uncertain models.',
          options: ['Monotonic Reasoning', 'Deductive Reasoning', 'Non-monotonic reasoning', 'Common Sense Reasoning'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'In Non-monotonic reasoning, we can choose probabilistic facts or can make assumptions.',
          options: ['Deductive Reasoning', 'Common Sense Reasoning', 'Monotonic Reasoning', 'Non-monotonic reasoning'],
          correct: 3,
          explanation: ''
        },
        {
          question: '___________is the form of valid reasoning, to deduce new information or conclusion from known related facts and information.',
          options: ['Deductive reasoning', 'Inductive reasoning', 'Monotonic reasoning', 'Non-monotonic reasoning'],
          correct: 0,
          explanation: ''
        },
        {
          question: '___________ arrives at a conclusion by the process of generalization using specific facts or data.',
          options: ['Deductive reasoning', 'Inductive reasoning', 'Monotonic reasoning', 'Non-monotonic reasoning'],
          correct: 1,
          explanation: ''
        },
        {
          question: '______________ reaches from general facts to specific facts.',
          options: ['Deductive reasoning', 'Inductive reasoning', 'Monotonic reasoning', 'Non-monotonic reasoning'],
          correct: 0,
          explanation: ''
        },
        {
          question: '______________ reaches from specific facts to general facts.',
          options: ['Deductive reasoning', 'Inductive reasoning', 'Monotonic reasoning', 'Non-monotonic reasoning'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'To represent uncertain knowledge, where we are not sure about the predicates, we need __________ or probabilistic reasoning.',
          options: ['uncertain reasoning', 'certain reasoning', 'logical reasoning', 'Monotonic reasoning'],
          correct: 0,
          explanation: ''
        },
        {
          question: '_____________is a way of knowledge representation where we apply the concept of probability to indicate the uncertainty in knowledge.',
          options: ['Certain reasoning', 'Probabilistic reasoning', 'Monotonic reasoning', 'Non- Monotonic reasoning'],
          correct: 1,
          explanation: ''
        },
        {
          question: '______________ can be defined as a chance that an uncertain event will occur.',
          options: ['Planning', 'Reasoning', 'Probability', 'Contradiction'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'The collection of all possible events is called_____________.',
          options: ['Random variables', 'Prior probability', 'Posterior Probability', 'Sample space'],
          correct: 3,
          explanation: ''
        },
        {
          question: '_______________ are used to represent the events and objects in the real world.',
          options: ['Random variables', 'Prior probability', 'Posterior Probability', 'Sample space'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'The _______________ of an event is probability computed before observing new information.',
          options: ['Random variables', 'Prior probability', 'Posterior Probability', 'Sample space'],
          correct: 1,
          explanation: ''
        },
        {
          question: '________________is the probability that is calculated after all evidence or information has taken into account. It is a combination of prior probability and new information.',
          options: ['Random variables', 'Prior probability', 'Posterior Probability', 'Sample space'],
          correct: 2,
          explanation: ''
        },
        {
          question: '________________is a probability of occurring an event when another event has already happened.',
          options: ['Prior probability', 'Posterior Probability', 'Probabilistic Reasoning', 'Conditional Probability'],
          correct: 3,
          explanation: ''
        },
        {
          question: '_________is also known as Bayes\' law determines the probability of an event with uncertain knowledge.',
          options: ['Bayes\' theorem', 'Bayes\' rule', 'Bayesian reasoning', 'All of the above'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'The ___________ helps us to represent Bayesian thinking. We can use it in data science when the amount of data to model is moderate, incomplete, and/or uncertain.',
          options: ['Bayesian network', 'Bayes\' theorem', 'Bayes\' rule', 'Bayesian reasoning'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'For example, a robot cannot pick up a particular object if it is nowhere near the object. The ____________ of an action specifies when the action can be carried out. The ____________of an action specifies the resulting state.',
          options: ['Prior probability, Posterior Probability', 'Effect, Precondition', 'Precondition, Effect', 'Posterior Probability, Prior probability'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'A _____________is a partial function from states to states.',
          options: ['Prior probability', 'deterministic action', 'Posterior Probability', 'All of the above'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'In ______________of a graph, where the nodes are states and the acts are actions. This is called a state-space graph. Any of the search algorithms can be used to search the space.',
          options: ['explicit representation', 'STRIPS Representation', 'Feature-Based Representation', 'deterministic action'],
          correct: 0,
          explanation: ''
        },
        {
          question: '__________________ is an action-centric representation which, for each action, specifies when the action can occur and the effects of the action.',
          options: ['explicit representation', 'STRIPS Representation', 'Feature-Based Representation', 'deterministic action'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'The _______________ is used to specify the values of primitive features in a state based on the previous state and the action taken by the agent.',
          options: ['explicit representation', 'STRIPS Representation', 'Feature-Based Representation', 'deterministic action'],
          correct: 2,
          explanation: ''
        },
        {
          question: '______________ is more flexible than other representations, as it allows for conditional effects, and non-local effects.',
          options: ['explicit representation', 'STRIPS Representation', 'Feature-Based Representation', 'deterministic action'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'In the feature-based representation of actions, there are two forms of rules which are; (i) ______________specifies when a feature gets a new value. (ii) _______________specifies when a feature keeps its value.',
          options: ['Non causal rule, causal rule', 'frame rule, causal rule', 'causal rule, frame rule', 'causal rule, Non causal rule'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'A ______________is a sequence of actions to achieve a goal from a given starting state.',
          options: ['explicit representation', 'STRIPS representation', 'feature-based representation', 'deterministic plan'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'What is the name of the following figure?',
          options: ['Bayesian Network', 'Probability Reasoning', 'Monotonic Network', 'Non-Monotonic Network'],
          correct: 0,
          explanation: ''
        },
        {
          question: '_______________is a python package that implements fast, efficient, and extremely flexible probabilistic models ranging from probability distributions to Bayesian networks to mixtures of hidden Markov models.',
          options: ['Bayesian', 'Pomegranate', 'Logic', 'Knowledge'],
          correct: 1,
          explanation: ''
        },
        {
          question: '"Earth revolves around the Sun" is an example of _______________.',
          options: ['Certain reasoning', 'Probabilistic reasoning', 'Monotonic reasoning', 'Non- Monotonic reasoning'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Birds can fly, Penguins cannot fly, Pitty is a bird so from the above sentences, we can conclude that Pitty can fly. The previous example is an example of ___________.',
          options: ['Certain reasoning', 'Probabilistic reasoning', 'Monotonic reasoning', 'Non- Monotonic reasoning'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'A ___________ specifies when a feature gets a new value. A ______________ specifies when a feature keeps its value.',
          options: ['Casual rule, frame rule', 'Frame rule, casual rule', 'Formed rule, Informed rule', 'Informed rule, Formed rule'],
          correct: 0,
          explanation: ''
        },
        // True/False Questions (1-34)
        {
          question: 'Logic is the basic method used to represent the knowledge of a machine.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Planning is the basic method used to represent the knowledge of a machine.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Statements which are questions, commands, or opinions are not propositions such as "Where is Rohini", "How are you", "What is your name", are propositions.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'A proposition formula which is always true is called tautology, and it is also called a valid sentence.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'A proposition formula which is always false is called Contradiction.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Atomic propositions are the simple propositions. It consists of a single proposition symbol.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Atomic proposition can be a true fact (Contradiction) or false fact (Tautology).',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'A sentence such as ¬ P is called negation of P. A literal can be either Positive literal or negative literal.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'A sentence which has ∨ connective such as, P ∨ Q is called a conjunction.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'A sentence such as P → Q, is called an implication. Implications are also known as if-then rules.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'A sentence which has ∨ connective, such as P ∨ Q. is called disjunction, where P and Q are the propositions.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'A sentence which has ∧ connective such as, P ∧ Q is called a disjunction.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Two propositions are said to be logically equivalent if and only if the columns in the truth table are identical to each other.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Just like arithmetic operators, there is a precedence order for propositional connectors or logical operators.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Propositional logic cannot be used to make game engine knowledgeable.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Inductive and deductive reasoning are the forms of propositional logic.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Inductive Reasoning is deducing new information from logically related known information.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Inductive reasoning is a form of reasoning to arrive at a conclusion using limited sets of facts by the process of generalization.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Inductive Reasoning is a type of propositional logic, which is also known as cause-effect reasoning or bottom-up reasoning.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'We can represent the real world scenarios using Monotonic reasoning.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Hypothesis knowledge cannot be expressed with monotonic reasoning, which means facts should be true.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'In monotonic reasoning, each old proof will always remain valid.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'For real-world systems such as Robot navigation, we can use non-monotonic reasoning.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Non-monotonic reasoning can be used for theorem proving.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Deductive reasoning reaches from specific facts to general facts.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Inductive reasoning reaches from general facts to specific facts.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Knowledge representation is learned using propositional logic with certainty, which means we were sure about the predicates.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'We use probability in probabilistic reasoning because it provides a way to handle the uncertainty that is the result of someone\'s laziness and ignorance.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'In probabilistic reasoning, there are two ways to solve problems with uncertain knowledge which are; Bayes\' rule and Bayesian Statistics.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'The Bayesian network helps us to represent Bayesian thinking. We can use it in data science when the amount of data to model is moderate, incomplete, and/or uncertain.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'In the feature-based representation of actions, frame rule specifies when a feature gets a new value.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'In the feature-based representation of actions, causal rule specifies when a feature keeps its value.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'In the feature-based representation of actions, frame rule specifies when a feature keeps its value.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'In the feature-based representation of actions, causal rule specifies when a feature gets a new value.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        }
      ]
    },
    // Final Quiz
    {
      id: 'final-quiz',
      title: 'Final Quiz',
      description: 'Comprehensive quiz covering all topics',
      icon: '🎯',
      questions: [
        {
          question: 'Wumpus World is a classic problem, best example of _______.',
          options: ['Knowledge based Game', 'Reasoning with Knowledge', 'Single player Game', 'Two player Game'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Uncertainty arises in Wumpus World because sensors give _______.',
          options: ['Full & Global information', 'Partial & Global Information', 'Partial & local Information', 'Full & local information'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'Knowledge-based agents are _______.',
          options: ['Goal-Based Agents', 'Utility-Based Agents', 'Learning Agents', 'Knowledge-Based Agents'],
          correct: 3,
          explanation: ''
        },
        {
          question: 'AI system components include _______.',
          options: ['Perception, Learning, KR & Reasoning, Planning', 'Perception, Learning, KR & Reasoning, Execution', 'Perception, Learning, KR & Reasoning, Planning, Execution', 'Perception only'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'Which search uses problem specific knowledge?',
          options: ['Informed search', 'DFS', 'BFS', 'Uninformed search'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'A* search is optimal when _______.',
          options: ['h(n) is inconsistent', 'h(n) is consistent', 'DFS used', 'BFS used'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Greedy best-first search expands _______.',
          options: ['Random node', 'Closest to goal', 'Deepest node', 'Lowest cost path only'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Path cost is _______.',
          options: ['Function assigning numeric value to path', 'Node value', 'Goal state', 'Action sequence'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Solution is _______.',
          options: ['Random path', 'Action sequence from start to goal', 'Single node', 'Heuristic value'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Properties of search algorithms include _______.',
          options: ['Completeness, Optimality, Time, Space', 'Time only', 'Space only', 'Randomness'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Blocks World is example of _______.',
          options: ['Knowledge based Game', 'Goal Stack Planning', 'Goal Queue Planning', 'Reasoning only'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'ON(A,B) is example of _______.',
          options: ['Operation', 'Action', 'Predicate', 'List'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'PICKUP(X) is _______.',
          options: ['State', 'Operation', 'Predicate', 'Knowledge'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'ONTABLE(A) is _______.',
          options: ['State', 'Predicate', 'Operation', 'Rule'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'DELETE list contains _______.',
          options: ['New facts', 'Removed predicates', 'Goals', 'Actions'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'ADD list contains _______.',
          options: ['New true predicates', 'Deleted facts', 'Goals', 'States'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Knowledge is _______.',
          options: ['Logical thinking', 'Awareness from experience', 'Planning', 'Execution'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Reasoning is _______.',
          options: ['Thinking logically', 'Memory', 'Data storage', 'Execution'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Meta-knowledge means _______.',
          options: ['Knowledge about knowledge', 'Basic facts', 'Actions', 'Rules only'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Procedural knowledge is _______.',
          options: ['Knowing facts', 'Knowing how to do something', 'Objects description', 'Relations'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Declarative knowledge is _______.',
          options: ['How to do', 'Facts about objects', 'Algorithms', 'Rules execution'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Structural knowledge is _______.',
          options: ['Object attributes', 'Actions', 'Heuristics', 'Planning'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Knowledge level is _______.',
          options: ['Implementation', 'What agent knows and goals', 'Code level', 'Hardware level'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Logical level is _______.',
          options: ['Physical execution', 'Representation of knowledge', 'Hardware', 'Sensors'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Implementation level is _______.',
          options: ['Abstract level', 'Actual execution', 'Knowledge description', 'Planning'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'KBA operations are _______.',
          options: ['Ask, Tell, Test', 'Run, Stop', 'Read, Write', 'Input only'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Ask operation means _______.',
          options: ['Update KB', 'Query KB for action', 'Delete data', 'Store data'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Simple relational knowledge is _______.',
          options: ['Graph', 'Tables', 'Logic', 'Rules'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Frame representation uses _______.',
          options: ['Slots and fillers', 'Graphs', 'Rules', 'Logic'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Semantic network consists of _______.',
          options: ['Tables', 'Nodes and arcs', 'Rules', 'Actions'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Production rules use _______.',
          options: ['IF-THEN rules', 'Tables', 'Graphs', 'Frames'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Logical representation is _______.',
          options: ['Natural language', 'Formal logic', 'Images', 'Graph only'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Propositional logic is _______.',
          options: ['Object based', 'Boolean logic', 'Graph based', 'Frame based'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Atomic proposition is _______.',
          options: ['Compound sentence', 'Simple statement', 'Rule', 'Function'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Compound proposition is _______.',
          options: ['Single fact', 'Combined statements', 'Object', 'Action'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Conjunction is _______.',
          options: ['OR', 'AND', 'NOT', 'IF'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Disjunction is _______.',
          options: ['OR', 'AND', 'NOT', 'IF'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Implication is _______.',
          options: ['P OR Q', 'P AND Q', 'P → Q', 'P ↔ Q'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'Biconditional is _______.',
          options: ['P ↔ Q', 'P → Q', 'P OR Q', 'NOT P'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Tautology means _______.',
          options: ['Always false', 'Always true', 'Sometimes true', 'Unknown'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Contradiction means _______.',
          options: ['Always true', 'Always false', 'Sometimes true', 'Probable'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Reasoning is _______.',
          options: ['Data storage', 'Drawing conclusions', 'Input only', 'Output only'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Deductive reasoning is _______.',
          options: ['General → Specific', 'Specific → General', 'Random', 'Uncertain'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Inductive reasoning is _______.',
          options: ['General → Specific', 'Specific → General', 'Logical proof', 'False reasoning'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Abductive reasoning is _______.',
          options: ['Best explanation', 'Deduction', 'Random guess', 'Rule execution'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Monotonic reasoning means _______.',
          options: ['New facts invalidate old conclusions', 'Old conclusions always remain valid', 'Random reasoning', 'No logic'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Non-monotonic reasoning deals with _______.',
          options: ['Certainty', 'Incomplete knowledge', 'Math only', 'Fixed rules'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Prior probability is _______.',
          options: ['After evidence', 'Before evidence', 'Always zero', 'Always one'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Posterior probability is _______.',
          options: ['Before evidence', 'After evidence', 'Fixed value', 'Random'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Sample space is _______.',
          options: ['One event', 'All possible events', 'One probability', 'None'],
          correct: 1,
          explanation: ''
        }
      ]
    },
    // AI Mock Exam
    {
      id: 'ai-mock-exam',
      title: 'AI Mock Exam',
      description: 'Comprehensive mock exam with 50 questions',
      icon: '🧪',
      questions: [
        // Section A: MCQ (1-40)
        {
          question: 'Wumpus World is a classic problem, best example of _______.',
          options: ['Knowledge based Game', 'Reasoning with Knowledge', 'Single player Game', 'Two player Game'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Uncertainty arises in Wumpus World because sensors give _______.',
          options: ['Full & Global information', 'Partial & Global Information', 'Partial & local Information', 'Full & local information'],
          correct: 2,
          explanation: ''
        },
        {
          question: 'Which search uses problem specific knowledge?',
          options: ['Informed search', 'DFS', 'BFS', 'Uninformed search'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'A search is optimal when _______.',
          options: ['heuristic is inconsistent', 'heuristic is consistent', 'BFS used', 'DFS used'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Greedy best-first search expands _______.',
          options: ['random node', 'closest to goal', 'deepest node', 'root only'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Path cost is _______.',
          options: ['node value', 'numeric value of a path', 'goal state', 'action'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Solution in search is _______.',
          options: ['single node', 'sequence of actions', 'heuristic only', 'random path'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Blocks World is example of _______.',
          options: ['planning problem', 'database system', 'sorting problem', 'networking problem'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'ON(A,B) is _______.',
          options: ['action', 'predicate', 'operation', 'rule'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'PICKUP(X) is _______.',
          options: ['predicate', 'operation', 'state', 'fact'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'DELETE list contains _______.',
          options: ['new facts', 'removed facts', 'goals', 'actions'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'ADD list contains _______.',
          options: ['removed facts', 'new facts', 'goals', 'heuristics'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Knowledge is _______.',
          options: ['experience-based awareness', 'execution', 'planning', 'memory only'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Reasoning is _______.',
          options: ['storing data', 'logical thinking', 'executing code', 'sensing'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Meta-knowledge is _______.',
          options: ['facts', 'knowledge about knowledge', 'actions', 'rules only'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Procedural knowledge is _______.',
          options: ['facts', 'how to do something', 'object description', 'graphs'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Declarative knowledge is _______.',
          options: ['facts about objects', 'algorithms', 'execution steps', 'planning'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Structural knowledge is _______.',
          options: ['object attributes', 'actions', 'rules', 'goals'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Knowledge level means _______.',
          options: ['implementation code', 'what agent knows', 'hardware', 'sensors'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Logical level means _______.',
          options: ['execution', 'representation of knowledge', 'hardware', 'output'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Ask operation means _______.',
          options: ['update KB', 'query KB', 'delete KB', 'ignore KB'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Tell operation means _______.',
          options: ['query KB', 'update KB', 'stop agent', 'remove rules'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Frame representation uses _______.',
          options: ['graphs', 'slots and fillers', 'logic', 'tables'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Semantic network consists of _______.',
          options: ['nodes and arcs', 'tables', 'arrays', 'lists'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Production rules use _______.',
          options: ['IF-THEN', 'graphs', 'frames', 'loops'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Propositional logic is _______.',
          options: ['Boolean logic', 'frame logic', 'graph logic', 'planning logic'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Atomic proposition is _______.',
          options: ['simple statement', 'complex rule', 'graph', 'action'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Compound proposition is _______.',
          options: ['single fact', 'combined statements', 'object', 'rule only'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Conjunction means _______.',
          options: ['OR', 'AND', 'NOT', 'IF'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Disjunction means _______.',
          options: ['OR', 'AND', 'NOT', 'IF'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Implication is _______.',
          options: ['P ∨ Q', 'P → Q', 'P ∧ Q', 'P ↔ Q'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Biconditional is _______.',
          options: ['P ↔ Q', 'P → Q', 'P ∨ Q', 'NOT P'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Tautology means _______.',
          options: ['always false', 'always true', 'sometimes true', 'unknown'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Contradiction means _______.',
          options: ['always true', 'always false', 'uncertain', 'probabilistic'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Deductive reasoning is _______.',
          options: ['specific → general', 'general → specific', 'random', 'uncertain'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Inductive reasoning is _______.',
          options: ['general → specific', 'specific → general', 'logic only', 'false reasoning'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Abductive reasoning is _______.',
          options: ['best explanation', 'deduction', 'planning', 'logic table'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Monotonic reasoning means _______.',
          options: ['old conclusions always valid', 'always changing', 'random', 'uncertain'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Non-monotonic reasoning deals with _______.',
          options: ['complete knowledge', 'incomplete knowledge', 'math only', 'graphs'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Posterior probability is _______.',
          options: ['before evidence', 'after evidence', 'fixed', 'unknown'],
          correct: 1,
          explanation: ''
        },
        // Section B: True/False (41-50)
        {
          question: 'Wumpus World is fully observable.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'KBA can update its knowledge base.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'BFS is always optimal.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Frames use slots and fillers.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Semantic networks use nodes and relationships.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Tautology is always false.',
          options: ['True', 'False'],
          correct: 1,
          explanation: ''
        },
        {
          question: 'Inductive reasoning goes from specific to general.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Production rules use IF-THEN logic.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Non-monotonic reasoning works with uncertainty.',
          options: ['True', 'False'],
          correct: 0,
          explanation: ''
        },
        {
          question: 'Knowledge-based agents cannot learn.',
          options: ['True', 'False'],
          correct: 1,
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
  questionText.textContent = `Q${currentQuestionIndex + 1}. ${question.question}`;
  
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
