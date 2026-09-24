$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$url = 'file:///c:/Users/i1020025/Desktop/Combination/Deploy/scratch/test_suite.html'
$html = cmd /c "`"$chrome`" --headless=new --disable-gpu --virtual-time-budget=4000 --dump-dom `"$url`"" | Out-String

$matchesResult = [regex]::Matches($html, '(?<=<div class="flex items-center justify-between">)[\s\S]*?(?=</div>\s*<div class="text-xs)')
Write-Host "================ DIAGNOSTIC TEST RUN REPORT ================" -ForegroundColor Cyan
foreach ($m in $matchesResult) {
    $clean = ($m.Value -replace '<[^>]+>', ' ').Trim() -replace '\s+', ' '
    if ($clean -match 'PASS') {
        Write-Host $clean -ForegroundColor Green
    } else {
        Write-Host $clean -ForegroundColor Red
    }
}
Write-Host "=============================================================" -ForegroundColor Cyan
