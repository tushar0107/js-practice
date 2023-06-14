
from pytube import YouTube
# YouTube("").streams.first().download()

yt = YouTube("https://youtu.be/rlJTMUBXhKE")
yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download()