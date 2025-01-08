# The postgres adapter used to connect to LSD with
import psycopg2

# Setting up a connection to LSD via postgres
conn = psycopg2.connect("dbname='you' host='lsd.so'")

with conn.cursor() as curs:
  curs.execute("""
    FROM https://news.ycombinator.com
    |> GROUP BY span.titleline
    |> SELECT a AS post
  """)
  rows = curs.fetchall()
  for row in rows:
    print(row)