#!/bin/bash

HOSTNAME=$(hostname)

docker run --name kafka -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=$HOSTNAME:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://$HOSTNAME:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka