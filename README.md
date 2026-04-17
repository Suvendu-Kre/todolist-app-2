# React Todo List App

A simple and interactive Todo List application built with React.js. This application allows users to add new tasks, mark tasks as complete, and delete tasks. The todo list persists in local storage, so your tasks will remain even after closing and reopening the browser.

## Features

- **Add Todos**: Easily add new tasks to your list.
- **Mark Complete**: Toggle tasks as complete or incomplete.
- **Delete Todos**: Remove tasks from the list.
- **Persistence**: Your tasks are saved in local storage, so they won't disappear on refresh.

## Technologies Used

- React.js
- HTML5
- CSS3
- JavaScript (ES6+)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

- [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/todolist-app.git
    cd todolist-app
    ```
    *(Note: Replace `your-username` with your actual GitHub username if you fork this repo, or just use the suggested repo name if you're creating a new one.)*

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To start the development server:

```bash
npm start
```

This will open the application in your browser at `http://localhost:3000` (or another available port). The page will reload if you make edits.

## Project Structure

- `public/`: Contains the `index.html` file and other public assets.
- `src/`: Contains the main React application source code.
    - `App.js`: The main application component, managing the overall state and logic.
    - `index.js`: The entry point of the React application.
    - `App.css`: Global styles for the `App` component.
    - `components/`: Directory for reusable UI components.
        - `TodoForm.js`: Component for adding new todo items.
        - `TodoItem.js`: Component for displaying a single todo item.
        - `TodoForm.css`: Styles for the `TodoForm` component.
        - `TodoItem.css`: Styles for the `TodoItem` component.
    - `index.css`: Global CSS styles.

## How to Use

1.  **Add a new todo:** Type your task into the input field and click the "Add Todo" button or press Enter.
2.  **Mark as complete:** Click the checkbox next to a todo item to toggle its completion status.
3.  **Delete a todo:** Click the "Delete" button next to a todo item to remove it from the list.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Any contributions are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).
