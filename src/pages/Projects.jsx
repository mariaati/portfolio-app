function Projects() {
  const projects = [
    {
      title: "אפליקציית ניהול משימות",
      description: "אפליקציה לניהול רשימת משימות עם סימון משימה שבוצעה.",
      image: "https://via.placeholder.com/300x180?text=Task+App"
    },
    {
      title: "פורטל קורסים אונליין",
      description: "אתר להצגת קורסים לצפייה עם דירוגים.",
      image: "https://via.placeholder.com/300x180?text=Courses+Portal"
    },
    {
      title: "אפליקציית מתכונים",
      description: "אפליקציה שמציגה מתכונים לפי קטגוריות.",
      image: "https://via.placeholder.com/300x180?text=Recipes+App"
    }
  ];

  return (
    <div style={styles.container}>
      <h1>הפרויקטים שלי</h1>
      <div style={styles.grid}>
        {projects.map((proj, idx) => (
          <div key={idx} style={styles.card}>
            <img src={proj.image} alt={proj.title} style={styles.image} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem'
  },
  card: {
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '1rem'
  }
};

export default Projects;
