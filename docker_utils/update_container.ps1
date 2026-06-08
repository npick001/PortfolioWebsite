param (
    [switch]$NoCache
)
1
Write-Host "=== Starting Portfolio Deployment ===" -ForegroundColor Cyan

# 1. Build the Image
if ($NoCache) {
    Write-Host "[1/4] Building Docker image (WITHOUT CACHE)..." -ForegroundColor Yellow
    docker build --no-cache -t portfolio-website .
} else {
    Write-Host "[1/4] Building Docker image (Using Cache)..." -ForegroundColor Green
    docker build -t portfolio-website .
}

# 2. Stop the old container
Write-Host "[2/4] Stopping old container..." -ForegroundColor Cyan
docker stop my-portfolio 2>$null

# 3. Remove the old container
Write-Host "[3/4] Removing old container..." -ForegroundColor Cyan
docker rm my-portfolio 2>$null

# 4. Run the new container
Write-Host "[4/4] Starting new container on port 8080..." -ForegroundColor Cyan
docker run -d -p 8080:2526 --name my-portfolio portfolio-website

Write-Host "=== Deployment Complete! ===" -ForegroundColor Green