#!/usr/bin/env bash
# Sourceable helper scripts for working with npm packages.


pagereadme () 
{ 
    local x="$PWD/node_modules/$1/README.md";
    if [ $# -eq 0 ]; then
        echo "You must pick a package to lookup its README" 1>&2;
        return 1;
    else
        if [[ -r "$x" ]]; then
            echo "Opening \"$x\" to read";
            if command -v bat > /dev/null; then
                bat "$x";
            elif command -v less > /dev/null; then
                less "$x";
            else
                echo "No pager found, using cat";
                cat "$x";
            fi;
        else
            echo "$x not readable";
        fi;
        return 0;
    fi
}


