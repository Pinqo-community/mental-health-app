# Contributing to Mental Health App

Thank you for your interest in contributing to Mental Health App! We appreciate your help in improving our app. Here are some guidelines to help you get started.

## Table of Contents
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Branching Strategy](#branching-strategy)
- [Rebasing](#rebasing)
- [Merging into Main](#merging-into-main)
- [Critical Bugs on Main](#critical-bugs-on-main)
- [Code of Conduct](#code-of-conduct)
- [Additional Resources](#additional-resources)

## Getting Started

1. **Clone the Repository**: Since we're a small team, all contributors are added directly to the main repository, so there's no need to fork it.
```bash
git clone https://github.com/Pinqo-community/mental-health-app.git
cd mental-health-app
```
2. **Create a Branch**: Create a new branch for each feature or bug fix.
```bash
git checkout -b feature/your-feature-name
```
3. **Make Changes**: Implement your feature or bug fix.
4. **Commit your Changes**: Commit your changes with a clear and meaningful message.
```bash
git commit -m "Add a brief description of your changes"
```

## How to Contribute

1. **Open a Pull Request**: Once your changes are ready, push your branch and open a pull request (PR) against the `develop` branch.
```bash
git push origin feature/your-feature-name
```
- In your PR description, include a brief summary of your changes and reference any related issues (e.g., Fixes #123).

2. **Code Review**: Your PR will be reviewed by one or more team members. Be open to feedback and make any necessary changes. Once approved, your PR will be merged into the `develop` branch.

3. **Stay Updated**: Regularly pull the latest changes from the `develop` branch to keep your feature branch up to date.
```bash
git checkout develop
git pull origin develop
git checkout feature/your-feature-name
git rebase develop
```

## Branching Strategy

We use a simple branching strategy:
- **main**: The production branch. This branch contains only stable code ready for production.
- **develop**: The integration branch for new features. It contains the latest development work that will eventually be merged into `main`.
- **feature/feature-name**: Every new feature or bug fix should be developed on its own branch to keep `develop` clean. Follow this naming convention: `feature/feature-name` or `bugfix/issue-description`.

## Rebasing

To avoid conflicts during feature integration, we recommend **rebasing** your feature branch regularly with `develop`:
```bash
git fetch origin
git rebase origin/develop
```

## Merging into Main

Once the `develop` branch is stable and all planned features are ready for production, follow these steps to merge into `main`:
```bash
git checkout main
git merge develop
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin main --tags
```

## Critical Bugs on Main

For critical bugs in production on the `main` branch, create a `hotfix` branch to quickly resolve the issue:
```bash
git checkout -b hotfix/issue-description
```
After resolving the issue, merge the `hotfix` branch into both `develop` and `main` to keep both branches up to date:
```bash
git checkout develop
git merge hotfix/issue-description
git checkout main
git merge hotfix/issue-description
```

## Code of Conduct
[TODO]

## Additional Resources
[TODO]

Thank you for contributing to Mental Health App! We look forward to your contributions.