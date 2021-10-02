# Build and Deploy Next.js App on GitHub Pages

Use this workflow in your Next Project to build and deploy your static sites on Github

### Sample Github Workflow
```yml
# .github/workflows/build.yml

name: Build, Export and Publish Next.js App
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 14.x
      - run: |
          npm i
          npm run build
      - name: Next Pages
        uses: anorcle/next-pages@v1.0
      - name: Commit and push changes
        run: |
          git config --global user.name "anorcle"
          git config --global user.email "bot@anorcle.com"
          git add -A
          git commit -m "New Build"
          git push
```

## Setup GitHub Pages
