# SpaceX
Project to browse, filter and search various SpaceEx programs on a single page.

### To run this project
Run  `git clone https://github.com/prashantverma2703/Space-ex.git` to clone this project. Run with live-server/local-host/node server.

### Project objectives:
The project aims to offers a single page application which enables user to browse through summarized data of SpaceEx programs use filter utility to refine data based on categories like data, landing, launch etc.

### Approach
* A simple MVC methodology is applied using AngularJS.
* Three main functionalities, which are - select filter, prepare url for api call and call api to load data are identified.
* For every filter apply action on UI, 'applyFilter' function is called which accepts the type of filter and the value as arguments and binds the data with the filter variables.
* The 'applyFilter' function then triggers 'callData' function to use ES6 template literals to prepare api url as per the filter requirement and set it to the url variable.
* This triggers 'apiCall' function to make an http get request to fetch data as per the desired filters and set it to result variable.
* The result variable is two way binded and hence it reflects in view.
* Media queries are used to cater all standard device screen sizes.
* Null data is handled to show info messages - 'Not Available' & 'Image Not Available'.

### Built With
* AngulasJS - Javascript FrameWork
* HTML - Markup Language
* CSS - Styling

### Key Features
* Filters - Year, Landing Sucess, Lauch Success.
* Progressive Web App - Highly responsive for all screen-sizes.

### Lighthouse Score
* Performance - 94
* Accessibility - 100
* Best Practice - 93
* SEO - 100

### License
Distributed under the MIT License. See `LICENSE` for more information.

### Author
 **Prashant Verma**

