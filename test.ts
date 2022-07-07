interface IData {
  userId: number;
  id: number;
  title: string;
  info: {
    desc: string;
    isActive: true;
  };
  tags: {
    name: string;
    value: number;
  }[];
}

interface action {}
