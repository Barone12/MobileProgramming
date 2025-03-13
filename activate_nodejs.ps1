$global:OLD_PATH = $env:Path
$global:OLD_PROMPT = $host.UI.RawUI.WindowTitle
$global:OLD_PROMPT_FUNCTION = $function:prompt

$DIR = Split-Path -Parent $MyInvocation.MyCommand.Definition

$env:Path = "$DIR\nodejs;$env:Path"
$host.UI.RawUI.WindowTitle = "(nodejs) $($host.UI.RawUI.WindowTitle)"
function global:prompt {
    Write-Host "(nodejs) " -NoNewLine -ForegroundColor Green
    & $global:OLD_PROMPT_FUNCTION
}

function global:deactive_node {
    $env:Path = $global:OLD_PATH
    $host.UI.RawUI.WindowTitle = $global:OLD_PROMPT
    $function:prompt = $global:OLD_PROMPT_FUNCTION
    Remove-Variable OLD_PATH -Scope Global
    Remove-Variable OLD_PROMPT -Scope Global
    Remove-Variable OLD_PROMPT_FUNCTION -Scope Global
    Remove-Item function:\deactive_node
    Write-Host "Environment deactivated. PATH restored."
}

Write-Host "Environment activated. Use 'deactivate_node' to revert."


