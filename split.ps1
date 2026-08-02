$lines = Get-Content index.html -Encoding UTF8

$header = $lines[0..105]
$footer = $lines[1118..($lines.Length - 1)]
$cta = $lines[1067..1085]

$about = $lines[282..309]
$founder = $lines[859..893]
$portfolio = $lines[948..993]

$services = $lines[359..662]
$industries = $lines[663..736]

$adkrity = $lines[737..771]

$academy = $lines[772..858]

$faq = $lines[994..1066]

$privacy = $lines[1086..1117]

function Generate-Page($filename, $contentArray) {
    $content = $header + $contentArray + $cta + $footer
    $content | Set-Content $filename -Encoding UTF8
    Write-Host "Generated $filename"
}

Generate-Page "about.html" ($about + $founder + $portfolio)
Generate-Page "services.html" ($services + $industries)
Generate-Page "adkrity.html" $adkrity
Generate-Page "academy.html" $academy
Generate-Page "faq.html" $faq
Generate-Page "privacy-policy.html" $privacy

Write-Host "Done splitting."
