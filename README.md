# DreamIt

Sample to explore building an app using low-code AI tools - [v0.dev](https://v0.de) and [BuildShip](https://buildship.app/).

![MIT License](https://badgen.net/badge/license/MIT/blue)
![Demonstrate](https://badgen.net/badge/stage/demonstrate/green)

Tech stack:
* Client - [Next.js](https://nextjs.org).
* Server side - [BuildShip](https://buildship.app/)

**Note**: Since this is a sample app, there are no plans to take in contributions. Feel free to fork the project and make it your own.

## 📋 Requirements

* [Node.js](https://nodejs.org/en/) 18.0+ or 20.0+ 
* [BuildShip](https://buildship.app/) account (you can sign up for the free plan)
* [OpenAI Platform](https://platform.openai.com/) account

## 🚀 Getting Started

These are the instructions for setting up a local development environment.

### Setting up the server
1. Log into yout [BuildShip](https://buildship.app/) account.
1. Duplicate and remix [this BuildShip Workflow](https://buildship.app/remix/b5282209-ece1-4289-aa1f-123b0cd09743). This should create a new workflow named `Dream Interpretation`.
1. Tap the settings icon then go to `Project Settings > Secret Keys`.
1. Add a new secret named `OPENAI_API_KEY` and set this to your OpenAI's API key
1. Navigate to the `Dream Interpretation` workflow
1. Tap the `Ship` icon.
1. Note the endpoint URL. It should look like `https://xy1ab2.buildship.run/api/interpret-dream`

### Setting up the client

1. Clone this repository
1. Go to the project root
1. Copy `env.template` to `.env.local`
1. Set `NEXT_PUBLIC_API_HOST` to your endpoint host, ex: `https://xy1ab2.buildship.run`
1. Install the client dependencies:
    ```bash
    $ cd <PROJECT-ROOT>
    $ npm install
    ```

### Running the app

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 📄 License

Project is MIT licensed, as found in the [LICENSE][license] file.

[license]: ./LICENSE
