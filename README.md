# TravelStories

## [See the App!](https://travelstories-as.netlify.app/)

![App Logo](your-image-logo-path-or-name)

## Description

TravelStories es una aplicación que permite a los usuarios compartir sus experiencias de viajes a través de historias y relatos. Los usuarios pueden crear, editar y visualizar historias de diferentes destinos, además de interactuar con otros viajeros.

#### [Client Repo here](https://github.com/somorales/Viajes)
#### [Server Repo here](https://github.com/somorales/Viajes-backend)

## Technologies, Libraries & APIs used

- **Frontend:** React, HTML5, CSS3, JavaScript
- **Backend:** Node.js
- **Styling:** Bootstrap
- **API Integration:** Axios
- **Version Control:** GitHub
- **Deployment:** Netlify (Frontend),Render (Backend)

## Backlog Functionalities

- **Like/Comment System:** Añadir funcionalidad para que los usuarios puedan dar "me gusta" y comentar las historias de otros usuarios.
- **Search Filters:** Mejorar el sistema de búsqueda de historias por destinos, fechas y palabras clave.
- **Followers System:** Implementar una funcionalidad para que los usuarios puedan seguir a otros viajeros.
- **Story Drafts:** Permitir a los usuarios guardar borradores de historias para publicarlas más tarde.
- **Story Categories:** Añadir categorías temáticas para las historias (aventura, cultura, gastronómica, etc.).
- **Multimedia Integration:** Permitir a los usuarios subir imágenes y videos relacionados con sus historias de viaje.
- **Progressive Web App (PWA):** Convertir la app en una PWA para ofrecer una mejor experiencia de usuario offline.

# Client Structure

## User Stories

- **404** - Como usuario, quiero ver una página 404 cuando intento acceder a una página que no existe para saber que he cometido un error.
- **500** - Como usuario, quiero ver una página de error cuando hay un problema en el servidor para saber que no es culpa mía.
- **homepage** - Como usuario, quiero poder acceder a la página de inicio para entender de qué trata la aplicación y registrarme o iniciar sesión.
- **sign up** - Como usuario, quiero registrarme en la página para poder compartir mis historias de viajes.
- **login** - Como usuario, quiero iniciar sesión para acceder a mi cuenta y gestionar mis historias de viaje.
- **logout** - Como usuario, quiero poder cerrar sesión para asegurarme de que nadie más accede a mi cuenta.
- **profile** - Como usuario, quiero acceder a mi perfil para editar mis datos personales y ver mis historias guardadas.
- **create story** - Como usuario, quiero crear una nueva historia de viaje para compartir mis experiencias con otros usuarios.
- **edit story** - Como usuario, quiero poder editar una historia previamente creada para corregir errores o añadir más información.
- **delete story** - Como usuario, quiero eliminar una historia que ya no quiero compartir.
- **view stories** - Como usuario, quiero ver una lista de todas las historias de viaje publicadas por otros usuarios.

## Client Routes

| Path                                                   | Page                   | Components             | Behavior                                                      |
| ------------------------------------------------------ | ---------------------- | ---------------------- | ------------------------------------------------------------- |
| `/`                                                    | HomePage               | Navbar, Footer          | Página de inicio con información general de la aplicación y las ciudades |
| `/:city`                                               | CityRecommendations     | CityCard, Favs          | Muestra recomendaciones de la ciudad seleccionada              |
| `/:city/:cityId/recommendations/:recommendationId`     | RecommendationDetails   | RecommendationCard      | Vista detallada de una recomendación específica                |
| `/create`                                              | CreateRecommendation    | RecommendationForm      | Formulario para crear una nueva recomendación de viaje         |
| `/about`                                               | About                  | InfoSection             | Página con información sobre la aplicación y su propósito      |
| `/:city/:cityId/recommendations/:recommendationId/edit`| EditRecommendation      | EditForm                | Formulario para editar una recomendación existente             |
| `/preview`                                             | CardPreview            | CardView                | Vista previa de una tarjeta de recomendación                  |
| `/favs`                                                | Favs                   | FavsCard                | Muestra las recomendaciones marcadas como favoritas            |
| `*`                                                    | Error                  | ErrorPage               | Página de error cuando la ruta no existe                      |

## Other Components

- **Navbar:** Barra de navegación con enlaces a las principales secciones de la app (inicio, perfil, historias).
- **Footer:** Pie de página con información de contacto y links a redes sociales.

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
