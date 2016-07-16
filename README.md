# My Access

**My Access** is an universally accessible login platform that is able to accommodate users with visual, physical or learning disability, having Saint John of God Hospital as our main client.

The platform provides a storyboard three steps long, based on images and sound descriptions, which include activities familiar to the user (e.g. sports, hobbies, musics). Users must select the most familiar option for them on each step, avoiding the need of password memorization. The combination of their options will be used as their password.

In order to identify the user without the need of entering a username or email, two initial steps will filter the registered users and them the user must select their photo on a list. The photo used will be gathered from Linkedin or uploaded manually by the user. After the photo selection, two more steps will be used to confirm the user’s password.

Once the user has logged in, they will be presented with a number of applications that they could log in to automatically, as their credentials would be already be informed during their registration on the platform.

### End-user characteristics
 
Users may have visual, physical or learning disabilities which may include some of the following:
 
- Colour blindness
- Low Dexterity
- Inability to read or understand numbers
- Hearing impairment
- Vision impairment
 
### Design Principles
 
As the platform will be centred on people with disabilities, the design will be based on universal design principles and it will also follow professional guidelines to vision impairment and low dexterity accessibility.
 
## High Level System Architecture

As previously mentioned, the Accessible Login will be an online platform, accessible through a browser. The platform will be divided into two distinct applications: A web app, which will be directed accessible by the user, and a RESTful server, containing the business logic and storing users data.

In order to achieve excellence in navigation, the web app will has a responsive layout, that is a layout suitable for any screen size. The web app will also be fully static, with all user-related information being requested to the server asynchronously. This feature will allows the browser to store the web app completely, giving the user instant access for the following accesses. The technologies that will be used in the web app development will be HTML5, CSS3, JavaScript and AngularJS.

The Restful server will handle multiple concurrent users requesting different types of services, such as authentication or images request for a particular step. All communication made by the server will use JSON as standard, because in this way the server will be able to communicate with different types of applications, such as web apps or mobile apps, using a compatible communication type with them. The RESTful server will also be based on ExpressJS and NodeJS frameworks, since they are based on JSON requests and asynchronous communications.

In order to facilitate the maintenance of the system and to integrate better with the rest of the application, a MongoDB database will be used. MongoDB is a NoSQL database based on a collection of documents (instead of tables), storing JSON information with greater semantic. These characteristics allows documents to have different data structures, not being necessary to define a fixed schema for them or even the use of several tables to separate information which are semantically linked.

