#!/usr/bin/env python3
"""Resize interim circular logo for nav and favicon. Keeps master untouched."""

from pathlib import Path

try:
    from PIL import Image
except ImportError:
    import subprocess
    import sys

    subprocess.check_call(
        [
            sys.executable,
            "-m",
            "pip",
            "install",
            "pillow",
            "-q",
            "--break-system-packages",
        ]
    )
    from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "brand" / "logo-circle.png"
NAV_OUT = ROOT / "public" / "brand" / "logo-circle-nav.png"
ICON_OUT = ROOT / "src" / "app" / "icon.png"


def resize_square(im: Image.Image, size: int) -> Image.Image:
    """Fit into size x size, preserving aspect; center-crop if not square."""
    im = im.convert("RGBA")
    w, h = im.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    im = im.crop((left, top, left + side, top + side))
    return im.resize((size, size), Image.Resampling.LANCZOS)


def save_optimized(im: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, format="PNG", optimize=True)
    print(f"Wrote {path} ({path.stat().st_size} bytes, {im.size[0]}x{im.size[1]})")


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Missing source: {SRC}")
    master = Image.open(SRC)
    print(f"Master: {SRC} {master.size} {master.mode}")

    nav = resize_square(master, 256)
    save_optimized(nav, NAV_OUT)

    icon = resize_square(master, 48)
    save_optimized(icon, ICON_OUT)


if __name__ == "__main__":
    main()
