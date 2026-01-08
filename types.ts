
export interface Service {
  id: string;
  title: string;
  description: string;
  offset?: boolean;
}

export interface Expert {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

export interface YogaClass {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  icon: string;
}
