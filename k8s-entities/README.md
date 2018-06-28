About:
The aim of this project is to walkthrough a typical k8s orchestration of services containerised using Docker.

Tech:
k8s, Docker, NodeJS, Express

Pre-requesites:
1. Have docker running locally
2. Have k8s minikube and kubectl locally

Instructions:
A. Docker:
1. Build docker image: docker build -t vikrambindal/node-english .
2. Push docker image: docker push vikrambindal/node-english
3. Run docker image:
 docker run -e PORT=5000 -e WORDS="whatever words you want" -p4000:5000 -d --name vikram-test vikrambindal/node-english
NOTE: 5000 is the container port, and 4000 is the port exposed on host machine
4. Check your docker ip: docker-machine ip
5. Run app: 
dockeripaddress:exposedport/   -> shows you host that serviced the request
dockeripaddress:exposedport/word -> random word picked from passed environment parameter

B. K8S:
1. Run deployment: kubectl create -f xxxx-deployment.yaml . (This runs replica of 3)
2. Expose service: kubectl create -f xxxx-service.yaml
3. Obtain ip: minikube ip
4. Check app:  ip:exposedport/ , ip:exposedport/word
