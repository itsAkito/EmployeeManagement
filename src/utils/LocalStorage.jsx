const employees = [
  {
    id: 1,
    email: "alice@example.com",
    password: "password-1234",
    tasks: [
      {
        title: "Design homepage",
        description: "Create responsive homepage layout with branding elements",
        category: "Design",
        date: "2025-07-20",
        active: true,
        newTask: false,
        completedTask: true,
        failedTask: false
      },
      {
        title: "Review logo concepts",
        description: "Give feedback on logo design proposals from designer team",
        category: "Design",
        date: "2025-07-21",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false
      },
      {
        title: "Fix nav bar alignment",
        description: "Resolve alignment issues in top navigation menu",
        category: "Frontend",
        date: "2025-07-18",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: true
      }
    ]
  },
  {
    id: 2,
    email: "bob@example.com",
    password: "password-1234",
    tasks: [
      {
        title: "Create API endpoints",
        description: "Implement task-related CRUD endpoints using Express.js",
        category: "Backend",
        date: "2025-07-22",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false
      },
      {
        title: "Database schema update",
        description: "Add timestamps and validation to the task model",
        category: "Database",
        date: "2025-07-19",
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false
      },
      {
        title: "Unit testing for tasks",
        description: "Write unit tests for task module using Jest",
        category: "Testing",
        date: "2025-07-23",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false
      },
      {
        title: "Fix login error",
        description: "Resolve login failure for certain users",
        category: "Backend",
        date: "2025-07-17",
        active: true,
        newTask: false,
        completedTask: true,
        failedTask: false
      }
    ]
  },
  {
    id: 3,
    email: "charlie@example.com",
    password: "password-1234",
    tasks: [
      {
        title: "Create task dashboard",
        description: "Design and develop dashboard to display employee tasks",
        category: "Frontend",
        date: "2025-07-20",
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false
      },
      {
        title: "Bug report triage",
        description: "Sort and prioritize incoming bug reports",
        category: "Support",
        date: "2025-07-21",
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false
      },
      {
        title: "Update documentation",
        description: "Add new API changes to technical docs",
        category: "Documentation",
        date: "2025-07-22",
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true
      },
      {
        title: "Configure hosting",
        description: "Set up production environment on Vercel",
        category: "DevOps",
        date: "2025-07-23",
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false
      },
      {
        title: "Run accessibility audit",
        description: "Check compliance with WCAG guidelines",
        category: "Testing",
        date: "2025-07-24",
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false
      }
    ]
  }
];

export const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "1234"
  }
];

// Helper: Save master lists to localStorage
export const setLocalStorage = (employeeList = employees, adminList = admin) => {
 
    localStorage.setItem('employees', JSON.stringify(employeeList));
    localStorage.setItem('admin', JSON.stringify(adminList));
  
};

//Helper: Retrieve master lists from localStorage
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    console.log(employees,admin)
    return { employees, admin };

  
};
