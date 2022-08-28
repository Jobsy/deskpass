# Deskpass Take Home Test

This project was given to Oluwajoba Bello by the Co-Founder, Chief Technical Officer - Tim Shaw as a take home for Deskpass's Frontend Engineering role

## Instructions:

### Take up to 3 weeks to answer these and work at your own pace. We like thoughtful answers, but we’re not expecting you to spend weeks and weeks laboring on these either.

### We’re not just looking for the “right answer” here, we’re more interested in your thought process and how you arrive at your answers. Go with the way that you think is best, as that is part of the evaluation.

### Be descriptive and leave lots of comments to help us understand why you made the choices you did.

### Submit your responses however you'd like, as long as everything is there. Generally just creating a repo on Github or similar is convenient but it's up to you.

## Questions:

### 1) Write a function in JavaScript that will strip quote characters from a string. An example usage of this function would be ensuring that a string which will be quoted in an article (such as in an editorial sidebar or testimonial block on a page) does not contain quotes in the string itself.

### 2) Implement a React Tooltip component such that given any target element in a page, it will render a tooltip panel relative to the target element. Ideally the component should include some control over where the tooltip panel is positioned and what triggers it to open/close along with any other features you think would be useful for a tooltip to have. Please implement the tooltip yourself and don’t just bring in a package such as react-tooltip and call it day.

### 3) Create a simple proxy server in Node. This proxy server should be capable of transparently forwarding client requests to at least one target server and returning the response from the target server to the requesting client. In addition, this server should be capable of loading various code plugins that extend the functionality of the proxy server. These plugins should be able to view/modify the contents of the request and response life cycle, with the exact steps of this life cycle defined by you. Useful plugin ideas include things such as whitelisting/blacklisting request URLs based on passed criteria, adding request logging for security purposes, filtering out specific pieces of response content, or anything else that you think could be useful. Please implement the proxy functionality yourself rather than using a package such as http-proxy-middleware.

### 4) Systems like Kubernetes and Docker Swarm are the end result of years and years of effort spent slowly abstracting server resources from being "a single physical machine your app is running on" to "a distributed pool of generic resources any app can run on." What do you think the next level of server abstraction will look like in 10 years? How will web apps be deployed and managed a decade from now? Will container management systems such as Kubernetes still be used, or will there be another layer of abstraction used?

### kindly follow this [link](/server/assests/kubernetes_and_docker_what_next_.pdf) for question 4 [answer](/server/assests/kubernetes_and_docker_what_next_.pdf).

## Development server

Run `nmp run dev` for a dev server. Navigate to `http://localhost:8000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

    -- client/my-app
        -- public
        -- src
            -- components
            -- App.css
            -- App.test.tsx
            -- App.tsx
            -- helperFunctions.ts
            -- index.css
            -- react-app-env.d.ts
            -- reportWebVital.ts
            -- setupTests.ts
            -- packagew
            -- README
            -- tsconfig
    -- server
        -- dist
        -- src
            -- tests
            -- deskpassServices
            -- middleWares
            -- plugins
            -- routes
            -- proxy.ts
            -- server.ts
        -- dump.rdb
        -- README
        -- package
        -- tsconfig

## Build

None

## Running unit tests

Run `nmp run test`

## API documentation

Follow the links below for full API docs for each collection

Open [CockTail](https://documenter.getpostman.com/view/17667641/VUqrPHD1) to view it in the browser\
Open [Country](https://documenter.getpostman.com/view/17667641/VUqrPHD2) to view it in the browser\
Open [Dog](https://documenter.getpostman.com/view/17667641/VUqrPHHH) to view it in the browser
