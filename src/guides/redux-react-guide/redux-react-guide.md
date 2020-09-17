---
title: "Redux Tutorial Guide Part 1: Introduction"
summary: "Build an application from scratch using Redux and React (plus Redux Toolkit). Learn the most important concepts of practical Redux: actions, reducers, store, dispatch, and asynchronous API calls."
date: "2020-09-16"
---

Do you have experience using [React](https://reactjs.org/)? Have you heard of [Redux](https://redux.js.org/), but you've put off learning it because it looks very complicated and all the guides seem overwhelming? If that's the case, this is the article for you! Contain your fear of containing state and come along with me on this relatively painless journey.

#### Prerequisites

You must already know how to use React for this tutorial, as I will not be explaining any aspects of React itself.

* Familiarity with [HTML & CSS](https://internetingishard.com/).
* Familiarity with [ES6 syntax and features](https://www.taniarascia.com/es6-syntax-and-feature-overview/).
* Knowledge of React terminology: [JSX, State, Components, Props, Lifecycle](https://www.taniarascia.com/getting-started-with-react/) and [Hooks](https://www.taniarascia.com/crud-app-in-react-with-hooks)
* Knowledge of [React Router](https://www.taniarascia.com/using-react-router-spa/)
* Knowledge of asynchronous JavaScript and [making API calls](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript)

Also, download Redux DevTools [for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) or [for FireFox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/).

#### Goals

In this tutorial, we will build a small blog app. It will fetch posts and comments from an API. I've created the same app with both plain Redux, and [Redux Toolkit](https://redux-toolkit.js.org/) (RTK), the officially sanctioned toolset for Redux. Here are the links to the source and demos of both the plain and RTK versions.

##### React + Redux Application (Plain Redux)

* [Source](https://codesandbox.io/s/react-redux-application-hewdb)
* [Demo Application](https://hewdb.csb.app/)

##### React + Redux Toolkit Application

* [Source](https://codesandbox.io/s/react-redux-toolkit-application-cbb6s)
* [Demo Application](https://cbb6s.csb.app/)

>Note: The applications are pulling from a real API via JSON Placeholder API. Due to rate limiting on CodeSandbox, the API may appear slow, but it has nothing to do with the Redux application itself. You can also clone the repository locally.

#### We will learn:

* **What** is Redux and **why** you might want to use it
* The **terminology** of Redux: actions, reducers, store, dispatch, connect, and container
* Making asynchronous API calls with [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* How to make a small, real-world application with React and Redux
* How to use Redux Toolkit to simplify Redux app development

## What is Redux?

Redux is a state container for JavaScript applications. Normally with React, you manage state at a component level, and pass state around via props. With Redux, the entire state of your application is managed in one immutable object. Every update to the Redux state results in a copy of sections of the state, plus the new change.

Redux was originally created by [Dan Abramov](https://overreacted.io/) and [Andrew Clark](https://github.com/acdlite).

## Why should I use Redux?

* **Easily manage global state** - access or update any part of the state from any Redux-connected component
* **Easily keep track of changes with Redux DevTools** - any action or state change is tracked and easy to follow with Redux. The fact that the entire state of the application is tracked with each change means you can easily do time-travel debugging to move back and forth between changes.

The downside to Redux is that there's a lot of initial boilerplate to set up and maintain (especially if you use plain Redux without Redux Toolkit). A smaller application [may not need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) and may instead benefit from simply using the [Context API](https://www.taniarascia.com/using-context-api-in-react/) for global state needs.

In my personal experience, I set up an application with Context alone, and later needed to convert everything over to Redux to make it more maintainable and organized.

## Terminology

Usually I don't like to just make a list of terms and definitions, but Redux has a few that are likely unfamiliar, so I'm just going to define them all up front to make it easy to refer back to them. Although you can [skip to the beginning of the tutorial section](#getting-started), I think it would be good to read through all the definitions just to get exposure and an idea of them in your head first.

* [Actions](https://www.taniarascia.com/redux-react-guide/#actions)
* [Reducers](https://www.taniarascia.com/redux-react-guide/#reducers)
* [Store](https://www.taniarascia.com/redux-react-guide/#store)
* [Dispatch](https://www.taniarascia.com/redux-react-guide/#dispatch)
* [Connect](https://www.taniarascia.com/redux-react-guide/#connect)

I'll just use the typical todo application, and the action of deleting a todo, for the examples.

### Actions

An **action** sends data from your application to the Redux store. An action is conventionally an object with two properties: `type` and (optional) `payload`. The type is generally an uppercase string (assigned to a constant) that describes the action. The payload is additional data that may be passed.

###### Action Type

    const DELETE_TODO = 'DELETE_TODO'

###### Action

    {
      type: DELETE_TODO,
      payload: id,
    }

### Action creators

An **action creator** is a function that returns an action.

###### Action Creator
    const deleteTodo = (id) => ({type: DELETE_TODO, payload: id})

### Reducers

A **reducer** is a function that takes two parameters: `state` and `action`. A reducer is immutable and always returns a copy of the entire state. A reducer typically consists of a `switch` statement that goes through all the possible action types.

###### Reducer

    const initialState = {
      todos: [
        {id: 1, text: 'Eat'},
        {id: 2, text: 'Sleep'},
      ],
      loading: false,
      hasErrors: false,
    }
    
    function todoReducer(state = initialState, action) {
      switch (action.type) {
        case DELETE_TODO:
          return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload),
          }
        default:
          return state
      }
    }

### Store

The Redux application state lives in the **store**, which is initialized with a reducer. When used with React, a `<Provider>` exists to wrap the application, and anything within the Provider can have access to Redux.

###### Store

    import {createStore} from 'redux'
    import {Provider} from 'react-redux'
    import reducer from './reducers'
    
    const store = createStore(reducer)
    
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'),
    )

### Dispatch

`dispatch` is a method available on the store object that accepts an object which is used to update the Redux state. Usually, this object is the result of invoking an action creator.

    const Component = ({dispatch}) => {
      useEffect(() => {
        dispatch(deleteTodo())
      }, [dispatch])
    }

### Connect

The `connect()` function is one typical way to connect React to Redux. A connected component is sometimes referred to as a **container**.

Okay, that about covers it for the major terms of Redux. It can be overwhelming to read the terminology without any context, so let's begin.


*To be continued in Part 2...*