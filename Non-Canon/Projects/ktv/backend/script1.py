import re
from xml.etree.ElementTree import TreeBuilder, tostring
import krpc
import json
import time
import krpc

conn = krpc.connect()

vessel = conn.space_center.active_vessel
refframe = vessel.orbit.body.reference_frame
position = conn.add_stream(vessel.position, refframe)
flight_info = vessel.flight()
altitude = conn.add_stream(getattr, flight_info, 'mean_altitude')

while(1):
    print("teste")
