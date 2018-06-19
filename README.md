# further-gatsby-starter

## Install Node
If not already installed, visit https://nodejs.org/en/ and download Node (any version >= 8.x.x will be fine).

Open your Mac's terminal app (`⌘ + space 'terminal'`) and confirm installation:

  ```$ node -v```
  
  v.8.x.x

  ```$ npm -v```
  
  6.x.x
  
## Clone the project
Clone this repository to your machine:

`git clone https://github.com/tyler-reitz/further-gatsby-starter.git` and `cd` into `further-gatsby-starter` from the current directory.

Install the project's dependencies:

`npm install`

## Develop

Gatsby needs to be running while you're developing:

`npm run develop`

Point your browser to http://localhost:8000 to view your work. Changes will be live-reloaded.

Consult the 
[Gatsby](https://www.gatsbyjs.org/docs/), 
[React](https://reactjs.org/docs/hello-world.html), 
or 
[Tailwind](https://tailwindcss.com/) docs where necessary. 
Visit
[images](https://www.gatsbyjs.org/docs/adding-images-fonts-files/#using-the-code-classlanguage-textstaticcode-folder)
and
[globals](https://www.gatsbyjs.org/docs/environment-variables/) (and this project's `.env` file)
in particular to see how to work with each respectively in Gatsby.

## Build

If you haven't stopped the development process, `Ctrl-c` to stop it.

Then run `npm run build` to build all static files and assets necessary for production.

You may run, `npm run serve` and visit http://localhost:9000 to confirm the build works.

## Deploy

If everything's working fine, you are ready to deploy:

`npm run deploy`

You may be prompted for the host's password if you are not authenticated already.

Visit http://trifecta-dev.influxmarketing.com/ to view your updated, live production version.
