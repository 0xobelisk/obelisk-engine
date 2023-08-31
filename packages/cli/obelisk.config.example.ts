const  obeliskConfig = {
    project_name: "withinfinity",
    systems: [
        "fee_system",
        "home_system",
        "pet_system",
        "state_system",
    ],
    components: {
      // Key - Struct value
      level: {
          hunger: "u64",
          cleanliness: "u64",
          mood: "u64",
          level: "u64",
      },
      // Key - Struct value
      state: {
          state: "vector<u8>" ,
          last_update_time: "u64" ,
      },
      // Key - Single value
      suifren: "bool",
    },
    // world 的顶级存储，适合定义world的规则，比如一个admin, 一个fee，并且可以帮你初始化数据
    genesis_config: {
      admin: {
        type: "address",
        value: "0x1"
      },
      world_info: {
        type: {
          name: "String",
          description: "String",
          birth_time: "u64",
        },
        value: {
          name: "Crypto Pet",
          description: "Crypto Pet",
          birth_time: "auto",
        }
      },
      fee: {
        type: "Table<vector<u8>,u64>",
        value: [
          {
            clean: "1000000"
          },
          {
            paly: "1000000"
          },
        ]
      },
    }
  }