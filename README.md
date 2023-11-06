# Do not commit to the "dev" branch
# Do not push to the "dev" branch
# Dream-Affairs - Frontend

This is a `Nextjs, Typescript and Tailwindcss` project.

## Getting Started

This project uses npm as the default package manager.

#### First clone the repo

```bash
git clone https://github.com/Dream-Affairs/Dream-Affairs-Frontend.git
```

#### Install all dependencies

```bash
npm install
```

#### Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Commit Standards

## Branches

- **dev** -> pr this branch for everything `frontend` related

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/Dream-Affairs/Dream-Affairs-Frontend.git`.
2. Open your terminal & set the origin branch: `git remote add origin https://github.com/Dream-Affairs/Dream-Affairs-Frontend.git`
3. Pull origin `git pull origin dev`
4. Create a new branch for the feature you are working on, eg `(Feat/Bug/Fix/Chore)/Feature-title` : `git checkout -b Feat/Registry`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull origin dev`.
8. Push changes to your new branch, run `git push -u origin Feat/Registry`.
9. Create a pull request to the `dev` branch not `main`.
10. Ensure to describe your pull request.
11. In your PR description or comment, reference the issue you are addressing using the issue number, e.g., `Fixes #123` or `Closes #123`. This will link the PR to the issue.
12. > If you've added code that should be tested, add some test examples.

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify , frontend or test files                                                    |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the , frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
