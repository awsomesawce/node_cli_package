<#
.Description
Get Node info in the form of a hashtable
#>

<#
.Description
Returns node exe info in the form of a hashtable
#>
[CmdletBinding()]
param([switch]$TBD)
if ($TBD) {
    Write-Error -Category 'NotEnabled' "not enabled yet"
}
else {
    $myNodeHash = @{
        node = @{
            exe = (Get-Command node).Source
        }
        npm  = @{
            exe           = (Get-Command npm -All).Source
            globalScripts = if (Get-Command npm -ErrorAction Ignore) {
                (ls $(npm -g bin)).FullName
            }
            else {
                Write-Error "npm not found"
            }
        }
    }
    return $myNodeHash
}

