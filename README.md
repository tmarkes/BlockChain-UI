## Getting Started

I'd recommend building and deploying to the "blockchain-ui-dev" environment set up on the application's Elastic Beanstalk instead.
As our demo code is on the "blockchain-ui-test" environment, work deployed on the dev environment won't affect the demo at all

### Prerequisites

- Atom IDE (https://atom.io/)
- AWS EB CLI (https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)
- PowerShell (or an equivalent) if working from a Windows environment

### Installing

After setting up the aws config file, a command run of 'eb status blockchain-ui-dev'
  should allow you to validate the status of the application.
