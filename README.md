# DreamIt

Sample to explore building an app using low-code AI tools - [v0.dev](https://v0.dev) and [BuildShip](https://buildship.app/).

![MIT License](https://badgen.net/badge/license/MIT/blue)
![Demonstrate](https://badgen.net/badge/stage/demonstrate/green)

## Tech stack
* Client - [Next.js](https://nextjs.org)
    * React+TypeScript+TailwindCSS
    * Prototyped front-end components with [v0.dev](https://v0.dev) | [Prompt](https://v0.dev/chat/TRU74gQp8aI)
    * Tweaked and debugged code with [Claude](https://claude.ai/) (3.5 Sonnet, New) and [ChatGPT](https://chatgpt.com/) (4o and o1-preview)
* Server side - [BuildShip](https://buildship.app/)
    * OpenAI for text and image generation

## Screenshots

### v0 Chat
<img src="https://github.com/user-attachments/assets/ba587775-16ca-4906-941d-e2676d521d90" alt="DreamIt App Screen" width="700" height="auto">

### BuildShip Workflow
<img src="https://github.com/user-attachments/assets/51a9cd66-0415-4590-852f-4557667d7e84" alt="DreamIt App Screen" width="600" height="auto">


### App

<img src="https://github.com/user-attachments/assets/602ed09b-83ef-4d2f-bd6c-0a3418de5bc4" alt="DreamIt App Screen" width="700" height="auto">
<img src="https://github.com/user-attachments/assets/25ccfebb-7e54-48a9-a6bf-292036ceefc1" alt="DreamIt App Screen" width="700" height="auto">

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
