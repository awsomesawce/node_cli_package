# Node_unix_cmds

The [standard](https://github.com/feross/standard) code style linter is a great tool by Feross - check it out!

**Remove trailing semicolons:**

```sh
find . -path ./node_modules -prune -o -type f -name '*.js' -exec sed -i '' -e 's/;$//' {} \;
```

**Ensure space between `function` and opening bracket:**

```sh
find . -path ./node_modules -prune -o -type f -name '*.js' -exec sed -i '' -e 's/function(/function (/g' {} \;
```

**Ensure space after colons in object literal:**

```sh
find . -path ./node_modules -prune -o -type f -name '*.js' -exec sed -i '' -E -e 's/:([^ ])/: \1/g' {} \;
```

**Ensure space after commas in object literal:**

```sh
find . -path ./node_modules -prune -o -type f -name '*.js' -exec sed -i '' -E -e 's/,([^ ])/, \1/g' {} \;
```

**Use single quotes when defining strings:**

```sh
find . -path ./node_modules -prune -o -type f -name '*.js' -exec sed -i '' -E -e "s/\"/'/g" {} \;
```

Note that this is by no means foolproof as it will also convert the double quotes inside the string `'foo"bar'`!

**Remove space in front of commas:**

```sh
find . -path ./node_modules -prune -o -type f -name '*.js' -exec sed -i '' -e 's/ *,/,/g' {} \;
```

**Ensure one a single space around equal signs:**

```sh
find . -path ./node_modules -prune -o -type f -name '*.js' -exec sed -i '' -e 's/  *=  */ = /g' {} \;
```

**Remove space in front of colons:**

```sh
find . -path ./node_modules -prune -o -type f -name '*.js' -exec sed -i '' -e 's/ *:/:/g' {} \;
```

**Remove trailing line space:**

```bash
find . -path ./node_modules -prune -o -type f -name '*.js' -exec sed -i '' -e 's/ *$//' {} \;
```
