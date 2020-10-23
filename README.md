# Kafka example

Following this [YouTube crash course](https://www.youtube.com/watch?v=R873BlNVUB4).

## Starting Kafka in Docker

```sh
# Start ZooKeeper on one terminal
./scripts/start-zookeeper.sh

# Start Kafka on another terminal
./scripts/start-kafka.sh
```

## Create topics

Create two partitions and the group Users

```sh
ts-node src/create-topics.ts
```

## Producer

Publish data to Users. Users from A-N will go to partition 0, the rest to partition 1.

```sh
# Partition 1
ts-node src/producer.ts Zain
ts-node src/producer.ts Sara
ts-node src/producer.ts Luis

# Partition 0
ts-node src/producer.ts Carlos
ts-node src/producer.ts Asthon
ts-node src/producer.ts Artemis
```

## Consumers

### Queue with two consumers

Each consumer will be responsible for one partition.

```sh
# Terminal 1 - Receives messages for one partition
ts-node src/consumer.ts group1

# Terminal 2 - Receives messages for one partition
ts-node src/consumer.ts group1
```

### Pub sub

Assign two different groups and all consumers will receive all the messages.

```sh
# Terminal 1 - Receives all messages
ts-node src/consumer.ts group1

# Terminal 2 - Receives all messages
ts-node src/consumer.ts group2
```
