# School Platform
This project is designed to simplify the process of adding exams for professors while providing students with a user-friendly interface to log in, take exams, and check their grades.

## Project Collaboration
This project was collaboratively developed with my Friend `Zakaria Machmach`

## Technologies Used
- **Frontend:**
  - ReactJS
  - Axios for API communication
  - CSS for styling
  - Tailwind CSS for additional styling

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB

## Getting Started
1. Clone this repository :
```bash
git clone https://github.com/ayman-gassi/MernStack-School-Platform.git
```

## Server Setup
1. Open a new terminal in the `server` folder.
2. Run the command `npm i` to install the necessary dependencies.
3. Launch the server with either:
    - `node app`
    - If you have installed nodemon, use `nodemon app`

## Database Setup
If you don't want to create your own data, you can use an existing database. All collections are in the `Document/DataBase` folder.
1. Open MongoDB Compass.
2. Select the `SchoolWebsite` database.
3. Import all the JSON files in the `DataBase` folder.

## App Setup
1. Open a new terminal in the `app` folder.
2. Run the command `npm i` to install the required packages.
3. Launch the app using `npm start`.

## How To Use
### Student
The Student  choose the Field then the exam . After passing the exam he can see his grade in the `Grade Page` 
### Teacher 
The techer can create a exam for the Students by clicking on the `Field` , inserting all the the informations about the exam .
After that , the teacher add the questions with their answers , he must click to the green button `validate` to add the question to the exam.




