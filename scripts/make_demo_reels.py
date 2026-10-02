from pathlib import Path
import subprocess
import imageio_ffmpeg

media = Path(r"E:\uplookv2\public\media")
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

for name in ("beauty", "mens", "bridal"):
    source = media / f"{name}.webp"
    output = media / f"reel-{name}.mp4"
    filter_graph = (
        "scale=600:1068:force_original_aspect_ratio=increase,"
        "crop=600:1068,"
        "zoompan=z='min(zoom+0.0007,1.09)':"
        "x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':"
        "d=1:s=480x854:fps=24,format=yuv420p"
    )
    subprocess.run(
        [ffmpeg, "-y", "-loop", "1", "-framerate", "24", "-i", str(source),
         "-vf", filter_graph, "-t", "5", "-c:v", "libx264", "-preset", "medium",
         "-crf", "27", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
         "-an", str(output)],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    print(output.name, output.stat().st_size)
