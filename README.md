# discord-oauth
Get a user's info by discord oauth2!


# Steps

#### 1
Create Discord developer application (You can create one here -  [Discord Developers](https://discord.com/developers/applications))
#### 2
Copy client secret and id from that. Replace the client id and secret variables in index.js with those. You can find these in the oauth2 section
#### 3
Go to the oauth2 section, and add your redirect urls. For example, if your website is example.com, it would be https://example.com/discordcallback
If you are just testing, do http://localhost:<port>/discordcallback
#### 4
Create a bot in the application in the developer portal, and copy it's token 
#### 5
Replace all the variables in the code including client secret, client id, token, and redirect uri
#### #6
Run the code and enjoy!
