# Tinder Simulator 2016

This is an app that will create an in depth, Tinder like experience.  

**NOTE:** This app is mearly a React frontend for Tinder Sim 2016.  Try cloning the backend from [here](https://github.com/leolwelter/tinder-simulator-2016-server).

##Technical Details

This frontend was built with:
----------------
- npm
- React


## Getting Started

Clone the repo

```shell
git clone <repo url>
```

`cd` into the newly created folder.

```shell
cd <repo folder name>
```

Install dependancies with `npm`.

```shell
npm install
````

Start the server running on localhost port 8080.

```shell
npm start
```

That's it.  If you are getting weird bugs then consider hosting the [backend](https://github.com/leolwelter/tinder-simulator-2016-server) yourself.

# Delopyment

This server can be deployed by doing the startup steps then placing the files in the public/ directory into your servers serving root.

## Heroku

To do a heroku deploy then run

```shell
heroku login
heroku create
git push heroku master
```

After these step heroku should begin it's setup process.  Do a `heroku open` to see the newly start webpage.
