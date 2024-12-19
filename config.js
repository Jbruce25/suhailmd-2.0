const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="ayuyabruce@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© virusXTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254114699755";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_32_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTMxLFxuICAgICAgICA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4LFxuICAgICAgICA5NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxLFxuICAgICAgICA0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICA0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAyLFxuICAgICAgICA1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInYrMTh4akZHeXRuR2IxTXFHN2JUdDNLMG5TcWJvdE4wRzRGeEVQV2VXdDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTE0Njk5NzU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBN0Q3QTk0MDZDREI1MDVEQkQ0OTI2MUZGOEEyRTVFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ1ODYzNDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmlGR3Q0MC1UUGFMYjgzcEJfUnFZQVwiLFxuICBcInBob25lSWRcIjogXCI3YzE4MmI3NC1mNmRlLTQxODUtOGM2Yi0zNTg2MzJjMjc3ODVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgOTksXG4gICAgICA1MCxcbiAgICAgIDE3OSxcbiAgICAgIDIxNyxcbiAgICAgIDExMixcbiAgICAgIDI1MSxcbiAgICAgIDIxNSxcbiAgICAgIDMsXG4gICAgICAyMzMsXG4gICAgICAyNCxcbiAgICAgIDExNSxcbiAgICAgIDM4LFxuICAgICAgMTc5LFxuICAgICAgMTM5LFxuICAgICAgNDcsXG4gICAgICAyMzYsXG4gICAgICAyMjEsXG4gICAgICAyMyxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDE3MyxcbiAgICAgIDI1MixcbiAgICAgIDExOCxcbiAgICAgIDExOSxcbiAgICAgIDEsXG4gICAgICA1MCxcbiAgICAgIDIwLFxuICAgICAgMjEyLFxuICAgICAgODYsXG4gICAgICAxNzMsXG4gICAgICAxMjMsXG4gICAgICA5LFxuICAgICAgMTIxLFxuICAgICAgMTU3LFxuICAgICAgMTg4LFxuICAgICAgNzUsXG4gICAgICA0NyxcbiAgICAgIDIwNCxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4UDNTTTFMUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTE0Njk5NzU1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJuLmUuaS5tLmEuaFwiLFxuICAgIFwibGlkXCI6IFwiMjE4MjI3ODA4NDY0OTI2OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1dWaTlnRkVPSGZqcnNHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPZmxFdHBQNlJsTUJFbTF4YlNBUzM0WEt4YXhVYWErNjgwVFpYTCtNU1NjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRRL0ZNU2hSbS9EeVo0M3pqQ1Qxbml2MzIwYnU0d0Vob0hhNktpSFQxSGJhT0dWMmJTcjBYaCtCMy9UelhSdkhVU3BhV0VoM2RER3FhUEl5djc4NURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxxSmRwL2ErWEJWeERSODlIQ0trSVVJdGx5WFMzU2ZzdjU4M3lmZ3AycFRGMXZNVlBlMWI5QTd5VDh6bXhTemE0Y1VjRjk0SnRtWEw3RkRnaEFwN2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExNDY5OTc1NTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDU4NjM0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUh0eVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHR5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWkpaWkQ1NlZlbWxJNnNJYnFXeWptQTVlWGM3RlhMNVlJcENUaFRIZHoyZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTI2OTA5NjA1LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ1ODYyNjQyNzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Jbruce25 ✨",
  packname: process.env.PACK_NAME || "n.e.i.m.a.h✨",
  botname : process.env.BOT_NAME  || "virusX-mD",
  ownername:process.env.OWNER_NAME|| "Jbruce25",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "virusX"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
