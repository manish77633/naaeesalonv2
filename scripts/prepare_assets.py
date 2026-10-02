from pathlib import Path
from PIL import Image

source = Path(r"C:\Users\manis\.codex\generated_images\01a0fdc5-4079-7b62-afcc-24449665559e")
target = Path(r"E:\uplookv2\public\media")
target.mkdir(parents=True, exist_ok=True)

assets = {
    "hero": "exec-e717b565-24a8-4389-a82f-8e2140756bd6.png",
    "hero-v2": "exec-b49540e9-331a-4ce3-9368-c3f4680d7c64.png",
    "hero-mobile": "exec-9bfe0ac8-c752-4e6b-ab59-600c74723e25.png",
    "bridal": "exec-0c3fc2c3-5d68-4d83-a817-ba4eb5a16f83.png",
    "interior": "exec-714eb708-4efa-46ac-970c-88b7ff285632.png",
    "mens": "exec-267bb921-c420-442f-b877-295e59629e54.png",
    "beauty": "exec-7699d82d-6e1d-42f8-94fc-08fd24bcd61c.png",
}

for name, filename in assets.items():
    with Image.open(source / filename) as image:
        image.convert("RGB").save(target / f"{name}.webp", "WEBP", quality=84, method=6)
        print(name, image.size, (target / f"{name}.webp").stat().st_size)

with Image.open(r"C:\Users\manis\OneDrive\Pictures\Screenshots\Screenshot 2026-10-02 223728.png") as logo:
    logo.save(target / "uplooks-logo.png")
