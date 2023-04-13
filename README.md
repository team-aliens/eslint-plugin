# eslint-plugin-aliens

aliens eslint style guide

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-aliens`:

```sh
npm install eslint-plugin-aliens --save-dev
```

## Usage

Add `aliens` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "aliens"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "aliens/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


