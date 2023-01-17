FROM cafapi/opensuse-jre17:latest

ARG VERSION=0.0.1-SNAPSHOT
WORKDIR /app/
COPY target/carpartsshop-${VERSION}.jar /app/carpartsshop.jar
CMD java -jar /app/carpartsshop.jar