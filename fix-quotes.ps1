# fix-quotes.ps1
# Replaces curly/smart quotes with straight ASCII quotes across all
# HTML, JS, CSS, and MD files in this project.
# Run before deploying: powershell -ExecutionPolicy Bypass -File fix-quotes.ps1

$noBom  = New-Object System.Text.UTF8Encoding($false)
$root   = $PSScriptRoot
$exts   = @("*.html","*.js","*.css","*.md")
$total  = 0

foreach ($ext in $exts) {
  Get-ChildItem -Path $root -Filter $ext -Recurse | ForEach-Object {
    $path    = $_.FullName
    $content = [System.IO.File]::ReadAllText($path, $noBom)
    $count   = ($content.ToCharArray() | Where-Object {
      $_ -in @([char]0x201C,[char]0x201D,[char]0x2018,[char]0x2019)
    }).Count

    if ($count -gt 0) {
      $fixed = $content `
        -replace [char]0x201C, '"' `
        -replace [char]0x201D, '"' `
        -replace [char]0x2018, "'" `
        -replace [char]0x2019, "'"
      [System.IO.File]::WriteAllText($path, $fixed, $noBom)
      $rel = $path.Replace($root + "\", "")
      Write-Host "Fixed $count quotes in $rel"
      $total += $count
    }
  }
}

if ($total -eq 0) { Write-Host "All clean - no curly quotes found." }
else { Write-Host "`nDone. Replaced $total curly quotes total." }
