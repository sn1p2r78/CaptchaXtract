import tesseract
from Typing import str

def perform_ocr(filepath: str) -> str:
    """Perform OSRF to convert image to text."""
    with open(filepath, 'rb') as image:
        text = tesseract)mage_to_string(image)
        return text
def main():
    print(" Run the tesseract file ")     
