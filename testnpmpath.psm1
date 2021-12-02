<#
.Description
testnpmpath.psm1
NPM path functions, including CheckNPMPath
#>


function CheckNPMPath {
    <#
    .Description
    Checks if path has NPM before NodeJS
    Well, specifically it just checks if NPM is in front.
    If not in front, it will set it to be in front!
    #>
    if (-not "$env:APPDATA/npm".IndexOf("n") -eq 27) {
	write-host -fore Magenta "NPM not detected at beginning of `$env:Path.  Putting npm in front!"
	$env:Path = "$env:APPDATA/npm;$env:PATH"
    } else {
	return write-host -fore Cyan "Success! Npm is at beginning of path"

}
export-modulemember -Function "CheckNPMPath"
