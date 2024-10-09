# Contributing to Mental Health App

Thank you for your interest in contributing to Mental Health App! We appreciate your help in making our app better. Here are some guidelines to help you get started.

## Table of Contents
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Code of Conduct](#code-of-conduct)
- [Project Structure](#project-structure)
- [Additional Resources](#additional-resources)

## Getting Started

1. **Fork the Repository** (if applicable): If you're contributing as an external contributor, please fork the repository. If you're part of our core team, you can work directly on the main repository.
2. **Clone the Repo**: Clone your fork (or the main repo) to your local machine.
```bash
git clone https://github.com/your-username/your-app.git
cd your-app
```
3. **Create a Branche**: Create a new branch for your feature or bug fix
```bash
git checkout -b feature/your-feature-name
```
4. **Make Changes**: Implement your feature or bug fix.
5. **Commit your changes**: Commit your changes with a meaningful commit message.
```bash
git commit -m "Add a brief description of your changes"
```

## How to contribute
1. **Open a pull request**: Once you're ready, push your changes to your branch and open a pull request against the `develop` branch.
```bash
git push origin feature/your-feature-name
```
- In your PR description, include a brief summary of your changes and reference any related issues (e.g., Fixes #123).

2. **Code Review**: Your pull request will be reviewed by team members. Be open to feedback and make any necessary changes. After approval, your PR will be merged into the develop branch.

3. **Stay Updated**: Regularly pull the latest changes from the develop branch to keep your feature branch up to date.
```bash
git checkout develop
git pull origin develop
git checkout feature/your-feature-name
git rebase develop
```

## Code of conduct
[TODO]

## Project Structure
Our Mental Health App can be structured as follows :
mental-health-app/
├── src/
|    ├── components/
|    ├── screens/
|    ├── services/
|    ├── utils/
|    └── App.js
├── tests/
├── docs/
├── assets/
└── config/

- `src/` : Contains the main source code
- `components/` : Reusable UI components
- `screens/` : Individual app screens
- `services/` : API and backend services
- `utils/` : Utility functions and helpers
- `tests/` : Unit and integration tests
- `docs/` : Project documentation
- `assets/` : Images, fonts, and other static assets
- `config/` : Configuration files



## Additional Resources
- [stack documentation]
  (https://nextjs.org/docs)
  [others to be confirmed]
  
- [Jest testing Framework]
  (https://jestjs.io/docs/getting-started)

Thank you for contributing to Mental Health App! We look forward to your contributions.
