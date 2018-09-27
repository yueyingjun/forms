from flask import  Flask,render_template,request,make_response,send_from_directory
from mysql import db ,cursor
import xlwt
import json
app=Flask(__name__)
@app.route("/")
def index():
    return render_template("index.html")
@app.route("/formadd")
def formadd():
    title=request.args.get("title")
    source=request.args.get("source")
    html=request.args.get("html")

    cursor.execute("insert into forms (title,source,html) values (%s,%s,%s)",(title,source,html))
    db.commit()
    return "ok"
@app.route("/list")
def list():
    cursor.execute("select id,title from forms")
    result=cursor.fetchall()
    return render_template("list.html",data=result)

@app.route("/show/<id>")
def show(id):
    cursor.execute("select id,source from forms where id="+id)
    result=cursor.fetchone()

    return render_template("show.html",data=result)
@app.route("/conadd")
def conadd():
    con=request.args.get("con")
    fid=request.args.get("fid")
    cursor.execute("insert into con (con,fid) values (%s,%s)",(con,fid))
    db.commit()
    return "ok"

@app.route("/edit/<id>")
def edit(id):
    cursor.execute("select id,html from forms where id="+id)
    result=cursor.fetchone()
    return render_template("edit.html",data=result)
@app.route("/editcon")
def editcon():
    title=request.args.get("title")
    html=request.args.get("html")
    source=request.args.get("source")
    id=request.args.get("id")
    cursor.execute("update forms set title=%s,html=%s,source=%s where id=%s",(title,html,source,id))
    db.commit()
    return "ok"

@app.route("/export/<id>")
def export(id):
    cursor.execute("select con from con where fid="+id)
    result=cursor.fetchall()
    if not result:
        return "没有数据"
    titles=json.loads(result[0]["con"])
    xl = xlwt.Workbook()
    sheet = xl.add_sheet("abc", cell_overwrite_ok=True)
    # 表头
    for cols in range(len(titles)):
        sheet.write(0,cols,titles[cols]["name"])

    # 内容

    for row in range(len(result)):
        for col in range (len(json.loads(result[row]["con"]))):
            sheet.write(row+1,col,json.loads(result[row]["con"])[col]["value"])

    xl.save("demo.xls")

    res=make_response(send_from_directory(".","demo.xls",as_attachment=True))

    res.headers["content-disposition"]="attachment;filename=1.xls"

    return res

app.run()