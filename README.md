# Smallcase Assignment

This project is created using Reactjs

### Live Deployed : https://search-feature.netlify.app/

### Api Used : https://picsum.photos/v2/list

### Tech Stack

- React
- Typescript
- Axios
- LRU Cache

### Features

- Created input to fetch data from API for a search query
- Added debounce to make efficient API requests
- Cached the most recent search queries and their data using LRU cache
- UI is in a Consistent state with query
- Suggestions(dropdown) as per previous searches
- Added the skeleton loading

#### LRU cache is used to cache the API calls.

#### We can create our own LRU caching logic using Hashmap and Doubly linkedlist but it will be hard to handle some edge cases.

#### LocalStorage is used to store previous searches so that we show the history of searches.

### Screenshots

#### Web Screen :

![screenshot](https://raw.githubusercontent.com/sujitIwale/search-app/main/public/ui-screenshot.png)

#### Mobile Screen :

![screenshot](https://raw.githubusercontent.com/sujitIwale/search-app/main/public/mobile-screenshot.png)
