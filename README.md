# REST WordReference API
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
> A wrapper of [wordreference-api](https://github.com/fega/wordreference-api) in a GET method using Express and Docker so that it can be deployed in the cloud and used by any client, rather than being bound to using the JavaScript API.

## Install & Run
### Building your own version with Docker
```shell
docker build --tag rest-wordreference-api .
docker run -p 3000:3000 rest-wordreference-api
```

### Building my version available on Docker Hub
```shell
docker run -p 3000:3000 grbarker/rest-wordreference-api
```

## Usage

```shell
# Format
curl http://$host:$port/api/$word/$from/$to/

# Example
curl http://localhost:3000/api/travailler/fr/en/
```
| parameter | index | description                    |
| --------- | ----- | ------------------------------ |
| `word`    | 0     | the word to translate          |
| `from`    | 1     | the language to translate from |
| `to`      | 2     | the language to translate to   |

## Notes
This is, on purpose, an extremely simple wrapper around the original API. Features such as API authentication and decent error handling are not included. Please feel free to fork from this project in order to extend it. If you feel that your change would strongly contribute to this without breaking the simplicity, please open a pull request.

Personally, I have had success running the app with Docker on DigitalOcean, as well as locally. 
Results may vary for different environment configurations.

Any issues regarding translations, definitions etc. should directed to [WordReference](https://wordreference.com/).

Any changes to functionality of the API should be directed to [wordreference-api](https://github.com/fega/wordreference-api).

## License
MIT © [George Barker](georgebarker.dev)