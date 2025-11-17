from flask import Flask, request, redirect
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
accounts = {}
maxday_data = {}

# ---- 파일에서 계정 불러오기 ----
def load_accounts():
    try:
        with open("accounts.txt", "r", encoding="utf-8") as f:
            for line in f:
                if ":" in line:
                    user, pw = line.strip().split(":")
                    accounts[user] = pw
    except FileNotFoundError:
        pass

# ---- 계정 저장 ----
def save_account(user, pw):
    with open("accounts.txt", "a", encoding="utf-8") as f:
        f.write(f"{user}:{pw}\n")

# ---- maxDay 저장 ----
def save_max_day(user, value):
    with open("maxday.txt", "a", encoding="utf-8") as f:
        f.write(f"{user}:{value}\n")

load_accounts()

# ---- 로그인 HTML ----
login_html = """
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<style>
body {{
    background:white; display:flex; position: absolute; top : 25%;
    justify-content:center; align-items:center; font-family:Arial;
}}
.box {{
    background:black; padding:40px; border-radius:10px; width:320px; 
    color:white; text-align:center;
}}
input, button {{
    width:100%; padding:12px; margin:8px 0; border:none; border-radius:6px;
}}
input {{
    background:#222; color:white;
}}
button {{
    background:white; color:black; font-weight:bold; cursor:pointer;
}}
a {{
    display:block; color:white; margin-top:10px; text-decoration:none;
}}
.error {{
    color:red; margin-bottom:10px; font-size:14px;
}}
</style>
</head>
<body>
<div class="box">
<h2>LOGIN</h2>
{error_msg}
<form method="POST">
    <input type="text" name="username" placeholder="ID" required>
    <input type="password" name="password" placeholder="PASSWORD" required>
    <button type="submit">ENTER</button>
</form>
<a href="/signup">회원가입</a>
</div>
</body>
</html>
"""

# ---- 회원가입 HTML ----
signup_html = """
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Signup</title>
<style>
body {{
    background:white; display:flex; justify-content:center; position: absolute; top : 25%; left :
    align-items:center; font-family:Arial;
}}
.box {{
    background:black; padding:40px; border-radius:10px; width:320px;
    color:white; text-align:center;
}}
input, button {{
    width:100%; padding:12px; margin:8px 0; border:none; border-radius:6px;
}}
input {{
    background:#222; color:white;
}}
button {{
    background:white; color:black; font-weight:bold; cursor:pointer;
}}
a {{
    display:block; color:white; margin-top:10px; text-decoration:none;
}}
.error {{
    color:red; font-size:14px; margin-bottom:10px;
}}
.success {{
    color:green; font-size:14px; margin-bottom:10px;
}}
</style>
</head>
<body>
<div class="box">
<h2>SIGN UP</h2>
{msg}
<form method="POST">
    <input type="text" name="username" placeholder="ID" required>
    <input type="password" name="password" placeholder="PASSWORD" required>
    <button type="submit">REGISTER</button>
</form>
<a href="/">로그인으로 돌아가기</a>
</div>
</body>
</html>
"""

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        user = request.form["username"]
        pw = request.form["password"]

        if user in accounts and accounts[user] == pw:
            return redirect("http://localhost:3000")  # 리액트로 이동

        return login_html.format(error_msg="<div class='error'>❌ 아이디/비밀번호 오류</div>")

    return login_html.format(error_msg="")

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        user = request.form["username"]
        pw = request.form["password"]

        if user in accounts:
            return signup_html.format(msg="<div class='error'>❌ 이미 존재하는 아이디</div>")
        
        accounts[user] = pw
        save_account(user, pw)
        return signup_html.format(msg="<div class='success'>✅ 회원가입 완료</div>")

    return signup_html.format(msg="")

# -----------------------------
#  ⭐ maxDay 저장 API
# -----------------------------
@app.route("/save_max_day", methods=["POST"])
def save_max_day_api():
    data = request.get_json()
    user = data.get("username")
    max_day = data.get("maxDay")

    if user and max_day:
        save_max_day(user, max_day)
        return {"result": "saved", "user": user, "maxDay": max_day}

    return {"result": "fail"}

if __name__ == "__main__":
    app.run(port=1212, debug=True)
