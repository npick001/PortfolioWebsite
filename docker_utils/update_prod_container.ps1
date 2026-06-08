
Write-Host "=== Starting Portfolio Deployment ===" -ForegroundColor Cyan

# 1. Stop the old container
Write-Host "[1/3] Stopping old container..." -ForegroundColor Cyan
docker stop my-portfolio 2>$null

# 2. Remove the old container
Write-Host "[2/3] Removing old container..." -ForegroundColor Cyan
docker rm my-portfolio 2>$null

# 3. Run the new container
Write-Host "[3/3] Starting new container on port 8080..." -ForegroundColor Cyan
docker run -d --restart always -p 8080:2526 --name my-portfolio portfolio-website

Write-Host "=== Deployment Complete! ===" -ForegroundColor Green