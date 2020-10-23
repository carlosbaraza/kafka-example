import { Kafka } from "kafkajs";

const msg = process.argv[2];

async function main() {
  try {
    const kafka = new Kafka({
      clientId: "myapp",
      brokers: ["localhost:9092"],
    });

    const producer = kafka.producer();
    console.log("Connecting...");
    await producer.connect();
    console.log("Connected!");

    const partition = msg[0] < "N" ? 0 : 1;
    const result = await producer.send({
      topic: "Users",
      messages: [
        {
          value: msg,
          partition,
        },
      ],
    });

    console.log(`Sent successfully! ${JSON.stringify(result, null, 2)}`);
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
}

main();
