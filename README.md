# Emi以米 综合管理系统
Docker镜像部署部署脚本
```emi:
docker run -d --restart=always --network host \
-e WLN_LISTEN_PORT=80 \
-e WLN_MYSQL_HOST=127.0.0.1 \
-e WLN_MYSQL_NAME=emi \
-e WLN_MYSQL_UID=emi \
-e WLN_MYSQL_PWD=123456 \
--name=emi wlniao/emi
```
超级账号：`super` 初始密码：`111111` 超级账号拥有全部系统管理权限，变更超级账号可通过配置参数`SuperSid`进行设置。