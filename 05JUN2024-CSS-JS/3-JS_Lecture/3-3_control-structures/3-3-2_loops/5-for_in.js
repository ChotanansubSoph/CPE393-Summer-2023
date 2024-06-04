// Define an object with programming languages as keys and their popularity as values
let programmingLanguages = {
    "JavaScript": "Very popular for web development",
    "Python": "Widely used in data science and backend development",
    "Java": "Commonly used for enterprise applications",
    "C++": "Popular for system-level programming and game development",
    "Ruby": "Known for its simplicity and productivity"
  };
  
  // Print each programming language and its popularity
  console.log("💻 Popular Programming Languages\nat CPE KMUTT:\n");
  for (let language in programmingLanguages) {
    console.log(`🚀 -${language} = ${programmingLanguages[language]}`);
  }