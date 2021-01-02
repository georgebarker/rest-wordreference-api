# REST WordReference API
> A wrapper of [wordreference-api](https://github.com/fega/wordreference-api) in a GET method using Express and Docker so that it can be deployed in the cloud and used by any client, rather than being bound to using the JavaScript API.

## Install & Run
### With Docker
```shell
docker build --tag rest-wordreference-api .
docker run -p 3000:3000 rest-wordreference-api
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
