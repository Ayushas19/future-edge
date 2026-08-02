$lines = Get-Content index.html -Encoding UTF8

$header = $lines[0..105]
$hero = $lines[106..218]
$trust = $lines[219..244]
$stats = $lines[245..281]
$why = $lines[310..358]
$process = $lines[894..947]
$cta = $lines[1067..1085]
$footer = $lines[1118..($lines.Length - 1)]

$newIndex = $header + $hero + $trust + $stats + $why + $process + $cta + $footer
$newIndex | Set-Content index.html -Encoding UTF8

$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Replace navigation links
    $content = $content -replace 'href="#about"', 'href="about.html"'
    $content = $content -replace 'href="#services"', 'href="services.html"'
    $content = $content -replace 'href="#academy"', 'href="academy.html"'
    $content = $content -replace 'href="#adkrity"', 'href="adkrity.html"'
    $content = $content -replace 'href="#faq"', 'href="faq.html"'
    $content = $content -replace 'href="#portfolio"', 'href="about.html#portfolio"'
    $content = $content -replace 'href="#founder"', 'href="about.html#founder"'
    $content = $content -replace 'href="#industries"', 'href="services.html#industries"'
    $content = $content -replace 'href="#service-([a-z-]+)"', 'href="services.html#service-$1"'
    
    # Hero link
    if ($file.Name -eq "index.html") {
        $content = $content -replace 'href="#hero"', 'href="#"'
    } else {
        $content = $content -replace 'href="#hero"', 'href="/"'
    }

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Host "Done updating index.html and navigation links."
