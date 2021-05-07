# BookStore: A Book Search And Categorisation App

**BookStore** is a bookshelf categorisation and book search application. The app has two main views, the **booklist (bookshelves)** view, and the **book search** view. The app enables the user to perform a search
on the search page for books that are stored on the backend server. When books are retrieved from a search, they can then be selected and added to one of the bookshelf categories. The bookshelf
categories are **'Currently Reading'**, **'Want to Read'** and **'Read'**. Once a book has been placed on one of the shelves (categories), it can then be moved from one shelf (category) to another shelf (category).
This movement can be done by selecting the desired shelf (category) from the book changer **dropdown list** that is present on every book.

The project was developed using the **React JavaScript library**. The project also includes the additional use of the **'react-router-dom'** and **'prop-types'** packages. The projects focus is on **React Fundamentals**
and using Reacts **state management** functionality. The project includes a backend server to develop against and a library of methods (BooksAPI.js) to enable interaction with the backend server.

## Installation and Running

To get started developing right away:

* clone the project to your local machine using the following command on the command line: `git clone https://github.com/cdurri/react-book-store-app.git`
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── CONTRIBUTING.md # Information about contributing to the project
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── package-lock.json # this provides a single representation of the dependency tree such that teammates, deployments, and continuous integration are guaranteed to install exactly the same dependencies.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── BooksList # This Functional component creates the view that contains the bookshelves and open search button
    ├── BookShelves # This Functional component creates the bookshelf container
    ├── BookShelf.js # This Functional component creates each bookshelf
    ├── Book.js # This Functional component creates the list of books on each shelf
    ├── BookShelfChanger.js # This Functional component creates the dropdown to change allow the user to move the book to another shelf
    ├── OpenSearch.js # This Functional component is a button to redirect the user to the books search page
    ├── BooksSearch.js # This Class based component creates the view that contains the book search bar, books search close button and book search results
    ├── BookSearchBar.js # This Functional component creates the search bar, which contains the close button and input search field
    ├── BooksSearchClose.js # This Functional component redirects the user back to the books list view
    ├── BooksSeachInput.js # This Functional component receives a search term, which is use to try and retrieve search results
    ├── BookSearchResults.js # This Functional component lists all the results that are retrieved from the user search input  
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## More Information

* [`React Router Tutorial`](https://blog.pshrmn.com/simple-react-router-v4-tutorial/)
* [`Typechecking With PropTypes`](https://reactjs.org/docs/typechecking-with-proptypes.html)


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
