const roadmaps = [
    {
        exam: 'GATE',
        description: 'Graduate Aptitude Test in Engineering (GATE) is an examination that primarily tests the comprehensive understanding of various undergraduate subjects in engineering and science. It is conducted jointly by the Indian Institute of Science and seven Indian Institutes of Technology.',
        subjects: [
            {
                name: 'Engineering Mathematics',
                syllabus: ['Linear Algebra', 'Calculus', 'Differential Equations', 'Complex Variables', 'Probability and Statistics', 'Numerical Methods'],
                steps: ['Understand the basic concepts thoroughly.', 'Practice solving problems from standard textbooks and previous years\' question papers.', 'Take online courses and tutorials for in-depth understanding and additional practice.']
            },
            {
                name: 'General Aptitude',
                syllabus: ['Verbal Ability', 'Numerical Ability'],
                steps: ['Work on improving your quantitative and verbal aptitude skills.', 'Practice solving general aptitude questions from previous years\' papers.', 'Utilize online resources and mock tests for practice and assessment.']
            },
            {
                name: 'Core Engineering Subjects',
                syllabus: ['Computer Science and Information Technology', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Electronics and Communication Engineering', 'Chemical Engineering', 'Biotechnology', 'Instrumentation Engineering', 'Agricultural Engineering', 'Architecture and Planning'],
                steps: ['Identify key topics within your discipline.', 'Study from standard textbooks and reference materials.', 'Solve problems and numericals to strengthen understanding and application.']
            }
        ],
        resources: ['Previous years\' question papers', 'Standard textbooks', 'Online courses and tutorials']
    },
    {
        exam: 'Placement Exams (Tech Companies)',
        description: 'Prepare for placement exams to secure job opportunities in top tech companies. These exams typically focus on assessing candidates\' technical knowledge, problem-solving abilities, and communication skills.',
        subjects: [
            {
                name: 'Data Structures and Algorithms',
                syllabus: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Dynamic Programming'],
                steps: ['Master fundamental data structures and algorithms concepts.', 'Practice solving problems on competitive coding platforms.', 'Participate in coding contests and challenges to improve speed and accuracy.']
            },
            {
                name: 'Coding',
                syllabus: ['Coding languages (e.g., C++, Java)', 'Problem-solving techniques'],
                steps: ['Practice coding regularly to improve proficiency and speed.', 'Solve coding problems from various sources such as online platforms and books.', 'Review and optimize code for efficiency and readability.']
            },
            {
                name: 'Technical and HR Interviews',
                syllabus: ['Technical questions related to your field', 'Behavioral questions'],
                steps: ['Prepare for technical interviews by revising core concepts and problem-solving techniques.', 'Practice solving interview questions and participate in mock interviews.', 'Work on improving communication and interpersonal skills for HR interviews.']
            }
        ],
        resources: ['Competitive coding platforms', 'Interview preparation books', 'Mock interviews']
    },
    {
        exam: 'Common Admission Test (CAT)',
        description: 'Common Admission Test (CAT) is a computer-based entrance exam for admission to various management programs offered by the Indian Institutes of Management (IIMs) and other top business schools in India.',
        subjects: [
            {
                name: 'Quantitative Aptitude',
                syllabus: ['Arithmetic', 'Algebra', 'Geometry', 'Number System', 'Modern Math'],
                steps: ['Learn and practice quantitative aptitude concepts thoroughly.', 'Solve questions from CAT preparation books and online resources.', 'Take regular mock tests to assess progress and identify areas for improvement.']
            },
            {
                name: 'Verbal Ability',
                syllabus: ['Reading Comprehension', 'Grammar and Usage', 'Vocabulary', 'Verbal Reasoning'],
                steps: ['Improve vocabulary and comprehension skills through regular reading.', 'Practice solving verbal ability questions from CAT preparation materials.', 'Work on time management and accuracy by taking timed practice tests.']
            },
            {
                name: 'Data Interpretation and Logical Reasoning',
                syllabus: ['Data Interpretation', 'Logical Reasoning'],
                steps: ['Familiarize yourself with different types of DI and LR questions.', 'Practice solving DI and LR sets from CAT preparation books and online resources.', 'Develop strategies for quick and accurate problem-solving during the exam.']
            }
        ],
        resources: ['CAT preparation books', 'Mock tests', 'Coaching classes']
    },
    {
        exam: 'Graduate Record Examination (GRE)',
        description: 'Graduate Record Examination (GRE) is a standardized test that is an admissions requirement for many graduate schools in the United States and other English-speaking countries. It assesses verbal reasoning, quantitative reasoning, and analytical writing skills.',
        subjects: [
            {
                name: 'Verbal Reasoning',
                syllabus: ['Reading Comprehension', 'Text Completion', 'Sentence Equivalence'],
                steps: ['Build vocabulary through regular reading and word lists.', 'Practice solving verbal reasoning questions from GRE preparation materials.', 'Take timed practice tests to improve speed and accuracy.']
            },
            {
                name: 'Quantitative Reasoning',
                syllabus: ['Arithmetic', 'Algebra', 'Geometry', 'Data Analysis'],
                steps: ['Review and practice fundamental math concepts including arithmetic, algebra, and geometry.', 'Solve quantitative reasoning questions from GRE preparation books and online resources.', 'Work on improving problem-solving skills and speed.']
            },
            {
                name: 'Analytical Writing',
                syllabus: ['Analyze an Issue', 'Analyze an Argument'],
                steps: ['Understand the structure and requirements of analytical writing tasks.', 'Practice writing essays on various topics under timed conditions.', 'Seek feedback from peers or mentors to improve writing skills.']
            }
        ],
        resources: ['GRE preparation books', 'Practice tests', 'Online resources']
    }
];

export default roadmaps;
