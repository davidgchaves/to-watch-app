To-Watch App
============

Table of Contents
=================

 1. [Pre-requisites](#pre-requisites)
 2. [How to run this project locally](#how-to-run-project)


## <a id="pre-requisites"></a>Pre-requisites (MongoDB) ##

### MongoDB installation

To run this project locally you need to have access to a MongoDB instance.
I'm assuming you are on a Mac and have `Homebrew` installed.

```
✔ brew install mongodb
```

### MongoDB post-install configuration

Follow instructions from homebrew:

```
✔ brew info mongodb
```

which may resemble:

```
# To have launchd start mongodb at login:
✔ ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents

# Then to load mongodb now:
✔ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist

# Or, if you don't want/need launchctl, you can just run:
✔ mongod --config /usr/local/etc/mongod.conf
```


## <a id="how-to-run-project"></a>How to run this project locally ##

### Clone the project

If you have your `ssh` credentials set up with github:

```
✔ git clone git@github.com:davidgchaves/to-watch-app.git
```

If you prefer the `http` route:

```
✔ git clone https://github.com/davidgchaves/to-watch-app.git
```

### Install project dependencies

Once you have cloned the project, you need to install its dependencies.
Remember that you need to be inside the project folder.

```
✔ cd to-watch-app
✔ npm install
```

### Run

To run the project, open a new terminal session and type:

```
✔ gulp serve
```

or
```
✔ ./node_modules/.bin/gulp serve
```
