## Getting Started

I'd recommend building and deploying to the "blockchain-ui-dev" environment set up on the application's Elastic Beanstalk instead.
As our demo code is on the "blockchain-ui-test" environment, work deployed on the dev environment won't affect the demo at all

### Prerequisites

- Atom IDE (https://atom.io/)
- PowerShell (or an equivalent) if working from a Windows environment

### Running Locally

Make sure you have Node.js installed.

Clone your own fork from https://github.com/tmarkes/BlockChain-UI
cd BlockChain
npm install
npm start
Your app should now be running on localhost:8081.
To have it run from a different port number, change the port number specified in server.js. The line is as follows:
  app.listen(8081);

If the URL location for the landingPage has changed, it will be necessary to "Replace All" for these in app.js.
The window.location.href is specified in each $scope.backToLandingPage function call.
