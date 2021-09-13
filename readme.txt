Name:  Vasanthi Devarakonda
Email: Vasanthi.Devarakonda@gmail.com


○ A list of which browsers you have tested (minimum of one)
Chrome Version 93.0.4577.63 (Official Build) (x86_64) on Mac Sierra 10.12.6
Safari Version 12.1.2 (12607.3.10) on Mac Sierra 10.12.6



○ A list of any libraries you used, and why
I've developed this app using react.js and have used create-react-app to bootstrap the application.
Why?
I have envisoned different components that can be used for a blog site. Header component, post component etc.. which can be used to render the site and can be used to maintain code easily.
In native javacript, it can take much time since we need to create dom elements dynamically for posts, titles, text etc.. and use XMLHttpRequest object to handle API calls.
Also, there was little time constraint due to my other priorities. 
So, thought I can develop this app in React quickly than in native javascript.

Also, since user needs to enter text to update the post, JSX is safe to use to handle XSS.

react-router-dom:
Why:
1. There is a requirement to view specific blog post, which means user can book mark the url with post id. When this url is entered in the address bar, it should take user to specific post.
 Thought we need to maintain to router. 

axios:
Why:
to handle XHR requests.

font-awesome:
Why:
icons for edit (pencil)  and delete (trashcan)


○ A list of your source code files, with brief descriptions
I've used create-react-app to bootstrap the application.

Requires:
Node >= 14.0.0 and npm >= 5.6 

To run the app, perform below steps: 
1. npm install
2. npm start

Opens the app in http://localhost:3000/

To see how app looks, please refer to the app-screenshots.pdf


src/indexjs --- trigger and App component is rendered
src/App.js --- has just the routes definitions and defines different routes
               /home -- is the default route
               /edit-post/{postId}/{editMode} -- is used to edit a post
                  http://localhost:3003/editPost/13785/1  --> opens the page in edit mode 
                  http://localhost:3003/editPost/13785/0  --> opens the page in read only mode for user to view a single post
               /create-post -- is used to create a new post
src/components -- has all the react components used in the app
                  -- delete-modal -- simple modal asking confirmation from user when deleting all or single post
                  -- header -- header component to display header info
                  -- post -- component displays single post details
                  -- posts -- component renders all posts

src/views -- has all the diffrent views defined in the app. They correspond to the routes home, create-post, edit-post                 



○ Any other notes on your solution to augment your code comments
1. Infinite Scrolling/Pagination -- If API allows pagination, rendering posts in chunks may be helpful instead of rendering all the posts at once.
2. Authentication/Authorization -- Currently, display of Delete/Edit post buttons is not limited, but should be based on user's authorization. 

○ Any test objectives you were not able to complete in time, and provide a
description of why
1. Responsiveness -- Used flex styles but haven't used media queries to support tablet and mobile devices
2. XSS - Since user is entering big text to update the post, it is better to sanitize the input before saving to server.
         Although, JSX natively supports santization, I couldn't test much due to time constraint 


3. Better Error Handling for XHR errors. I couldn't complete due to time constraint  

4. More structured code:  Some of the code is used twice in create-post and edit-post. It could have been handled in a better way to define at one place and reuse as necessary.