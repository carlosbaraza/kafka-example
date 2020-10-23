import { Kafka } from "kafkajs";

async function main() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:9092"],
    });

    const admin = kafka.admin();
    console.log("Connecting...");
    await admin.connect();
    console.log("Connected!");

    await admin.createTopics({
      topics: [
        {
          topic: "Users",
          numPartitions: 2,
        },
      ],
    });

    console.log("Created successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
}

main();
