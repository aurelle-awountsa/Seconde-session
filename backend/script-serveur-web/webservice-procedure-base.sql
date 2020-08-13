CREATE FUNCTION "DBA"."getpath"()
returns LONG VARCHAR
deterministic
 BEGIN
    declare dbPath long varchar;
    declare dbname LONG VARCHAR ;
   set dbPath = (select db_property ('file'));
   set dbName = (select db_property('name')) + '.db'; -- nom de la db
   set dbPath = left(dbPath, length(dbPath)-length(dbName));

    return dbPath; // renvoyer path
END;


CREATE PROCEDURE "DBA"."http_getCSS"(in url char(255))
result(css long varchar)
BEGIN
call sa_set_http_header( 'Content-Type', 'text/css'); // header http
select xp_read_file(dba.getPath() || 'CSS\' || url); // renvoyer css
END;



CREATE PROCEDURE "DBA"."http_getIMG"(in url char(255))
result(img long binary)
BEGIN
call sa_set_http_header('Content-Type', 'image/png'); // header http
select xp_read_file(dba.getPath() || 'IMG\' || url); // renvoyer image
END;


CREATE PROCEDURE "DBA"."http_getJS"(in url char(255))
result(js long varchar)
BEGIN
call sa_set_http_header( 'Content-Type', 'text/javascript'); // header
select xp_read_file(dba.getPath() || 'JS\' || url); // renvoyer js
END;


CREATE PROCEDURE "DBA"."http_getPage"(in url char(255))
result(html long binary)
BEGIN
call sa_set_http_header('Content-Type', 'text/html'); // header http
select xp_read_file(dba.getPath() + url + '.html' ); //
END;


CREATE SERVICE "html" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getPage(:url);

CREATE SERVICE "js" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getJS(:url);

CREATE SERVICE "css" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getCSS(:url);

CREATE SERVICE "img" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getIMG(:url);
