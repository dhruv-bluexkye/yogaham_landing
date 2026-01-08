
import { Service, Expert, YogaClass, Plan } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Personalized Yoga Plans',
    description: 'Experience yoga your way. Our custom sessions are tailored to your unique goals and fitness level, providing personalized guidance from expert instructors.',
    offset: true
  },
  {
    id: '2',
    title: 'Corporate Yoga Programs',
    description: 'Prioritize employee wellness to boost productivity and create a thriving workplace culture. Learn how to reduce stress, enhance focus, and improve well-being.',
  },
  {
    id: '3',
    title: 'On-Demand Classes',
    description: 'Life gets busy. Fit yoga into your schedule with our on-demand library. Explore diverse styles, deepen your practice, and find inner peace at your own pace.',
    offset: true
  },
  {
    id: '4',
    title: 'Nutrition Guidance',
    description: 'Nourish your body and mind. Our comprehensive program includes expert nutrition guidance to complement your yoga practice and support overall well-being.',
  }
];

export const EXPERTS: Expert[] = [
  {
    id: '1',
    name: 'Sofia Rossi',
    specialty: 'Ashtanga & Meditation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB39pNyE3Vzjn_EVn1YG0W67tSLaPpHLEOojPmscvaxhJzCUjw0yKJhru10kK8bDDwxF1LoPXcFXuujIOwstf8HhKe06tQ7dIC83l_vAttMRW8UcUCEuLXpNpAAg91mAUof7tWv4OP2mm-brt-_y3qYKnvQXvxz-Cjx2Gsei4PB_93C-R_TKDo5M18AaavYm5m49r790Jaxj4sTE55tdCZxvy82ItGcAi_chYDgYJYWqt2ucIvXNUW8aUAhbe77PK_kXS0L3oKJjCY'
  },
  {
    id: '2',
    name: 'Lucia Petrova',
    specialty: 'Hot Yoga & Core Strength',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOL-JCxEIZru5zHqrzG_ueA3qVIhiB6vkM8neJybSzPZwXCOx4eZgkPYzkoWIstLFMlCkWiTHawcaqWFnw1dztJD2G_A_dNrXK9AmyP1xwMP6lXZX1YQgJX2fWGeiWVXHTVRS5cHjAcHCs8IuOmjye7hQiBY4dB631WLBlLI1xhQQ0Nvvl5kNIiwAUNJBH6z8HLX09pBC7sbL6qfwmFYq9ygggx-CG-5S-2F8Qw-S8xqdIJWD3CZ_bZQlPCXOBbSP6luZIXzBRfe4'
  },
  {
    id: '3',
    name: 'Elena Novak',
    specialty: 'Hatha & Restorative Yoga',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpQYt9HLsVgeWe3FG66Nss9gaiTfzEm5z98hjq_O-JDvS3_WBSbdUOF8_5twhGp653oiPsPtdjA_YAlqlmGcYx9iTshsRDNKLYbFhrM5oJndtfrAPw8JH5okSxmkeKMMQ4w9ObHJy9ufzThpUnL5gPeYMd4NwRaF2DdwUoqi4vLaNBpsM9ZeVsrGFkstP_iFfvLmOWsVEvXHSi6zCPcNWYWNtjUqJDtDi87Do3XqiW5J91gSs_gOvaEncGFSdDoxivJRl_Cv2LF9Q'
  }
];

export const CLASSES: YogaClass[] = [
  {
    id: '1',
    title: 'Vinyasa Flow',
    description: 'Vinyasa Flow is a dynamic style of yoga where fluid transitions between poses are paramount. This seamless movement invigorates the body.',
    icon: 'spa'
  },
  {
    id: '2',
    title: 'Restorative Yoga',
    description: 'Restorative Yoga is a gentle and profoundly calming practice that emphasizes deep relaxation and stress reduction.',
    icon: 'self_improvement'
  },
  {
    id: '3',
    title: 'Hatha Yoga',
    description: 'Hatha Yoga, a cornerstone of yoga practice, emphasizes the harmonious union of body, mind, and spirit through physical postures.',
    icon: 'accessibility_new'
  }
];

export const PLANS: Plan[] = [
  {
    id: '1',
    name: 'Weekly Membership',
    price: '$20',
    period: '/weekly',
    description: 'Flexibility at your fingertips. Unlimited access to our entire library of on-demand classes and live stream sessions.',
    icon: 'calendar_view_week'
  },
  {
    id: '2',
    name: 'Monthly Membership',
    price: '$80',
    period: '/month',
    description: 'Unlimited yoga, anytime. Enjoy unlimited access to our entire library of on-demand classes and live stream sessions.',
    isPopular: true,
    icon: 'calendar_month'
  },
  {
    id: '3',
    name: 'Annual Plan',
    price: '$200',
    period: '/year',
    description: 'Save big and flow freely. Unlimited access to our entire library. Enjoy significant savings with our best value plan.',
    icon: 'calendar_today'
  }
];
