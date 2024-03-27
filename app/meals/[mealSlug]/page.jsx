const MealsDetailPage = ({ params }) => {
  return (
    <main>
      <h1>Meals Detail Page</h1>
      <div>
        <p>{params.mealSlug}</p>
      </div>
    </main>
  );
};

export default MealsDetailPage;
