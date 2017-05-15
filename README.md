# googleoauth
Simple example for authorizing a single user via oauth2 and saving their access token

## This program is meant for single-user authorization over a long period of time

### How to start:
`npm install`

`node setup.js`

NOTE: setup requires eighter args or a .env file populated with your oauth credentials.

You can get google oauth credentials <a href="https://console.developers.google.com/apis/credentials">here</a>

Quote from `node setup.js --help`: 
```
Either provide clientid, clientsecret and scope via a .env file in the root directory like this:
clientid=<id>
clientsecret=<secret>
scope=<scope1> <scope2>
or via the arguments explained below

        --help, -h
                Displays help information about this script

        --clientid, -i
                Your oauth client id

        --clientsecret, -s
                Your oauth client secret

        --scope, -c
                The scope used
                -c <scopeurl1> -c <scopeurl2>

        --port, -p
                The port used


```
### For a quick demo after setup: 
`npm start`
