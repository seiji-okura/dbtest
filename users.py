import sqlite3

dbname = "./1stdb.sqlite"
conn = sqlite3.connect(dbname)

cur = conn.cursor()
cur.execute("SELECT * FROM users")
for row in cur:
    print(row)
