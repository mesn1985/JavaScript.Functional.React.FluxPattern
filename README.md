In this project, i experimented with React functional components and redux datastore:
  - no taxonomy/levels (no use of props or state)
  - All components are Idempotent and respond in accordance to propegated data store state changes
  - no component use lifecycle methods
  - no component uses state/hooks
  
What this project is not:
  - and example of good UI implementation.
  - example of best pratices, No CSS file used
  - best pratice in clean code


I created this project during a 5ECTS javascript course, where the assignment was to interact
with an API  that provided weather data. The caveeat is that the API only delivered data unfiltered.
Therefor alot of filtering is done in the filterWeatherdata class which still needs refactoring,
due to project deadline.

The API interacted with is not owned by me and is therefor not included.
It can  be mocked by applying changes to the  WeatherForecaseService and WeatherHistoryService
in the /models/fetch folder
