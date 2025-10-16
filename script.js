from flask import Flask, render_template

# Initialize the Flask application
app = Flask(__name__)

# Sample blog post data
articles = [
    {
        "id": 1,
        "title": "How to Meal Prep for a Busy Week",
        "summary": "Save time and stay on track with these easy meal prep strategies.",
        "content": "<p>Meal prepping is a game changer for staying consistent with your nutrition goals. Start by picking one day a week to cook your meals. Choose simple recipes like grilled chicken and roasted vegetables. Pack them in individual containers for grab-and-go convenience.</p>"
    },
    {
        "id": 2,
        "title": "5 Exercises to Boost Your Metabolism",
        "summary": "Rev up your fat-burning potential with these effective exercises.",
        "content": "<p>Want to burn more calories throughout the day? Incorporate exercises like High-Intensity Interval Training (HIIT), strength training with weights, and plyometrics into your routine. These workouts not only torch calories during the session but also keep your metabolism elevated long after.</p>"
    },
    {
        "id": 3,
        "title": "The Importance of Rest Days",
        "summary": "Why taking a break is just as crucial as working out.",
        "content": "<p>Many people think more is better, but rest days are vital for muscle recovery and preventing burnout. During rest, your body repairs and rebuilds muscle tissue, making you stronger. Schedule at least one or two rest days per week to optimize your results.</p>"
    }
]

@app.route('/')
def home():
    """Renders the homepage with the latest two articles."""
    latest_posts = articles[:2]
    return render_template('home.html', posts=latest_posts)

@app.route('/blog')
def blog():
    """Renders the blog page with a list of all articles."""
    return render_template('blog.html', posts=articles)

@app.route('/article/<int:article_id>')
def article(article_id):
    """Renders a specific article by its ID."""
    article_data = next((item for item in articles if item["id"] == article_id), None)
    if article_data:
        return render_template('article.html', article=article_data)
    else:
        # Handle case where article is not found
        return "Article not found", 404

if __name__ == '__main__':
    app.run(debug=True)


