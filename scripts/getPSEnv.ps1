function getPSEnv {

<#
.Description
Gets latest psenv file from github and outputs to stdout
If request is failure, it outputs a Write-Error
#>

[uri]$script:PSEnvURI = "https://raw.githubusercontent.com/awsomesawce/my-dotfiles/master/templates/.psenv.ps1"

if ($psenv) {
    if (Test-Path $psenv) {
        (Write-Output "psenv is at $psenv").ToString()
    }
} else {
    # if psenv file is found, do not do anything, else do something.
    $req = Invoke-WebRequest -Uri $PSEnvURI.tostring() -Method "Get"

    if ($req.StatusCode -eq "200") {
        Write-Output "Success!"
        return $req.content
    }
    else {
        Write-Error "There was an error with the request"
        return $req
    }
}
}
