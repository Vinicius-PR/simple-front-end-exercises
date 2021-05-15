# Simple Frond End Exercises

## Counter page

The counter is a famous one. I used the useState hook from react to keep track of the counter. The app will display the result when counter change. There are 3 buttons. One to increase, other to decrease and last one to reset. In addition, I added some animation using css and js to change size and color when chaning the value of the counter.

## User page

This one use the function getStaticProps to fetch the data from a fake api from the https://jsonplaceholder.typicode.com/. The page will receive the data in the json format and will display the list of users from the api. The page is full responsive. Showing the necessery data to fit the screen.

Also there is a option to click in the name of the fake user and see more information about them. It is done using the dynamic routes. The page [id].tsx will take care of it. Will display the information of the clicked user. Inside this file you can see the implematation of two needed functions to dynamic routes work: getStaticPaths and getStaticProps.

## Post page

This page is similar to the user. Its data also comes from a fake api from the https://jsonplaceholder.typicode.com/. Clicking in any post will display more information about it using Dynamic Routes. In addtion, the page of posts have pagination. 

To this especific pagination, I fetched all the data and saved in an array. Doing this way, I can slice it and display the right posts acording which page is. There is a variable called "numberPostPerPage" that will control how many page will have, because the variable "numberPage" depends on its value. Also will set how many post will display per page. 

In others api the solution would be diferent, because some can return the number of total data that have but it does not occurs with the fake api used. That is why I ended up with this solution.

# To use this project

Clone this project to you local files typing the command (go to the location where you wanna save it):
> git clone https://github.com/Vinicius-PR/simple-front-end-exercises

Move to the file project:
> cd simple-front-end-exercises

Open with your code editor. If you are using Visual Code, run:

> code .

Install the dependencies:
> yarn

Start the aplication and enjoy: \o/
> yarn dev
> 
