# Cubitt Events
Typescript CQRS event library for the Cubitt framework.

[![npm version](https://badge.fury.io/js/cubitt-events.svg)](https://badge.fury.io/js/cubitt-events)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/uu-cubitt/events/master/LICENSE)

## About

This library contains the events raised by the command handler after editing the Cubitt Graph through commands.
Events exist for all basic graph operations, such as addition and removal of nodes, edges, models and connectors.
For more information about the CQRS implementation of the Cubitt framework, please take a look [here](https://uu-cubitt.github.io/).

## Installation

```bash
$ npm install cubitt-events
```

## Features

* 16 graph operation events for a human readable event stream.

## Documentation

* [Code documentation](https://uu-cubitt.github.io/events/)
* [Design documentation](https://uu-cubitt.github.io/events/design/)

## For developers

To generate documentation run:
```bash
$ npm install --only=dev
$ node_modules/.bin/typedoc --out doc/ --module commonjs --target ES5 --mode file src/
```

## People

The original authors of Cubitt are Sander Klock and Thomas Ipskamp. The project is coordinated by [Jan Martijn van der Werf](http://www.uu.nl/staff/JMEMvanderWerf).

## License

[MIT](LICENSE)
