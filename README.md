# Remix Azure Functions Demo

This is a demo showing Remix with Azure Functions/Static Webapp (using [@derkoe/remix-azure-functions](https://www.npmjs.com/package/@derkoe/remix-azure-functions)).

## Demo

The demo is currently deployed to https://gray-flower-02cee8d03.1.azurestaticapps.net using [this GitHub workflow](.github/workflows/azure-static-web-apps-gray-flower-02cee8d03.yml).

## Develop locally 

You can run this app using the Azure Static Webapps tools. 

(Before the first start run `npm install`!).

To run your application locally run

```
npm run dev
```

The webapp should be available under http://localhost:4280/ (or see log if another port was chosen).

## Deploy to Azure

You can easily deploy to application to Azure SWA with a GitHub workflow:

```
on:
  push:
    branches:
      - main

jobs:
  build_and_deploy_job:
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)
          action: "upload"
          ###### Repository/Build Configurations - These values can be configured to match your app requirements. ######
          # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig
          app_location: "/" # App source code path
          api_location: "/" # Api source code path - optional
          output_location: "public" # Built app content directory - optional
          ###### End of Repository/Build Configurations ######
```
