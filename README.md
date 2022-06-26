# RSSchool NodeJS websocket task template
> Static http server and base task packages.

## Permissions
  open System Preferences > Security & Privacy > Accessibility
  (you might have to unlock the settings by clicking the lock icon in the bottom left hand corner) >
  check "Terminal" or "VSCode" app in the list "Allow the apps below to control your computer"

## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm run start:dev`

* App served @ `http://localhost:8181` with nodemon

**Production**

`npm run start`

* App served @ `http://localhost:8181` without nodemon

---

**All commands**

Command | Description
--- | ---
`npm run dev` | App served @ `http://localhost:8181` with nodemon
`npm run start` | App served @ `http://localhost:8181` without nodemon

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.