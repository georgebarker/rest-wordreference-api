# REST WordReference API
> A wrapper of [wordreference-api](https://github.com/fega/wordreference-api) in a GET method using Express and Docker (soon) so that it can be deployed in the cloud and used by any client, rather than being bound to using the JavaScript API.

## Usage

```shell
Format:
curl http://$host:$port/api/$word/$from/$to/

Example:
curl http://localhost:3000/api/travailler/fr/en/
```
| parameter | index    | description                                      |
| --------- | ------- | ------------------------------------------------ |
| `from`     | 0  | the language to translate from        |
| `to`  | 1 | the language to translate to         |
| `word` | 2  | the word to translate                       |
