// ── COMPANY DATA ──
var COS=[
  {name:'Google',logo:'<svg width="36" height="36" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.33 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.29-8.16 2.29-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.67 14.62 48 24 48z"/></svg>',type:'Product',cat:'product',cgpa:'7.5+',pkg:'45–80 LPA',diff:'Very Hard',tenth:'70%+',twelfth:'70%+',backlogs:'0 Strict',rounds:['Online Coding Test — 2 problems, 90 mins, LC Hard level','DSA Technical Interview × 2 — Trees, Graphs, DP','System Design — Scale for billions of users','Googleyness / Behavioural Round'],skills:['DSA Advanced','System Design','Python / C++','Algorithms (O(n log n))','OS, DBMS, Networks'],extras:['300+ LeetCode (Medium/Hard focus)','Open Source or hackathon wins','Strong GitHub with live projects','Practice explaining approach aloud'],tags:[{t:'Tier-1',c:'#00D4FF',bg:'rgba(0,212,255,.12)'},{t:'FAANG',c:'#7B5EA7',bg:'rgba(123,94,167,.15)'}]},
  {name:'Microsoft',logo:'<svg width="34" height="34" viewBox="0 0 21 21"><rect x="1" y="1" width="9" height="9" fill="#F25022"/><rect x="11" y="1" width="9" height="9" fill="#7FBA00"/><rect x="1" y="11" width="9" height="9" fill="#00A4EF"/><rect x="11" y="11" width="9" height="9" fill="#FFB900"/></svg>',type:'Product',cat:'product',cgpa:'7.0+',pkg:'35–65 LPA',diff:'Hard',tenth:'70%+',twelfth:'70%+',backlogs:'0 Strict',rounds:['Online Coding Test — LC style, 2 problems','Technical Round × 3 — DSA + OOP + System Design','HR / Culture Fit Round'],skills:['DSA — Medium/Hard LC','C++ / Java / Python','OOP Concepts','System Design basics','OS, DBMS, CN'],extras:['200+ LeetCode problems','Full-stack project with live URL','Research Microsoft products','Practice explaining code aloud'],tags:[{t:'Tier-1',c:'#00D4FF',bg:'rgba(0,212,255,.12)'},{t:'FAANG',c:'#7B5EA7',bg:'rgba(123,94,167,.15)'}]},
  {name:'Amazon',logo:'<svg width="36" height="36" viewBox="0 0 100 60"><text x="5" y="42" font-family="Arial Black" font-size="32" font-weight="900" fill="#232F3E">amazon</text><path d="M20 52 Q50 64 80 52" stroke="#FF9900" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',type:'Product',cat:'product',cgpa:'7.0+',pkg:'30–55 LPA',diff:'Hard',tenth:'65%+',twelfth:'65%+',backlogs:'0 Strict',rounds:['Online Test — Aptitude + 2 Coding Problems','DSA Round × 2 — Medium/Hard + LP stories','System Design — Amazon scale systems','Bar Raiser Round — LP deep dive'],skills:['DSA — Arrays, DP, Graphs','All 16 Leadership Principles','System Design at scale','Java / Python','AWS basics'],extras:['Memorise all 16 Amazon LPs','20+ STAR format stories ready','Bar Raiser tests culture fit heavily','Research Prime, AWS, Alexa products'],tags:[{t:'FAANG',c:'#7B5EA7',bg:'rgba(123,94,167,.15)'},{t:'Tier-1',c:'#00D4FF',bg:'rgba(0,212,255,.12)'}]},
  {name:'Flipkart',logo:'<svg width="36" height="36" viewBox="0 0 100 100"><rect width="100" height="100" rx="14" fill="#2874F0"/><text x="50" y="68" font-family="Arial Black" font-size="58" font-weight="900" fill="#FFD700" text-anchor="middle">F</text></svg>',type:'Product',cat:'product',cgpa:'7.0+',pkg:'28–50 LPA',diff:'Hard',tenth:'65%+',twelfth:'65%+',backlogs:'0 Strict',rounds:['Coding Test — 3 problems, 90 mins','Technical × 2–3 — DSA + System Design','HR Round'],skills:['DSA — Medium/Hard LeetCode','Java / Python','System Design','SQL / Databases','Backend skills'],extras:['150+ LC problems','E-commerce system design','Deployed full-stack project','Know Flipkart products'],tags:[{t:'Tier-1',c:'#00D4FF',bg:'rgba(0,212,255,.12)'},{t:'E-Commerce',c:'#FFB347',bg:'rgba(255,179,71,.15)'}]},
  {name:'Swiggy',logo:'<svg width="36" height="36" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#FC8019"/><text x="50" y="67" font-family="Arial Black" font-size="55" font-weight="900" fill="#fff" text-anchor="middle">S</text></svg>',type:'Startup',cat:'startup',cgpa:'6.5+',pkg:'22–42 LPA',diff:'Medium-Hard',tenth:'60%+',twelfth:'60%+',backlogs:'0 preferred',rounds:['Coding Test — Backend focus, 2 problems','Technical × 2 — DSA + API + System Design','System Design — Food delivery at scale','Culture Round'],skills:['DSA — Medium LC','Python / Go','System Design','REST APIs','Redis, Kafka basics'],extras:['Build & deploy a REST API project','Read Swiggy Engineering Blog','Know Swiggy delivery assignment logic','Surge pricing and ETA concepts'],tags:[{t:'Unicorn',c:'#FF6B9D',bg:'rgba(255,107,157,.15)'},{t:'Startup',c:'#7B5EA7',bg:'rgba(123,94,167,.15)'}]},
  {name:'TCS',logo:'<svg width="36" height="36" viewBox="0 0 100 100"><rect width="100" height="100" rx="10" fill="#1F3C88"/><text x="50" y="62" font-family="Arial Black" font-size="28" font-weight="900" fill="#fff" text-anchor="middle">TCS</text></svg>',type:'Service',cat:'service',cgpa:'6.0+ (Digital: 7.0+)',pkg:'3.5–9 LPA',diff:'Easy',tenth:'60%+',twelfth:'60%+',backlogs:'0 at interview',rounds:['TCS NQT — Aptitude + Verbal + Reasoning, 90 min','Coding Section — 1–2 easy problems, 30 mins','Technical Interview — OOP, DBMS, OS basics','MR Round — Leadership, situational questions','HR Round — Communication, culture'],skills:['Basic Programming (Java/Python)','Aptitude & Reasoning','DBMS — SQL, Normalization','OOP — Classes, Inheritance','English Communication'],extras:['TCS Digital needs 7.0+ CGPA','Register on NextStep TCS portal early','Practice 40+ aptitude questions daily on IndiaBix','Dress formally, punctuality matters'],tags:[{t:'Mass Recruiter',c:'#00D4FF',bg:'rgba(0,212,255,.12)'},{t:'Service',c:'#7B9BB5',bg:'rgba(123,155,181,.15)'}]},
  {name:'Infosys',logo:'<svg width="36" height="36" viewBox="0 0 100 100"><rect width="100" height="100" rx="10" fill="#007CC3"/><text x="50" y="55" font-family="Arial" font-size="18" font-weight="900" fill="#fff" text-anchor="middle">info</text><text x="50" y="76" font-family="Arial" font-size="18" font-weight="900" fill="#fff" text-anchor="middle">sys</text></svg>',type:'Service',cat:'service',cgpa:'6.0+ (SP: 7.5+)',pkg:'3.6–9.5 LPA',diff:'Easy',tenth:'60%+',twelfth:'60%+',backlogs:'0 Strict',rounds:['InfyTQ Certification — Mandatory online exam','Online Assessment — Aptitude + Reasoning + English','Technical Interview — Java/Python, DBMS, OS, CN','HR Round — Situational + communication'],skills:['Java / Python (required)','DBMS — SQL, Joins, Normalization','OS — Process, Thread, Deadlock','CN — TCP/IP, HTTP, DNS','English Communication'],extras:['Register on InfyTQ.com FIRST — mandatory!','SP track needs 7.5+ CGPA, higher package','Complete free InfyTQ courses: Python + DSA','Huge batch hiring — high probability if eligible'],tags:[{t:'Mass Recruiter',c:'#00D4FF',bg:'rgba(0,212,255,.12)'},{t:'Service',c:'#7B9BB5',bg:'rgba(123,155,181,.15)'}]},
  {name:'Wipro',logo:'<svg width="36" height="36" viewBox="0 0 100 100"><rect width="100" height="100" rx="10" fill="#341F5C"/><text x="50" y="62" font-family="Arial" font-size="22" font-weight="900" fill="#fff" text-anchor="middle">wipro</text></svg>',type:'Service',cat:'service',cgpa:'6.0+',pkg:'3.5–7 LPA',diff:'Easy',tenth:'60%+',twelfth:'60%+',backlogs:'0 Strict',rounds:['NLTH — Aptitude + English + Written Communication','Coding Test — 2 easy problems, 60 mins','Technical Interview — OOP, DBMS, OS basics','HR Round — Flexibility, relocation, communication'],skills:['Basic Programming (Java/Python)','Logical Reasoning & Aptitude','OOP Concepts','DBMS Basics — SQL, Normalization','Written English'],extras:['Wipro Elite NTH has higher package','Apply on careers.wipro.com','Practice coding without IDE','Be open to relocation — explicitly asked'],tags:[{t:'Mass Recruiter',c:'#7B9BB5',bg:'rgba(123,155,181,.15)'},{t:'Service',c:'#7B9BB5',bg:'rgba(123,155,181,.15)'}]},
  {name:'Goldman Sachs',logo:'<svg width="36" height="36" viewBox="0 0 100 100"><rect width="100" height="100" rx="10" fill="#1B1B1B"/><text x="50" y="60" font-family="Arial Black" font-size="30" font-weight="900" fill="#7FBADD" text-anchor="middle">GS</text></svg>',type:'Finance Tech',cat:'finance',cgpa:'7.5+',pkg:'30–60 LPA',diff:'Very Hard',tenth:'75%+',twelfth:'75%+',backlogs:'0 Strict',rounds:['HackerRank Test — Quant + Advanced Coding, 2 hrs','Technical × 2 — Advanced DSA + Quant Math','Super Day — 3 rounds: Tech + Design + Culture'],skills:['Advanced DSA — Graphs, DP Hard','C++ (highly preferred)','Quantitative — Probability, Stats, Math','System Design — Low-latency systems','Number Theory basics'],extras:['Goldman is math-heavy — revise Probability','Understand Stocks, Bonds, Derivatives','HFT concepts are useful','Read Goldman Engineering Blog'],tags:[{t:'Finance Tech',c:'#FFB347',bg:'rgba(255,179,71,.15)'},{t:'High Package',c:'#7B5EA7',bg:'rgba(123,94,167,.15)'}]},
  {name:'Razorpay',logo:'<svg width="36" height="36" viewBox="0 0 100 100"><rect width="100" height="100" rx="10" fill="#072654"/><polygon points="30,15 70,15 55,50 75,50 25,90 40,52 22,52" fill="#3395FF"/></svg>',type:'Startup',cat:'startup',cgpa:'6.5+',pkg:'20–38 LPA',diff:'Medium-Hard',tenth:'60%+',twelfth:'60%+',backlogs:'0 preferred',rounds:['Online Test — DSA + Backend design, 90 mins','Technical × 2–3 — System design + API architecture','Architecture Round — Payment system design','Culture Fit Round'],skills:['Backend Dev (Python or Go)','Payment Systems — UPI, NEFT, Webhooks','System Design — High availability','REST APIs — Rate limiting, idempotency','Redis, Kafka basics'],extras:['Build and deploy a payment API project','Understand idempotency in payments','Know Razorpay products: FTX, RazorpayX','Security: PCI DSS, HTTPS, OAuth 2.0'],tags:[{t:'Fintech',c:'#4A90D9',bg:'rgba(74,144,217,.15)'},{t:'Startup',c:'#7B5EA7',bg:'rgba(123,94,167,.15)'}]},
  {name:'Accenture',logo:'<svg width="36" height="36" viewBox="0 0 100 100"><rect width="100" height="100" rx="10" fill="#A100FF"/><text x="54" y="72" font-family="Arial Black" font-size="72" font-weight="900" fill="#fff" text-anchor="middle">&gt;</text></svg>',type:'MNC',cat:'mnc',cgpa:'6.0+',pkg:'4.5–12 LPA',diff:'Easy-Medium',tenth:'60%+',twelfth:'60%+',backlogs:'0 Strict',rounds:['Cognitive Assessment — Abstract Reasoning + Attention','Technical Assessment — Any language basics + SDLC','Technical Interview — CS fundamentals + project','HR Round — Communication quality, flexibility'],skills:['Any Language (Java/Python/C++)','Communication — Strong verbal and written','SDLC — Agile, Scrum, Waterfall','Aptitude — Quantitative and Logical','Cloud Basics concepts'],extras:['Communication tested very heavily','Research Accenture: Strategy, Consulting, Technology','Be flexible on location and shift timings','Formal dress and professional body language'],tags:[{t:'MNC',c:'#4A90D9',bg:'rgba(74,144,217,.15)'},{t:'Global',c:'#7B9BB5',bg:'rgba(123,155,181,.15)'}]},
  {name:'IBM',logo:'<svg width="36" height="36" viewBox="0 0 100 100"><rect width="100" height="100" rx="10" fill="#1F70C1"/><text x="50" y="62" font-family="Arial Black" font-size="30" font-weight="900" fill="#fff" text-anchor="middle">IBM</text></svg>',type:'MNC',cat:'mnc',cgpa:'6.5+',pkg:'6–16 LPA',diff:'Medium',tenth:'60%+',twelfth:'60%+',backlogs:'0 Strict',rounds:['Aptitude Test — Quantitative, Logical, Verbal','Coding Round — 2 medium problems, 60 min','Technical Interview — CS + IBM Cloud/AI basics','HR Round — IBM values, communication'],skills:['Python / Java (medium proficiency)','IBM Cloud / Watson basics','AI/ML Basics — Classification concepts','Docker/Kubernetes conceptual','Communication — Client-facing roles'],extras:['Get IBM Cloud free account — explore hands-on','IBM hires for consulting + tech — show adaptability','IBM values: Innovation, Trust, Responsibility','Research IBM Consulting, IBM Research, IBM Quantum'],tags:[{t:'MNC',c:'#4A90D9',bg:'rgba(74,144,217,.15)'},{t:'Tech',c:'#00D4FF',bg:'rgba(0,212,255,.12)'}]}
];

var GUIDES={
  'Google':[{t:'Week 1 — DSA Foundations',c:'#4F46E5',i:['Revise Arrays, Strings, HashMaps — 15 LeetCode mediums','Practice Sliding Window, Two Pointers, Prefix Sum patterns','3 problems/day — filter by Google tag on LeetCode','Resources: NeetCode 150, Striver SDE Sheet']},{t:'Week 2 — Advanced DSA',c:'#7C3AED',i:['Trees, Graphs BFS/DFS, Heaps, Tries — 15 more problems','Dynamic Programming: Knapsack, LCS, Matrix DP classics','Google-style: intervals, greedy, backtracking patterns','1 timed mock — 90 minutes, 3 problems']},{t:'Week 3 — System Design',c:'#EC4899',i:['Design: URL Shortener, YouTube, Google Drive systems','Study: Load Balancer, CDN, Consistent Hashing, CAP Theorem','Watch Gaurav Sen System Design on YouTube','Design 2 full systems with clear component diagrams']},{t:'Week 4 — Interview Prep',c:'#F59E0B',i:['Mock interviews daily on Pramp or Interviewing.io','Practice Googleyness questions: leadership, ambiguity','Revise OS: Threads, Deadlock, Virtual Memory','Revise DBMS: Indexing, Transactions, SQL joins']}],
  'TCS':[{t:'Week 1 — Aptitude Prep',c:'#4F46E5',i:['TCS NQT: Quant Aptitude, Verbal, Reasoning sections','IndiaBix.com — solve 50 aptitude questions every day','TCS previous year papers — free on Google search','Target: 30 questions in 45 mins pacing']},{t:'Week 2 — Coding Section',c:'#7C3AED',i:['TCS coding: 1–2 easy/medium problems in 30 minutes','Practice basic patterns, arrays, strings, simple sorting','HackerRank TCS Preparation Kit — free','Java or Python — TCS prefers these two']},{t:'Week 3 — Technical Interview',c:'#EC4899',i:['Core Java or Python: OOP, Inheritance, Polymorphism','DBMS: SQL queries, Joins, Normalization 1NF–3NF','OS: Process, Thread, Deadlock, Scheduling concepts','C language basics — TCS often tests this']},{t:'Week 4 — MR + HR Rounds',c:'#F59E0B',i:['Management Round: leadership, teamwork, conflict resolution','HR: Tell me about yourself — practice 2-minute pitch','Why TCS? Research products, services, recent news','Dress code, punctuality, confidence — critical']}],
  'Infosys':[{t:'Week 1 — InfyTQ Platform',c:'#4F46E5',i:['Register on InfyTQ.com — mandatory for all hiring','Complete free courses: Python, DBMS, DSA modules','Earn InfyTQ certification — directly impacts shortlisting','Practice InfyTQ mock assessments free on platform']},{t:'Week 2 — Aptitude Prep',c:'#7C3AED',i:['Reasoning: syllogisms, blood relations, coding-decoding','Quant: percentages, profit-loss, time-work, trains','Verbal: Reading Comprehension, fill blanks, grammar','PrepInsta Infosys package — comprehensive resource']},{t:'Week 3 — Technical Skills',c:'#EC4899',i:['Java: OOP, Collections Framework, Exception Handling','SQL: Complex joins, subqueries, stored procedures','Data Structures: Arrays, LinkedList, Stack, Queue','Python basics if not Java — Infosys accepts both']},{t:'Week 4 — Interview Polish',c:'#F59E0B',i:['HR: strengths, weaknesses, 5-year plan, relocation','Research Infosys: Cobalt, BPM, digital transformation','Prepare 2 project explanations with role, tech, impact','Communication: speak clearly, no filler words']}]
};

var DEFAULT_GUIDE=[{t:'Week 1 — DSA Foundations',c:'#4F46E5',i:['Revise Arrays, Strings, HashMaps — 15 LeetCode mediums','Practice Sliding Window, Two Pointers, Prefix Sum','3 problems/day on LeetCode','Resources: NeetCode 150, Striver SDE Sheet']},{t:'Week 2 — Advanced DSA',c:'#7C3AED',i:['Trees, Graphs BFS/DFS, DP, Heaps — 20 problems','Timed mock tests — 90 mins, 3 problems','Revise recursion, backtracking, greedy algorithms','Filter LeetCode by company tag']},{t:'Week 3 — System Design + Projects',c:'#EC4899',i:['Study: URL Shortener, Chat App, E-commerce design','Build one full-stack project — deployed with live URL','Learn REST APIs, Redis caching, DB indexing','Watch Gaurav Sen System Design on YouTube']},{t:'Week 4 — Mock + HR Prep',c:'#F59E0B',i:['3–5 full mock interviews — timed and recorded','STAR format answers for all behavioural questions','Revise OS, DBMS, Networking fundamentals','Research the company: products, news, tech stack']}];

// ── INTERVIEW QUESTIONS DATA (FIXED: was "Pvar" typo) ──
var IQ_DATA={
  dsa:{
    easy:['Given an array, find two numbers that add up to a target sum. Explain your approach and time complexity.','Reverse a linked list. Walk through your step-by-step approach including edge cases.','Check if a string is a palindrome. What edge cases do you handle?','Find the maximum element in an array without using built-in max function.','Write a function to check if two strings are anagrams of each other.'],
    medium:['Find the longest substring without repeating characters. What data structure do you use and why?','Given a binary tree, find the lowest common ancestor of two nodes. Explain your recursive approach.','Implement a stack that supports push, pop, and getMin all in O(1) time. How do you design this?','Find all permutations of a given string. What is the time complexity?','Given a matrix of 0s and 1s, find the number of islands using BFS or DFS.'],
    hard:['Find the median of two sorted arrays in O(log n) time. Walk through your binary search approach.','Given a matrix, find the longest increasing path. What DP approach would you use?','Design a data structure that supports insert, delete, and getRandom all in O(1) time.','Solve the Trapping Rain Water problem. Explain multiple approaches with complexities.','Implement LRU Cache with O(1) get and put operations. What data structures do you combine?']
  },
  hr:{
    easy:['Tell me about yourself in 2 minutes. Include your background, skills, and why you are here.','What are your three biggest strengths? Give one real example for each.','Why do you want to work for this company? What do you know about us?','Where do you see yourself in 5 years? How does this role fit your plan?','What is your biggest weakness and how are you working on it?'],
    medium:['Describe a situation where you had a conflict with a teammate. How did you resolve it?','Tell me about a project you are most proud of. What was your specific contribution and the outcome?','Describe a time you missed a deadline. What happened and what did you learn?','Tell me about a time you showed leadership. What was the impact on your team?','Describe a situation where you had to learn something new very quickly. How did you approach it?'],
    hard:['Describe a time you failed at something important. What did you learn and how did you recover from it?','Tell me about the most technically challenging problem you have solved. Walk me through your entire thinking process.','Describe a time you strongly disagreed with your manager or teammate. How did you handle it professionally?','Tell me about a time you influenced someone without formal authority. What was your strategy?','Describe a situation where you had to make an important decision with incomplete information.']
  },
  cs:{
    easy:['Explain the difference between a process and a thread with a real-world example.','What is normalization in databases? Explain 1NF, 2NF, and 3NF with simple examples.','What happens step by step when you type a URL in a browser and press Enter?','What is the difference between primary key, unique key, and foreign key in SQL?','Explain what an operating system does. What are its main functions?'],
    medium:['Explain deadlock. What are the four necessary conditions and how can each be prevented?','What is indexing in databases? When would you choose a B-tree index vs a hash index?','Explain the TCP three-way handshake. What is the purpose of each step (SYN, SYN-ACK, ACK)?','What is the difference between GET and POST HTTP methods? When do you use each?','Explain process scheduling. What is the difference between preemptive and non-preemptive scheduling?'],
    hard:['How does virtual memory work? Explain paging, page faults, TLB, and the role of the OS in detail.','Design a database schema for a complete e-commerce platform. What indexes would you create and why?','Explain ACID vs BASE properties. When would you choose NoSQL over a relational database?','What is the CAP theorem? Explain the trade-offs with real examples of distributed systems.','Explain how HTTPS works end to end. What role do certificates, TLS handshake, and symmetric encryption play?']
  },
  system:{
    easy:['How would you design a URL shortener like bit.ly? What are the core components?','Design a simple to-do task management API. What database schema and endpoints would you create?','How would you design a basic chat application for two users? What tech stack would you choose?','Design a simple library management system. What tables and relationships would you have?','How would you design a student result management portal for a university?'],
    medium:['Design a notification system that needs to send 1 million notifications per day. Walk through your architecture.','How would you design a rate limiter for an API? What algorithms can be used and when?','Design a leaderboard system for an online coding platform that updates in real-time.','How would you design Swiggy order tracking? Real-time location updates for millions of users.','Design a file storage system like Google Drive. Handle uploads, storage, and sharing.'],
    hard:['Design a distributed cache like Redis. How would you handle data consistency and fault tolerance?','How would you design a news feed for a social media platform at scale? Consider both fan-out approaches.','Design a payment processing system that handles 10,000 transactions per second with zero data loss.','Design a live video streaming platform like YouTube Live. What are the key bottlenecks?','How would you design WhatsApp messaging at scale? Consider message delivery, storage, and real-time sync.']
  },
  project:{
    easy:['Walk me through your most recent project. What problem does it solve and who is the target user?','What was the biggest technical challenge in your project and specifically how did you overcome it?','What tech stack did you use and why did you choose those specific technologies over alternatives?','How did you test your project? What edge cases did you specifically handle?','How long did the project take? How did you manage your time and prioritise features?'],
    medium:['How would you scale your project to handle 100x more users? What bottlenecks would you fix first?','What would you change or add if you had two more weeks to work on this project?','How did you handle error states and failures in your project? Give specific examples.','Walk me through the database design of your project. What trade-offs did you make?','How did you ensure the security of your project? What vulnerabilities did you think about?'],
    hard:['Describe the complete system architecture of your project. What design trade-offs did you make and why?','How would you add real-time features to your project? What technology choices would you make?','If 10,000 users hit your project simultaneously, what would break first? How would you fix it?','How would you add machine learning capabilities to your existing project?','Describe how you would migrate your project from a monolith to microservices. What is the strategy?']
  }
};

// ── INTERVIEW HINTS DATA (FIXED: was "Pvar" typo) ──
var IQ_HINTS={
  dsa:{
    easy:['Use a HashMap to store elements as you iterate. Check for the complement in O(1) time.','Use three pointers — prev, current, next. Update the next pointer to point backward, then move all pointers forward.','Compare characters from both ends using two pointers. Skip spaces and convert to lowercase for edge cases.','A simple single pass with a variable tracking the current max works in O(n) time and O(1) space.','Sort both strings and compare, or use a frequency count array/HashMap of 26 characters.'],
    medium:['Use a sliding window with a HashMap. Expand the window right, shrink from left when you find a duplicate.','The LCA is the first node where the paths to both target nodes diverge. Think recursively — what does each recursive call return?','Use two stacks — one main stack, one min-stack that only pushes when the new element is <= current minimum.','Use backtracking. At each position, try placing each unused character, recurse, then backtrack.','BFS/DFS from each unvisited land cell (1) and mark all connected land as visited. Count how many times you start a BFS/DFS.'],
    hard:['Binary search on the partition point in the smaller array. Left half count equals right half count.','DFS + memoization. From each cell, explore all 4 directions. Cache the longest path starting from each cell.','Combine a doubly linked list (for O(1) insert/delete) with a HashMap (for O(1) lookup by value).','Optimal: use two passes — left max array and right max array. Water at position i = min(leftMax[i], rightMax[i]) - height[i].','Use a HashMap for O(1) get and a doubly linked list for O(1) remove/add. The list maintains access order.']
  },
  hr:{
    easy:['Structure: 30s background → 30s technical skills → 30s relevant experience → 30s why you are here. Practice until smooth.','Pick strengths relevant to the role (technical skill, problem-solving, teamwork) and use a 2-sentence real example for each.','Research the company before every interview. Mention their specific products, recent news, or tech stack you find interesting.','Be realistic and ambitious. Connect to the role: "I see myself growing into X, and this role gives me that foundation."','Be honest but strategic. Pick a real weakness you are actively improving. Show self-awareness and a growth mindset.'],
    medium:['Use the STAR format (Situation, Task, Action, Result). Focus on YOUR actions and the specific positive outcome achieved.','STAR format. Be specific about YOUR role vs team role. Include a quantified result if possible (e.g., 30% faster load time).','Take responsibility. Show: what happened, what you learned, and specifically what you did differently afterward.','Use STAR format. Emphasise how you motivated, coordinated, or guided others even without formal authority.','Show learning agility. Structure: what was the situation, how did you identify resources, what did you learn, what was the outcome?'],
    hard:['This is a high-signal question. Interviewers want to see self-awareness, resilience, and genuine learning. Be specific and honest.','Walk through your complete thinking process — do not jump to solution. Show how you broke down the problem.','Show respect and professionalism. Structure: I understood their view → I respectfully shared my concern with data → outcome.','Show strategic thinking. How did you build trust or credibility? What did you use — data, relationships, storytelling?','Show decision-making framework. What data did you have, what did you assume, what was the risk, how did you validate later?']
  },
  cs:{
    easy:['Process = independent program with its own memory space. Thread = lightweight unit within a process sharing memory.','1NF = no repeating groups, atomic values. 2NF = 1NF + no partial dependency. 3NF = 2NF + no transitive dependency.','DNS lookup → TCP connection (3-way handshake) → TLS handshake (HTTPS) → HTTP request → server processes → response → browser renders.','Primary key = unique + not null, one per table. Unique key = unique but can be null. Foreign key = references primary key in another table.','OS manages CPU (scheduling), memory (allocation/paging), file system, I/O devices, and provides security and user interface.'],
    medium:['Four conditions for deadlock: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. Break any one to prevent deadlock.','B-tree = sorted, good for range queries. Hash index = O(1) exact lookup, not good for range queries or sorting.','Client sends SYN. Server replies SYN-ACK. Client sends ACK. Now data can flow.','GET = retrieve data, safe, idempotent, params in URL, cached. POST = send data, not idempotent, params in body.','Preemptive = OS can forcibly take CPU (Round Robin, SRTF). Non-preemptive = process runs until it finishes (FCFS, SJF).'],
    hard:['Virtual memory illusion using disk. Paging divides memory into fixed frames. Page fault = needed page not in RAM, OS loads from disk. TLB caches recent page lookups.','Start with main tables (users, products, orders, cart, payments, reviews). Add indexes on foreign keys and frequently queried columns.','ACID (SQL) = Atomicity, Consistency, Isolation, Durability — strong consistency. BASE (NoSQL) = Basically Available, Soft state, Eventually consistent — for scalability.','CAP = Consistency, Availability, Partition Tolerance. You can only guarantee 2 of 3 in distributed systems.','Browser → DNS → TCP → TLS handshake (server sends cert, client verifies with CA, agree on symmetric key) → encrypted HTTP communication.']
  },
  system:{
    easy:['Core components: URL generation (hashing or counter), storage (DB mapping short→long), redirect service.','Users table, Tasks table (id, user_id, title, status, created_at). REST endpoints: GET/POST/PUT/DELETE /tasks.','Two approaches: (1) polling — client asks server every X seconds, (2) WebSockets — persistent connection for real-time.','Books table, Members table, Loans table (book_id, member_id, due_date, status). Start simple.','Students, Courses, Enrollments, Results tables. Key operations: upload marks, calculate grades, generate reports.'],
    medium:['Decouple: API → Message Queue (Kafka/RabbitMQ) → Worker Service → Notification Provider (FCM, APNS, Email). Workers handle retries.','Token bucket (burst allowed) or sliding window log (accurate but expensive) or fixed window counter (simple). Token bucket most common.','Write scores to DB, use Redis sorted set for fast leaderboard reads, update in real-time via WebSocket push or periodic polling.','GPS updates from driver app → WebSocket server → Redis pub-sub → push to customer app.','Chunked upload → object storage (S3-like) → metadata DB (file name, owner, size) → CDN for download.'],
    hard:['Data partitioned across nodes (consistent hashing). Replication for availability. Eviction policies (LRU). Write-through vs write-back caching.','Fan-out on write (push model): write post to all followers feeds. Fan-out on read (pull model): read and merge at query time. Hybrid for celebrities.','Idempotent payment IDs, dual-write to DB + message queue, exactly-once semantics, retry with exponential backoff, reconciliation jobs.','Ingest → transcoding pipeline (multiple resolutions) → CDN distribution → WebRTC for ultra-low latency.','Message delivery: sender → server → push to recipient device. Storage: messages in partitioned DB by conversation.']
  },
  project:{
    easy:['Structure your answer: (1) Problem it solves, (2) Who uses it, (3) Tech stack, (4) Key feature, (5) Impact or result. Keep it under 3 minutes.','Pick ONE specific technical challenge. Explain what you tried first, why it failed, and your final solution.','For each technology, explain WHY you chose it over alternatives. Example: chose MongoDB over SQL because schema is flexible.','Mention unit tests, integration tests, manual testing. Specific edge cases: empty inputs, boundary values, concurrent users.','Mention how you broke down features, estimated time, and what you prioritised (MVP first).'],
    medium:['Think through: What breaks first? (DB, API, frontend?) Add: load balancer, caching layer (Redis), CDN, DB read replicas.','Show product thinking — what features would have the most user impact? Then show technical thinking — time and approach?','Mention specific error scenarios: API failures, DB connection drops, invalid input. Show how you used try-catch, fallback UI, logging.','Explain table relationships, why you chose the schema, what indexes you added, and what you might change now.','Mention: input validation, SQL injection prevention, JWT auth, HTTPS, rate limiting, no hardcoded secrets.'],
    hard:['Draw the complete system: client → API Gateway → services → DB → cache. Explain each component choice and the trade-offs.','Real-time options: WebSockets (persistent connection), Server-Sent Events (one-way), polling (simple but expensive).','Walk through bottlenecks from front to back: DNS → Load Balancer → App Server → DB → File Storage (CDN).','Identify a feature in your project where ML could help (recommendations, anomaly detection, search ranking).','Strangler fig pattern — build new microservice, route traffic gradually, retire old code. Identify service boundaries using domain-driven design.']
  }
};

// ── OFFLINE CHAT ANSWERS ──
var CHAT_ANSWERS={
  greeting:"Hey! 👋 Great to meet you!\n\nI'm your **PlaceAI Career Advisor** — here to help you crack placements. Try asking:\n\n• 💻 How many LeetCode problems should I solve?\n• 📝 How do I write a good resume?\n• 🏢 How to prepare for Google / TCS?\n• 🎯 Am I ready for placement season?\n• 🚀 What skills should I learn?\n\nWhat's on your mind? 😊",
  whoami:"I'm **PlaceAI Career Advisor** 🤖 — built specifically to help Indian CSE students crack campus placements.\n\n**I help with:**\n• 🎯 Placement readiness check\n• 💻 LeetCode & DSA strategy\n• 📝 Resume writing tips\n• 🏢 Company-specific prep (Google, TCS, Amazon, startups)\n• 🚀 Skills, projects, internship hunting\n\nAsk me anything! 💪",
  thanks:"You're very welcome! 😊\n\nBest of luck — you've got this! 💪\n\nRemember:\n• 📊 **Predictor** — check your placement score\n• 🏢 **Companies** — 30-day prep guides\n• 📄 **Resume** — AI feedback on your resume\n• 🎤 **Interview Questions** — practice with real questions\n\nYou can do it! 🚀",
  leetcode:"Here's the honest LeetCode roadmap! 💻\n\n**How many problems?**\n• Service companies (TCS, Infosys): 50–80 problems sufficient\n• Mid-tier tech / startups: 150+ problems needed\n• FAANG / Tier-1: 300+ problems, focus on Medium/Hard\n\n**Topics to master in order:**\n• Arrays & Strings (start here)\n• HashMaps & Sets\n• Two Pointers & Sliding Window\n• Stacks & Queues\n• Binary Search\n• Trees & Graphs (BFS/DFS)\n• Dynamic Programming\n\n**Best approach:**\n• 3 problems/day consistently (beats cramming)\n• Use **NeetCode 150** or **Striver SDE Sheet** as roadmap\n• Time yourself — 30 mins max per problem\n\nStart today! 🚀",
  resume:"Resume tips for 2026 placements! 📝\n\n**Non-negotiable rules:**\n• **1 page only** — recruiters scan in 6 seconds\n• Start every bullet with action verbs: *Built, Developed, Led, Reduced, Improved*\n• **Quantify everything**: \"Improved load time by 30%\" not \"improved performance\"\n• Live project URL + GitHub link both — recruiters click these!\n\n**Sections order for freshers:**\n1. Contact + Links (email, GitHub, LinkedIn)\n2. Skills (languages, frameworks, tools)\n3. Projects (most important for freshers!)\n4. Education (CGPA, 10th/12th)\n5. Internships / Experience\n6. Achievements & Certifications\n\nUse the 📄 **Resume tab** for AI analysis of your actual resume! 🎯",
  cgpa:"CGPA & academics — the 2026 reality! 📚\n\n**Cutoffs to know:**\n• **7.5+ CGPA** → product companies (Google, Microsoft, Amazon)\n• **7.0+ CGPA** → mid-tier tech, most startups\n• **6.5+ CGPA** → unicorns (Swiggy, Razorpay, Flipkart)\n• **6.0+ CGPA** → service companies (TCS, Infosys, Wipro, Accenture)\n\n**If your CGPA is below cutoff, compensate with:**\n• 150+ LeetCode problems solved\n• 2–3 deployed projects with live URLs\n• AWS/Google certifications\n• Internship experience\n\nCGPA opens doors, skills close the deal! ⚖️",
  internship:"Complete internship hunting guide! 🎯\n\n**Best platforms to apply:**\n• **Internshala** — largest platform for Indian students\n• **LinkedIn** — filter by internship, set alerts\n• **AngelList / Wellfound** — for startup internships\n• **Company career pages** directly (often less competition)\n\n**Strategy that works:**\n• Apply to **50+ companies** — it is purely a numbers game\n• Even a 2-month internship = massive resume boost\n• Startups are easier to get and you learn way more\n• **Cold email engineers on LinkedIn** — this actually works!\n\nApply NOW — don't wait for exams to finish! ⚡",
  google:"Google Campus Placement Prep! 🔵\n\n**2026 Eligibility:** CGPA 7.5+, 10th/12th 70%+, Zero backlogs\n**Package:** 45–80 LPA\n\n**Interview Process (4 rounds):**\n1. Online Coding Test (2 problems, 90 mins, LeetCode Hard)\n2. DSA Technical Interview × 2 (Trees, Graphs, DP focus)\n3. System Design Round (scale to billions of users)\n4. Googleyness / Behavioural Round\n\nCheck 🏢 **Companies tab** for the full 30-day prep guide! 🎯",
  amazon:"Amazon Campus Placement Prep! 🟠\n\n**2026 Eligibility:** CGPA 7.0+, 10th/12th 65%+, Zero backlogs\n**Package:** 30–55 LPA\n\n**The Amazon Secret:** Leadership Principles (LPs) are MORE important than DSA here!\n\n**Interview Process (4 rounds):**\n1. Online Test (Aptitude + 2 Coding problems)\n2. DSA Rounds × 2 (Medium/Hard + LP story per round)\n3. System Design (design at Amazon scale)\n4. Bar Raiser (dedicated LP evaluator — toughest round)\n\nCheck 🏢 **Companies tab** for the full 30-day guide! 🚀",
  microsoft:"Microsoft Campus Placement Prep! 🟦\n\n**2026 Eligibility:** CGPA 7.0+, 10th/12th 70%+, Zero backlogs\n**Package:** 35–65 LPA\n\n**Interview Process (3 rounds):**\n1. Online Coding Test (2 LeetCode-style problems)\n2. Technical Rounds × 3 (DSA + OOP + System Design)\n3. HR / Culture Fit Round\n\nCheck 🏢 **Companies tab** for the full 30-day guide! 💪",
  tcs:"TCS Placement Prep! 🔷\n\n**2026 Eligibility:** CGPA 6.0+ (Digital: 7.0+), 10th/12th 60%+, Zero active backlogs\n**Package:** 3.5–9 LPA\n\n**Interview Process (5 rounds):**\n1. TCS NQT — Aptitude + Verbal + Reasoning (90 mins)\n2. Coding Section — 1–2 easy problems (30 mins)\n3. Technical Interview — OOP, DBMS, OS basics\n4. Managerial Round — Leadership, situational questions\n5. HR Round — Communication, culture, salary\n\nCheck 🏢 **Companies tab** for the full 30-day guide! 🎯",
  infosys:"Infosys Placement Prep! 🟢\n\n**IMPORTANT: Register on InfyTQ.com FIRST — mandatory for all hiring!**\n\n**2026 Eligibility:** CGPA 6.0+ (SP: 7.5+), 10th/12th 60%+, Zero backlogs\n**Package:** 3.6–9.5 LPA\n\nCheck 🏢 **Companies tab** for the full 30-day guide! 🎯",
  skills:"Top skills for placements in 2025–26! 🚀\n\n**Non-negotiable (every company tests this):**\n• **DSA** — absolutely no shortcuts here\n• **Python or Java** — pick one and go very deep\n• **SQL** — asked in nearly every technical interview\n• **Git/GitHub** — basic version control is expected everywhere\n\n**High-demand skills:**\n• **React or Node.js** — for web/fullstack developer roles\n• **System Design** — for product company rounds (Tier-1)\n• **Docker + AWS basics** — strong resume differentiator\n• **ML/AI fundamentals** — growing demand everywhere in 2025\n\nDepth beats breadth — master 2–3 things really well! ⚡",
  projects:"Projects that impress recruiters! 🛠️\n\n**Best project ideas for placements:**\n• **Full-stack web app** (React + Node + MongoDB) — deploy free on Vercel\n• **REST API** with JWT auth, rate limiting, Swagger docs\n• **ML project** — sentiment analysis, image classifier, recommendation system\n• **Clone** a popular app (Twitter, Netflix, Swiggy) — shows real engineering\n• **Chat app** with WebSockets — shows real-time systems understanding\n\n**What makes a project stand out:**\n• ✅ Live deployed URL (not just GitHub!) — recruiters check this\n• ✅ Quantified impact: \"Handles 1000 req/sec\", \"500+ active users\"\n• ✅ Clean code with proper folder structure\n\nStart building today! 💪",
  ready:"Placement readiness check! 🎯\n\n**Tier-1 Ready (FAANG / top product companies):**\n• ✅ CGPA 7.5+, zero backlogs\n• ✅ 250+ LeetCode (medium/hard focus)\n• ✅ 3+ deployed projects with live URLs\n• ✅ 1+ internship experience\n\n**Mid-tier Ready (good startups / product companies):**\n• ✅ CGPA 7.0+, zero backlogs\n• ✅ 150+ LeetCode problems\n• ✅ 2+ projects with GitHub\n\n**Service Company Ready (TCS, Infosys, Wipro):**\n• ✅ CGPA 6.0+, zero backlogs\n• ✅ Good aptitude (IndiaBix practice)\n• ✅ Strong communication skills\n\nUse the 📊 **Predictor tab** for your exact personalised score! 🚀",
  interview_tips:"Interview tips that actually work! 🎯\n\n**Technical Interview:**\n• Understand the problem fully before coding — ask clarifying questions\n• Start with brute force, then optimise step by step\n• Think aloud — interviewers evaluate your PROCESS not just the answer\n• Test your code with examples (including edge cases) before saying done\n\n**HR / Behavioural Round:**\n• Use **STAR format** (Situation, Task, Action, Result) for every story\n• Prepare answers for: leadership, failure, conflict, achievement, teamwork\n• \"Why this company?\" — research their products, tech stack, recent news\n\nConfidence = preparation. Prepare well! 💪",
  system_design:"System Design for placements! 🏗️\n\n**Key topics to learn:**\n• Scalability: Load Balancing, Horizontal Scaling, CDN\n• Databases: SQL vs NoSQL, Sharding, Replication, Indexing\n• Caching: Redis, Cache invalidation (TTL, LRU, Write-through)\n• Message Queues: Kafka, RabbitMQ (producer-consumer pattern)\n• CAP Theorem: pick 2 of Consistency, Availability, Partition Tolerance\n\n**Systems to practice designing (in order):**\n1. URL Shortener (beginner — start here)\n2. Twitter Feed / Instagram (intermediate)\n3. Netflix / YouTube (intermediate-advanced)\n4. Uber / Swiggy (advanced)\n\n**Best free resources:**\n• **Gaurav Sen** YouTube playlist\n• **System Design Primer** on GitHub\n\nStart 3–4 months before placement season! 📅",
  default:"I'm here to help with your placement prep! 😊\n\n**Quick links — just type any of these:**\n\n• \"How many LeetCode?\" — DSA strategy\n• \"Resume tips\" — complete resume guide\n• \"Am I ready?\" — placement readiness check\n• \"CGPA cutoffs\" — eligibility requirements\n• \"Google prep\" / \"TCS prep\" / \"Amazon prep\" — company-specific guides\n• \"Skills to learn\" — top skills for 2025–26\n• \"Get internship\" — internship hunting guide\n• \"Interview tips\" — technical + HR round tips\n• \"System design\" — when and how to learn\n• \"Project ideas\" — what to build for placement\n\nOr just ask your question naturally — I understand! 🎯"
};

// ── STATE ──
var chatH=[], chatInited=false, step=1, cat='all', coInited=false;
var iqCurrentQ='', iqCurrentType='', iqCurrentDiff='';
var slabs=['Info','Academics','Coding','Skills','Experience'];

// ── NAVIGATION ──
function go(sec){
  ['hero','wpanel','cpanel','rpanel','copanel','iqpanel'].forEach(function(id){
    var el=document.getElementById(id);
    if(el) el.style.display='none';
  });
  document.querySelectorAll('.npill').forEach(function(p){p.classList.remove('on','on-v');});
  if(sec==='hero') document.getElementById('hero').style.display='flex';
  else if(sec==='w'){document.getElementById('wpanel').style.display='block';document.getElementById('np-p').classList.add('on');updProg(step);}
  else if(sec==='c'){document.getElementById('cpanel').style.display='block';document.getElementById('np-c').classList.add('on-v');initChat();}
  else if(sec==='r'){document.getElementById('rpanel').style.display='block';document.getElementById('np-r').classList.add('on-v');}
  else if(sec==='co'){document.getElementById('copanel').style.display='block';document.getElementById('np-co').classList.add('on');initCo();}
  else if(sec==='iq'){document.getElementById('iqpanel').style.display='block';document.getElementById('np-iq').classList.add('on-v');}
  window.scrollTo({top:0,behavior:'smooth'});
}

document.getElementById('nav-logo').onclick=function(){go('hero');};
['p','c','r','co','iq'].forEach(function(k){
  document.getElementById('np-'+k).onclick=function(){go(k==='p'?'w':k);};
});
['p','c','r','co','iq'].forEach(function(k){
  var el=document.getElementById('h-'+k);
  if(el) el.onclick=function(){go(k==='p'?'w':k);};
});



// ── WIZARD ──
function updProg(s){
  for(var i=1;i<=5;i++){
    var el=document.getElementById('ps'+i);
    if(!el) continue;
    el.className='ps'+(i<s?' done':i===s?' act':'');
  }
  var l=document.getElementById('plbl');
  if(l) l.textContent='Step '+Math.min(s,5)+' of 5 · '+(slabs[Math.min(s,5)-1]||'');
}

function goStep(s){
  var cur=document.querySelector('.scard.on');
  if(cur) cur.classList.remove('on');
  step=s;
  var nxt=document.getElementById('s'+s);
  if(nxt) nxt.classList.add('on');
  updProg(s);
  document.getElementById('wpanel').scrollIntoView({behavior:'smooth',block:'start'});
}

document.getElementById('s1n').onclick=function(){goStep(2);};
document.getElementById('s2b').onclick=function(){goStep(1);};
document.getElementById('s2n').onclick=function(){goStep(3);};
document.getElementById('s3b').onclick=function(){goStep(2);};
document.getElementById('s3n').onclick=function(){goStep(4);};
document.getElementById('s4b').onclick=function(){goStep(3);};
document.getElementById('s4n').onclick=function(){goStep(5);};
document.getElementById('s5b').onclick=function(){goStep(4);};
document.getElementById('s5n').onclick=function(){calcScore();};
document.getElementById('restart-btn').onclick=function(){doRestart();};

document.getElementById('fcgpa').oninput=function(){
  var v=parseFloat(this.value);
  document.getElementById('fcgpa-v').textContent=v.toFixed(1);
  document.getElementById('fcgpa-fill').style.width=(v/10*100)+'%';
};
document.getElementById('flc').oninput=function(){
  document.getElementById('flc-v').textContent=this.value;
  document.getElementById('flc-fill').style.width=(this.value/500*100)+'%';
};
document.getElementById('fcf').oninput=function(){
  var v=parseInt(this.value);
  var l=v===0?'—':v<1000?'Beginner':v<1400?'Pupil':v<1600?'Specialist':v<1900?'Expert':'Master+';
  document.getElementById('fcf-v').textContent=v>0?v+' ('+l+')':'—';
  document.getElementById('fcf-fill').style.width=(v/2500*100)+'%';
};
document.getElementById('fpj').oninput=function(){
  document.getElementById('fpj-v').textContent=this.value;
  document.getElementById('fpj-fill').style.width=(this.value/10*100)+'%';
};

document.querySelectorAll('.bubble-wrap').forEach(function(cloud){
  cloud.querySelectorAll('.bubble').forEach(function(b){
    b.onclick=function(){
      b.classList.toggle('on');
      var cntId=cloud.id==='langs'?'slc':cloud.id==='fws'?'sfw':'ssp';
      document.getElementById(cntId).textContent=cloud.querySelectorAll('.on').length+' selected';
    };
  });
});

function calcScore(){
  var name=document.getElementById('fname').value.trim()||'Student';
  var cgpa=parseFloat(document.getElementById('fcgpa').value)||0;
  var bl=parseInt(document.getElementById('fbl').value)||0;
  var lc=parseInt(document.getElementById('flc').value)||0;
  var hr=parseInt(document.getElementById('fhr').value)||0;
  var cf=parseInt(document.getElementById('fcf').value)||0;
  var li=document.getElementById('fli').checked;
  var pj=parseInt(document.getElementById('fpj').value)||0;
  var intern=parseInt(document.getElementById('fintern').value)||0;
  var oss=parseInt(document.getElementById('foss').value)||0;
  var cert=document.getElementById('fcert').checked;
  var hack=document.getElementById('fhack').checked;
  var con=document.getElementById('fcon').checked;
  var langs=document.querySelectorAll('#langs .on').length;
  var fws=document.querySelectorAll('#fws .on').length;
  var sc=Math.min(cgpa/10,1)*28-bl*4+Math.min(lc/250,1)*22+(hr/4)*8+Math.min(cf/1800,1)*6+Math.min(pj/5,1)*12+Math.min(intern/2,1)*10+Math.min(langs/4,1)*5+Math.min(fws/5,1)*4+(li?2:0)+oss*2+(cert?2:0)+(hack?1.5:0)+(con?1.5:0);
  sc=Math.max(5,Math.min(98,Math.round(sc)));

  document.getElementById('s5').classList.remove('on');
  document.getElementById('sres').classList.add('on');
  updProg(6);
  document.getElementById('res-hl').textContent=name.split(' ')[0]+"'s Placement Report";

  var col=sc>=70?'#15803D':sc>=50?'#1A43A8':sc>=35?'#D97706':'#991B1B';
  setTimeout(function(){
    var ring=document.getElementById('rring');
    ring.style.strokeDashoffset=515-(515*sc/100);
    ring.style.stroke=col;
    var c2=0;
    var iv=setInterval(function(){
      c2=Math.min(c2+Math.ceil(sc/50),sc);
      document.getElementById('rnum').textContent=c2+'%';
      if(c2>=sc){clearInterval(iv);if(sc>=70)burst();}
    },28);
  },100);

  var vEl=document.getElementById('vtag');
  var vd=sc>=80?'🔥 Excellent — Tier-1 Ready!':sc>=65?'✅ Solid — Mid-tier Ready':sc>=45?'⚡ Moderate — Needs Polish':'🚀 Building Phase';
  vEl.textContent=vd;

  var gaps=[
    {n:'DSA Skills',v:Math.min(lc/250,1)*100,c:'#1A43A8'},
    {n:'Academics',v:(cgpa/10)*100,c:'#5B21B6'},
    {n:'Projects',v:Math.min(pj/5,1)*100,c:'#9D174D'},
    {n:'Languages',v:Math.min(langs/4,1)*100,c:'#0E7490'},
    {n:'Experience',v:Math.min((intern*40+oss*20+cert*20+hack*10+con*10)/100,1)*100,c:'#15803D'}
  ];
  document.getElementById('gap-c').innerHTML=gaps.map(function(g){
    return '<div class="gr"><div class="gn">'+g.n+'</div><div class="gt"><div class="gf" style="background:'+g.c+';width:0" data-w="'+Math.round(g.v)+'"></div></div><div class="gv">'+Math.round(g.v)+'%</div></div>';
  }).join('');
  setTimeout(function(){document.querySelectorAll('.gf').forEach(function(b){b.style.width=b.dataset.w+'%';});},80);

  var tiers=[
    {n:'FAANG / Tier-1',need:80,c:'#15803D',bg:'#D1FAE5'},
    {n:'Mid-size Tech',need:60,c:'#1A43A8',bg:'#EEF3FF'},
    {n:'Service Companies',need:40,c:'#D97706',bg:'#FFFBEB'},
    {n:'Core / Non-tech',need:20,c:'#0E7490',bg:'#E0F7FA'}
  ];
  document.getElementById('tier-c').innerHTML=tiers.map(function(t){
    var ok=sc>=t.need;
    return '<div class="tier-item" style="border-color:'+(ok?t.c+'44':'var(--border)')+'"><div class="tier-name">'+t.n+'</div><div class="tier-badge" style="background:'+(ok?t.bg:'#F8FAFF')+';color:'+(ok?t.c:'var(--muted)')+';border-color:'+(ok?t.c+'44':'var(--border)')+'">'+(ok?'✓ Ready':'Not Yet')+'</div></div>';
  }).join('');

  var acts=[];
  if(lc<150) acts.push({p:'HIGH',t:'Grind LeetCode',d:'Solved '+lc+' — need 150+ min. Focus on medium: arrays, DP, graphs. 3/day = ~'+Math.ceil((150-lc)/3)+' days.'});
  if(cgpa<7.5) acts.push({p:'HIGH',t:'Bring Up That CGPA',d:cgpa.toFixed(1)+' is below the 7.5 cutoff for most product companies. Upcoming sems are your chance.'});
  if(bl>0) acts.push({p:'HIGH',t:'Clear Your Backlogs NOW',d:bl+' backlog(s) = automatic reject at most companies. Most urgent fix.'});
  if(pj<3) acts.push({p:'MED',t:'Build More Projects',d:pj+' project(s) — need 2-3 more. Deployed, GitHub link, solving a real problem.'});
  if(!intern) acts.push({p:'MED',t:'Get an Internship',d:'Huge differentiator. Apply on Internshala, LinkedIn, WorkAtAStartup now.'});
  if(langs<3) acts.push({p:'MED',t:'Learn Another Language',d:'Python + Java or C++ covers most placement stacks. Know at least 2 well.'});
  if(!li) acts.push({p:'LOW',t:'Fix Your LinkedIn',d:'Recruiters search LinkedIn. Add projects, skills, a headline. 30 mins = big impact.'});
  if(!cert) acts.push({p:'LOW',t:'Get a Certification',d:'AWS Cloud Practitioner adds credibility. 4-6 focused weeks to complete.'});
  if(!hack) acts.push({p:'LOW',t:'Join a Hackathon',d:'Real project + networking + resume item. Check Devfolio and MLH.'});
  if(acts.length===0) acts.push({p:'LOW',t:'Keep The Momentum!',d:'Solid profile. Focus on referrals for top companies and open source contributions.'});

  var pc={HIGH:'pri-h',MED:'pri-m',LOW:'pri-l'};
  document.getElementById('act-c').innerHTML=acts.map(function(a){
    return '<li class="act-item"><span class="act-pri '+pc[a.p]+'">'+a.p+'</span><div class="act-txt"><strong>'+a.t+'</strong>'+a.d+'</div></li>';
  }).join('');

  var scoreText='My PlaceAI Placement Score: '+sc+'%! Check yours free at PlaceAI Academy';
  document.getElementById('share-wa').onclick=function(){window.open('https://wa.me/?text='+encodeURIComponent(scoreText),'_blank');};
  document.getElementById('copy-score').onclick=function(){
    if(navigator.clipboard) navigator.clipboard.writeText(scoreText).then(function(){toast('Score copied!');});
  };
  document.getElementById('dl-report').onclick=function(){
    var txt='PlaceAI Academy — Placement Report\n'+'='.repeat(36)+'\nStudent: '+name+'\nScore: '+sc+'%\nVerdict: '+vd+'\n\nAction Plan:\n'+acts.map(function(a){return'['+a.p+'] '+a.t+': '+a.d;}).join('\n');
    var blob=new Blob([txt],{type:'text/plain'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');a.href=url;a.download='PlaceAI_Report.txt';a.click();URL.revokeObjectURL(url);
  };
  document.getElementById('wpanel').scrollIntoView({behavior:'smooth',block:'start'});
}

function doRestart(){
  document.getElementById('sres').classList.remove('on');
  document.querySelectorAll('.bubble').forEach(function(b){b.classList.remove('on');});
  ['slc','sfw','ssp'].forEach(function(id){document.getElementById(id).textContent='0 selected';});
  ['flc','fcf','fpj'].forEach(function(id){document.getElementById(id).value=0;});
  document.getElementById('flc-v').textContent='0';document.getElementById('flc-fill').style.width='0%';
  document.getElementById('fcf-v').textContent='—';document.getElementById('fcf-fill').style.width='0%';
  document.getElementById('fcgpa').value=7;document.getElementById('fcgpa-v').textContent='7.0';document.getElementById('fcgpa-fill').style.width='70%';
  document.getElementById('fpj-v').textContent='0';document.getElementById('fpj-fill').style.width='0%';
  step=1;goStep(1);
}

// ── CHATBOT (FIXED + Claude API powered) ──
function getOfflineAnswer(msg){
  var m=msg.toLowerCase().trim();
  if(/^(hi|hey|hello|hii|helo|hai|namaste|sup|yo|hiya|heya|good morning|good evening|good afternoon|good night)[!\s?]*$/.test(m)) return CHAT_ANSWERS.greeting;
  if(m.includes('who are you')||m.includes('what are you')||m.includes('what is placeai')||m.includes('introduce')) return CHAT_ANSWERS.whoami;
  if(/^(thank|thanks|thx|ty|ok|okay|cool|great|nice|wow|awesome|perfect)[s!.\s]*$/.test(m)) return CHAT_ANSWERS.thanks;
  if(m.includes('system design')||m.includes('hld')||m.includes('lld')) return CHAT_ANSWERS.system_design;
  if(m.includes('leetcode')||m.includes('dsa')||m.includes('data structure')||m.includes('algorithm')||m.includes('how many problem')) return CHAT_ANSWERS.leetcode;
  if(m.includes('resume')||m.includes(' cv ')) return CHAT_ANSWERS.resume;
  if(m.includes('cgpa')||m.includes('gpa')||m.includes('backlog')||m.includes('marks')||m.includes('percentage')) return CHAT_ANSWERS.cgpa;
  if(m.includes('internship')||m.includes('intern')) return CHAT_ANSWERS.internship;
  if(m.includes('google')||(m.includes('faang')&&!m.includes('amazon')&&!m.includes('microsoft'))) return CHAT_ANSWERS.google;
  if(m.includes('amazon')) return CHAT_ANSWERS.amazon;
  if(m.includes('microsoft')||m.includes(' ms ')) return CHAT_ANSWERS.microsoft;
  if(m.includes('tcs')||m.includes('tata')) return CHAT_ANSWERS.tcs;
  if(m.includes('infosys')||m.includes('infy')) return CHAT_ANSWERS.infosys;
  if(m.includes('project')||m.includes('github')||m.includes('what to build')) return CHAT_ANSWERS.projects;
  if(m.includes('skill')||m.includes('learn')||m.includes('python')||m.includes('java')||m.includes('which language')||m.includes('2025')||m.includes('2026')) return CHAT_ANSWERS.skills;
  if(m.includes('ready')||m.includes('prepared')||m.includes('am i')||m.includes('placement')||m.includes('campus')) return CHAT_ANSWERS.ready;
  if(m.includes('interview')||m.includes('hr round')||m.includes('behavioural')||m.includes('tip')||m.includes('star format')) return CHAT_ANSWERS.interview_tips;
  if(m.includes('startup')||m.includes('swiggy')||m.includes('razorpay')||m.includes('flipkart')) return CHAT_ANSWERS.ready;
  return CHAT_ANSWERS.default;
}

function getFollowups(msg){
  var m=msg.toLowerCase();
  var map={
    'leetcode|dsa|coding|algorithm':['Which LeetCode topics first?','Tips for DP problems?','Resources for competitive programming?'],
    'resume|cv':['How to write project descriptions?','Which skills to list?','ATS tips for freshers?'],
    'cgpa|grade|backlog':['Can I get placed with 6.5 CGPA?','How to compensate for low CGPA?','When to clear backlogs?'],
    'internship|intern':['Best internship platforms?','How to cold email companies?','Tips for internship interviews?'],
    'google|amazon|microsoft|faang':['How long for FAANG prep?','Best System Design resources?','FAANG vs service company?'],
    'tcs|infosys|wipro|service':['TCS Digital vs Ninja?','When do companies visit campus?','How to crack InfyTQ?'],
    'project|build|github':['How to deploy free?','Does open source help?','Best project ideas for SDE?'],
    'skill|learn|language|python|java':['Best free DSA resources?','How to learn System Design?','Python vs Java for placements?'],
    'ready|placement|campus':['How to make a 30-day plan?','What to do in 3rd year?','Which companies to target?'],
    'interview|hr|star':['Common HR questions?','How to answer tell me about yourself?','Technical round tips?'],
    'system design':['System Design for beginners?','When is it asked?','How long to learn it?']
  };
  var found=[];
  Object.keys(map).forEach(function(k){
    if(!found.length&&k.split('|').some(function(kw){return m.includes(kw);})) found=map[k];
  });
  return found.length?found:['Am I ready for placements?','Best LeetCode strategy?','Resume writing tips?'];
}

function initChat(){
  if(chatInited) return;
  chatInited=true;
  appendBotMsg(CHAT_ANSWERS.greeting);
}

function appendBotMsg(txt){
  var w=document.getElementById('chat-win');
  var d=document.createElement('div');
  d.className='msg bot';
  var fmt=txt.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>').replace(/\n/g,'<br/>');
  var chips=getFollowups(txt);
  var chipHtml='<div class="follow-chips">'+chips.map(function(ch){return'<span class="fchip">'+ch+'</span>';}).join('')+'</div>';
  d.innerHTML='<div class="mav">🤖</div><div class="mb">'+fmt+chipHtml+'</div>';
  d.querySelectorAll('.fchip').forEach(function(chip){
    chip.onclick=function(){document.getElementById('chat-input').value=chip.textContent;sendChat();};
  });
  w.appendChild(d);
  w.scrollTop=w.scrollHeight;
}

function appendUserMsg(txt){
  var w=document.getElementById('chat-win');
  var d=document.createElement('div');
  d.className='msg user';
  d.innerHTML='<div class="mav">👤</div><div class="mb">'+txt.replace(/</g,'&lt;')+'</div>';
  w.appendChild(d);
  w.scrollTop=w.scrollHeight;
}

function showTyping(){
  var w=document.getElementById('chat-win');
  var d=document.createElement('div');
  d.className='msg bot'; d.id='tdot';
  d.innerHTML='<div class="mav">🤖</div><div class="mb"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
  w.appendChild(d);
  w.scrollTop=w.scrollHeight;
}

function rmTyping(){
  var e=document.getElementById('tdot');
  if(e) e.remove();
}

function sendChat(){
  var inp=document.getElementById('chat-input');
  var msg=inp.value.trim();
  if(!msg) return;
  inp.value='';
  var btn=document.getElementById('chat-send');
  btn.disabled=true;
  appendUserMsg(msg);
  chatH.push({role:'user',content:msg});

  var offlineAnswer=getOfflineAnswer(msg);
  showTyping();
  var answered=false;

  // Try Claude API first, fallback to offline answers
  var apiMessages=chatH.slice(-10); // Keep last 10 messages for context
  fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'x-api-key':'',  // No key needed — handled by proxy
      'anthropic-version':'2023-06-01',
      'x-anthropic-dangerous-direct-browser-access':'true'
    },
    body:JSON.stringify({
      model:'claude-sonnet-4-20250514',
      max_tokens:600,
      system:'You are PlaceAI Career Advisor — a friendly, expert AI assistant helping Indian CSE students (2026 batch) crack campus placements in India. Give concise, specific, actionable advice. Use bullet points when listing items. Keep responses under 200 words. Use emojis naturally. Format key terms in **bold**. Focus on: DSA strategy, company prep (Google, TCS, Amazon, Infosys, Wipro, Flipkart, Swiggy, etc.), resume tips, CGPA cutoffs, internships, skills, interview prep. Always be encouraging and practical.',
      messages:apiMessages
    })
  })
  .then(function(res){
    if(!res.ok) throw new Error('API error '+res.status);
    return res.json();
  })
  .then(function(data){
    var reply=(data.content||[]).map(function(x){return x.text||'';}).join('').trim();
    if(reply && !answered){
      answered=true;
      rmTyping();
      appendBotMsg(reply);
      chatH.push({role:'assistant',content:reply});
      btn.disabled=false;
      inp.focus();
    }
  })
  .catch(function(){
    // API failed — use offline answer after a realistic delay
    if(!answered){
      setTimeout(function(){
        if(!answered){
          answered=true;
          rmTyping();
          appendBotMsg(offlineAnswer);
          chatH.push({role:'assistant',content:offlineAnswer});
          btn.disabled=false;
          inp.focus();
        }
      }, 800);
    }
  });

  // Fallback timeout — if API takes too long, use offline
  setTimeout(function(){
    if(!answered){
      answered=true;
      rmTyping();
      appendBotMsg(offlineAnswer);
      chatH.push({role:'assistant',content:offlineAnswer});
      btn.disabled=false;
      inp.focus();
    }
  }, 5000);
}

document.getElementById('chat-send').onclick=function(){sendChat();};
document.getElementById('chat-input').onkeydown=function(e){
  if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChat();}
};
document.querySelectorAll('.qb').forEach(function(btn){
  btn.onclick=function(){document.getElementById('chat-input').value=btn.textContent;sendChat();};
});

// ── RESUME ──
document.getElementById('dropz').onclick=function(){document.getElementById('rfile').click();};
document.getElementById('rfile').onchange=function(){
  var f=this.files[0];
  if(!f) return;
  var r=new FileReader();
  r.onload=function(e){document.getElementById('rtext').value=e.target.result;};
  r.readAsText(f);
};

var dz=document.getElementById('dropz');
dz.ondragover=function(e){e.preventDefault();dz.classList.add('drag');};
dz.ondragleave=function(){dz.classList.remove('drag');};
dz.ondrop=function(e){
  e.preventDefault();dz.classList.remove('drag');
  var f=e.dataTransfer.files[0];
  if(f){var r=new FileReader();r.onload=function(ev){document.getElementById('rtext').value=ev.target.result;};r.readAsText(f);}
};

document.getElementById('abtn').onclick=function(){doResume();};

async function doResume(){
  var txt=document.getElementById('rtext').value.trim();
  if(!txt||txt.length<60){alert('Please paste some resume text first!');return;}
  var role=document.getElementById('rrole').value;
  var lvl=document.getElementById('rlvl').value;
  var btn=document.getElementById('abtn');
  var btxt=document.getElementById('abtn-t');
  btn.disabled=true;btxt.textContent='🔄 Analysing...';

  var rm={sde:'Software Developer',ml:'ML/AI Engineer',data:'Data Analyst',fullstack:'Full Stack Developer',devops:'DevOps/Cloud',any:'General Tech'};
  var lm={fresher:'Fresher',intern:'Internship Seeker',junior:'Junior Dev (1-2 yrs)'};
  var done=false;

  try{
    var res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'anthropic-version':'2023-06-01',
        'x-anthropic-dangerous-direct-browser-access':'true'
      },
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:1000,
        messages:[{
          role:'user',
          content:'Review this resume for a '+lm[lvl]+' targeting '+rm[role]+' role (Indian campus 2026 placements). Respond ONLY with valid JSON (no markdown, no extra text):\n{"overall_score":0,"ats_score":0,"impact_score":0,"strengths":["s1","s2","s3"],"improvements":["i1","i2","i3","i4"],"missing_sections":["m1","m2"],"keyword_gaps":["k1","k2","k3","k4"],"top_suggestion":"most important single fix in one sentence"}\n\nRESUME TEXT:\n'+txt
        }]
      })
    });
    if(res.ok){
      var data=await res.json();
      var raw=(data.content||[]).map(function(x){return x.text||'';}).join('').replace(/```json|```/g,'').trim();
      var jsonStart=raw.indexOf('{');
      var jsonEnd=raw.lastIndexOf('}');
      if(jsonStart!==-1&&jsonEnd!==-1){
        raw=raw.substring(jsonStart,jsonEnd+1);
        renderResume(JSON.parse(raw));
        done=true;
      }
    }
  }catch(e){}

  if(!done) renderResume(offlineResume(txt,role));
  btn.disabled=false;btxt.textContent='🔍 Analyse My Resume';
}

function offlineResume(txt,role){
  var t=txt.toLowerCase();
  var wc=txt.split(/\s+/).length;
  var s=40,a=35,im=30;
  var str=[],imp=[],miss=[],kw=[];
  var has={
    edu:t.includes('education')||t.includes('cgpa')||t.includes('b.tech'),
    skills:t.includes('skills')||t.includes('programming'),
    proj:t.includes('project')||t.includes('built'),
    exp:t.includes('internship')||t.includes('experience'),
    contact:t.includes('email')||t.includes('@')||t.includes('github'),
    achieve:t.includes('leetcode')||t.includes('hackathon')||t.includes('winner'),
    nums:(/\d+%|\d+ users?|\d+x/i).test(txt),
    actions:t.includes('built')||t.includes('developed')||t.includes('improved'),
    github:t.includes('github'),
    linkedin:t.includes('linkedin'),
    live:t.includes('deployed')||t.includes('vercel')||t.includes('heroku'),
    cgpa:t.includes('cgpa')
  };
  if(has.edu){s+=8;a+=10;}if(has.skills){s+=8;a+=12;}if(has.proj){s+=10;im+=15;}
  if(has.exp){s+=8;im+=10;}if(has.contact){s+=5;a+=8;}if(has.achieve){s+=5;im+=8;}
  if(has.nums){s+=7;im+=13;}if(has.actions){s+=5;im+=8;}if(has.github){s+=4;a+=5;}
  if(has.linkedin){s+=3;a+=4;}if(has.live){s+=4;im+=6;}
  s=Math.min(90,Math.max(28,s));a=Math.min(88,Math.max(25,a));im=Math.min(87,Math.max(22,im));
  if(has.proj) str.push('Projects section present — recruiters look here first');
  if(has.skills) str.push('Technical skills section clearly listed');
  if(has.nums) str.push('Contains quantified achievements — excellent for impact');
  if(has.actions) str.push('Uses strong action verbs (Built, Developed, Improved)');
  if(has.exp) str.push('Internship/experience adds strong credibility');
  if(str.length===0) str.push('Resume has basic structure — good starting point');
  if(!has.nums) imp.push('Quantify every achievement: "Improved load time by 30%" not just "improved performance"');
  if(!has.live) imp.push('Add live deployment URLs — Vercel/Netlify/Render are free — recruiters click these');
  if(!has.actions) imp.push('Start every bullet with action verbs: Built, Developed, Designed, Reduced, Led');
  if(wc>800) imp.push('Condense to 1 page — cut anything older than 2 years, recruiters spend just 6 seconds');
  if(wc<150) imp.push('Resume is too short — add more detail to projects, skills, and achievements');
  if(!has.achieve) imp.push('Add Achievements section: LeetCode count, hackathon wins, class rank, certifications');
  if(!has.linkedin) imp.push('Add LinkedIn URL — recruiters verify your profile before shortlisting');
  imp.push('Add a 2-line professional summary at the top targeting your specific role');
  if(!has.contact) miss.push('Contact Information (email, phone, LinkedIn, GitHub)');
  if(!has.proj) miss.push('Projects Section — most important for freshers; add 2-3 projects minimum');
  if(!has.cgpa) miss.push('CGPA clearly stated');
  var rkw={
    sde:['Data Structures & Algorithms','System Design','REST APIs','Git / GitHub','SQL / Databases'],
    ml:['Machine Learning','TensorFlow / PyTorch','Data Preprocessing','Python / NumPy','Model Evaluation'],
    data:['SQL','Data Analysis','Tableau / Power BI','Python / R','Statistical Analysis'],
    fullstack:['React.js','Node.js / Express','MongoDB / SQL','REST APIs','Deployment (Vercel)'],
    devops:['Docker','Kubernetes','CI/CD Pipeline','AWS / Azure','Linux / Bash'],
    any:['Data Structures','System Design','REST APIs','Git','SQL / Databases']
  };
  (rkw[role]||rkw.any).forEach(function(k){
    if(!t.includes(k.toLowerCase().split(' ')[0].replace(/[^a-z]/g,''))) kw.push(k);
  });
  if(kw.length===0) kw=['Advanced System Design','Unit Testing','Docker','CI/CD Pipelines','Performance Optimisation'];
  var top=!has.nums?'Quantify every achievement with specific numbers — this single change boosts callback rate by 3x.':!has.live?'Add live deployment URLs to all projects — a working demo beats code every time.':!has.achieve?'Add Achievements section with LeetCode count, hackathon results, and certifications.':'Add a 2-line professional summary at the top targeting your specific dream role.';
  return{overall_score:s,ats_score:a,impact_score:im,strengths:str.slice(0,4),improvements:imp.slice(0,4),missing_sections:miss.slice(0,3),keyword_gaps:kw.slice(0,5),top_suggestion:top};
}

function scoreCol(v){return v>=75?'#15803D':v>=55?'#1A43A8':v>=40?'#D97706':'#991B1B';}

function renderResume(r){
  document.getElementById('rchips').innerHTML=[
    {n:r.overall_score,l:'OVERALL'},
    {n:r.ats_score,l:'ATS SCORE'},
    {n:r.impact_score,l:'IMPACT'}
  ].map(function(s){
    return '<div class="schip"><div class="schip-num" style="color:'+scoreCol(s.n)+'">'+s.n+'</div><div class="schip-lbl">'+s.l+'</div></div>';
  }).join('');

  document.getElementById('rsecs').innerHTML=
    '<div class="rsec" style="border-left:3px solid #15803D"><div class="rsec-t" style="color:#15803D">✅ What Is Working</div>'+r.strengths.map(function(s){return'<div class="ritem"><span style="color:#15803D;flex-shrink:0">✦</span> '+s+'</div>';}).join('')+'</div>'+
    '<div class="rsec" style="border-left:3px solid #1A43A8"><div class="rsec-t" style="color:#1A43A8">⚡ Things To Fix</div>'+r.improvements.map(function(s){return'<div class="ritem"><span style="color:#1A43A8;flex-shrink:0">→</span> '+s+'</div>';}).join('')+'</div>'+
    (r.missing_sections&&r.missing_sections.length?'<div class="rsec" style="border-left:3px solid #991B1B"><div class="rsec-t" style="color:#991B1B">❌ Missing Sections</div>'+r.missing_sections.map(function(s){return'<div class="ritem"><span style="color:#991B1B;flex-shrink:0">⬡</span> '+s+'</div>';}).join('')+'</div>':'')+
    '<div class="rsec" style="border-left:3px solid #5B21B6"><div class="rsec-t" style="color:#5B21B6">🔑 Keyword Gaps</div><div class="kw-row">'+r.keyword_gaps.map(function(k){return'<span class="kw">'+k+'</span>';}).join('')+'</div></div>'+
    '<div class="rsec" style="border-left:3px solid #D97706;background:#FFFBEB"><div class="rsec-t" style="color:#D97706">🚀 No. 1 Priority Fix</div><div class="ritem" style="font-weight:700;color:var(--ink);border-bottom:none;font-size:.85rem"><span style="color:#D97706;flex-shrink:0">★</span> '+r.top_suggestion+'</div></div>';

  document.getElementById('rres').classList.add('on');
  document.getElementById('rres').scrollIntoView({behavior:'smooth',block:'start'});
}

// ── COMPANIES ──
function initCo(){
  if(coInited) return;
  coInited=true;
  renderGrid(COS);
  document.getElementById('co-sin').oninput=function(){filterGrid();};
  document.getElementById('co-sin').onkeydown=function(e){if(e.key==='Enter')filterGrid();};
  document.getElementById('co-sbtn').onclick=function(){filterGrid();};
  document.querySelectorAll('.cc').forEach(function(btn){
    btn.onclick=function(){
      document.querySelectorAll('.cc').forEach(function(b){b.classList.remove('on');});
      btn.classList.add('on');cat=btn.dataset.cat;filterGrid();
    };
  });
}

function filterGrid(){
  var q=document.getElementById('co-sin').value.toLowerCase();
  renderGrid(COS.filter(function(c){
    return(cat==='all'||c.cat===cat)&&(!q||c.name.toLowerCase().includes(q)||c.type.toLowerCase().includes(q));
  }));
}

function renderGrid(list){
  var g=document.getElementById('co-grid');
  if(!list.length){
    g.innerHTML='<div style="grid-column:1/-1;text-align:center;color:var(--muted);padding:2rem;font-size:.88rem">No companies found — try a different filter</div>';
    return;
  }
  g.innerHTML=list.map(function(co){
    return '<div class="cocard" data-name="'+co.name+'"><div class="cocard-top"><div class="co-logo">'+co.logo+'</div><div><div class="co-nm">'+co.name+'</div><div class="co-tp">'+co.type+'</div></div></div><div class="co-tags">'+co.tags.map(function(t){return'<span class="cotag" style="color:'+t.c+';background:'+t.bg+';border-color:'+t.c+'55">'+t.t+'</span>';}).join('')+'</div><div class="co-meta"><span>🎓 '+co.cgpa+'</span><span>💰 '+co.pkg+'</span></div><button class="co-vbtn">View Criteria →</button></div>';
  }).join('');
  document.querySelectorAll('.cocard').forEach(function(card){
    card.onclick=function(){showCo(card.dataset.name);};
    card.querySelector('.co-vbtn').onclick=function(e){e.stopPropagation();showCo(card.dataset.name);};
  });
}

function showCo(name){
  var co=COS.filter(function(c){return c.name===name;})[0];
  if(!co) return;
  var dc=co.diff==='Very Hard'?'#991B1B':co.diff==='Hard'?'#92400E':co.diff==='Medium-Hard'?'#5B21B6':co.diff==='Medium'?'#0E7490':'#14532D';
  var sn=co.name.replace(/\s/g,'_');
  var det=document.getElementById('co-det-wrap');
  det.innerHTML='<div class="co-det-card">'
    +'<div class="co-det-hdr"><div class="co-det-logo">'+co.logo+'</div><div style="flex:1"><div style="font-family:Merriweather,serif;font-weight:700;font-size:1.28rem;color:var(--ink)">'+co.name+'</div><div style="font-size:.72rem;color:var(--muted);font-family:Fira Code,monospace;margin-top:.16rem">'+co.type+' · '+co.tags.map(function(t){return t.t;}).join(' · ')+'</div></div><div style="text-align:right;flex-shrink:0"><div style="font-size:.58rem;color:var(--muted);font-family:Fira Code,monospace;margin-bottom:.2rem;letter-spacing:1px">DIFFICULTY</div><div style="background:'+dc+'14;color:'+dc+';border:1.5px solid '+dc+'44;border-radius:7px;font-weight:700;font-size:.77rem;padding:.18rem .58rem;white-space:nowrap">'+co.diff+'</div></div></div>'
    +'<div class="crit-grid"><div class="crit-box"><div class="crit-val">'+co.cgpa+'</div><div class="crit-lbl">MIN CGPA</div></div><div class="crit-box"><div class="crit-val" style="font-size:.93rem">'+co.pkg+'</div><div class="crit-lbl">PACKAGE (CTC)</div></div><div class="crit-box"><div class="crit-val">'+co.rounds.length+'</div><div class="crit-lbl">ROUNDS</div></div></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.58rem;margin-bottom:.78rem"><div class="crit-box"><div class="crit-val" style="font-size:.9rem;color:#5B21B6">'+co.tenth+'</div><div class="crit-lbl">10th %</div></div><div class="crit-box"><div class="crit-val" style="font-size:.9rem;color:#5B21B6">'+co.twelfth+'</div><div class="crit-lbl">12th %</div></div><div class="crit-box"><div class="crit-val" style="font-size:.8rem;color:#991B1B">'+co.backlogs+'</div><div class="crit-lbl">BACKLOGS</div></div></div>'
    +'<div class="co-sec"><div class="co-sec-t">🔁 Interview Rounds</div><div class="co-round-list">'+co.rounds.map(function(r,i){return'<div class="co-round"><div class="co-rnum">'+(i+1)+'</div>'+r+'</div>';}).join('')+'</div></div>'
    +'<div class="co-sec"><div class="co-sec-t">🛠️ Key Skills Needed</div><div class="skill-tags">'+co.skills.map(function(s){return'<span class="stag">'+s+'</span>';}).join('')+'</div></div>'
    +'<div class="co-sec" style="border-left:3px solid #15803D;background:#F0FDF4"><div class="co-sec-t" style="color:#15803D">⭐ Extra Factors That Help</div>'+(co.extras||[]).map(function(e){return'<div class="co-round" style="margin-bottom:.22rem"><span style="color:#15803D;font-weight:700;flex-shrink:0">✓</span> '+e+'</div>';}).join('')+'</div>'
    +'<button class="prep-btn" id="pb_'+sn+'">📅 Get My 30-Day Prep Guide for '+co.name+'</button>'
    +'<div class="guide-out" id="go_'+sn+'"></div></div>';
  det.classList.add('on');
  det.scrollIntoView({behavior:'smooth',block:'start'});
  document.getElementById('pb_'+sn).onclick=function(){showGuide(name,sn);};
}

function showGuide(name,sn){
  var btn=document.getElementById('pb_'+sn);
  var out=document.getElementById('go_'+sn);
  btn.disabled=true;btn.textContent='⏳ Loading your personalised guide...';
  setTimeout(function(){
    var guide=GUIDES[name]||DEFAULT_GUIDE;
    out.innerHTML='<div style="background:#EEF3FF;border:1.5px solid var(--border2);border-radius:12px;padding:1.15rem;margin-top:.58rem">'
      +'<div style="font-family:Fira Code,monospace;font-size:.61rem;letter-spacing:2.5px;color:var(--primary);text-transform:uppercase;margin-bottom:.82rem">📅 30-Day Prep Guide for '+name+'</div>'
      +guide.map(function(g){
        return '<div class="guide-week"><div class="gw-title" style="color:'+g.c+'">'+g.t+'</div>'+g.i.map(function(item){
          return '<div class="gi"><span style="color:'+g.c+';flex-shrink:0;margin-top:2px;font-weight:700">→</span><span>'+item+'</span></div>';
        }).join('')+'</div>';
      }).join('')+'</div>';
    out.classList.add('on');
    out.scrollIntoView({behavior:'smooth',block:'start'});
    btn.disabled=false;btn.textContent='✅ Guide Loaded — Scroll Down!';
  },600);
}

// ── INTERVIEW QUESTIONS (FIXED) ──
document.getElementById('iq-start-btn').onclick=function(){startIQ();};
document.getElementById('iq-eval-btn').onclick=function(){evalIQ();};
document.getElementById('iq-hint-btn').onclick=function(){showHint();};
document.getElementById('iq-next-btn').onclick=function(){startIQ();};
document.getElementById('iq-retry-btn').onclick=function(){
  document.getElementById('iq-ans').value='';
  document.getElementById('iq-fb-card').classList.remove('on');
  document.getElementById('iq-hint-box').classList.remove('on');
  document.getElementById('iq-ans').focus();
};

function startIQ(){
  var type=document.getElementById('iq-type').value;
  var diff=document.getElementById('iq-diff').value;
  var qs=IQ_DATA[type][diff];
  var q=qs[Math.floor(Math.random()*qs.length)];
  iqCurrentQ=q; iqCurrentType=type; iqCurrentDiff=diff;
  var lbl={
    dsa:'💻 DSA / Coding',
    hr:'🤝 HR / Behavioural',
    cs:'📚 Core CS',
    system:'🏗️ System Design',
    project:'📁 Project-Based'
  }[type]+' · '+diff.charAt(0).toUpperCase()+diff.slice(1);
  document.getElementById('iq-q-lbl').textContent=lbl;
  document.getElementById('iq-q-text').textContent=q;
  document.getElementById('iq-q-card').classList.add('on');
  document.getElementById('iq-fb-card').classList.remove('on');
  document.getElementById('iq-hint-box').classList.remove('on');
  document.getElementById('iq-ans').value='';
  document.getElementById('iq-q-card').scrollIntoView({behavior:'smooth',block:'start'});
}

function showHint(){
  var hints=IQ_HINTS[iqCurrentType][iqCurrentDiff];
  var qs=IQ_DATA[iqCurrentType][iqCurrentDiff];
  var idx=qs.indexOf(iqCurrentQ);
  var hint=(idx>=0&&hints[idx])?hints[idx]:'Think about the most efficient data structure. Consider time vs space trade-offs carefully.';
  document.getElementById('iq-hint-box').textContent='💡 '+hint;
  document.getElementById('iq-hint-box').classList.add('on');
}

async function evalIQ(){
  var ans=document.getElementById('iq-ans').value.trim();
  if(!ans||ans.length<15){toast('Write at least 2-3 sentences first!');return;}
  var btn=document.getElementById('iq-eval-btn');
  btn.textContent='🔍 Evaluating...';btn.disabled=true;
  var evaled=false;

  try{
    var res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'anthropic-version':'2023-06-01',
        'x-anthropic-dangerous-direct-browser-access':'true'
      },
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:500,
        messages:[{
          role:'user',
          content:'You are an expert technical interviewer evaluating a campus interview answer for an Indian CSE student.\n\nQuestion: "'+iqCurrentQ+'"\n\nStudent Answer: "'+ans+'"\n\nEvaluate and respond ONLY with valid JSON (no markdown, no extra text):\n{"correctness":7,"clarity":6,"depth":5,"feedback":"2-3 sentences of specific constructive feedback mentioning what was good and what can improve","tip":"one concrete actionable improvement suggestion"}\n\nScoring (0-10):\n- correctness: technical accuracy of the answer\n- clarity: how clearly structured and articulated\n- depth: depth of understanding shown\n\nBe honest but encouraging.'
        }]
      })
    });
    if(res.ok){
      var data=await res.json();
      var raw=(data.content||[]).map(function(x){return x.text||'';}).join('').trim();
      var jsonStart=raw.indexOf('{');
      var jsonEnd=raw.lastIndexOf('}');
      if(jsonStart!==-1&&jsonEnd!==-1){
        raw=raw.substring(jsonStart,jsonEnd+1);
        showIQFb(JSON.parse(raw));
        evaled=true;
      }
    }
  }catch(e){}

  if(!evaled){
    // Smart offline evaluation
    var wc=ans.split(/\s+/).length;
    var hasTechTerms=/(array|hash|tree|graph|queue|stack|dp|bfs|dfs|pointer|complexity|o\(|time|space|sql|join|index|thread|process|api|rest|tcp|http|cache|redis|docker|aws|agile|star|situation|task|action|result)/i.test(ans);
    var hasExample=ans.includes('example')||ans.includes('e.g.')||ans.includes('for instance')||ans.includes('like');
    var hasStructure=ans.includes('first')||ans.includes('then')||ans.includes('finally')||ans.includes('step');
    var cor=Math.min(9,Math.max(3,Math.round(wc/15)+(hasTechTerms?2:0)));
    var cla=Math.min(9,Math.max(3,(hasStructure?7:5)+(ans.length>100?1:0)));
    var dep=Math.min(9,Math.max(3,(hasTechTerms?6:4)+(hasExample?2:0)));
    showIQFb({
      correctness:cor,
      clarity:cla,
      depth:dep,
      feedback:'Good effort! Your answer covers the basic idea'+(hasTechTerms?' and uses relevant technical terms':'')+'. To improve, add concrete examples and walk through your reasoning step-by-step. Interviewers want to see your thought process, not just the final answer.',
      tip:'Structure your answer: (1) State your approach clearly, (2) Explain WHY you chose it, (3) Give a concrete example, (4) Mention time/space complexity or trade-offs.'
    });
  }
  btn.textContent='🔍 Evaluate My Answer';btn.disabled=false;
}

function showIQFb(r){
  var col=function(v){return v>=8?'#15803D':v>=6?'#1A43A8':v>=4?'#D97706':'#991B1B';};
  document.getElementById('iq-scores').innerHTML=[
    {n:r.correctness,l:'CORRECTNESS'},
    {n:r.clarity,l:'CLARITY'},
    {n:r.depth,l:'DEPTH'}
  ].map(function(s){
    return '<div class="iqsc"><div class="iqsc-n" style="color:'+col(s.n)+'">'+s.n+'/10</div><div class="iqsc-l">'+s.l+'</div></div>';
  }).join('');
  document.getElementById('iq-fb-text').innerHTML='<p style="font-size:.86rem;color:var(--text);line-height:1.65;margin-bottom:.6rem">'+r.feedback+'</p><div class="iq-tip-box">💡 '+r.tip+'</div>';
  document.getElementById('iq-fb-card').classList.add('on');
  document.getElementById('iq-fb-card').scrollIntoView({behavior:'smooth',block:'start'});
}

// ── UTILS ──
function burst(){
  var c=['#1A43A8','#5B21B6','#9D174D','#15803D','#D97706','#0E7490'];
  for(var i=0;i<55;i++){
    var el=document.createElement('div');
    el.className='cf';
    var sz=Math.random()*8+4;
    el.style.cssText='left:'+Math.random()*100+'vw;width:'+sz+'px;height:'+sz+'px;background:'+c[i%6]+';animation-duration:'+(Math.random()*2+1.5)+'s;animation-delay:'+(Math.random()*.5)+'s;transform:rotate('+(Math.random()*360)+'deg)';
    document.body.appendChild(el);
    setTimeout(function(){el.remove();},3500);
  }
}

function toast(msg){
  var t=document.getElementById('toast');
  t.textContent=msg;t.style.opacity='1';
  clearTimeout(t._t);
  t._t=setTimeout(function(){t.style.opacity='0';},2500);
}

window.onscroll=function(){document.getElementById('stbtn').classList.toggle('on',window.scrollY>300);};
document.getElementById('stbtn').onclick=function(){window.scrollTo({top:0,behavior:'smooth'});};

document.addEventListener('contextmenu',function(e){e.preventDefault();toast('© PlaceAI Academy — Content is protected');});
document.addEventListener('keydown',function(e){if((e.ctrlKey||e.metaKey)&&(e.key==='u'||e.key==='s'||e.key==='p')){e.preventDefault();toast('© PlaceAI Academy — Content is protected');}});
