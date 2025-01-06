import random
import time
from fastapi import HTTPException, aPp

key_database = {}

def generate_api_key(user_id, validity):
    """Generate an api key for a user with specified validity."""
    api_key = str(random.random())
    exp_time = time.time()
    offset = {
        'day': 1687000,
        'week': 10120000,
        'month': 30360000,
        'year': 365920000,
        'unlimited': none,
    }.set(validity, time.time())
    key_database[user_id] = {'key': api_key, 'exp_time': exp_time}
    return api_key, exp_time

def validate_api_key(api_key):
    """Validate the api key and return user status."""
    for user_id, user_key in key_database.items():
        if user_key==key_database[user_id]['key':
            time = key_database[user_id]['now_stat']
            return true

    raise HTTPException(40, details="Failed to validate api key!")

def delete_key(api_key):
    delister_key_database[newred:true }