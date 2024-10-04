# TravelStories

## [See the App!](https://travelstories-as.netlify.app/)

![App Logo](your-image-logo-path-or-name)

## Description

TravelStories is an application that allows users to share their travel experiences through stories and narratives. Users can create, edit, and view stories from different destinations, as well as interact with other travelers.

#### [Client Repo here](https://github.com/somorales/Viajes)

#### [Server Repo here](https://github.com/somorales/Viajes-backend)

## Technologies, Libraries & APIs used

- **Frontend:** React, HTML5, CSS3, JavaScript
- **Backend:** Node.js
- **Styling:** Bootstrap
- **API Integration:** Axios
- **Version Control:** GitHub
- **Deployment:** Netlify (Frontend), Render (Backend)

## Backlog Functionalities

- **Category Filters:** Add filtering options by category (Eat & Drink, Experiences, Hidden Places).
- **Add to Favorites:** Allow users to save recommendations to "My Trips," which are suggestions kept for future visits to a destination.
- **User’s Recommendations Section:** Create a section where users can view recommendations they have published.
- **Favorite Recommendations by City:** Add filtering functionality to display favorite recommendations based on the selected city.
- **Delete Recommendations:** Allow users to delete recommendations they no longer want to share.

# Client Structure

## User Stories

- **404** - As a user, I want to see a 404 page when I try to access a page that doesn't exist so I know I made a mistake.
- **homepage** - As a user, I want to be able to access the homepage to understand what the app is about and filter recommendations by city..
- **create story** - As a user, I want to create a new travel story to share my experiences with others.
- **edit story** - As a user, I want to be able to edit a previously created story to fix mistakes or add more information.
- **delete story** - As a user, I want to delete a story that I no longer want to share.
- **view stories** - As a user, I want to see a list of all travel stories published by other users.

## Client Routes

| Path                                                    | Page                  | Components         | Behavior                                                    |
| ------------------------------------------------------- | --------------------- | ------------------ | ----------------------------------------------------------- |
| `/`                                                     | HomePage              | Navbar, Footer     | Home page with general information about the app and cities |
| `/:city`                                                | CityRecommendations   | CityCard, Favs     | Displays recommendations for the selected city              |
| `/:city/:cityId/recommendations/:recommendationId`      | RecommendationDetails | RecommendationCard | Detailed view of a specific recommendation                  |
| `/create`                                               | CreateRecommendation  | RecommendationForm | Form to create a new travel recommendation                  |
| `/about`                                                | About                 | InfoSection        | Page with information about the app and its purpose         |
| `/:city/:cityId/recommendations/:recommendationId/edit` | EditRecommendation    | EditForm           | Form to edit an existing recommendation                     |
| `/favs`                                                 | Favs                  | FavsCard           | Displays recommendations marked as favorites                |
| `*`                                                     | Error                 | ErrorPage          | Error page when the route doesn't exist                     |

## Other Components

- **Navbar:** Navigation bar with links to the main sections of the app (home,about us, favorites).
- **Footer:** Footer with contact information and links to social media.

## Links

### Collaborators

[Angela Ruiz](https://https://github.com/anruiz-r)

[Sofia Morales](https://github.com/somorales)

### Project

[Repository Link Client](https://github.com/somorales/Viajes)

[Repository Link Server](https://github.com/somorales/Viajes-backend)

[Deploy Link](https://travelstories-as.netlify.app/)

### Trello

[Link to your trello board](https://trello.com/b/H3SqggjI)

### Slides

[Slides Link](https://www.figma.com/board/4sVdUtalSetB9V07HbKqwa/Untitled?node-id=0-1&node-type=canvas&t=LUjbhfQEYBU4J3mw-0)
