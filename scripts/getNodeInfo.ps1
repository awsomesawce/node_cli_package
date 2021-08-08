<#
.Description
Get Node info in the form of a hashtable
#>

<#
.Description
Returns node exe info in the form of a hashtable
#>
[CmdletBinding()]
param([switch]$TBD, [switch]$GlobalScripts,
[switch]$LocalScripts)
if ($TBD) {
    Write-Error -Category 'NotEnabled' "not enabled yet"
}
else {
    $myNodeHash = @{
        node = @{
            exe = (Get-Command node).Source
        }
        npm  = @{
            exe = (Get-Command npm -All).Source
        }
    }
    if ($GlobalScripts) {
        $myNodeHash.npm.gscripts = ls $(npm -g bin)
    }
    if ($LocalScripts) {
	$myNodeHash.npm.lscripts = ls $(npm bin)
    }
    return $myNodeHash
}

