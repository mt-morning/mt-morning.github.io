const projectMeta = ['plagiarismdetector', 'inventorymanager']
const projects = {
    'plagiarismdetector': {
        projectName: 'Plagiarism Detector',
        content: `For our final project for Foundations of Software Engineering (CS5500), 
                  I worked with three classmates to create a plagiarism detector implemented in 
                  TypeScript to identify plagiarized JavaScript code.`,
        path: 'plagiarismdetector',
        imagePath: 'images/plagiarismdetector.png',
        repo: 'https://github.com/mt-morning/plagiarism_detector'
    },
    'inventorymanager': {
        projectName: 'Inventory Manager',
        content: `For our final project for Web Development (CS6120), 
                  we implemented an inventory tracker using the MERN stack and Heroku 
                  to keep track of product information and quantity and orders.`,
        path: 'inventorymanager',
        imagePath: 'images/inventorymanager_resized.png',
        repo: 'https://github.com/mt-morning/inventory_manager'
    },
};

export { projects as projectInfo, projectMeta }; 