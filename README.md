## Flick - A no-frills photo search tool.

Flick is the second app I built using Angular, with the purpose of learning how to integrate APIs with Angular and my first taste of ngAnimate. 


### Design

Early on in my design process I decided to ‘brand’ my product. Searching the flickr database was never going be a groundbreaking achievment, but it could still be a useful tool. For this reason, I was intent on making the search bar the main event. With a nice clickable button, inviting the user to search. 

I wanted my logo-type to be lowercase and serif, and was keen for a sizeable, circular stop; ’Trocchi’ fitted my needs perfectly.

Making 100 images on a page look nice does present a challenge, but a square crop in a spaced grid was a safe and usable choice. 


### Build

The main challenge with the build was one I designed myself into- because of the two views I had decided upon (and prior to learning about Routes in Angular), I had to declare variables to behave as markers for state changes. The three main states are the landing page, ‘searching’ and ‘searched/results’. 

This project was the one that solidified my understand of Angular Forms, in particular utilising the form object for error handling.


### Improvements

- I’m still not fully happy with the animation as it’s a little clunky. 
- Currently, my staggered animation for loading the photos on the results page isn’t very visible. This is because the display begins when the API Request returns, rather than when the photos have finished downloading locally. A timeout could partially fix this.
- Errors need slightly more prominent styling. Sub search bar (search from the results page) uses native HTML5 validation, rather than customised.
- Photos currently just cropped to top left. Would be good to get this centered.
- Photos currently quite a strange selection, utilise ‘relevant’ or ‘popular’ in Flickr API. 
