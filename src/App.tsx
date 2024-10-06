import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import Recipe from './Recipe';
import { mockTagList, mockRecipeList } from './testMockData'; // Import mock data

const App = () => {
  const [tags, setTags] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetching the tags from mock data on component mount
  useEffect(() => {
    const fetchTags = async () => {
      setLoading(true);
      // Here we use the mock data instead of fetching from the real API
      setTags(mockTagList);
      setLoading(false);
    };

    fetchTags();
  }, []);

  // Function to handle when a tag is clicked
  const handleTagClick = async (tag) => {
    setLoading(true);
    setSelectedTag(tag);

    // Filter the recipes from the mock data based on the selected tag
    const filteredRecipes = mockRecipeList.recipes.filter((recipe) =>
      recipe.tags.includes(tag)
    );
    setRecipes(filteredRecipes);
    setLoading(false);
  };

  // Function to go back to the tag list
  const handleBackClick = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>

      {loading && <p>Loading...</p>}

      {!selectedTag && !loading && (
        <div>
          <h2>Recipe Tags</h2>
          <ul>
            {tags.map((tag) => (
              <li key={tag}>
                <button onClick={() => handleTagClick(tag)}>{tag}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedTag && !loading && (
        <div>
          <button onClick={handleBackClick}>Go Back to Tags</button>
          <h2>Recipes for {selectedTag}</h2>
          <div>
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
