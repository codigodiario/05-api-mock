var schema = {
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "minItems": 5,
            "maxItems": 8,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 0
                    },
                    "firstName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "lastName": {
                        "type": "string",
                        "faker": "name.lastName",
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email",
                    },
                    "phone": {
                        "type": "string",
                        "faker": "phone.phoneNumber",
                    }
                },
                required: ['id', 'firstName', 'lastName', 'email']
            }
        }
    },
    required: ['users']
};

module.exports = schema