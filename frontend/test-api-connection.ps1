# API Connection Troubleshooting Script
# Run this to check API connectivity

Write-Host "=== API Connection Test ===" -ForegroundColor Cyan
Write-Host ""

# Read the environment variable
$envFile = ".env.local"
if (Test-Path $envFile) {
    $apiUrl = Get-Content $envFile | Where-Object { $_ -match "^NEXT_PUBLIC_API_URL" } | ForEach-Object { $_.Split("=")[1].Trim() }
    Write-Host "API URL from .env.local: $apiUrl" -ForegroundColor Yellow
    Write-Host ""
    
    # Test endpoints
    $endpoints = @(
        "/products/",
        "/productcategories/",
        "/courses/",
        "/categories/"
    )
    
    foreach ($endpoint in $endpoints) {
        $fullUrl = "$apiUrl$endpoint"
        Write-Host "Testing: $fullUrl" -ForegroundColor White
        
        try {
            $response = Invoke-WebRequest -Uri $fullUrl -Method Get -TimeoutSec 5 -UseBasicParsing
            Write-Host "  Status: $($response.StatusCode)" -ForegroundColor Green
            $contentType = $response.Headers['Content-Type']
            Write-Host "  Content-Type: $contentType" -ForegroundColor Green
        }
        catch {
            Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
        }
        Write-Host ""
    }
} else {
    Write-Host ".env.local not found!" -ForegroundColor Red
}

Write-Host "=== Local Backend Check ===" -ForegroundColor Cyan
$localBackend = netstat -ano | findstr :8000
if ($localBackend) {
    Write-Host "Backend server is running on port 8000" -ForegroundColor Green
} else {
    Write-Host "Backend server is NOT running on port 8000" -ForegroundColor Red
    Write-Host "Start it from the backend directory with: python manage.py runserver" -ForegroundColor Yellow
}
