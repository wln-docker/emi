# Em 综合管理系统
Docker镜像部署部署脚本
```emi:
docker run -d --restart=always --network host \
-e WLN_LISTEN_PORT=80 \
-e WLN_CONNSTR_HOST=127.0.0.1 \
-e WLN_CONNSTR_NAME=emi \
-e WLN_CONNSTR_UID=emi \
-e WLN_CONNSTR_PWD=123456 \
-e WLN_MYSQL_PORT=3306 \
--name=emi wlniao/emi:latest
```
- `WLN_LISTEN_PORT`	 程序监听端口号，默认为：`5000`
- `WLN_CONNSTR_HOST`	数据库服务器地址
- `WLN_CONNSTR_NAME`	数据库名称
- `WLN_CONNSTR_UID`		数据库账号
- `WLN_CONNSTR_PWD`	数据库密码
- `WLN_MYSQL_PORT` 	MYSQL服务器端口号，默认为：`3306`
