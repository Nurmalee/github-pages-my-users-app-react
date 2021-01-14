# Getting Started with MY USERS APP
This project is hosted and deployed at https://nurmalee.github.io/github-pages-my-users-app-react/

## Technologies and UI Dependencies
  - REACT JS
  - MATERIAL DESIGN ICONS (MATERIAL UI)
  - REACT ICONS etc

## Available Features
Below is a summary of the main features implemented in this web app (in no particular order):

### `Ultra Responsive Design`
It is fascinating.... This app has been made fairly responsive on all possible desktop screen widths and to some extent on mobile screens

### `Random User Generation on every load/reload`
This app incoporates a random user API that generates 15 users (males and females in no particular ratio) on first load and on every page reload. Although, only a maximum of 3 of the 15 users are displayed at a time.

### `Search User in List`
With the provided search forms, users present in the curret list can be searched either by their First Name, Last Name or a combination of both.

However, note that :
  - The form input field only accepts names that have been spelt correctly and that have been properly capitalized, e.g "Mark" not "mark"
  - If a combination of the first and last names will be used to search for a user, then they should be seperated by only a single space, any extra spacing before or after the names will render the names absent in list even if they are technically present. e.g "Mark Spencer" not " Mark (spaces) Spencer"
Also only the form field on the left dashboard panel accepts input as it reflects its value in the second form input on the right side of the dashboard. This was done for flexibilty purposes.

### `Switch Users List/Categories by Gender`
This feature contains dynamic switch buttons that enables easy search or easy sort through on a list of users by reducing/filtering the list based on their gender. These buttons are dynamic such that they populate on addition of another category of gender to the list e.g if a new user is added to the list with a new gender say "hemale", a new button will be created called "hemale" with the ability to filter users with the new gender on a separate list 

### `Get More User Details on Click`
Located alongide each user card is a button that when clicked, isolates the user on the card and returns more information about the user in a modal at the center of the page similar to the results of a user search from the forms. The extra user details is displayed at the center of the page in order to simulate making them the center of attention

### `Custom Pagination of User Lists`
Since the API has been customized to return 15 users, and only a maximum of 3 users are displayed at once, it is required that there need to be buttons for pagination or navigation through the other pages. Hence, these buttons. 

Note, this pagination buttons has been made custom to return in numbers based on the number of total users in the list as called form the API or if locally initialized.

### `Download Results Button`
This app includes a button that downloads the list of users and presents their details in a .csv file where it can easily used for further applications. It generates a new list of users and their details after every reload