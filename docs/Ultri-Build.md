# Ultri BuildCreate an AWS Amplify user

## Install Tools and Prerequisites

## Install Node Version Manager (nvm)

Follow [instructions for your OS](https://github.com/nvm-sh/nvm#installing-and-updating).

Linux:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### Install Node 14

```sh
nvm install 14
nvm use 14
```

### Amplify CLI

Use the Amplify CLI to manage and deploy your Amplify app.

```sh
yarn global add @aws-amplify/cli
```

### Quasar CLI

The Quasar CLI helps with mistake free Quasar management.

```sh
yarn global add @quasar/cli
```

### Create an AWS Amplify user with required perms

AWS Amplify will guide you through creating a user with the correct permissions. A developer will need access to the keys from a valid Amplify user account, ideally each should have their own key sets.

```sh
amplify configure
```

### Initialize Branches

Use a GitFlow process to reliably name, manage and merge branches.

#### Install HubFlow

[HubFlow](https://datasift.github.io/gitflow/TheHubFlowTools.html) provides GitFlow workflow capabilities to GitHub projects. Instead of prefacing commands with `git flow` you preface them with `git hf`.

```sh
git clone https://github.com/datasift/gitflow
cd gitflow
sudo ./install.sh
```

```sh
git hf init
```

result...

```sh
Using default branch names.

Which branch should be used for tracking production releases?
   - main
Branch name for production releases: [main]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'develop' on GitHub by visiting:
remote:      https://github.com/TachyonCMS/ultri/pull/new/develop
remote:
To github.com:TachyonCMS/ultri.git
 * [new branch]      develop -> develop
```

You should end up in the `develop` branch.

## Create a new Quasar App

We'll create a SPA app with history based routing. Quasar provides a solid foundation for an app, we can later deploy it as an static-site or an SSR. We'll use Vite for a great HMR experience.

### Create the branch

```sh
git hf feature start quasar
```

### Initialize Quasar

```sh
yarn create quasar
```

results...

```sh
✔ What would you like to build? › App with Quasar CLI, let's go!
✔ Project folder: … app
✔ Pick Quasar version: › Quasar v2 (Vue 3 | latest and greatest)
✔ Pick script type: › Javascript
✔ Pick Quasar App CLI variant: › Quasar App CLI with Vite
✔ Package name: … app
✔ Project product name: (must start with letter if building mobile apps) … Ultri
✔ Project description: … An AWS Amplify UI built with Quasar
✔ Author: … Brian Winkers <bwinkers@gmail.com>
✔ Pick your CSS preprocessor: › Sass with SCSS syntax
✔ Check the features needed for your project: › ESLint, State Management (Pinia), Vue-i18n
✔ Pick an ESLint preset: › Prettier
```

### Change into App Directory

Now that there is an app in the mono-repo we do the rest of work from within the `app` dir.

```sh
cd app
```

### Test app

```sh
quasar dev
```

### Test Build process

```sh
quasar build -m spa
```

### Test Built SPA Website

```sh
quasar serve dist/spa
```

### Enable History Mode

Do this early to avoid rework.

```sh
vi quasar.config.js
```

Change:

```js
vueRouterMode: 'hash',
```

To:

```js
vueRouterMode: 'history',
```

## Merge and Close the Amplify Branch

### Publish (push) the Code Up

```sh
git hf feature submit quasar
```

### Create a PR and Merge

Do this on GitHub.com, or from your client.

### Gitflow Finish the Branch

Us the `-f` flag before the branch name to `force` the merges.

```sh
git hf feature finish -f quasar
```

## Create a Release to track our Work

This also allows us to access to any major point in development for reuse or experimentation.

### Start the Release

```sh
git hf release start v0.1.0
```

### Publish the Release

```sh
git hf release finish 'v0.1.0'
```

## Enable AWS Amplify BaaS for the Quasar app

### Add Amplify Team Provider info to .gitignore

Do this first to avoid the data ever getting into the public repo. The team provider file can be checked into a private repository for sharing with the team.

Since this is small and this is the start we don't create a branch for this. We push the change so we don't lose it.

```sh
echo # Adding for AWS Amplify teams >> .gitignore
echo **/team-provider-info.json >> .gitignore
git commit -a -m "Add AWS Amplify team-provider-info.json to .gitignore"
git push
```

### Create the branch

```sh
git hf feature start amplify
```

### Initialize Amplify

You need to have the AWS Amplify CLI installed and have run `amplify configure` first.

```sh
amplify init
```

Enter a name:

```sh
? Enter a name for the project ultri
```

!!! DO NOT CHOOSE DEFAULTS !!!

```sh
? Initialize the project with the above configuration? (Y/n) N
```

Use these values:

```sh
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using vue
? Source Directory Path:  src
? Distribution Directory Path: dist/spa
? Build Command:  quasar build -m spa
? Start Command: quasar serve dist/spa --history
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile
```

Let AWS access the errors to help improve Amplify.

```sh
✔ Help improve Amplify CLI by sharing non sensitive configurations on failures (y/N) · yes
```

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

```sh
? Please choose the profile you want to use amplify-user-prod
Adding backend environment dev to AWS Amplify app: xxxxxxxxxxxxxx

Deployment completed.
Deployed root stack ultri [ ======================================== ] 4/4
        amplify-ultri-dev-xxxxx        AWS::CloudFormation::Stack     CREATE_COMPLETE                Fri Sep 30 2022 02:00:10…
        AuthRole                       AWS::IAM::Role                 CREATE_COMPLETE                Fri Sep 30 2022 01:59:55…
        UnauthRole                     AWS::IAM::Role                 CREATE_COMPLETE                Fri Sep 30 2022 01:59:55…
        DeploymentBucket               AWS::S3::Bucket                CREATE_COMPLETE                Fri Sep 30 2022 02:00:04…

✔ Help improve Amplify CLI by sharing non sensitive configurations on failures (y/N) · yes
Deployment bucket fetched.
✔ Initialized provider successfully.
✅ Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify push" to deploy everything
```

### Add Amplify Cognito Auth

```sh
amplify add auth
```

Choose manual configuration and use these options:

```sh
 Do you want to use the default authentication and security configuration? Manual configuration
  Select the authentication/authorization services that you want to use: User Sign-Up, Sign-In, connected with AWS IAM controls (Enables
 per-user Storage features for images or other content, Analytics, and more)
 Provide a friendly name for your resource that will be used to label this category in the project: ultriauthorization
 Enter a name for your identity pool. ultri_identitypool
 Allow unauthenticated logins? (Provides scoped down permissions that you can control via AWS IAM) No
 Do you want to enable 3rd party authentication providers in your identity pool? No
 Provide a name for your user pool: ultri_userpool
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to add User Pool Groups? Yes
? Provide a name for your user pool group: admin
? Do you want to add another User Pool Group Yes
? Provide a name for your user pool group: tech
? Do you want to add another User Pool Group No
✔ Sort the user pool groups in order of preference · admin, tech
 Do you want to add an admin queries API? No
 Multifactor authentication (MFA) user login options: OPTIONAL (Individual users can use MFA)
 For user login, select the MFA types: SMS Text Message, Time-Based One-Time Password (TOTP)
 Specify an SMS authentication message: Your Ultri authentication code is {####}
 Email based user registration/forgot password: Enabled (Requires per-user email entry at registration)
 Specify an email verification subject: Your Ultri verification code
 Specify an email verification message: Your Ultri verification code is {####}
 Do you want to override the default password policy for this User Pool? Yes
 Enter the minimum password length for this User Pool: 12
 Select the password character requirements for your userpool:
 Warning: you will not be able to edit these selections.
 What attributes are required for signing up? Email
 Specify the app's refresh token expiration period (in days): 30
 Do you want to specify the user attributes this app can read and write? Yes
 Specify read attributes: Address, Birthdate, Email, Family Name, Middle Name, Gender, Locale, Given Name, Name, Nickname, Phone Number
, Preferred Username, Picture, Profile, Updated At, Website, Zone Info, Email Verified?, Phone Number Verified?
 Specify write attributes: Address, Birthdate, Family Name, Middle Name, Gender, Locale, Given Name, Name, Nickname, Phone Number, Pict
ure, Profile, Updated At, Website, Zone Info
 Do you want to enable any of the following capabilities?
 Do you want to use an OAuth flow? No
? Do you want to configure Lambda Triggers for Cognito? No
✅ Successfully added auth resource ultriauthorization locally
```

### Push Backend Code to AWS

```sh
amplify push
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev

┌──────────┬────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name      │ Operation │ Provider plugin   │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Auth     │ userPoolGroups     │ Create    │ awscloudformation │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Auth     │ ultriauthorization │ Create    │ awscloudformation │
└──────────┴────────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? (Y/n) Yes
```

When completed you can check the status. "No Change" means your local code is in sync with the AWS enviro.

```sh
amplify status

    Current Environment: dev

┌──────────┬────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name      │ Operation │ Provider plugin   │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Auth     │ userPoolGroups     │ No Change │ awscloudformation │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Auth     │ ultriauthorization │ No Change │ awscloudformation │
└──────────┴────────────────────┴───────────┴───────────────────┘
```

## Connect Quasar UI to the Amplify Backend

### Install Amplify Vue 3 Modules

`sh yarn add aws-amplify @aws-amplify/ui-vue `

### Create a Quasar Boot File to Load Amplify

The `main.js` isn't directly available in a Quasar app. Code that would normally go there goes in it's own boot file.

`boot/amplify.js`

```js
import { boot } from "quasar/wrappers";

import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

import AmplifyVue from "@aws-amplify/ui-vue";

export default boot(({ app }) => {
  app.use(AmplifyVue);
});
```

You can then load that boot file by adding it to the list of boot files in `quasar.config.js`.

Add it to the array of boot files to be loaded.

`quasar.configue.js`

```js
// app boot file (/src/boot)
// --> boot files are part of "main.js"
// https://v2.quasar.dev/quasar-cli/boot-files
boot: [
    'i18n',
    'amplify'
],
```

## Implement Auth on Homepage

### Update IndexPage.vue

```js
<script setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
</script>
<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>
```

### Account for some Amplify Oddities

When built under Vite `global` is undefined. Define that in the `index.html`.
Add this code at the end of the head tag, right before the `</head>` tag.

```html
<script>
  var global = global || window;
</script>
```

In `quasar.config.js` we need to add the following:

````js
extendViteConf(viteConf) {
    viteConf.resolve.alias["./runtimeConfig"] = "./runtimeConfig.browser";
    console.log(viteConf);
    },
```

## Test the Build Process

```sh
quasar build -m spa
````

Serve the content

```sh
quasar serve dist/spa --history
```

#### Check the built site

http://localhost:4000

Test Auth, if it works you can develop Amplify apps locally.

## Add Amplify Hosting

Amplify will automatically deploy changes to the front end and back end code when changes are merged in to `develop` or `main` branch.

https://docs.amplify.aws/cli/hosting/hosting/

```sh
amplify add hosting
```

Use these options:

```sh
? Select the plugin module to execute …  (Use arrow keys or type to filter)
❯ Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)

? Choose a type
❯ Continuous deployment (Git-based deployments)
```

A web browser will be automatically opened to login into ther AWS console. Login in as an admin user.

Edit the build setting

Reference:
https://docs.amplify.aws/cli/teams/overview/

### Deploy the front end code

The code should be deployed automatically upon linking. You shouldn't ever need it, but you can publish manually if needed.

```sh
amplify publish
```

## Create a Test and Production Amplify enviro

https://docs.aws.amazon.com/amplify/latest/userguide/team-workflows-with-amplify-cli-backend-environments.html

The `test` environment allows us to test promoting backend changes. It is kept in sync with the `develop` branch of the the repo. We'll reassign the `dev` environment to features branches as work progresses.

The `prod` environment is of course where customers connect. It is kept in sync with the `main` repo.

It might seem excessive for a solo project to have three enviros, but the cost of an enviro only using storage and AppSync API is almost nothing. If relational databases, search, AI, etc. are added to the app the cost of each environment could become burdensome.

### Add Prod Enviro

```sh
amplify env add
```

```sh
? Enter a name for the environment prod
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile
```

#### Deploy Prod Backend

```sh
brian@Doghouse:~/sandbox/ultri/app$ amplify push
✔ Successfully pulled backend environment prod from the cloud.

    Current Environment: prod

┌──────────┬────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name      │ Operation │ Provider plugin   │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Auth     │ userPoolGroups     │ Create    │ awscloudformation │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Auth     │ ultriauthorization │ Create    │ awscloudformation │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Hosting  │ amplifyhosting     │ No Change │                   │
└──────────┴────────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? Yes
```

### Add Test Enviro

```sh
amplify env add
```

```sh
? Enter a name for the environment test
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile
```

#### Deploy Test Backend

```sh
brian@Doghouse:~/sandbox/ultri/app$ amplify push
✔ Successfully pulled backend environment prod from the cloud.

    Current Environment: prod

┌──────────┬────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name      │ Operation │ Provider plugin   │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Auth     │ userPoolGroups     │ Create    │ awscloudformation │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Auth     │ ultriauthorization │ Create    │ awscloudformation │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Hosting  │ amplifyhosting     │ No Change │                   │
└──────────┴────────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? Yes
```

ature/custom-ui:docs/Ultri-Build.md
## Create a Quasar release

### Start the Release

```sh
git hf release start v0.2.0
```

### Publish the Release

```sh
git hf release finish 'v0.2.0'
```

## Create a Custom UI

### Start the feature

```sh
git hf feature start custom-ui
```

### Finish the Custom UI feature

```sh
git hf feature finish custom-ui
```

## Add a SPA rewrite

In the **Amplify Web Console** add a rewrite under the App settings.

**Source adress:** `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>`

**Target address:** `/index.html`

**Type:** 200 (Rewrite)