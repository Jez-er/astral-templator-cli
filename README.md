# Astral Templator CLI

A simple and interactive CLI tool for quickly bootstrapping new projects from ready-made templates.

## Features

- Interactive selection of project templates
- Automatic cloning of template repositories
- Installs dependencies automatically
- Prevents overwriting existing directories
- Easy to use and fast setup

## Available Templates

- React empty
- React by Jez-er

## Installation

You can use `npx` to run without global installation:

```sh
npx astral-templator
```

Or install globally:

```sh
npm install -g astral-templator
```

## Usage

Run the CLI and follow the prompts:

```sh
astral-templator
```

You will be asked to:

1. Choose a template
2. Enter a project name (directory must not already exist)

The tool will then:

- Clone the selected template into the specified directory
- Install all dependencies
- Show you the next steps to start development

## Example

```sh
$ astral-templator
? Choice template › - Use arrow-keys. Return to submit.
❯ React empty
  React by Jez-er
? Project name: my-app

🚀 Coping template "React empty"...
📦 Dependency installing...
✅ Done!
👉 cd my-app && npm run dev
```

## License

[MIT](LICENSE)
