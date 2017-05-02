## Running locally
`yarn; yarn start`
Starts dev server on port 3000

## Building styleguides website and lib
`yarn run build`

## Dependencies
- [react](https://github.com/facebook/react)
- [styled-components](https://github.com/styled-components/styled-components)
- [Roboto Font](https://fonts.google.com/specimen/Roboto)
- [prop-types](https://github.com/reactjs/prop-types)
- [material-datetime-picker](https://github.com/ripjar/material-datetime-picker)

## Updating styleguide at staging.loot.io/styleguide (WIP)
After running `yarn run build` copy contents of `loot-web-kit/build` and move replace
them with ones in `loot.io/styleguide`. Once this step is done run `yarn run build` inside
`loot.io` repo, this will build website assets, but also move styleguide files into
correct folders for them to be served.

## Folder structure
`/components` and `/utilities` are roots that are built by babel into `lib` and
`/util` folders respectively. Rest of the project is related to styleguide website.
Project uses `react-live` and `react-markdown` packages to make component documentation
easy. You can find examples in `examples` folder.
When creating documentation page don't forgett to add correct data inside `links.json`
and add Route for it in `App.js`
Some pages like Colour Scheme are just hand coded due to their unique nature, i.e. no need
to use `react-live` and `react-markdown` if you don't feel like it is necessary.
