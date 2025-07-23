const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Report",
        description: "Complete the financial report for Q1",
        date: "2025-07-05",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly team sync-up",
        date: "2025-07-06",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Feedback Review",
        description: "Review and summarize client feedback",
        date: "2025-07-03",
        category: "Client Relations",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskStats: {
      total: 3,
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstName: "Rohan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix Login Bug",
        description: "Resolve issue with login timeout",
        date: "2025-07-04",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update API Docs",
        description: "Revise and update backend API documentation",
        date: "2025-07-06",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Unit Testing",
        description: "Add tests for the new payment module",
        date: "2025-07-07",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Refactor Codebase",
        description: "Improve code structure in user module",
        date: "2025-07-01",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskStats: {
      total: 4,
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create a modern design layout for homepage",
        date: "2025-07-03",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Banner",
        description: "Change the homepage banner for summer sale",
        date: "2025-07-02",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create Wireframes",
        description: "Wireframe the new dashboard interface",
        date: "2025-07-05",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Style Bug Fixes",
        description: "Fix alignment issues on mobile",
        date: "2025-07-06",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Accessibility Review",
        description: "Ensure accessibility compliance on main pages",
        date: "2025-07-04",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskStats: {
      total: 5,
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Karan",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Lead Standup",
        description: "Host daily standup for frontend team",
        date: "2025-07-07",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Mentor Intern",
        description: "Guide intern through onboarding",
        date: "2025-07-03",
        category: "Training",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Sprint Planning",
        description: "Plan tasks for sprint 14",
        date: "2025-07-05",
        category: "Agile",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskStats: {
      total: 3,
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Security Audit",
        description: "Check vulnerabilities in auth system",
        date: "2025-07-06",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare Slides",
        description: "Create presentation for tech talk",
        date: "2025-07-07",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy Build",
        description: "Deploy the latest build to staging",
        date: "2025-07-04",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review merge requests from peers",
        date: "2025-07-05",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Performance Optimization",
        description: "Optimize page loading times",
        date: "2025-07-06",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskStats: {
      total: 5,
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1
    }
  }
];


const admin =[
    {
  "id": 101,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = () => {
  const employees =JSON.parse(localStorage.getItem('employees')) ;
  const admin =JSON.parse(localStorage.getItem('admin')) ;
  return (employees!=[]||admin!=null)?{employees,admin}:[];

  
}

