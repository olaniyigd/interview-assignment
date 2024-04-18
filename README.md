1. Clone the repository:   git clone https://github.com/olaniyigd/interview-assignment.git
2. cd projectname
3. npm install
4. npm start









 Here is a brief explanation of each component and the overall structure of the application:

1. UserProfile:
   The UserProfile component is responsible for displaying basic information about a user.
   It includes the user's name, email, and profile picture.
   The user's information can be hardcoded within the component or passed as props from a parent component.
   Styled using styled-components to achieve a clean and visually appealing layout.

2. ToDoList:
   The ToDoList component allows users to manage their tasks by adding, deleting, and marking tasks as completed.
   Users can add new tasks using a form input, mark tasks as completed using checkboxes, and delete tasks using delete buttons.
   State management is handled using React hooks to manage the list of tasks.
   Styled using styled-components to provide a user-friendly interface with clear task items and intuitive interactions.

3. Weather:
   The Weather component fetches and displays the current weather information for the user's location.
   It interacts with an external weather API (such as OpenWeatherMap) to fetch weather data based on the user's city.
   The weather information displayed may include temperature, weather conditions, humidity, etc.
   Styled using styled-components to present the weather information in a visually appealing and easy-to-read format.

Structure of the Application:
The application follows a component-based architecture, where each feature or section of the dashboard is encapsulated within its own component (UserProfile, ToDoList, Weather).
These components are then imported and used within the main `App` component.
he `App` component manages the state to control which page (UserProfile, ToDoList, Weather) is currently displayed.
Styled-components are used for styling, providing a clean and modular way to style each component.
React hooks such as useState are used for state management within the components.
The application is responsive and works seamlessly on both desktop and mobile devices, with adjustments made for mobile-specific layouts and interactions.
