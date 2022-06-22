// 引入mysql模块
let mysql = require("mysql");

//创建连接对象
let connection =mysql.createConnection({
    host: "localhost",//连接本地计算机
    port:3306,//端口
    user:"root",//数据库账号
    password:"qq123456",//密码
    database:"ds"//连接的数据库名
});

//调用connect方法创造连接
connection.connect((err)=>{//回调函数,如果报错会把err填充上
    if(err){
        console.error("连接失败"+err.stack);//打印堆栈信息
        return;
    }
    console.log("连接成功");
});

let sql = "insert into khxx values(?,?,?,?)";//?是占位符
//设置参数
let params=["1872360281","luoxin","1",'重庆'];
connection.query(sql,params,(err,result)=>{
    if (err) {
        console.error("插入失败" + err.message);
        result;
    }
    console.log("插入成功");
});



//关闭数据库连接
connection.end();
