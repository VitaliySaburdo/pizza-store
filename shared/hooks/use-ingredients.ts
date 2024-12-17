import React from 'react';
import { Ingredient } from '@prisma/client';
import { Api } from '@/shared/services/api-client';

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
}

export const useIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getIngredients = async () => {
      try {
        setLoading(true);
        const data = await Api.ingredients.getAll();
        setIngredients(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getIngredients();
  }, []);

  return { ingredients, loading };
};
