1. To build a docker image: docker build -t vikrambindal/node-english .
2. To run the docker image:
 docker run -e PORT=5000 -e WORDS="whatever words you want" -p4000:5000 -d --name vikram-test vikrambindal/node-english
3. Check your docker ip: docker-machine ip
4. Run app on website: dockeripaddress:exposedport/   -> shows you host that serviced the request
                       dockeripaddress:exposedport/word -> random word picked from passed parameter
 NOTE: the port number exposed and mapped should be same