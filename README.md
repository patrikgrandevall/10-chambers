# Web development test

Web development test of some of my favourite gaming experiences of my life. I genereal just some games I have really fond memories of playing.

## Get started

1. Clone the project to a local folder.
2. Install the project with:

```
npm run install
```

3. Run the project in development mode with:

```
npm run dev
```

## Approach and setup

My intention for this assignment was to use an open API from either IGDB or Giant Bomb. But after trying out the API:s I made the decision to use mocked data for the games. IGDB:s API required three different API requests to get the data I needed, and Giant Bomb had real dimensions of the cover art based on the platform, making the grid of Card components inconsistent.

I am using the layout.tsx and page.tsx files as containers of the content and keeping them server-side rendered. If I would use an API I would fetch the data inside the page.tsx file. Now I just made the data an exported const and imported it where it would be used, in this case the CardsSection component. Only the files using interactivity, like the filter, or animations are client components.

I used 'motion' (previously named framer-motion) to create an intro animation first with a loading sequence and then going into the Cards appearing with a stagger effect.

Design wise I wanted to make the card component distinct with a blue border. I also think blue is a good color for both light mode and dark mode. For the typography in the card I wanted to make it clear that the title is what's most important by making it slightly bigger and bold. I also wanted the title to be on one single row so I adjusted the breakpoints to make sure the font size is not too big and the grid adjusts the number of columns before the title runs out of space. Since some of the games has been released on quite a lot of platforms I wanted to display platforms with icons. I noticed IGN used this approach so I borrowed their icon design. To make the icons easier to understand I added a title to them so when you hover on the icon the platform name will appear in text.

The search function is a simple filter that checks if the value of the input exists in the title of any of the games.

## Structure

Structurally I have split up the project into folders of util, types, and components. The util folder contains the mocked games data, as well as the helper function to get the correct icon for the different platforms. The components folder contains the different components used for the assignment. The types folder contains the types.ts file where I define all types I use.
