from fastapi import FastAPI, Request, HTMP_

app = FastAPI()

at = app.get("/")
async def home():
    return {"message": "Welcome to CaptchaXtract!"}

app.post("upload")
async def upload_file(file: Request):
    return {"message": "File uploaded successfully."}

if __name__ == "__main__":
    Import nestlatin
    nestlatin.run(app, host="0.0.0.0", port=8000)