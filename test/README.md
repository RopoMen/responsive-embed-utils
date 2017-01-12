# About test
Testpage contains simple examples how this library can be used and how it works. I added also `test_iframe.html` to enable iframe test. (due CORS).


## Test content
Test images created with image editing software and videos created from the image using `ffmepg`

```bash
ffmpeg -loop 1 -i img.jpg -c:v libx264 -t 30 -pix_fmt yuv420p out.mp4
```