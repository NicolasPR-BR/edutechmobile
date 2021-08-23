import socketio
import krpc
import time

sio = socketio.Client()

print("Connecting...")
# Python (Socketio) tries to connect to Index.js
# I was unable to make a socket.io python server so i found this "solution"
# Index.js redirects the data to the webserver

sio.connect("ws://localhost:3030")


@sio.on('data_request')
def on_message():
    print('data requested', 0)
    sio.emit('height')


# Connects to the Kerbal Space Program KRPC server
conn = krpc.connect()


# Define types and data to be later sent to the webserver in the while loop
vessel = conn.space_center.active_vessel
refframe = vessel.orbit.body.reference_frame
position = conn.add_stream(vessel.position, refframe)
flight_info = vessel.flight()
altitude = conn.add_stream(getattr, flight_info, 'mean_altitude')
thrust = conn.add_stream(getattr, vessel, 'thrust')
qPressure = conn.add_stream(getattr, flight_info, 'dynamic_pressure')
#missionElapsedTime = conn.add_stream(vessel.met)
speed = conn.add_stream(getattr, flight_info, 'speed')
mass = conn.add_stream(getattr, vessel, 'mass')
while(1):

    time.sleep(2)
    data = {
        "height": int(altitude()),
        "position": position(),
        "thrust": thrust(),
        "dynamic_pressure": int(qPressure()),
        # "tplus": missionElapsedTime(),
        "mass": int(mass()),
    },
    sio.emit('data_received', data)
