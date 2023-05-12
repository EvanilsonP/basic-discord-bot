# How to use the discord bot?

Clone this repo: git@github.com:EvanilsonP/discord-bot.git and install the dependecies by running npm install.

# Creating a bot on discord
Step 1: Access https://discord.com/developers/applications/

Step 2: Click the 'New Application' button and give your discord bot a name.

Step 3: Click in 'Bot' and activate PRESENCE INTENT, SERVER MEMBERS INTENT and MESSAGE CONTENT INTENT from 'Privileged Gateaway Intents'.

Step 4: Head over to 'OAuth2' and click in 'URL Generator'. Click in both 'application.commands' and 'bot'. Give your bot administrator permission.

Step 5: Scroll down, copy the generated link/token, paste it in the browser and click enter. Choose a server to place your bot in.


# Creating a dotenv file
Create a .env file in the project folder and create a variable where You can store the bot token generated in Step 5. Example: TOKEN = sd2r8D1F5. (No quotation marks)

You can use 'nodemon' in the terminal to turn the bot online.
