import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; //Cuando apunto a un index no hace falta ponerlo es por defecto

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    // Verificar si la categoría ya existe
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <div key={category}>
          <GifGrid category={category} />
        </div>
      ))}

      {/* Gif ITEM */}
    </>
  );
};
