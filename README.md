

# Flashcard App for OI2

This is a new instance of an application for the Office of Instructional Innovation. Typically, the application would be linked to a CMS, that limits access to UT Austin students, faculty and staff.

I have been the only one to work on this application, it was built from scratch using Vue CLI, Vuex(state management), and Vue router( routing).

I have passed this to a coworker and we are trying to create the backend and database. Currently the data is not normalized and cards from multiple decks can not be displayed, but, hopefully, the data flows through the project like it would with normalized data.

Once that is figured out, user permissions will need to be added so the app changes based off of admin vs student view. This will be controlled by Canvas authorization.

To view the design visit my figma page: https://www.figma.com/file/Kgcpe792k2AqmxyjdzfCwJ4Q/Flashcards?node-id=0%3A1



## The Old Design
The first application was designed and built by the office's software developer, his main goal was to get an application created quickly. To get the application done quickly, he created a script that would input the needed data into the application. Unfortunately, this made the application user unfriendly, the application would work for students but professors had no way to update and maintain the application. A new deck could only be added through an emailed request to OI2. To make the application more sustainable I redesigned the application.

## The New Design
The new design had three goals:
1) Add an Admin interface so professors can upload their own decks to the app.
2) Change the menus to be more concise, based off feedback
3) Change the appearance of the application to match the design specifications of the office, we use Bulma as a framework. The original application was built with Material UI.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```



### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
