# Dev Workflow

## Install Dependencies

### Install Node Version Manager (nvm)

Follow [instructions for your OS](https://github.com/nvm-sh/nvm#installing-and-updating).

Linux:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

#### Install Node 14

```sh
nvm install 14
nvm use 14
```

#### Amplify CLI

Use the Amplify CLI to manage and deploy your Amplify app.

```sh
yarn global add @aws-amplify/cli
```

#### Quasar CLI

The Quasar CLI helps with mistake free Quasar management.

```sh
yarn global add @quasar/cli
```

## Checkout Repo

```sh
git clone git@github.com:TachyonCMS/ultri.git
```

## Create the branch

```sh
git hf feature start <feature_name>
```
## Change into App Directory

Now that there is an app in the mono-repo we do the rest of work from within the `app` dir.

```sh
cd app
```

## Connect to Amplify Dev Enviro

```sh

```

## Run App with HMR

```sh
quasar dev
```

## Push branch to GitHub

## Create PR


## OTHER TASKS

### Switch Backend Enviro

```sh
amplify env checkout dev
```

-or-

```sh
amplify env checkout test
```