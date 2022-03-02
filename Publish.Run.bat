docker build -t wlniao/emi Publish v2205
docker run -it --rm -p5000:5000 -e WLN_MYSQL_HOST=192.168.31.254 wlniao/emi --name=emi