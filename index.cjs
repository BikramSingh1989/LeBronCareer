// index.cjs
const fs = require('fs');

// Dynamically import inquirer
(async () => {
    const { default: inquirer } = await import('inquirer');  // Corrected import

    // LeBron James' career stats 
    const lebronStats = {
        title: "LeBron James Career Stats",
        description: "This README provides an overview of LeBron James' career in the NBA, showcasing his achievements, stats, and contributions to the game.",
        careerPoints: "38,387 points",
        careerAssists: "10,011 assists",
        careerRebounds: "10,749 rebounds",
        careerGames: "1,310 games played",
        careerFGPercentage: "50.5% field goal percentage",
        career3PPercentage: "34.6% 3-point percentage",
        careerFreeThrowPercentage: "73.4% free throw percentage",
        careerMVPs: "4 MVP awards",
        careerChampionships: "4 NBA Championships",
        careerFinalsAppearances: "10 NBA Finals appearances",
        careerTeams: ["Cleveland Cavaliers", "Miami Heat", "Los Angeles Lakers"],
        active: true, 
        github: "BikramSingh1989", 
        email: "singhsubway@gmail.com" 
    };

    // Questions to prompt the user
    const questions = [
        {
            type: 'input',
            name: 'userTitle',
            message: 'Enter the title of the project (default: "LeBron James Career Stats"):',
            default: "LeBron James Career Stats" 
        },
        {
            type: 'input',
            name: 'userDescription',
            message: 'Enter a short description of your project (default: provided):',
            default: "This README provides an overview of LeBron James' career in the NBA, showcasing his achievements, stats, and contributions to the game."
        },
        {
            type: 'input',
            name: 'userGithub',
            message: 'Enter your GitHub username:',
            default: "BikramSingh1989" 
        },
        {
            type: 'input',
            name: 'userEmail',
            message: 'Enter your email address:',
            default: "singhsubway@gmail.com" 
        }
    ];

    // Function to generate markdown content
    function generateMarkdown(data) {
        const teams = data.careerTeams.join(', '); 

        return `# ${data.userTitle}

## Description
${data.userDescription}

## Table of Contents
- [Career Stats](#career-stats)
- [Achievements](#achievements)
- [Teams Played For](#teams-played-for)
- [Questions](#questions)

## Career Stats
- Points: ${data.careerPoints}
- Assists: ${data.careerAssists}
- Rebounds: ${data.careerRebounds}
- Games Played: ${data.careerGames}
- Field Goal Percentage: ${data.careerFGPercentage}
- 3-Point Percentage: ${data.career3PPercentage}
- Free Throw Percentage: ${data.careerFreeThrowPercentage}

## Achievements
- MVP Awards: ${data.careerMVPs}
- NBA Championships: ${data.careerChampionships}
- NBA Finals Appearances: ${data.careerFinalsAppearances}

## Teams Played For
LeBron James has played for the following teams:
- ${teams}

## Questions
For any questions, please contact me via email at [${data.userEmail}](mailto:${data.userEmail}) or visit my GitHub profile at [github.com/${data.userGithub}](https://github.com/${data.userGithub}).
        `;
    }

    // Function to write the README file
    function writeToFile(fileName, data) {
        fs.writeFileSync(fileName, data);
        console.log('README.md file generated successfully!');
    }

    // Start the application
    try {
        const answers = await inquirer.prompt(questions);
        const markdownContent = generateMarkdown({
            ...lebronStats,
            ...answers
        });
        writeToFile('README.md', markdownContent);
    } catch (error) {
        console.error("Error generating README:", error);
    }
})();
