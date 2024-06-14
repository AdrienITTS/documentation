---
home: true
icon: home
title: Home
heroImage: /logo.svg
bgImageStyle:
  background-attachment: fixed
heroText: Adrien Deprez
tagline: Portfolio and Documentation
actions:
  - text: Who am I
    icon: user
    link: portfolio
      
  - text: How to Use
    icon: lightbulb
    link: ./demo/
    type: primary

  - text: Docs
    link: ./guide/

highlights:
  - header: Easy to install
    image: /assets/images/rocket.svg
    bgImage: /assets/backgrounds/bg-square-pattern.jpg
    bgImageDark: /assets/backgrounds/bg-square-pattern-dark.jpg
    highlights:
      - title: Run <code>pnpm create vuepress-theme-hope hope-project</code> to create a new project with this theme.
      - title: Run <code>pnpm create vuepress-theme-hope add .</code> in your project root to create a new project with this theme.

  - header: Languages and Frameworks
    description: A list of the languages and frameworks I have experience with that I might talk about.
    image: /assets/images/user.svg
    bgImageStyle:
      background-repeat: repeat
    features:
      - title: Java
        icon: fa-brands fa-java
        details: Class-based, object-oriented programming language
        link: https://www.java.com/fr/

      - title: Spring
        icon: fa-solid fa-leaf
        details: Open-source framework for building modern applications
        link: https://spring.io/

      - title: SpringBoot
        icon: fa-solid fa-power-off
        details: Spring-based framework to create stand-alone, production-grade Applications
        link: https://spring.io/projects/spring-boot

      - title: Maven
        icon: fa-solid fa-feather
        details: Build automation tool used primarily for Java projects
        link: https://maven.apache.org/
        
      - title: HTML
        icon: fa-brands fa-html5
        details: Standard markup language for documents designed to be displayed in a web browser
        link: https://developer.mozilla.org/fr/docs/Web/HTML

      - title: CSS
        icon: fa-brands fa-css3-alt
        details: Style sheet language used for describing the presentation of a document written in HTML
        link: https://developer.mozilla.org/fr/docs/Web/CSS
        
      - title: Javascript
        icon: fa-brands fa-js
        details: High-level, interpreted programming language for the web
        link: https://developer.mozilla.org/fr/docs/Web/JavaScript

      - title: Typescript
        icon: fa-solid fa-t
        details: Open-source language which builds on JavaScript by adding static type definitions
        link: https://www.typescriptlang.org/

      - title: Vue.js
        icon: fa-brands fa-vuejs
        details: Open-source JavaScript framework for building user interfaces and single-page applications
        link: https://vuejs.org/

      - title: Angular
        icon: fa-brands fa-angular
        details: TypeScript-based open-source web application framework
        link: https://angular.dev/

      - title: Express
        icon: fa-solid fa-e
        details: Fast, unopinionated, minimalist web framework for Node.js
        link: https://expressjs.com/fr/

      - title: NestJS
        icon: fa-solid fa-cat
        details: Progressive Node.js framework for building efficient, reliable and scalable server-side applications
        link: https://nestjs.com/

      - title: MongoDB
        icon: fa-brands fa-envira
        details: NoSQL database program, using JSON-like documents with optional schemas
        link: https://www.mongodb.com/fr-fr

      - title: PostgreSQL
        icon: fa-solid fa-database
        details: Open-source relational database management system
        link: https://www.postgresql.org/

      - title: Redis
        icon: fa-solid fa-registered
        details: In-memory data structure store, used as a database, cache, and message broker
        link: https://redis.io/fr/

      - title: Kafka
        icon: fa-solid fa-code-branch
        details: Distributed event streaming platform capable of handling trillions of events a day
        link: https://kafka.apache.org/

      - title: Datadog
        icon: fa-solid fa-dog
        details: Monitoring service for cloud-scale applications
        link: https://www.datadoghq.com/

      - title: Betterstack
        icon: fa-solid fa-layer-group
        details: Lets you see inside any stack, debug any issue, and resolve any incident
        link: https://betterstack.com/

      - title: Render
        icon: fa-solid fa-r
        details: Build, deploy, and scale your apps with unparalleled ease
        link: https://render.com/

      - title: Vercel
        icon: fa-solid fa-v
        details: Develop. Preview. Ship. all your frontend projects
        link: https://vercel.com/

      - title: Git
        icon: fa-brands fa-git
        details: Distributed version-control system for tracking changes in source code during software development
        link: https://www.git-scm.com/

      - title: Github
        icon: fa-brands fa-github
        details: Web-based version-control and collaboration platform for software developers
        link: https://github.com/

      - title: Docker
        icon: fa-brands fa-docker
        details: Set of platform as a service products that use OS-level virtualization to deliver software in packages called containers
        link: https://www.docker.com/
        
      - title: Kubernetes
        icon: fa-solid fa-ship
        details: Open-source container-orchestration system for automating computer application deployment, scaling, and management
        link: https://kubernetes.io/fr/

      - title: GCP
        icon: fa-brands fa-google
        details: Cloud computing services that run on the same infrastructure that Google uses internally for its end-user products
        link: https://cloud.google.com/?hl=fr

      - title: Terraform
        icon: fa-solid fa-t
        details: Infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services
        link: https://www.terraform.io/

  - header: Customizable UI
    description: Customizable outlook with full a11y support.
    image: /assets/images/network.svg
    bgImage: /assets/backgrounds/bg-rainbow.png
    bgImageDark: /assets/backgrounds/bg-rainbow-dark.png
    highlights:
      - title: Dark Mode
        icon: circle-half-stroke
        details: Switch between light and dark modes freely
        link: https://theme-hope.vuejs.press/guide/interface/darkmode.html

      - title: Customizable Theme Color
        icon: palette
        details: Set theme color with the brand color and even a picker
        link: https://theme-hope.vuejs.press/guide/interface/theme-color.html

      - title: More
        icon: ellipsis
        details: RTL layout, print support, fullscreen button, etc.
        link: https://theme-hope.vuejs.press/guide/interface/others.html

  - header: Improved layouts
    description: An awesome responsive layout
    image: /assets/images/command.svg
    highlights:
      - title: Navbar
        icon: window-maximize
        details: Fully customizable navbar with improved mobile support
        link: https://theme-hope.vuejs.press/guide/layout/navbar.html

      - title: Sidebar
        icon: fas fa-window-maximize fa-rotate-270
        details: Generate sidebar based on page headings and file structure
        link: https://theme-hope.vuejs.press/guide/layout/sidebar.html

      - title: Slide Page
        icon: person-chalkboard
        details: Adding slide pages to display things you like
        link: https://theme-hope.vuejs.press/guide/layout/slides.html

      - title: Other Layout Improvement
        icon: object-group
        details: Improved page nav and new breadcrumb, footer and toc. We also bring you a brand new homepage.
        link: https://theme-hope.vuejs.press/guide/layout/

  - header: New features
    image: /assets/images/hexa.svg
    bgImage: /assets/backgrounds/bg-triangle-pattern.jpg
    bgImageDark: /assets/backgrounds/bg-triangle-pattern-dark.jpg
    features:
      - title: Catalog Page
        icon: network-wired
        details: Auto generating catalog page and out of box catalog component
        link: https://theme-hope.vuejs.press/guide/feature/catalog.html

      - title: Pageviews and Comments
        icon: comment-dots
        details: Pageview statistics and comment support with 4 comment service
        link: https://theme-hope.vuejs.press/guide/feature/comment.html

      - title: Article Information
        icon: circle-info
        details: Add author, writing date, reading time, word count and other information to your article
        link: https://theme-hope.vuejs.press/guide/feature/page-info.html

      - title: Article Encryption
        icon: lock
        details: Encrypt you articles based on page links, so that only the one you want could see them
        link: https://theme-hope.vuejs.press/guide/feature/encrypt.html

      - title: Search
        icon: search
        details: Support docsearch and client search
        link: https://theme-hope.vuejs.press/guide/feature/search.html

      - title: Code Block
        icon: code
        details: Customize code block themes, line number, highlight lines, copy button, etc.
        link: https://theme-hope.vuejs.press/guide/feature/code-block.html

      - title: Image Preview
        icon: image
        details: Support viewing, zooming, sharing your page images like a gallery
        link: https://theme-hope.vuejs.press/guide/feature/photo-swipe.html

  - header: Blogging
    description: Create personal blog with theme
    image: /assets/images/computer.svg
    highlights:
      - title: Blog features
        icon: blog
        details: Listing your articles with their dates, tags and categories
        link: https://theme-hope.vuejs.press/guide/blog/intro.html

      - title: Blog homepage
        icon: blog
        details: New blog homepage
        link: https://theme-hope.vuejs.press/guide/blog/home.html

      - title: Blogger info
        icon: circle-info
        details: Customize avatar, name, slogan, introduction and social links
        link: https://theme-hope.vuejs.press/guide/blog/blogger.html

      - title: Timeline
        icon: clock
        details: Read through blog posts in a timeline
        link: https://theme-hope.vuejs.press/guide/blog/timeline.html

  - header: Advanced
    description: Advanced features to improve site SEO and user experience
    image: /assets/images/bulb.svg
    bgImage: /assets/backgrounds/bg-banner.png
    bgImageDark: /assets/backgrounds/bg-banner-dark.png
    bgImageStyle:
      background-repeat: repeat
    highlights:
      - title: SEO Enhancement
        icon: dumbbell
        details: Optimize pages for search engines
        link: https://theme-hope.vuejs.press/guide/advanced/seo.html

      - title: Sitemap
        icon: sitemap
        details: Generate a Sitemap for your site
        link: https://theme-hope.vuejs.press/guide/advanced/sitemap.html

      - title: Feed
        icon: rss
        details: Generate feed to allow users to subscribe it
        link: https://theme-hope.vuejs.press/guide/advanced/feed.html

      - title: PWA
        icon: mobile-screen
        details: Make your site more like an APP
        link: https://theme-hope.vuejs.press/guide/advanced/pwa.html

copyright: false
footer: Theme by <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> | MIT Licensed, Copyright © 2019-present Mr.Hope
---

This is an example of a project homepage. You can place your main content here.

To use this layout, you need to set `home: true` in the page front matter.

For related descriptions of configuration items, please see [Project HomePage Layout Config](https://theme-hope.vuejs.press/guide/layout/home/).

<g id="SvgjsG1210" featurekey="aMgJeN-0" transform="matrix(1.6730929445815823,0,0,1.6730929445815823,91.6522089916696,77.50199525721156)" fill="url(#SvgjsLinearGradient1217)"><path xmlns="http://www.w3.org/2000/svg" d="M47.495,62.192c-5.268-2.254-10.214-4.752-14.785-7.483c-1.702,1.702-4.004,2.764-6.545,2.764  c-0.526,0-1.033-0.075-1.537-0.162c-3.598,6.751-5.429,13.429-5.474,19.973c1.661,2.097,3.509,4.018,5.518,5.743  c7.979-2.768,16.039-7.675,23.873-14.618c-0.739-1.403-1.196-2.986-1.196-4.696C47.349,63.191,47.42,62.691,47.495,62.192z"></path><path xmlns="http://www.w3.org/2000/svg" d="M16.695,47.617c0-1.435,0.312-2.789,0.844-4.02c-2.16-1.965-4.168-3.995-5.998-6.09C10.395,41.459,9.771,45.651,9.771,50  c0,7.493,1.848,14.523,5.064,20.638c0.851-5.139,2.673-10.31,5.366-15.43C18.079,53.399,16.695,50.688,16.695,47.617z"></path><path xmlns="http://www.w3.org/2000/svg" d="M48.771,16.689c2.771,0,5.245,1.268,6.978,3.249c4.172-2.608,8.57-5.103,13.221-7.439C63.315,9.296,56.862,7.47,50.001,7.47  c-7.941,0-15.322,2.465-21.558,6.662c4.562,1.859,8.945,3.885,13.179,6.023C43.359,18.052,45.903,16.689,48.771,16.689z"></path><path xmlns="http://www.w3.org/2000/svg" d="M57.771,29.458c5.068,3.328,9.793,6.843,14.107,10.518c3.301-5.372,6.357-11.074,9.131-17.068  c-2.145-2.739-4.633-5.155-7.352-7.253c-5.566,2.684-10.807,5.576-15.686,8.642c0.162,0.726,0.27,1.472,0.27,2.248  C58.241,27.565,58.048,28.531,57.771,29.458z"></path><path xmlns="http://www.w3.org/2000/svg" d="M48.771,36.398c-1.918,0-3.7-0.605-5.193-1.631c-3.261,2.766-6.253,5.62-8.929,8.56c0.61,1.303,0.984,2.746,0.984,4.29  c0,1.158-0.228,2.255-0.582,3.288c4.347,2.588,9.021,4.989,14.048,7.134c1.717-2.522,4.526-4.184,7.718-4.184  c1.596,0,3.08,0.452,4.402,1.183c2.875-3.54,5.639-7.288,8.25-11.267c-4.232-3.625-8.889-7.101-13.904-10.39  C53.841,35.235,51.438,36.398,48.771,36.398z"></path><path xmlns="http://www.w3.org/2000/svg" d="M72.935,46.858c-2.637,3.978-5.414,7.741-8.311,11.292c1.047,1.584,1.664,3.498,1.664,5.562  c0,0.118-0.031,0.229-0.035,0.346c6.35,1.805,13.016,3.28,19.961,4.37c0.615-1.346,1.162-2.727,1.643-4.146  C83.94,58.279,78.933,52.418,72.935,46.858z"></path><path xmlns="http://www.w3.org/2000/svg" d="M56.817,73.564c-1.951,0-3.766-0.619-5.275-1.676c-7.334,6.49-14.89,11.322-22.45,14.396  c6.099,3.936,13.24,6.245,20.909,6.245c14.316,0,26.854-7.932,33.982-19.841c-6.555-1.096-12.859-2.541-18.898-4.271  C63.474,71.47,60.392,73.564,56.817,73.564z"></path><path xmlns="http://www.w3.org/2000/svg" d="M83.995,27.328c-2.65,5.503-5.533,10.761-8.623,15.738C80.8,48.054,85.509,53.283,89.39,58.66  c0.549-2.796,0.84-5.691,0.84-8.66C90.229,41.655,87.923,33.896,83.995,27.328z"></path><path xmlns="http://www.w3.org/2000/svg" d="M31.517,39.502c2.69-2.901,5.654-5.726,8.881-8.457c-0.676-1.356-1.095-2.872-1.095-4.501c0-0.808,0.119-1.579,0.296-2.33  c-4.906-2.458-10.047-4.745-15.4-6.829c-4.651,4.118-8.391,9.335-10.902,15.263c2.033,2.55,4.37,4.999,6.93,7.359  c1.63-1.381,3.679-2.243,5.939-2.243C28.151,37.764,29.992,38.409,31.517,39.502z"></path><circle xmlns="http://www.w3.org/2000/svg" cx="25.884" cy="47.311" r="4.675"></circle><circle xmlns="http://www.w3.org/2000/svg" cx="48.984" cy="26.41" r="4.675"></circle><circle xmlns="http://www.w3.org/2000/svg" cx="56.547" cy="63.673" r="4.675"></circle></g>