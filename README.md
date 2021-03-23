# boilerplate-codeceptjs

### Pre-requisite for codeceptjs
```
- node.js
- npx
- good when you have no ARM arch processor (chromium problem)
- when you're PC using ARM please read this https://github.com/puppeteer/puppeteer/issues/6622.
- and change configurtion in codecept.conf.js, below args key add this properties (executablePath: "/your_path_chromium_file/Chromium.app/Contents/MacOS/Chromium")
```

### Structure Folder
-- features/<br/>
--- folder_gherkin_perpage/<br/>
----- file_gherkin_feature.feature<br/>
-- outpu/t<br/>
-- pages/<br/>
--- folder_helper_function_per_page/<br/>
----- file_helper.js<br/>
-- step_definitions/<br/>
--- folder_step_per_page/<br/>
----- file_steps.js<br/>

# How to run script
```
- yarn
- npx codeceptjs run --features --verbose
```
