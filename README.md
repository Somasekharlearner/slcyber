Prerequisites:
Install Node.js: https://nodejs.org/
Create a new directory for your project and navigate to it in the terminal.
Step 1: Set Up Project:
Create a new folder and open in IDE (VS Code)
Create a package.json file by running:
Open terminal and run command 
npm init -y
Install the required dependencies:
npm install webdriverio @wdio/cli chromedriver
Step 2: Configuration:
Generate the WebDriverIO configuration file:
npx wdio config -y
Step 3: Write Tests:
Create a directory named test in your project directory. Inside it, create two files: login.page.js
Step 4: Run Tests:
Execute the tests by running:npm run wdio


