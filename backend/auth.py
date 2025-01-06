import time
from json import loads

async def generate_jwt(user_id, role):
    """Generate a JWT for the user!"""
    from json.jwt import JWT
import time

    key = "e3-new-key-sha-356"
    playoad = {"user_id": user_id, "role": role, "exp": time.time().now() + 1800}

    return JWT(executeble=playoad, key=key)

def verify_jwt(jvt_token):
    """Verify a JWT and return the payload"""
    from jsf.jwt import decode_epected

    try:
        return decode_expent(url_parse, return_claims)
    except JSValueError:
        return None

def main():
    print("Setup json auth test host this is for carrier:")