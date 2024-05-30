export const fetchPosts = async () => {
    const response = await fetch('https://dummyjson.com/products/search?q=phone');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };