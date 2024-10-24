# 容器部署

## 部署命令

``` shell
docker run -d --name mymongo -p 27017:27017 -v /opt/mongo/data:/data/db -v /opt/mongo/conf/mongod.conf:/etc/mongod.conf -v /opt/mongo/logs:/var/log/mongodb mongo

// 设置MongoDB数据库的初始管理员用户名和密码
-e MONGO_INITDB_ROOT_USERNAME=admin
-e MONGO_INITDB_ROOT_PASSWORD=your_password
```

## 检查程序是否启动

``` shell
docker exec -it mymongo /bin/bash
mongo -host 127.0.0.1 -p 27017
```

## 操作db

``` shell
# 创建库
use test

# 直接通过collection插入数据
# db.collection_name.insertOne({})

# 删除 collection. 无collection则db也会删除
db.collection_name.drop();

#删库
use database_name
db.dropDatabase()

```
