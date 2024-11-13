import React from 'react';
import { useSet } from 'react-use';
import { Ingredient } from '@prisma/client';
import { Api } from '@/services/api-client';

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);

  const [selectedIngredients, { toggle }] = useSet(new Set<string>([]));

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

  return { ingredients, loading, onAddId: toggle, selectedIngredients };
};
