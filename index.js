
const express = require('express')
const app = express()

const {REST} = require('@discordjs/rest')
const {Routes} = require('discord-api-types/v9')


//bot token
const token = ''


const rest = new REST().setToken(token)

//client/application id (in oauth2  section)
const CLIENT_ID = ''
//client secret (in oauth2  section)
const CLIENT_SECRET = ''

const fetchUser = async id => rest.get(Routes.user(id))

const redirect_uri = '' // example: http://localhost/discordcallback

const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2();

app.get('/', (req, res) => {
res.send(`    <a href="https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect_uri}" class="button-3 w-button">Link Discord</a><img src="https://uploads-ssl.webflow.com/624cfc638a578a41dc2a4054/625a205796a2bb52fff98462_icons8-discord-48.png" loading="lazy" alt="" class="image-2"/><script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=624cfc638a578a41dc2a4054" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script><script src="https://uploads-ssl.webflow.com/624cfc638a578a41dc2a4054/js/webflow.7f033afae.js" type="text/javascript"></script><!--[if lte IE 9]><script src="//cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif]-->
`)
})
app.use(express.json());

app.get('/discordcallback', async(req, res)=> {
  if (!req.query.code) return res.send(`No callback code ye loser`)
  let token;
  const redirect =redirect_uri
  const code =  req.query.code
 const bob=  await oauth.tokenRequest({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  
    code: code,
    scope: "identify guilds",
    grantType: "authorization_code",
  
    redirectUri: redirect,
  })

const access_token = bob.access_token

const userid = await oauth.getUser(access_token)
const datajson = JSON.stringify(userid, null, 4)
return res.send(datajson)

})

app.listen(80)
console.log(`App running on port http://localhost:80`)