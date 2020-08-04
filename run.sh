docker stop yentopper
docker rm -f yentopper
docker rmi -f yentopper
docker build -f dockerfile -t yentopper .
docker run -it -d -p 8080:8080 --name yentopper yentopper
