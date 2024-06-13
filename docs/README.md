---
home: true
icon: home
title: Home
heroImage: /logo.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
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
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: Run <code>pnpm create vuepress-theme-hope hope-project</code> to create a new project with this theme.
      - title: Run <code>pnpm create vuepress-theme-hope add .</code> in your project root to create a new project with this theme.

  - header: Add things you want in markdown
    description: We extended the standard commonMark specification and added tons of new features for you.
    image: /assets/images/user.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: Links Check
        icon: clipboard-check
        details: Check markdown links
        link: https://theme-hope.vuejs.press/guide/markdown/others.html#link-check

      - title: Hint box
        icon: box-archive
        details: Decorate Markdown content with styles
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/hint.html

      - title: GFM alerts
        icon: bell
        details: GFM alert box
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/alert.html

      - title: Tabs
        icon: table-columns
        details: Group similar content with tabs and switch them together
        link: https://theme-hope.vuejs.press/guide/markdown/content/tabs.html

      - title: Code Tabs
        icon: code
        details: Group similar codes with tabs
        link: https://theme-hope.vuejs.press/guide/markdown/code/code-tabs.html

      - title: Custom Align
        icon: align-center
        details: Let you decide to align paragraphs in the way you like
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/align.html

      - title: Attrs
        icon: code
        details: Allow you to add attributes for Markdown content
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/attrs.html

      - title: Superscript and subscript
        icon: superscript
        details: Inserting superscript and subscript
        link: https://theme-hope.vuejs.press/guide/markdown/grammar/sup-sub.html

      - title: Footnote
        icon: quote-left
        details: Your Markdown now support footnotes
        link: https://theme-hope.vuejs.press/guide/markdown/content/footnote.html

      - title: Mark
        icon: highlighter
        details: Mark and highlight contents
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/mark.html

      - title: Spoiler
        icon: eraser
        details: Mark spoiler contents
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/spoiler.html

      - title: Tasklist
        icon: square-check
        details: Use tasklist in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/grammar/tasklist.html

      - title: Image syntax
        icon: image
        details: improve syntax to specify size and color scheme
        link: https://theme-hope.vuejs.press/guide/markdown/grammar/image.html

      - title: Component Support
        icon: puzzle-piece
        details: Easily insert components in Markdown
        link: https://theme-hope.vuejs.press/guide/component/grammar.html

      - title: Components
        icon: puzzle-piece
        details: Common components out fo box
        link: https://theme-hope.vuejs.press/guide/component/built-in.html

      - title: Chart Support
        icon: chart-simple
        details: Display charts in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/chart/chartjs.html

      - title: Flowchart Support
        icon: route
        details: Create your flowchart in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/chart/flowchart.html

      - title: Mermaid Support
        icon: chart-pie
        details: Add mermaid diagram in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/chart/mermaid.html

      - title: Plantuml Support
        icon: diagram-project
        details: Add plantuml in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/chart/plantuml.html

      - title: Tex Support
        icon: square-root-variable
        details: Markdown now have Tex Support so you can write your formula
        link: https://theme-hope.vuejs.press/guide/markdown/grammar/tex.html

      - title: Include snippet Support
        icon: fab fa-markdown
        details: split your docs with different parts and import them in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/content/include.html

      - title: Playground Support
        icon: code
        details: You can add playground in Markdown files
        link: https://theme-hope.vuejs.press/guide/markdown/code/playground.html

      - title: Kotlin playground Support
        icon: fab fa-kickstarter
        details: Reactive kotlin playground
        link: https://theme-hope.vuejs.press/guide/markdown/code/kotlin-playground.html

      - title: Vue playground Support
        icon: fab fa-vuejs
        details: Show living vue component in playground
        link: https://theme-hope.vuejs.press/guide/markdown/code/vue-playground.html

      - title: Sandpack playground Support
        icon: code
        details: A live coding environment driven by Sandpack.
        link: https://theme-hope.vuejs.press/guide/markdown/code/sandpack.html

      - title: Code Demo Support
        icon: laptop-code
        details: You can insert code demo easily
        link: https://theme-hope.vuejs.press/guide/markdown/code/demo.html

      - title: Presentation Support
        icon: person-chalkboard
        details: Insert presentation in Markdown files via Reveal.js
        link: https://theme-hope.vuejs.press/guide/markdown/content/revealjs.html

  - header: Customizable UI
    description: Customizable outlook with full a11y support.
    image: /assets/images/network.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/9-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/9-dark.svg
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
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
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
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
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
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
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
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
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