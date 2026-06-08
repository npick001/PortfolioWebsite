# Setup the parameters
param (
    [Parameter(Mandatory=$true, HelpMessage="Choose 'Package' to export the image or 'Unpackage' to import it.")]
    [ValidateSet("Package", "Unpackage")]
    [string]$Action,

    [string]$ImageName = "portfolio-website",
    [string]$TarFile = "portfolio-website.tar"
)

Write-Host "=== Docker Image Transfer Utility ===" -ForegroundColor Cyan

if ($Action -eq "Package") {
    Write-Host "Starting packaging process for '$ImageName'..." -ForegroundColor Yellow

    Write-Host "Exporting image to $TarFile..." -ForegroundColor Cyan
    # Package the entire image into a compressed archive file
    docker save -o $TarFile $ImageName
    
    if ($?) {
        Write-Host "Success! The image has been saved to $TarFile." -ForegroundColor Green
        Write-Host "You can now transfer this file to your server (e.g., via scp or FileZilla)." -ForegroundColor Green
    } else {
        Write-Host "Error: Failed to package the image. Check if Docker is running." -ForegroundColor Red
    }
}
elseif ($Action -eq "Unpackage") {
    Write-Host "Starting unpackage process for '$TarFile'..." -ForegroundColor Yellow
    
    if (Test-Path $TarFile) {
        # Extract and register the image into Docker
        docker load -i $TarFile
        
        if ($?) {
            Write-Host "Success! The image is now loaded into Docker." -ForegroundColor Green
            Write-Host "You can spin it up using: docker run -d -p 8080:2526 --name my-portfolio $ImageName" -ForegroundColor Green
        } else {
            Write-Host "Error: Failed to load the image." -ForegroundColor Red
        }
    } else {
        Write-Host "Error: Cannot find the file '$TarFile' in the current directory." -ForegroundColor Red
    }
}

Write-Host "=== Operation Complete ===" -ForegroundColor Cyan