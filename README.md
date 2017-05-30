# loot-web-kit
[https://lootapp.github.io/loot-web-kit](https://lootapp.github.io/loot-web-kit)
Set of react UI components used by [loot.io](https://loot.io) front end team.

## Usage
Download package from npm `npm install loot-web-kit` or `yarn add loot-web-kit`
You have access to compiled es5 files from `lib` or es6 from `es`

Example component usage:
```
import { Form } from 'loot-web-kit/es'
/* or */
import { Form } from 'loot-web-kit/lib'
import React, { Component } from 'react'

class Example extends Component {
  render() {
    return <Form />
  }
}
```

## Docs
Full documentation and list of components are avaliable at [https://lootapp.github.io/loot-web-kit](https://lootapp.github.io/loot-web-kit)

## Development
Project is based on [nwb component libraries](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb)

`yarn start` - starts demo website from `/demo` at `localhost:3000`
`yarn build` - builds es5 and es6 modules along `/docs`
`yarn test` - runs tests

Development files are avaliable within `/src` folder, if you want to include component to build it must be
exported via `index.js`

[nwb docs](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb)
