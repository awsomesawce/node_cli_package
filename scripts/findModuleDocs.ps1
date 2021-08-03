
<#
.Description
If a docs folder exists in a node module, list
the contents of it.
#>
switch (Test-Path ".\node_modules\$args\docs") {
    $true { ls ".\node_modules\$args/docs" }
    $false { "It is not there" }
}

