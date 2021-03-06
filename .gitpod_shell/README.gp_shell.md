# GitPod terminal shell setup

GitPod's default shell is `bash`.  When switching to `zsh`, the Prompt string variable `$PS1`'s value is inherited from the bash setupwhich just shows gibberish in `zsh`.

```bash
# bash PS1 prompt string
"\[]0;  \w\]\[[01;32m\] \[[00m\] \[[01;34m\]\w\[[00m\] \$ "
```

```bash
# This is what it looks like inside the browser (for me at least)
\[\]\[\]\u\[\] \[\]\w\[\]
```

> It might just be a rare bug.

`\[]0;\u \w\]\[[01;32m\]\u\[[00m\] \[[01;34m\]\w\[[00m\] \$` - this is the output of `echo $PS1 >> README.gp_shell.md

For reference, here is the standard prompt string from MSYS2's bash:
`\[\e]0;\w\a\]\n\[\e[32m\]\u@\h \[\e[35m\]$MSYSTEM\[\e[0m\] \[\e[33m\]\w\[\e[0m\]\n\$`
