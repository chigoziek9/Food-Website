export interface Meal {
  id: number;
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
