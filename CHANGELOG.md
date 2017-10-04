# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/)

## [unreleased]

### Added

### Changed

### Removed

---

## [0.2.0](https://github.com/LootApp/loot-web-kit/releases/tag/0.2.0)

### Added
- [WST-181](https://jira.loot.io/browse/WST-181) Added new returned values for inputs for the functions below
  * `onChange` will return string value of input `"abc123"`
  * `onBlur` will return an object `{ value:string , hasError:boolean }`
  * `getRef` will return an object with the component element and two helper functions `{ element:object , _reset:function, _error:function }`

### Changed

### Removed

---
