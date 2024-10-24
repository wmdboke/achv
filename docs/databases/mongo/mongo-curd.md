# 基本命令

## mongo 基本命令

``` shell
show dbs
show collections
db.createCollection(<collection_name>, {options}) #
```

### 增

``` shell
db.collectionName.insertOne({
    name: "once",
    email: "once@example.com",
    password: "333333333333",
    role: "admin"
});

db.users.insertMany([  
  { name: "Bob", age: 25, email: "bob@example.com" },  
  { name: "Charlie", age: 35, email: "charlie@example.com" }  
])
```

### 查

``` shell
db.collectionName.find({}) // 查询所有

db.collectionName.find({},{email:1, name: 1, _id: 0}) // 1 为查询 0为排除字段
{ "name" : "cc", "email" : "aachqx@example.com" }
{ "name" : "bee", "email" : "bee@example.com" }

db.collectionName.find({name: "cc"},{email:1, name: 1, _id: 0}) // 条件查询
{ "name" : "cc", "email" : "aachqx@example.com" }

```

### 修改

``` shell
db.collection.updateOne(
   <filter>, // 指定需要更新的文档的查询条件
   <update>, // 描述如何更新匹配的文档
   {
     upsert: <boolean>, // 如果没有找到匹配的文档，是否创建一个新的文档，默认为false
     writeConcern: <document>, // 指定写操作的关注点
     collation: <document> // 指定排序规则
   }
)

```

### 删除

``` shell
db.collection.deleteOne(<filter>)

#例如
db.user.deleteOne({name: "cc"}) 
```
