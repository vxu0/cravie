# cravie

Access the web application here: https://cravie.netlify.app/

Save yourself some brain work when deciding what to eat! Plus, expand your palate by trying some new cuisines (if you wish)!

This application uses a static list of food items and corresponding categories (e.g. sweet or savory, spicy, vegetarian, etc.) to to generate results. (Sadly, this places a large limitation on the usefulness of the app.) You can explore these foods in the data folder. Thanks ChatGPT for helping to come up with the list of foods!

The starting list of food options is created based on the user's choice of sweet or savory. Then, scores for each food item (from the sweet list or from the savory list) are calculated based on the user's remaining selections. These selections are weighted by subjective importance (see category-weights.json in the data folder).

Thanks for reading!
