export interface Meal {
  id: string;
  name: string;
  image: string;
  amount: number;
  description: string;
}

export interface Category {
  name: string;
  image: string;
  meals: Meal[];
}

export interface MealsData {
  categories: Category[];
}
