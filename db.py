import pymysql
con=pymysql.connect(host='localhost',database='movie',user='root',password='sql2020')
cursor=con.cursor()
cursor.execute('select * from testapp_movieinfo')
records=cursor.fetchall()
for record in records:
    print('Date:',record[0])
    print('Moviename:',record[2])
    print('Hero:',record[3])
    print('Heroine:',record[4])
    print('Rating:',record[5])
    print()
