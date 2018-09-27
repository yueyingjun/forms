import pymysql
print("start")
db=pymysql.connect("localhost","root","123456","dianjiutong",cursorclass=pymysql.cursors.DictCursor)
cursor=db.cursor()



