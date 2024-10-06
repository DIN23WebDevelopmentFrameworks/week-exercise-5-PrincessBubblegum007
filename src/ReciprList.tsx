import React from 'react';

const RecipeList = ({ tags, onTagClick }) => {
  return (
    <div>
      {tags.map((tag) => (
        <button key={tag} onClick={() => onTagClick(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default RecipeList;
