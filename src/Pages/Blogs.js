import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <h3 className="text-center mt-5 fw-bold mb-5">BLOGS</h3>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h4 className="mt-4 fw-bold">1. Recipe Spotlights</h4>
              </button>
            </h3>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p className="fs-5">
                  <h4>
                    Title: 5 Quick and Healthy Dinner Recipes You Can Make in 30
                    Minutes
                  </h4>
                  <p>
                    Content Idea: Share easy-to-follow recipes that your
                    customers can try at home. Focus on dishes that align with
                    the meals you offer on Cooked, giving them a taste of what
                    you serve. Include step-by-step instructions, photos, and
                    tips for making the recipes even better.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h4 className="mt-4 fw-bold">2. Food and Nutrition</h4>
              </button>
            </h3>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p className="fs-5">
                  <h4>
                    Title: The Benefits of Eating Seasonally: Why Fresh is Best
                  </h4>
                  <p>
                    Content Idea: Write about the importance of eating seasonal
                    produce and how it impacts health, taste, and
                    sustainability. You can also highlight how Cooked
                    incorporates seasonal ingredients into its menu, ensuring
                    customers get the freshest meals.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h4 className="mt-4 fw-bold">3. Behind the Scenes</h4>
              </button>
            </h3>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p className="fs-5">
                  <h4>
                    Title: A Day in the Life of a Cooked Chef: How We Create
                    Your Meals
                  </h4>
                  <p>
                    Content Idea: Give readers a behind-the-scenes look at your
                    kitchen. Share the process of how your chefs prepare meals,
                    from selecting ingredients to final plating. This
                    personalizes the brand and builds trust by showcasing your
                    commitment to quality.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseForth"
                aria-expanded="false"
                aria-controls="collapseForth"
              >
                <h4 className="mt-4 fw-bold">4. Customer Stories</h4>
              </button>
            </h3>
            <div
              id="collapseForth"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p className="fs-5">
                  <h4>
                    Title: Why Our Customers Love Cooked: Stories from Our
                    Community
                  </h4>
                  <p>
                    Content Idea: Feature testimonials and stories from your
                    loyal customers. Highlight how Cooked has made a difference
                    in their lives, whether it’s by providing convenient meals
                    for busy families or offering healthy options for those with
                    dietary restrictions.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFifth"
                aria-expanded="false"
                aria-controls="collapseFifth"
              >
                <h4 className="mt-4 fw-bold">5. Food Trends</h4>
              </button>
            </h3>
            <div
              id="collapseFifth"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p className="fs-5">
                  <h4>Title: Top 5 Food Trends to Watch in 2024</h4>
                  <p>
                    Content Idea: Discuss the latest food trends and how they’re
                    influencing what’s on the menu at Cooked. Whether it’s
                    plant-based eating, global flavors, or innovative cooking
                    techniques, keeping your audience informed about what’s
                    trending helps position Cooked as a modern, forward-thinking
                    brand.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <h4 className="mt-4 fw-bold">6. Health and Wellness</h4>
              </button>
            </h3>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p className="fs-5">
                  <h4>Title: How to Maintain a Balanced Diet with Cooked</h4>
                  <p>
                    Content Idea: Provide tips on how your customers can
                    maintain a balanced diet using the meals and services
                    offered by Cooked. This could include meal planning ideas,
                    portion control tips, and advice on pairing meals with
                    healthy snacks.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                <h4 className="mt-4 fw-bold">7. Sustainability</h4>
              </button>
            </h3>
            <div
              id="collapseSeven"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p className="fs-5">
                  <h4>
                    Title: Our Commitment to Sustainability: How Cooked is
                    Reducing Its Carbon Footprint
                  </h4>
                  <p>
                    Content Idea: Write about the eco-friendly practices at
                    Cooked, such as using biodegradable packaging, sourcing
                    local ingredients, and minimizing food waste. This blog can
                    also include actionable tips for customers on how they can
                    reduce their environmental impact while enjoying their
                    meals.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                <h4 className="mt-4 fw-bold">8. Cooking Tips and Tricks</h4>
              </button>
            </h3>
            <div
              id="collapseEight"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p className="fs-5">
                  <h4>Title: 10 Cooking Hacks Every Home Chef Should Know</h4>
                  <p>
                    Content Idea: Share useful cooking tips that can make
                    preparing meals at home easier and more enjoyable. From
                    knife skills to flavor-boosting techniques, this content
                    provides value to your readers and positions Cooked as a
                    go-to resource for culinary knowledge.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                <h4 className="mt-4 fw-bold">9.Special Diets</h4>
              </button>
            </h3>
            <div
              id="collapseNine"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p className="fs-5">
                  <h4>
                    Title: Eating Well on a Gluten-Free Diet: Delicious Options
                    from Cooked
                  </h4>
                  <p>
                    Content Idea: Focus on specific dietary needs like
                    gluten-free, vegan, or keto. Explain how Cooked caters to
                    these diets and offer general advice on how to stick to
                    these eating plans without sacrificing flavor or variety.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTens"
                aria-expanded="false"
                aria-controls="collapseTens"
              >
                <h4 className="mt-4 fw-bold">10. Event Announcements</h4>
              </button>
            </h3>
            <div
              id="collapseTens"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p className="fs-5">
                  <h4>
                    Title: Join Us for Our Next Cooking Workshop: Learn How to
                    Make Our Signature Dishes
                  </h4>
                  <p>
                    Content Idea: Announce any upcoming events, workshops, or
                    cooking classes that Cooked might host. These events can be
                    virtual or in-person and offer customers a chance to engage
                    with your brand in a fun and interactive way.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
