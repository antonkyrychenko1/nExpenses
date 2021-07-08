import uuidGenerator from 'react-native-uuid';

const generate = (): string => uuidGenerator.v4() as string;

const uuid = {
  generate: generate,
};

export default uuid;
