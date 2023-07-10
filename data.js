const questions = [
    {
      question: "What is the maximum length of a Python identifier?",
      answers: [
        { text: "32", correct: false },
        { text: "16", correct: false },
        { text: "128", correct: false },
        { text: "No fixed length is specified", correct: true },
      ],
    },
  
    {
      question:
        "What will be the output of the following code snippet? print(2**3 + (5 + 6)**(1 + 1))",
      answers: [
        { text: "129", correct: true },
        { text: "8", correct: false },
        { text: "121", correct: false },
        { text: "None of above", correct: false },
      ],
    },
  
    {
      question:
        "What will be the datatype of the var in the below code snippet?" +
        "var = 10" +
        "print(type(var))" +
        "var = 'Hello'" +
        "print(type(var))",
      answers: [
        { text: "str and int", correct: false },
        { text: "int and int", correct: false },
        { text: "str and str", correct: false },
        { text: "int and str", correct: true },
      ],
    },
  
    {
      question: "How is a code block indicated in Python?",
      answers: [
        { text: "brackets", correct: false },
        { text: "indentation", correct: true },
        { text: "key", correct: false },
        { text: "none of the above", correct: false },
      ],
    },
  
    {
      question:
        "What will be the output of the following code snippet?" +
        "a = [1, 2, 3]" +
        "a = tuple(a)" +
        "a[0] = 2" +
        "print(a)",
      answers: [
        { text: "[2,2,3]", correct: false },
        { text: "(2,2,3)", correct: false },
        { text: "[1,2,3]", correct: false },
        { text: "error", correct: true },
      ],
    },
  
    {
      question: "What will be the output of the following code snippet?" +
      "print(type(5 / 2))" +
      "print(type(5 // 2))",
      answers: [
        { text: "float and int", correct: true },
        { text: "int and float", correct: false },
        { text: "float and float", correct: false },
        { text: "int and int", correct: false },
      ],
    },
  
    {
      question: "What will be the output of the following code snippet?" +
  
      "a = [1, 2, 3, 4, 5]" +
      "sum = 01" + 
      "for ele in a:" + 
         "sum += ele " +
      "print(sum)",
      answers: [
        { text: "15", correct: true },
        { text: "0", correct: false },
        { text: "20", correct: false },
        { text: "None of these", correct: false },
      ],
    },
  
    {
      question: " Which of the following concepts is not a part of Python?",
      answers: [
        { text: "pointers", correct: true },
        { text: "loops", correct: false },
        { text: "dynamic typing", correct: false },
        { text: "All of above", correct: false },
      ],
    },
  
    {
      question: "Which of the following statements are used in Exception Handling in Python?",
      answers: [
        { text: "try", correct: false },
        { text: "except", correct: false },
        { text: "finally", correct: false },
        { text: "All of above", correct: true },
      ],
    },
  
    {
      question: "Which of the following types of loops are not supported in Python?",
      answers: [
        { text: "for", correct: false },
        { text: "while", correct: false },
        { text: "do while", correct: false },
        { text: "None od above", correct: true },
      ],
    },
  ]
  