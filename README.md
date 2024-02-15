![Love Struck! Logo](documentation/h1_logo.png)


# Love Struck!

Love Struck! is a multiple-choice Valentine's Day quiz for adults or families to play around Saint Valentine's Day. This quiz offers the player 10 different questions each time they play. The aim is to answer as many questions correctly as possible.

Love Struck! is designed to be a lighthearted game to test your knowledge of Valentine's Day/love-themed trivia and it is also a good way to learn new fun facts about the subject area.

[Love Struck!](https://mcallisterliza.github.io/love-struck/) can be played by clicking the link.

![Screen Responsiveness](documentation/screen_responsiveness.png)

## **User Stories**

### First Time Visitor Goals:

* As a newcomer to the site, my objective is to find out the main purpose of the game.
* As a first-time visitor, I aim to navigate the game effortlessly, play the game and find out what my score is at the end.
* As a first-time visitor, I want to have some fun and play the game to test my Valentine's Day knowledge.

### Returning Visitor Goals:
* As someone revisiting the site, I want to play the game again with some different questions.
* As a returning visitor, I want to see if I can improve my score.


### Frequent Visitor Goals:
* As a returning visitor, I want to find social media links, so I can visit the quiz company's social media pages to play more quizzes.

## Features

### Home Page

The home page has a red header and footer and the main background has an image depicting hearts. Within the header is the H1 logo with 'Love Struck!' When the user clicks the h1 logo at any point in the game they are directed back to the home page. On the homepage are also two buttons:

- Start Quiz
- Instructions

![Home Page](documentation/home_page.png)

### Footer

The footer is visible throughout the game and has four font awesome icons within it. Each icon directs the user to the pictured social media site. When hovered over the icons turn to pale pink (as pictured below) to match the color scheme.

![Footer](documentation/footer.png)

### Instructions

If the user clicks the "Instructions" button they are directed to a new screen where the instructions are listed for them to read. This page has a 'back to start' button which when clicked the user is directed back to the home page.

![Instructions](documentation/instructions_screen.png)

### Quiz Screen

- Once the player clicks the start button on the home page the first question with four possible answers is displayed.
- Once the player clicks an answer the next question is displayed automatically.
- There is a tally below the questions and answers which shows the player what they have currently scored correctly out of the questions they have answered.
- There are different questions displayed each time the player restarts the game.

![Quiz Screen](documentation/quiz_screen.png)

### Quiz Completed!

- Once the player has answered 10 questions the final screen will be displayed.
- This screen shows the player their score and a 'restart quiz' button which when pressed directs the player back to the home page to start over if they wish.

![Quiz Completed!](documentation/quiz_completed_screen.png)

### Future ideas for the Love Struck! quiz game

- If I had more time I would have enjoyed implementing the following:
- A timer that gives the player only a certain number of seconds per question to add to the fun of the game.
- I would have liked to have added something to the quiz that rewarded players who answered all questions correctly.
- A leaderboard would have been good to implement to entice the player back to the game to increase their score publically.


## Design and Color Scheme

### Color Scheme

![Color Palette](documentation/color_palette.png)

All colors chosen have warm red and pink tones to embrace the mood of Valentine's Day. These colors also complimented the image used as the main background depicting hearts.

- #C20606 was used for the color of the header and footer. This color was chosen as it is a deep red which has always been associated with Valentine's Day. This also worked well with the contrast of the black color of the font enabling the player to read the text with ease.

- #F19898 was used for the container on each page which displays the welcome message, instructions, questions and answers and the quiz completed page. This is a subtle pink color that compliments the deep red header, footer and background image. This color also ties in with the Valentine's Day theme and it works well with the black font used enabling the player to read the questions and answers with ease. This color was also used for the icons in the footer when the cursor is hovered over them.

- #C252525 was used for the text throughout the game. This color works well with each background and it gives a clean finish and enables the player to read the text with ease.

- #FF0000 was used for the buttons. I had originally used #C20606 but I found this did not work well with the buttons as I found them a little hard to read. I found a cleaner red tone made it easier to read text on the small buttons and the red tied in well with the theme of Valentine's Day.

### Typography

![Roboto Font](documentation/roboto.png)

- Roboto Google Font was used as the main font of the website as it ensured that the website was readable and accessible.


## Testing

## Validator testing
### HTML
- No errors or warnings were found when passing through the official W3C validator.
![Home Page HTML validator](documentation/html_validator.png)


### CSS
- No errors or warnings were found when passing through the official W3C validator.
![CSS Validator](documentation/css_validator.png)


### Javascript
- No errors or warnings were found when passing through JSHINT.
![CSS Validator](documentation/js_hint.png)


## Lighthouse report

- Using lighthouse in devtools I confirmed that the website is performing well, accessible and the colors and fonts chosen are readable.
    

## Manual testing

| feature | action | expected result | tested | passed | comments |
| --- | --- | --- | --- | --- | --- |
| Home | Click on the h1 'Love Struck!' | The user is redirected to the main page | Yes | Yes | - |
| Footer | | | | | |
| Facebook icon in the footer | Click on the Facebook icon | The user is redirected to the Facebook page | Yes | Yes | - |
| Twitter icon in the footer | Click on the Twitter icon | The user is redirected to the Twitter page | Yes | Yes | - |
| YouTube icon in the footer | Click on the YouTube icon | The user is redirected to the YouTube page | Yes | Yes | - |
| Instagram icon in the footer | Click on the Instagram icon | The user is redirected to the Instagram page | Yes | Yes | - |
| Tik Tok icon in the footer | Click on the Tik Tok icon | The user is redirected to the Tik Tok page | Yes | Yes | - |
| Home page | | | | | |
| Start Quiz Button | Click on the Start Quiz button | The user is redirected to the quiz page | Yes | Yes | - |
| Instructions Button | Click on the Instructions button | The user is redirected to the Instructions page | Yes | Yes | - |
| Instructions page | | | | | |
| Back to Start Button | Click on the Back to Start button | The user is redirected to the home page | Yes | Yes | - |
| Quiz Page | | | | | |
| Answer button| Click on any answer button | The user is redirected to the next questions automatically| Yes | Yes | - |
| Quiz Completed Page | | | | | |
| Restart Quiz button| Click on Restart Quiz button | The user is redirected to the home page| Yes | Yes | - |
---

### Browser Testing

- The Website was tested on Google Chrome, Firefox, Safari browsers with no issues noted.


### Fixed Bugs

- When I deployed my project to Github pages I realized that my background image was not working correctly. After some investigation, I realized that I had used the incorrect file path in my code. My code was: "/assets/images/hearts.png". After revisiting the lesson on file paths I realized I needed to remove the first slash from this code for my images to work. Once I removed this slash my image was working.

- When I ran my HTML code through the HTML validator I received error messages for unexpected slashes in self-closing tags. I revisited my code and used the HTML error message as guidance. I then went to the referenced line of code and found the error. I corrected this by removing the slash. I then ran my HTML through the validator once more and the result came back with no error messages.
  
- When I initially ran my javascript through JSHINT It concluded that I had an undefined variable in my code despite my code working on the browser. I revisited my code, found the variable and fixed it.


### Unfixed Bugs

- None to note

## Deployment

### Deployment to GitHub Pages

- This site was deployed to GitHub pages. The steps I took to deploy this project:
- In the [GitHub Repository](https://github.com/mcallisterliza/love-stuck) go to 'Settings Tab'. From the source section, I selected the 'Main Branch' and then click save. The page then refreshes and indicates the deployment was successful. Access the live link [here](https://github.com/mcallisterliza/drama-kids)
  

### Local deployment

To make a local copy of this project, clone it.
In your IDE Terminal, type the following command to clone my repository:

- git clone `https://github.com/mcallisterliza/love-struck.git`

---

## Credits

- [Font](https://fonts.google.com/) Fonts taken from Google Fonts

- [Icons](https://fontawesome.com/icons) Icons were taken from Font Awesome.

- [Tiny 'png' - Image Compressor](https://tinypng.com/) Used to compress images.

- [Compressor - Image Compressor](https://compressor.io/) Used to compress images.

- [Coolors](https://coolors.co/) Color scheme image generated from 'Coolors'

- [GitHub](https://github.com/) was used to deploy the website.

- [VSCode](https://code.visualstudio.com/) was used to edit the code for the website.

- [Pexels](https://www.pexels.com/) was used for media as seen below.

- [The Code Institute](https://github.com/Code-Institute-Org) Inspiration for my navigation bar and hero image came from the Love Running project I undertook with The Code Institute.

## Media
All images were taken from [Pexels](https://www.pexels.com/)
- [Hearts Image](https://www.pexels.com/photo/macro-shot-of-light-bulb-170781/)



## Acknowledgments

- [Code Institute](https://codeinstitute.net/) Thank you to the fantastic Slack community members and friends I have made during this project for their support, chats and help.

- [Iuliias Konovalova](https://github.com/IuliiaKonovalova) Thank you to my mentor has given me great advice, constructive feedback and an overall sense of confidence and calmness whilst I have embarked on my new learning journey.

- [Web Dev Simplified] [Build a Quiz With Javascript](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1317s).

- [James Q Quick] [Build a Quiz App](https://www.youtube.com/watch?v=rFWbAj40JrQ&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF).

- [GitHub](https://github.com/) Thank you to GitHub for providing a free space for me to deploy my website.

- [VSCode](https://code.visualstudio.com/) Thank you to VS Code for providing a free space for me to build and edit my code.

- Thank you to my wonderful family because without them I would not have been able to do this.
