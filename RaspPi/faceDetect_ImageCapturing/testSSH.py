from sshtunnel import SSHTunnelForwarder
import requests
import wget

remote_user = 'sean.droke'
remote_host = '73.198.70.162'
remote_port = 22
local_host = '127.0.0.1'
local_port = 8007

server = SSHTunnelForwarder(
    (remote_host, remote_port),
    ssh_username="sean.droke",
    ssh_password="Ocmd2019%%",
    remote_bind_address=(local_host, local_port),
    local_bind_address=(local_host, local_port)
)

server.start()

URL = "http://127.0.0.1:8007/footage/"

location = "Sean's House"

files = {'FileField': open('newMP4_3_21.mp4', 'rb')}

data = {'FileDescriptor': 'test'}

proxies = {
    "http": "http://127.0.0.1:8080",
    }

r = requests.post(URL, data=data, files=files)

#r = requests.get(URL, stream=True)


'''
local_file = open('local_image.png', 'wb')
r.raw.decode_content = True
shutil.copyfileobj(r.raw, local_file)
'''
'''
local_image_filename = wget.download(URL)
print(local_image_filename)
'''

print(server.local_bind_port)  # show assigned local port
# work with `SECRET SERVICE` through `server.local_bind_port`.

server.stop()