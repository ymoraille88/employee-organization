SELECT emplyees.emploeye_name AS employee, 
FROM reviews
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;
