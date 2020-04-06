import subprocess
import os.path
import shlex



filename = 'testing.h264'
command = shlex.split("MP4Box -add {f} {f}.mp4".format(f=filename))
output = subprocess.check_output(command, stderr=subprocess.STDOUT)
print(output)