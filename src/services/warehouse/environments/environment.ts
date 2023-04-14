export const environment = {
    connectionStrings: {
        projections: "mongodb://mongoadmin:secret@127.0.0.1:27017/ppe-managment/?authSource=admin",
        broker: "amqp://localhost:5672"
    },
    rabbitMqConfiguration: {
        vhosts: {
            ppe_managment: {
                connection: {
                    url: "amqp://user:pwd@127.0.0.1:5672/ppe-managment",
                    retry: {
                        min: 1000,
                        max: 60000,
                        factor: 2,
                        strategy: "exponential"
                    },
                    concurrency: 10
                },
                exchanges: {
                    create_inventory_exchange: {
                        assert: true,
                        type: "direct",
                        options: {
                            durable: false
                        }
                    },
                    increase_inventory_exchange: {
                        assert: true,
                        type: "direct",
                        options: {
                            durable: false
                        }
                    },
                    decrease_inventory_exchange: {
                        assert: true,
                        type: "direct",
                        options: {
                            durable: false
                        }
                    },
                    inventory_created_exchange: {
                        assert: true,
                        type: "direct",
                        options: {
                            durable: true
                        }
                    },
                    inventory_increased_exchange: {
                        assert: true,
                        type: "direct",
                        options: {
                            durable: true
                        }
                    },
                    inventory_decreased_exchange: {
                        assert: true,
                        type: "direct",
                        options: {
                            durable: true
                        }
                    },
                },
                queues: [
                    "inventory.create_inventory",
                    "inventory.increase_inventory",
                    "inventory.decrease_inventory",
                    "inventory.inventory_created",
                    "inventory.inventory_increased",
                    "inventory.inventory_decreased",

                 ],
                 bindings: {
                    "b1": {
                       "source": "test_exchange",
                       "destination": "test_queue",
                       "destinationType": "queue",
                       "bindingKey": "test_route"
                    }
                 },
                 "publications": {
                    "demo_publication": {
                       "vhost": "test",
                       "exchange": "test_exchange",
                       "routingKey": "test_route"
                    }
                 },
                 "subscriptions": {
                    "demo_subscription": {
                       "queue": "test_queue",
                       "prefetch": 1
                    }
                 }
              }
           }
    }
};