create database if not exists newsfeed ;
use newsfeed;
create table if not exists feed(
 id  int not null AUTO_INCREMENT,
 content text,
 publish_date date,
primary key(id) ,
index  (publish_date )
)
