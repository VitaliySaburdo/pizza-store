import React from 'react';
import { Ingredient } from '@prisma/client';
import { Api } from '@/services/api-client';

interface ReturnProps {
  ingredients: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  React.useEffect(() => {
    const getIngredients = async () => {
      try {
        const data = await Api.ingredients.getAll();
        setIngredients(data);
      } catch (error) {
        console.log(error);
      }
    };

    getIngredients();
  }, []);

  return { ingredients };
};
