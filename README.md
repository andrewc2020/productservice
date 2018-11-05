# Node.js Product Service using express

This is the companion product service for  andrewc2020/angular-getting-started which supplies the product list.

It can be run in a docker container alongside the web application using the docker-compose.yml script supplied in the web app repository.

The image can be built first, using the command 

docker image build -t <tag>/productservice .

The web app will listen for the service on port 4000.

Change the tag name for the image in the docker-compose.yml and then run docker-compose up to run both the web application and the supporting product service. 

