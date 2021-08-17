import socketio
import krpc
import time

sio = socketio.Client()

print("Connecting...")

sio.connect("http://localhost:3030")


@sio.on('data_request')
def on_message():
    print('data requested', 0)
    sio.emit('height')


conn = krpc.connect()

vessel = conn.space_center.active_vessel
refframe = vessel.orbit.body.reference_frame
position = conn.add_stream(vessel.position, refframe)
flight_info = vessel.flight()
altitude = conn.add_stream(getattr, flight_info, 'mean_altitude')
speed = conn.add_stream(getattr, flight_info, 'speed')
qPressure = conn.add_stream(getattr, flight_info, 'dynamic_pressure')

while(1):

    time.sleep(1.5)
    aaa = {
        "height": altitude(),
        "position": position(),
        "speed": speed(),
        "dynamic_pressure": qPressure()
    }
    sio.emit('data_received', aaa)
    #height = altitude()
    #sio.emit('data_received', height)
