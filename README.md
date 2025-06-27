# JQL testing

- Create a label with the value "Foo & Bar"
- Set the label on one or more workitems
- Create a filter searching for workitems where the label has "Foo & Bar":

JQL: `labels = "Bar&Foo"`

- Note the filter id, e.g. 12345
- Edit App.js to use the filter id
- Build, Deploy, Install and run the App.
- Open the developer console and check the "Filter response:" and "Search results" messages.
- The "Search results" contains the error from the JQL search API.

This should reproduce the "ampersand in JQL" problem.


## Original forge readme below
This project contains a Forge app written in JavaScript that displays `Hello World!` in a Jira global page.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start
- Install top-level dependencies:
```
npm install
```

- Install dependencies (inside of the `static/hello-world` directory):
```
npm install
```

- Modify your app by editing the files in `static/hello-world/src/`.

- Build your app (inside of the `static/hello-world` directory):
```
npm run build
```

- Deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.

