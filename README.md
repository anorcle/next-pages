# Build and Deploy Next.js App to GitHub Pages

Use this workflow in your Next Project to build and deploy your static sites on Github

## Introduction
By default, ```next export``` will generate an ```out``` directory, which can be served by any static hosting service or CDN like GitHub Pages. But the name of inner directories (like ```_next/```) and chunk files start with *underscore* and GitHub Pages return ```404``` for such files. **Next Pages** automatically rename those files and folders, remove the beginning *underscore* and replace the new URL in your source code. Also, **Next Pages** rename your ```out``` directory to ```docs```.

## Setup GitHub Pages
![image](https://user-images.githubusercontent.com/44930179/135717105-2b70de01-8d30-41b3-8d69-f7827b8289f6.png)

## Build Command

Update the build command of your ```package.json``` as shown below.

```json
{
  "scripts": {
    "build": "next build && next export"
  }
}
```

```npm run build``` could be used to build and export static pages.

## Create GitHub Action

Create ```build.yml``` file in ```.github/workflows/``` folder.

Example:
```bash
└──.github
    └── workflows
        └── build.yml
```

Include the following steps in the end of a build job.
```yml
- name: Next Pages
  uses: anorcle/next-pages@v1.0
- name: Commit and push changes
  run: |
    git config --global user.name "anorcle"
    git config --global user.email "next-pages@anorcle.com"
    git add -A
    git commit -m "New Build"
    git push
```
You can replace your *username* and *email* for above ```git commit```.


# Example

### Sample package.json


```json
{
  "name": "my-next-pages",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "11.1.2",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "eslint": "7.32.0",
    "eslint-config-next": "11.1.2"
  }
}
```

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
          git config --global user.email "next-pages@anorcle.com"
          git add -A
          git commit -m "New Build"
          git push
```