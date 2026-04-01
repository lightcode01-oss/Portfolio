$ErrorActionPreference = "Continue"

$sourceDir = "o:\portfolio\sequence\portfolio-site"
$destDir = "o:\portfolio"

Write-Host "Stopping node processes to release file locks..."
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

Write-Host "Deleting redundant loose image frames..."
Remove-Item "o:\portfolio\sequence\frame_*.png" -Force -ErrorAction SilentlyContinue

Write-Host "Moving Next.js project to root..."
Get-ChildItem -Path $sourceDir -Force | ForEach-Object {
    $item = $_
    $targetPath = Join-Path $destDir $item.Name
    if (Test-Path $targetPath) {
        Write-Host "Skipping $($item.Name) as it already exists in root"
    } else {
        Move-Item -Path $item.FullName -Destination $destDir -Force
    }
}

Write-Host "Cleaning up old sequence folder..."
Remove-Item "o:\portfolio\sequence" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Done!"
