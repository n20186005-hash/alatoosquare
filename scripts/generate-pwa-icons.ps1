$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$design = @(
  @{ S = 192; Out = 'public/icons/icon-192.png' },
  @{ S = 512; Out = 'public/icons/icon-512.png' }
)

foreach ($d in $design) {
  $S = $d.S
  $bmp = New-Object System.Drawing.Bitmap($S, $S)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.Clear([System.Drawing.ColorTranslator]::FromHtml('#8e211f'))

  # Gold sun ring (circle) centered like favicon (cx=.5, cy=50/128, r=22/128, stroke 7/128)
  $ringColor = [System.Drawing.ColorTranslator]::FromHtml('#e6b95f')
  $cx = [float]($S * 0.5)
  $cy = [float]($S * 50 / 128)
  $r  = [float]($S * 22 / 128)
  $pw = [float]($S * 7 / 128)
  $pen = New-Object System.Drawing.Pen($ringColor, $pw)
  $g.DrawEllipse($pen, $cx - $r, $cy - $r, 2 * $r, 2 * $r)

  # White mountain polygon
  $pts = @(
    (New-Object System.Drawing.PointF(($S * 21 / 128), ($S * 96 / 128))),
    (New-Object System.Drawing.PointF(($S * 48 / 128), ($S * 61 / 128))),
    (New-Object System.Drawing.PointF(($S * 63 / 128), ($S * 77 / 128))),
    (New-Object System.Drawing.PointF(($S * 83 / 128), ($S * 46 / 128))),
    (New-Object System.Drawing.PointF(($S * 109 / 128), ($S * 96 / 128)))
  )
  $mountain = [System.Drawing.ColorTranslator]::FromHtml('#fff8e9')
  $mBrush = New-Object System.Drawing.SolidBrush($mountain)
  $g.FillPolygon($mBrush, $pts)

  # Gold baseline
  $bPen = New-Object System.Drawing.Pen($ringColor, ([float]($S * 6 / 128)))
  $bPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $bPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $g.DrawLine($bPen, ($S * 34 / 128), ($S * 96 / 128), ($S * 95 / 128), ($S * 96 / 128))

  $g.Dispose()
  $bmp.Save((Join-Path (Get-Location) $d.Out), [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Output "Saved $($d.Out)"
}
