# CI/CD Automated Pipeline Assignment

## Application Description
This is a lightweight web application created for demonstrating a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions.

## Directory Structure
- `.github/workflows/`: Contains GitHub Actions workflow definitions (`ci.yml` and `deploy.yml`).
- `src/`: Application source code (`index.html`).
- `tests/`: Automated test suite (`test.js`).
- `README.md`: Project description and instructions.

## CI/CD Workflow Overview
1. **Continuous Integration (CI):** Triggers on pushes and pull requests targeting the `main` branch to run automated tests via `ci.yml`.
2. **Continuous Deployment (CD):** Automatically builds and deploys the `src` folder content to GitHub Pages upon successful merge to `main` via `deploy.yml`.
